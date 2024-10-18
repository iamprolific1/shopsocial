import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, CircularProgress } from '@mui/material';
import { VerifyAccountMessage } from '../../components/LoginWelcomeText/VerifyText';
import styles from './index.module.css';
import { verifyUserEmail } from '../../api/verifyEmail.authService';
import { useToast } from '../../providers/ToastProvider';
import { resendVerficationEmail } from '../../api/resendVerificationEmail.authService';

const VerifyEmail = ()=> {
    const { showToast } = useToast();
    const navigate = useNavigate();
    const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState<boolean>(false);
    const [resendLoading, setResendLoading] = useState<boolean>(false);
    const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(6).fill(null));
    const [userEmail, setUserEmail] = useState<string>("");
    
    // get the user email from local storage when the component mounts

    useEffect(()=> {
        const savedEmail = localStorage.getItem('email');
        if (savedEmail) {
            setUserEmail(savedEmail);
        }
    }, [])

    const handleChange = (index: number, value: string)=> {
        const newCode = [...code];

        //handle pasted code
        if (value.length > 1) {
            const pastedCode = value.slice(0, 6).split("");
            for(let i = 0; i < 6; i++) {
                newCode[i] = pastedCode[i] || "";
            }
            setCode(newCode);

            // find the last non-empty input or the first empty one
            let lastFilledIndex = -1;
            for(let i = 0; i < newCode.length; i++) {
                if(newCode[i] !== "") {
                    lastFilledIndex = i;
                }
            }
            const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
            if (inputRefs.current[focusIndex]) {
                inputRefs.current[focusIndex].focus();
            }
        } else {
            // update single character input
            newCode[index] = value;
            setCode(newCode);

            //Move focus to the next input if not last
            if (value !== "" && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }

        }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = async(e: React.FormEvent)=> {
        e.preventDefault();
        setLoading(true);

        const combinedCode = code.join("");
        

        if (combinedCode.length === 0) {
            showToast('Verification code is required', 'error', {
                vertical: 'top',
                horizontal: 'center',
            })
            setLoading(false);
            return;
        }else if (combinedCode.length < 6) {
            showToast('Verification code must be 6 digits', 'error', {
                vertical: 'top',
                horizontal: 'center',
            })
            setLoading(false);
            return;
        }else {
            try {
                const savedEmail = localStorage.getItem('email') || "";
                const response = await verifyUserEmail(savedEmail, combinedCode.toString());
                showToast(response.message,'success', {
                    vertical: 'top',
                    horizontal: 'center',
                }, ()=> {
                    navigate('/login');
                })
            } catch (error: any) {
                console.error(error);
                if(error.response?.data?.message){
                    showToast(error.response.data.message, 'error', {
                        vertical: 'top',
                        horizontal: 'center',
                    })
                }
                setLoading(false);
            }
        }
    };

    const handleResendEmailVerification = async ()=> {
        setResendLoading(true);
        try {
            const response = await resendVerficationEmail(userEmail);
            showToast(response.message, 'success', {
                vertical: 'top',
                horizontal: 'center',
            })
        } catch (error: any) {
            setResendLoading(false);
            console.error(error);
            if(error.response?.data?.message){
                showToast(error.response.data.message, 'error', {
                    vertical: 'top',
                    horizontal: 'center',
                })
            }
        }
    }



    return (
        <section className={styles['container']}>
            <div className={styles['left_Panel']}>
                <div className={styles['headerText']}><h4>Confirm Your Email Address !!!</h4></div>
                <VerifyAccountMessage />
            </div>
            <div className={styles['right_Panel']}>
                <form onSubmit={handleSubmit} className={styles['form']}>
                    <Box className='w-fit shadow-lg bg-[#1e2e36] text-white rounded-lg p-4 flex flex-col gap-y-4 items-center'>
                        <h3 className='text-[23px] text-[#16962B] font-medium tracking-wider text-uppercase'>Verify Your Email</h3>
                        <span className='text-[15px] tracking-wide font-'>Enter the 6-digits code sent to your email.</span>
                        <div className='flex justify-between gap-x-4'>
                            {
                                code.map((digit, index)=> (
                                    
                                    <input
                                        key={index}
                                        type='text'
                                        name='verificationCode'
                                        value={digit}
                                        maxLength={1}
                                        onChange={(e)=> handleChange(index, e.target.value)}
                                        onKeyDown={(e)=> handleKeyDown(index, e)}
                                        ref={(el)=> (inputRefs.current[index]= el)}
                                        className='w-16 h-16 text-center text-2xl font-bold bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:border-green-500 focus:outline-none'
                                    />
                                ))
                            }
                        </div>
                        {
                            loading ? ( <Button
                                variant='contained'
                                sx={{
                                    background: '#16962B',
                                    width: '50%',
                                    margin: '15px 0',

                                    '&:hover': {
                                        background: '#16962B'
                                    }
                                }}
                            >
                                <CircularProgress size={'20px'} sx={{ color: 'white', marginRight: '10px' }}/>Verifying...
                            </Button>) : (
                                <Button
                                    type='submit'
                                    variant='contained'
                                    sx={{
                                        background: '#16962B',
                                        width: '50%',
                                        margin: '15px 0',

                                        '&:hover': {
                                            background: '#16962B'
                                        }
                                    }}
                                >
                                    Verify
                                </Button>
                            )
                        }

                        <div>
                            <span className='text-[11px] font-medium tracking-wider'>Didn't receive the email?
                                
                                <Button
                                    className='text-[#16962B] font-bold underline'
                                    sx={{
                                        textTransform: 'none',
                                        padding: '0',
                                        minWidth: 'auto',
                                        color: '#16962B',
                                        backgroundColor: 'transparent',
                                        textDecoration: 'underline',
                                        '&:hover': {
                                            background: 'transparent',
                                            textDecoration: 'underline'
                                        }
                                    }}
                                    onClick={handleResendEmailVerification}
                                >
                                    {resendLoading ? "Resending please wait" : "click here to resend"}
                                </Button>
                            </span>
                        </div>
                    </Box>
                </form>
            </div>
        </section>
    )
}

export default VerifyEmail;