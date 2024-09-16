import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import CartIcon from '../../assets/icons/cartIcon';
import styles from './index.module.css'
import Logo1 from '../../assets/logo.png';
import { ToggleTheme } from '../ThemeToggle/ThemeToggle';


const NullUser: React.FC = () => {
    return (
        <div className=' flex gap-4 justify-center items-center'>
            <Link to="login">
                <Button type='primary'>Login</Button>
            </Link>
            <Link to="signup">
                <Button type='secondary'>Signup</Button>
            </Link>
            <ToggleTheme />

            <div className=' text-[#333] cursor-pointer font-semibold relative'>
                <div className="cartCount absolute top-[-7px] right-[-8px] w-6 h-5 text-center flex justify-center items-center rounded-xl bg-red-500 text-white text-sm">0</div>
                <CartIcon />
            </div>
        </div>
    )
}

// export const loggedInUser = () => {
//     return (
//         <div></div>
//     )
// }

export const NavBar: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <div className="container w-[80%] m-auto flex items-center justify-between">
                <Link to="/">
                {/* ShopSocial */}
                    <img className={styles['logo']} src={Logo1} alt="Logo" />
                </Link>
                <div>
                    <NullUser />
                    {/* <LoggedInUser /> */}
                </div>
                
            </div>
        </nav>
    )
}
