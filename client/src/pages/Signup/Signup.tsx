import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { WelcomeText } from '../../components/WelcomeText/WelcomeText'
import { Select, MenuItem, FormControl, InputLabel, Button, FormControlLabel, Checkbox, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import styles from './index.module.css'
import { styled } from '@mui/material/styles';

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
const Signup = () => {
    const [showPassword, setShowPassword] = useState<{password: boolean, confirmPassword: boolean}>({
        password: false,
        confirmPassword: false,
    });
    const [password, setPassword] = useState<string>('');
    const [displayValidation, setDisplayValidation] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null)
    
    const [validation, setValidation] = useState({
        length: false,
        lowerCase: false,
        upperCase: false,
        number: false,
        specialChar: false,
    });

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        const newPassword = event.target.value;
        setPassword(newPassword);

        setValidation({
            length: newPassword.length >= 8,
            lowerCase: /[a-z]/.test(newPassword),
            upperCase: /[A-Z]/.test(newPassword),
            number: /[0-9]/.test(newPassword),
            specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
        })
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
                <form action="#" className={styles['form']}>
                    <Box className={styles['box']}>

                        <FormControl variant='outlined' fullWidth>
                            <StyledTextField
                                label="Firstname"
                                variant="outlined"
                                type='text'
                                required
                                className={styles['input']}
                            />
                        </FormControl>

                        <FormControl variant='outlined' fullWidth>
                            <StyledTextField
                                label="Lastname"
                                variant="outlined"
                                type="text"
                                required
                                className={styles['input']}
                            />
                        </FormControl>

                        <FormControl variant='outlined' fullWidth>
                            <StyledTextField
                                label="Username"
                                variant="outlined"
                                type="text"
                                placeholder='@johndoe_'
                                required
                                className={styles['input']}
                            />
                        </FormControl>

                        <FormControl variant='outlined' fullWidth>
                            <StyledTextField
                                label="Email address"
                                variant="outlined"
                                type="email"
                                required
                                
                            />
                        </FormControl>
                        
                        <FormControl variant='outlined' fullWidth>
                            <InputLabel id="demo-simple-select-label"
                                sx={{
                                    fontSize: '14px',
                                    color: 'gray',
                                    letterSpacing: '1px',
                                    '&.Mui-focused': {
                                        color: 'gray',
                                    }
                                }}
                            >
                                Account Type*
                            </InputLabel>
                            <StyledSelectField
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Account Type" 
                                sx={{ borderRadius: '8px' }}
                            >
                                <MenuItem value={'Vendor'}>Vendor</MenuItem>
                                {/* <MenuItem value={'Manufacturer'}>Manufacturer</MenuItem> */}
                                <MenuItem value={'Buyer'}>Buyer</MenuItem>
                                <MenuItem value={'Brand'}>Brand</MenuItem>
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
                                type={showPassword.password ? 'text' : 'password'}
                                value={password}
                                ref={inputRef}
                                onFocus={()=> setDisplayValidation(true)}
                                onBlur={()=>setDisplayValidation(false)}
                                onChange={handlePasswordChange}
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
                                type={showPassword.confirmPassword ? 'text' : 'password'}
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

                        <Box sx={{ margin: '0'}}>
                            <FormControlLabel
                            
                                control={
                                    <Checkbox
                                        checked={isChecked}
                                        color="success"
                                        sx={{
                                            fontSize: '14px',
                                            color: 'gray',
                                            letterSpacing: '1px',
                                        }}
                                        onClick={handleCheck}
                                        
                                    />
                                }
                                label={
                                    <Typography sx={{ 
                                        fontSize: '14px',
                                        color: 'gray',
                                        letterSpacing: '1px',
                                    }}>
                                        I agree to the Terms & Conditions
                                    </Typography>
                                }
                            />
                        </Box>
        
                        <Button 
                            variant="contained"
                            sx={{
                                background: '#1DC939',
                                margin: '2px 0',
                                padding: '10px 0',
                                fontSize: '15px',
                                letterSpacing: '1px',
                                transition: 'background-color 0.3s ease, transform 0.3s ease',
                                '&:hover': {
                                    background: '#17A827',
                                    transform: 'scale(1.02)',
                                },
                            }}
                            
                        >Sign Up</Button>

                    </Box>
                </form>
            </div>
        </section>
    )
}

export default Signup;