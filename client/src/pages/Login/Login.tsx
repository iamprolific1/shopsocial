import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import styles from './index.module.css';
import Box from "@mui/material/Box";
import { FormControl, InputLabel, OutlinedInput, IconButton, Button, Divider, Typography, CircularProgress } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { LoginWelcomeText } from '../../components/LoginWelcomeText/LoginWelcomeText';
import GoogleIconImage from '../../assets/googleIcon.png';

import { useAuth } from '../../providers/AuthProvider';
import { useToast } from '../../providers/ToastProvider';


const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'grey',
            borderRadius: '8px',
            letterSpacing: '1px'
        },
        '&:hover fieldset': {
            borderColor: 'gray',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'gray',
        },
    },
    '& .MuiInputLabel-root': {
        color: 'gray',
        fontSize: '14px', 
        letterSpacing: '1px'
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: 'gray',
    },
    '& .MuiInputBase-input': {
        fontSize: '16px', 
        letterSpacing: '1px',
        color: '#333333c7',
    },
    '& .MuiInput-placeholder': {
        fontSize: '16px', 
        letterSpacing: '1px',
        color: '#333333c7',
    },
    
});

const StyledOutlinedInput = styled(OutlinedInput)({
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "gray",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "gray",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "gray",
    },
    "& .MuiOutlinedInput-input": {
        fontSize: "16px",
        color: "#333333c7",
        letterSpacing: "1px",
    },
    "& .MuiInputLabel-root": {
        color: "gray",
        fontSize: "14px",
        letterSpacing: "1px",
        
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "gray",
    },
    "& .MuiInputBase-input": {
        fontSize: "16px",
        letterSpacing: "1px",
        color: "#333333c7",
    },
    "& .MuiInput-placeholder": {
        fontSize: "16px",
        letterSpacing: "1px",
        color: "#333333c7",
    },
});

const Login = () => {
    const { showToast } = useToast();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const passwordToggleVisibility = () => {
        setShowPassword((prev)=> !prev)
    }
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const { login } = useAuth();

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        setLoading(true);
        const { email, password } = formData; 
        try {
            const response = await login(email, password);
            if (response.success) {
                showToast(response.message, 'success', {
                    vertical: 'top',
                    horizontal: 'center',
                }, ()=> {
                    navigate('/')
                })
            }else {
                showToast(response.message, 'error', {
                    vertical: 'top',
                    horizontal: 'center',
                })
            }

        }catch(error: any) {
            console.error("Error logging in user: ", error);
            showToast('An unexpected error occured', 'error', {
                vertical: 'top',
                horizontal: 'center'
            })
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className={styles['container']}>
            <div className={styles['left_Panel']}>
                <div className={styles['headerText']}><h4>Welcome Back !!!</h4></div>
                <LoginWelcomeText />
                <div className={styles['no_Account']}>
                    <p>Don't have an account? <Link to='/signup'>
                        <Button 
                            variant='outlined'
                            sx={{
                                border: 'none',
                                background: '#17A12E',
                                color: '#f3dfdf',
                                marginLeft: '10px',
                                fontSize: '15px',
                                letterSpacing: '1px',
                                width: '30%',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    border: 'none',
                                    background: '#17A12E',
                                    color: '#f3dfdf'
                                }
                            }}
                        >
                            Signup
                        </Button>
                    </Link></p>
                </div>
            </div>
            <div className={styles['right_Panel']}>
                <form onSubmit={handleSubmit} className={styles['form']}>
                    
                    <Box className={styles['box']}>
                        <FormControl variant='outlined' fullWidth>
                            <StyledTextField
                                label="Email"
                                name='email'
                                variant="outlined"
                                type='email'
                                required
                                className={styles['input']}
                                onChange={handleChange}
                                value={formData.email || ''}
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="outlined-adornment-password"
                            sx={{
                                    fontSize: '14px',
                                    color: 'gray',
                                    letterSpacing: '1px',
                                    '&.Mui-focused': {
                                        color: 'gray',
                                    }
                                }}
                            >
                                Password
                            </InputLabel>
                            <StyledOutlinedInput
                                id="outlined-adornment-password"
                                name='password'
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={()=> passwordToggleVisibility()}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                                sx={{ borderRadius: '8px'}}
                                onChange={handleChange}
                                value={formData.password || ''}
                            />
                        </FormControl>
                        <FormControl>
                            {
                                loading ? (
                                    <Button 
                                        variant="contained"
                                        type="submit"
                                        sx={{
                                            background: '#1DC939',
                                            margin: '10px 0',
                                            padding: '10px 0',
                                            fontSize: '15px',
                                            letterSpacing: '1px',
                                            transition: 'background-color 0.3s ease, transform 0.3s ease',
                                            '&:hover': {
                                                background: '#17A827',
                                                transform: 'scale(1.02)',
                                            },
                                        }}
                                        
                                    >
                                        <CircularProgress sx={{ color: 'white', marginRight: '10px'}} size={'20px'} /> Please wait...
                                    </Button>
                                ) : (
                                    <Button 
                                        variant="contained"
                                        type="submit"
                                        sx={{
                                            background: '#1DC939',
                                            margin: '10px 0',
                                            padding: '10px 0',
                                            fontSize: '15px',
                                            letterSpacing: '1px',
                                            transition: 'background-color 0.3s ease, transform 0.3s ease',
                                            '&:hover': {
                                                background: '#17A827',
                                                transform: 'scale(1.02)',
                                            },
                                        }}
                                        
                                    >Login</Button>
                                )
                            }
                            
                        </FormControl>
                        <Box>
                            <Divider sx={{ margin: '15px 0', position: 'relative'}}>
                                <Typography
                                sx={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '48%',
                                    backgroundColor: '#FFF',
                                    padding: '0 10px',
                                    color: 'gray',
                                    borderRadius: '50%'
                                }}
                                >
                                    OR
                                </Typography>
                            </Divider>
                        </Box>
                        <FormControl>
                            <Button
                                type='button'
                                fullWidth
                                variant='outlined'
                                startIcon={<img className={styles['google_Icon_Image']} src={GoogleIconImage} />}
                                sx={{
                                    borderColor: '#A5E9B0',
                                    color: 'gray',
                                    '&:hover': {
                                        backgroundColor: '#A5E9B0',
                                        color: '#FFF',
                                        border: 'none',
                                        
                                    },
                                }}

                            >
                                Sign in with Google
                            </Button>
                        </FormControl>
                        <Box className={styles['forgot_Password']}>
                            <Link to='/password_Reset'>Forgot Password?</Link>
                        </Box>
                    </Box>
                </form>
            </div>
        </section>
    )
}

export default Login;