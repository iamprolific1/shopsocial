import { Link } from 'react-router-dom';
import Footer from "../../components/UI/footer/footer";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { Button, OutlinedInput, FormControl, InputAdornment, IconButton } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import Badge from "@mui/material/Badge";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CountryIcon from "../../assets/world.png";
import Logo1 from "../../assets/logo.png";
import helpIcon from "../../assets/helpIcon.png";
import shoppingcartsvg from "../../assets/shopping-cart-svg.png";
import deliveryvansvg from "../../assets/delivery-van-svg.png";
import boxsvg from "../../assets/box-svg.png";
import boxsvg2 from "../../assets/box-svg2.png"
import paymentsvg from "../../assets/payment-method-svg.png"
import styles from './index.module.css'

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
        },
    },
    "@keyframes ripple": {
        "0%": {
        transform: "scale(.8)",
        opacity: 1,
        },
        "100%": {
        transform: "scale(2.4)",
        opacity: 0,
        },
    },
}));

const StyledOutlinedInput = styled(OutlinedInput)({
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "green",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "green",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#16962B",
        outline: 'none'
    },
    "& .MuiOutlinedInput-input": {
        fontSize: "16px",
        color: "#333333c7",
        letterSpacing: "1px",
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


const HelpIndex = ()=> {
    return (
        <div className={styles['container']}>
            <nav className={styles['nav']}>
                <div className={styles['navContainer']}>

                    <div><img src={Logo1} className='w-[50px] h-[50px]' /></div>
                    <div className='flex items-center gap-x-2'>
                        <FormControl>
                            <StyledOutlinedInput
                                startAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>}
                                type='search'
                                placeholder='Search'
                                sx={{
                                    width: '250px',
                                    height: '40px',
                                    letterSpacing: '1px',
                                    
                                }}
                            />
                        </FormControl>
                        <Button
                            variant="contained"
                            size="medium"

                            sx={{
                                background: '#16962B',
                                transition: 'all 0.3s ease',
                                height: '40px',

                                '&:hover': {
                                    background: '#16962B',
                                    color: '#fff'
                                }
                            }}
                        >
                            Search
                        </Button>
                    </div>
                    <div className='flex items-center gap-x-5 p-2'>
                    
                        <Link to='#logistics' className='text-[#333333da] text-[15px] font-medium hover:text-[#16962B]'>
                            <div className='flex items-center gap-x-2  transition-all ease delay-150'>
                                <FontAwesomeIcon icon={faTruckFast} />
                                <span >Logistics</span>
                            </div>
                        </Link>
                        
                        <div className='flex items-center gap-x-1'>
                            <img src={CountryIcon} className='w-[20px] h-[20px]' />
                        </div>
                        <div>
                            <IconButton>
                                <Badge badgeContent={0} color='error'>
                                    <FontAwesomeIcon icon={faComment} className='text-[#333333da] text-[20px]' />
                                </Badge>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton>
                                <Badge badgeContent={0} color='error'>
                                    <NotificationsNoneOutlinedIcon className='text-[#333333da]' />
                                </Badge>
                            </IconButton>
                        </div>
                        <div>
                            <IconButton>
                                <HelpOutlineOutlinedIcon className='text-[#333333da]' />
                            </IconButton>
                        </div>
                        <div>
                            <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                            >
                                <img src='https://bit.ly/dan-abramov' className='w-[30px] h-[30px] rounded-full' />
                            </StyledBadge>
                        </div>
                    </div>
                </div>
            </nav>
            <section className={styles['banner']}>
                <div className='w-[80%] m-auto flex items-center justify-between h-[200px]'>
                    <div>
                        <h3 className='text-white font-bold text-[40px] tracking-wide'>Help Center</h3>
                        <p className='mt-5 text-white font-semibold tracking-wider text-[15px]'>shopsocial customer care</p>
                    </div>
                    <div>
                        <img src={helpIcon} className='w-[250px] h-[250px]' />
                    </div>
                </div>
            </section>
            <section className='w-[80%] mb-4 m-auto flex flex-col justify-center items-center gap-y-4'>
                <p className='text-[15px] font-semibold'>How can we help you?</p>
                <FormControl className='w-[50%]'>
                    <StyledOutlinedInput
                    startAdornment={<InputAdornment position="end"><SearchIcon sx={{ color: 'gray'}} /></InputAdornment>}
                    type='search'
                    placeholder='Describe your issue'
                    sx={{
                        width: '100%',
                        height: '40px',
                        letterSpacing: '1px',

                        '&:focus': {
                            outline: '1px solid #16962B',
                            border: 'none',
                        }
                    }}
                    />
                </FormControl>
            </section>
            <section className={`${styles['callToIcons']} mt-5`}>
                <div className='flex flex-col justify-center items-center gap-y-3'>
                    <img src={shoppingcartsvg} className='w-[50px] h-[50px]' />
                    <span className=' text-[13px] font-semibold text-center text-gray-500'>Place Order</span>
                </div>
                <div className='flex flex-col items-center justify-center gap-y-3'>
                    <img src={deliveryvansvg} className='w-[50px] h-[50px]' />
                    <span className='text-[13px] font-semibold text-center text-gray-500'>Track Order</span>
                </div>
                <div className='flex flex-col items-center justify-center gap-y-3'>
                    <img src={boxsvg} className='w-[50px] h-[50px]' />
                    <span className='text-[13px] font-semibold text-center text-gray-500'>Order Cancelation</span>
                </div>
                <div className='flex flex-col items-center justify-center gap-y-3'>
                    <img src={boxsvg2} className='w-[50px] h-[50px]' />
                    <span className='text-[13px] font-semibold text-center text-gray-500'>Return & Refunds</span>
                </div>
                <div className='flex flex-col items-center justify-center gap-y-3'>
                    <img src={paymentsvg} className='w-[50px] h-[50px]' />
                    <span className='text-[13px] font-semibold text-center text-gray-500'>Payment</span>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default HelpIndex;