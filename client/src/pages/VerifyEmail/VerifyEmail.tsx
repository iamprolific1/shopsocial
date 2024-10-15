import React, { useState, useRef } from 'react'
import { Box, Button, CircularProgress } from '@mui/material';
import { VerifyAccountMessage } from '../../components/LoginWelcomeText/VerifyText';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const VerifyEmail = ()=> {

    const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState<boolean>(false);
    const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(6).fill(null));

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
                            <span className='text-[11px] font-medium tracking-wider'>Didn't receive the email? <Link to='#requestverificationcode' className='text-[#16962B] font-bold underline'>click here to resend</Link></span>
                        </div>
                    </Box>
                </form>
            </div>
        </section>
    )
}

export default VerifyEmail;