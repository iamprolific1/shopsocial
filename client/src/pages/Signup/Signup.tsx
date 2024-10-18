import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { WelcomeText } from '../../components/WelcomeText/WelcomeText'
import { Select, MenuItem, FormControl, InputLabel, Button, FormControlLabel, Checkbox, Typography, SelectChangeEvent, CircularProgress } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import styles from './index.module.css'
import { styled } from '@mui/material/styles';

import { signupUser } from '../../api/signup.authService';
import { Validation } from '../../utils/authValidation/signupValidation';
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

const StyledSelectField = styled(Select)({
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
    "&.Mui-focused .MuiOutlinedInput-input": {
        color: "#333333c7",
    },
    "& .MuiInputLabel-root": {
        fontSize: "14px",
        color: "gray",
        letterSpacing: "1px",
        borderRadius: '8px'
    },
    "&.Mui-focused .MuiInputLabel-root, & .MuiInputLabel-root.Mui-focused": {
        color: "gray",
    },
    "& .MuiSelect-placeholder": {
        fontSize: "16px",
        color: "gray",
        letterSpacing: "1px",
    },
    "& .MuiMenuItem-root": {
        fontSize: "16px",
        color: "gray",
        letterSpacing: "1px",
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

const CustomFormControlLabel = styled(FormControlLabel)({
    borderRadius: "4px",
    padding: "0",
    width: "100%",
    fontSize: '2px'
});


const CustomCheckbox = styled(Checkbox)({
    color: "gray",
    "&.Mui-checked": {
        color: "#16962b",
    },
});

const Signup = () => {
    const { showToast } = useToast();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        accountType: '',
        password: '',
        confirmPassword: '',
    })

    const [showPassword, setShowPassword] = useState<{password: boolean, confirmPassword: boolean}>({
        password: false,
        confirmPassword: false,
    });
    const [password, setPassword] = useState<string>('');
    const [displayValidation, setDisplayValidation] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [validation, setValidation] = useState({
        length: false,
        lowerCase: false,
        upperCase: false,
        number: false,
        specialChar: false,
    });
    const [formValidationErrors, setFormValidationErrors] = useState({});

    //handle password input change and set regex validation for password
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        const newPassword = event.target.value;
        setPassword(newPassword);

        setValidation({
            length: newPassword.length >= 8,
            lowerCase: /[a-z]/.test(newPassword),
            upperCase: /[A-Z]/.test(newPassword),
            number: /[0-9]/.test(newPassword),
            specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
        });
    }

    const passwordToggleVisibility = (field: 'password' | 'confirmPassword') => {
        setShowPassword((prevState)=> ({
            ...prevState,
            [field]: !prevState[field]
        }))
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [isChecked, setIsChecked] = useState(false);
    const handleCheck = () => {
        setIsChecked((prev)=> !prev);
    };

    //handle form input change for all fields
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>)=> {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // handle form submit action
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        setLoading(true);

        //validate the form data
        const formErrors = Validation(formData);
        setFormValidationErrors(formErrors);
        
        const hasErrors = Object.values(formErrors).some(error => !!error);
        if(hasErrors) {
            if(formErrors.confirmPassword) {
                showToast(formErrors.confirmPassword, 'error', {
                    vertical: 'top',
                    horizontal: 'center'
                })
            }

            if(formErrors.password) {
                showToast(formErrors.password, 'error', {
                    vertical: 'top',
                    horizontal: 'center'
                })
            }
            setLoading(false);
        }else{
            try {
                const response = await signupUser(formData);
                localStorage.setItem('email', formData.email);
                showToast(response.message, 'success', {
                    vertical: 'top',
                    horizontal: 'center'
                }, ()=> {
                    navigate('/verify-email')
                })
                
            } catch (error: any) {
                console.error(error);
                if (error.response?.data?.message) {
                    showToast(error.response.data.message, 'error', {
                        vertical: 'top',
                        horizontal: 'center'
                    })
                }
                setLoading(false);
            }
        }
    }



    return (
        <section className={styles['container']}>
            
            <div className={styles['left_Panel']}>
                <div className={styles['headerText']}><h4>Discover, Shop, & Connect.</h4></div>
                <WelcomeText />
                <div className={styles['have_Account']}>
                    <p>Already have an account? <Link to='/login'>
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
                            Login
                        </Button>
                    </Link></p>
                </div>
            </div>
            <div className={styles['right_Panel']}>
                <form onSubmit={handleSubmit} className={styles['form']}>
        
                    <Box className={styles['box']}>

                        <FormControl variant='outlined' fullWidth>
                            <StyledTextField
                                label="Firstname"
                                name='firstname'
                                value={formData.firstname || ''}
                                variant="outlined"
                                type='text'
                                required
                                className={styles['input']}
                                onChange={handleInputChange}
                            />
                        </FormControl>

                        <FormControl variant='outlined' fullWidth>
                            <StyledTextField
                                label="Lastname"
                                name='lastname'
                                value={formData.lastname || ''}
                                variant="outlined"
                                type="text"
                                required
                                className={styles['input']}
                                onChange={handleInputChange}
                            />
                        </FormControl>

                        <FormControl variant='outlined' fullWidth>
                            <StyledTextField
                                label="Username"
                                name='username'
                                value={formData.username || ''}
                                variant="outlined"
                                type="text"
                                placeholder='@johndoe_'
                                required
                                className={styles['input']}
                                onChange={handleInputChange}
                            />
                        </FormControl>

                        <FormControl variant='outlined' fullWidth>
                            <StyledTextField
                                label="Email address"
                                name='email'
                                value={formData.email || ''}
                                variant="outlined"
                                type="email"
                                required
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label"
                                sx={{
                                    fontSize: '14px',
                                    color: 'gray',
                                    letterSpacing: '1px',
                                    '&.Mui-focused': {
                                        color: 'gray',
                                    }
                                }}
                            >Account Type*</InputLabel>
                            <StyledSelectField
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name='accountType'
                                value={formData.accountType || ''}
                                onChange={handleInputChange}
                                label="Account Type"
                                required
                                
                            >
                                <MenuItem value={"Vendor"}>Vendor</MenuItem>
                                <MenuItem value={"Buyer"}>Buyer</MenuItem>
                                <MenuItem value={"Brand"}>Brand</MenuItem>
                            </StyledSelectField>
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
                                Password*
                            </InputLabel>
                            <StyledOutlinedInput
                                id="outlined-adornment-password"
                                name='password'
                                type={showPassword.password ? 'text' : 'password'}
                                value={formData.password || ''}
                                ref={inputRef}
                                onFocus={()=> setDisplayValidation(true)}
                                onBlur={()=>setDisplayValidation(false)}
                                onChange={(e)=> {
                                    handlePasswordChange(e);
                                    handleInputChange(e);
                                }}
                                required
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={()=> passwordToggleVisibility('password')}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                    >
                                    {showPassword.password ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                                sx={{ borderRadius: '8px'}}
                            />
                        </FormControl>

                        {/* Tests for password validation */}
                        {/* --- */}
                        {
                            displayValidation && <Box className={styles['checkPassword']}>
                                <div className={`${styles['passwordCritic']} ${validation.length ? styles['criticSuccess'] : styles['criticError']}`}>
                                    {validation.length ? <CheckIcon sx={{ width: '15px', height: '15px'}} /> : <ClearIcon sx={{ width: '15px', height: '15px'}} />} <p>Must be at least 8 characters long</p>
                                </div>

                                <div className={`${styles['passwordCritic']} ${validation.lowerCase ? styles['criticSuccess'] : styles['criticError']}`}>
                                    {validation.lowerCase ? <CheckIcon sx={{ width: '15px', height: '15px'}} /> : <ClearIcon sx={{ width: '15px', height: '15px'}} />} <p>Must have a lowercase</p>
                                </div>

                                <div className={`${styles['passwordCritic']} ${validation.upperCase ? styles['criticSuccess'] : styles['criticError']}`}>
                                    {validation.upperCase ? <CheckIcon sx={{ width: '15px', height: '15px'}} /> : <ClearIcon sx={{ width: '15px', height: '15px'}} />} <p>Must have an uppercase</p>
                                </div>

                                <div className={`${styles['passwordCritic']} ${validation.number ? styles['criticSuccess'] : styles['criticError']}`}>
                                    {validation.number ? <CheckIcon sx={{ width: '15px', height: '15px'}} /> : <ClearIcon sx={{ width: '15px', height: '15px'}} />} <p>Must contain a number</p>
                                </div>

                                <div className={`${styles['passwordCritic']} ${validation.specialChar ? styles['criticSuccess'] : styles['criticError']}`}>
                                    {validation.specialChar ? <CheckIcon sx={{ width: '15px', height: '15px'}} /> : <ClearIcon sx={{ width: '15px', height: '15px'}} />} <p>Must contain a special character (@,$,%,^,*,!)</p>
                                </div>
                            </Box>
                        }
                        {/* End of password validation test */}
                        

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
                                Confirm Password*
                            </InputLabel>
                            <StyledOutlinedInput
                                id="outlined-adornment-password"
                                name='confirmPassword'
                                value={formData.confirmPassword || ''}
                                type={showPassword.confirmPassword ? 'text' : 'password'}
                                onChange={handleInputChange}
                                required
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={()=> passwordToggleVisibility('confirmPassword')}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                    >
                                    {showPassword.confirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Confirm Password"
                                sx={{ borderRadius: '8px' }}
                            />
                        </FormControl>

                        <FormControl>
                            <CustomFormControlLabel 
                                control={
                                    <CustomCheckbox 
                                        checked={isChecked}
                                        onChange={handleCheck}
                                        required
                                    />
                                }
                                label= {
                                    <Typography style={{ fontSize: '15px', color: 'grey', letterSpacing: '1px'}}>
                                        I agree to the Terms & Conditions
                                    </Typography>
                                }

        
                            />
                        </FormControl>
                        
                        {
                            loading ? 
                                (<Button 
                                    type='button'
                                    variant="contained"
                                    sx={{
                                        background: '#1DC939',
                                        margin: '2px 0',
                                        padding: '10px 0',
                                        fontSize: '15px',
                                        letterSpacing: '1px',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s ease, transform 0.3s ease',
                                        '&:hover': {
                                            background: '#17A827',
                                            transform: 'scale(1.02)',
                                        },
                                    }}
                                    
                                ><CircularProgress sx={{ color: 'white', marginRight: '10px'}} size={'20px'} />Please wait...</Button> ): 
                                (<Button
                                type='submit'
                                variant='contained'
                                sx={{
                                    background: '#1DC939',
                                    margin: '2px 0',
                                    padding: '10px 0',
                                    fontSize: '15px',
                                    letterSpacing: '1px',
                                    transition: 'background-color 0.3s ease, transform 0.3s ease',
                                    '&:hover': {
                                        background: '#17A827',
                                        transform:'scale(1.02)',
                                    }
                                }}
                                >SignUp</Button>)
                        }

                    </Box>
                </form>
            </div>
        </section>
    )
}

export default Signup;