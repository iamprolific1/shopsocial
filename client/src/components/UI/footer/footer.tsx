import { Link } from 'react-router-dom';
import Logo from "../../../assets/logo.png";
import { IconButton, TextField, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = ()=> {
    return (
        <footer className='border mt-5 bg-[#F5FFF7]'>
            <div className='w-[80%] m-auto p-2'>
                <div className='top-section flex items-center justify-between'>
                    <div className='flex items-center flex-col gap-y-2 justify-center'>
                        <img src={Logo} className='w-[50px] h-[50px]' />
                        <div className='flex items-center gap-x-1'>
                            <IconButton>
                                <FacebookIcon className='text-[#333] hover:text-[#1dc939]' />
                            </IconButton>
                            <IconButton>
                                <TwitterIcon className='text-[#333] hover:text-[#1dc939]' />
                            </IconButton>
                            <IconButton>
                                <LinkedInIcon className='text-[#333] hover:text-[#1dc939]' />
                            </IconButton>
                        </div>
                    </div>
                    <div className='newsletter'>
                        <h4 className='text-[#333] font-bold text-[15px]'>New to shopsocial?</h4>
                        <div className='mt-3'>
                            <span className='text-gray-500 font-medium text-[13px]'>Subscribe to our newsletter</span>
                            <div className='flex items-center gap-x-3'>
                                <TextField 
                                    variant='outlined'
                                    type='email'
                                    placeholder='Enter email address'
                                    sx={{
                                        width: '300px',
                                        '& .MuiOutlinedInput-root': {
                                            height: '40px',
                                            padding: '0',
                                            letterSpacing: '1px',
                                            fontSize: '14px',
                                            '& fieldset': {
                                                borderColor: '#16962B',
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#16962B',
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#16962B',
                                            },
                                        },
                                    }}
                                />

                                <Button
                                    variant='contained'
                                    sx={{
                                        background: '#16962B',
                                        textTransform: 'capitalize',
                                        '&:hover': {
                                            background: '#16962B',
                                            transition: 'all 0.3s ease'
                                        }
                                    }}
                                >
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='links flex items-center gap-x-6 mt-4 w-full justify-center'>
                    <Link to='#about' className='text-[#333] text-[14px] font-semibold hover:text-[#16962B]'>About ShopSocial</Link>
                    <Link to='#logistics' className='text-[#333] text-[14px] font-semibold hover:text-[#16962B]'>Logistics</Link>
                    <Link to='#customercare' className='text-[#333] text-[14px] font-semibold hover:text-[#16962B]'>Customer care</Link>
                    <Link to='#terms&conditions' className='text-[#333] text-[14px] font-semibold hover:text-[#16962B]'>Terms & conditions</Link>
                    <Link to='#privacypolicy' className='text-[#333] text-[14px] font-semibold hover:text-[#16962B]'>Privacy policy</Link>
                    <Link to='#security' className='text-[#333] text-[14px] font-semibold hover:text-[#16962B]'>Security</Link>
                    <Link to='#supportcenter' className='text-[#333] text-[14px] font-semibold hover:text-[#16962B]'>Support center</Link>
                </div>
            </div>

            <span className='text-green-600 text-[14px] flex items-center justify-center mt-3 font-semibold mb-3'>2024 All rights reserved.</span>
        </footer>
    )
}

export default Footer;