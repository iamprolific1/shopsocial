import { Link } from 'react-router-dom';
import HomeIcon from '../../../assets/icons/HomeIcon';
import ShopIcon from '../../../assets/icons/ShopIcon';
import ExploreIcon from '../../../assets/icons/ExploreIcon';
import ChatIcon from '../../../assets/icons/ChatIcon';
import PostIcon from '../../../assets/icons/PostIcon';
import CartIcon from '../../../assets/icons/cartIcon';
import NotificationIcon from '../../../assets/icons/NotificationIcon';
import ProfileIcon from '../../../assets/icons/ProfileIcon';
import HelpIcon from '../../../assets/icons/HelpIcon';
import HeartIcon from '../../../assets/icons/HeartIcon';
import SettingsIcon from '../../../assets/icons/SettingsIcon';
import AnalyticsIcon from '../../../assets/icons/AnalyticsIcon';
import ShieldIcon from '../../../assets/icons/ShieldIcon';
import DealsIcon from '../../../assets/icons/DealsIcon';

import styles from './index.module.css';



const LeftAside = () => {
    return (
        <aside className={styles['left_SideBar']}>
            <nav className={styles['nav']}>
                <ul>
                    <li>
                        <Link to="/" className={`${styles.navLinks} ${styles.active}`}> {<HomeIcon />} Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard" className={styles['navLinks']}> {<ShieldIcon />} Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/shop" className={styles['navLinks']}> {<ShopIcon />} Shop</Link>
                    </li>
                    <li>
                        <Link to="/explore" className={styles['navLinks']}> {<ExploreIcon />} Explore</Link>
                    </li>
                    <li>
                        <Link to="/chats" className={styles['navLinks']}> {<ChatIcon />} Messages</Link>
                    </li>
                    <li>
                        <Link to="/posts" className={styles['navLinks']}> {<PostIcon />} Post</Link>
                    </li>
                    <li>
                        <Link to="/orders" className={styles['navLinks']}> {<CartIcon />} Orders</Link>
                    </li>
                    <li>
                        <Link to="/notifications" className={styles['navLinks']}> {<NotificationIcon />} Notifications</Link>
                    </li>
                    <li>
                        <Link to="/profile" className={styles['navLinks']}> {<ProfileIcon />} Profile</Link>
                    </li>
                    <li>
                        <Link to="/wishlist" className={styles['navLinks']}> {<HeartIcon />} Wishlist</Link>
                    </li>
                    <li>
                        <Link to="/settings" className={styles['navLinks']}> {<SettingsIcon />} Settings</Link>
                    </li>
                    <li>
                        <Link to="/analytics" className={styles['navLinks']}> {<AnalyticsIcon />} Analytics</Link>
                    </li>
                    <li>
                        <Link to="/help" className={styles['navLinks']}> {<HelpIcon />} Help</Link>
                    </li>
                    <li>
                        <Link to="/deals" className={styles['navLinks']}> {<DealsIcon />} Deals / Offers</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default LeftAside