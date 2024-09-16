// import TextField from '@mui/material/TextField';
import { FormControl, InputAdornment, OutlinedInput, Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './index.module.css'
import CountryIcon from '../../assets/world.png';
// import ChatIcon from '../../assets/icons/ChatIcon';
import NotificationIcon from '../../assets/icons/NotificationIcon';
import HelpIcon from '../../assets/icons/HelpIcon';
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
// import Avatar from "@mui/material/Avatar";
// import { ChatBubble } from '@mui/icons-material';

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

export const AuthenticatedTopBar = ()=> {
    return (
        <nav className={styles['topNav']}>
            <div className=' text-green-600 font-semibold text-base'><h3>Welcome User!</h3></div>
            <div className={styles['search']}>
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
                    <Button variant="contained" color="success" size="medium">
                        Search
                    </Button>
            </div>
            <div className={styles['icons']}>
                <div className={styles['icon']}>
                    <img src={CountryIcon} alt="country-icon" />
                </div>
                <div className={styles['icon']}>
                    <IconButton>
                        <Badge badgeContent={0} color="error">
                            <FontAwesomeIcon className={styles['comment-icon']} icon={faComment} />
                        </Badge>
                    </IconButton>
                </div>
                <div className={styles['icon']}>
                    <IconButton>
                        <Badge badgeContent={0} color='error'>
                            <NotificationIcon />
                        </Badge>
                    </IconButton>
                </div>
                <div className={styles['icon']}>
                    <IconButton>
                        <HelpIcon />
                    </IconButton>
                </div>
                <div className={styles['icon']}>
                    <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                    >
                        <img src='https://bit.ly/dan-abramov' className={styles['avatarimg']} />
                    </StyledBadge>
                </div>
            </div>
        
        </nav>
    )
}