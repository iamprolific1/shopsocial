import { Link } from 'react-router-dom';
import styles from './index.module.css';

const RightAside = () => {
    return (
        <aside className={styles.right_SideBar}>
            <h3 className={styles['header']}>All Categories</h3>
            <ul>
                <li>
                    <Link className={styles['navLinks']} to="/">Public Market</Link>
                </li>
                <li>
                    <Link className={styles['navLinks']} to="/">Health & Beauty</Link>
                </li>
                <li>
                    <Link className={styles['navLinks']} to="/">Groceries</Link>
                </li>
                <li>
                    <Link className={styles['navLinks']} to="/">Fashion</Link>
                </li>
                <li>
                    <Link className={styles['navLinks']} to="/">Phones & Tablet</Link>
                </li>
                <li>
                    <Link className={styles['navLinks']} to="/">Home & Office</Link>
                </li>
                <li>
                    <Link className={styles['navLinks']} to="/">Home & Kitchen</Link>
                </li>
                <li>
                    <Link className={styles['navLinks']} to="/">Computer & Accessories</Link>
                </li>
                <li>
                    <Link className={styles['navLinks']} to="/">Baby, Kids, & Toys</Link>
                </li>
                <li>
                    <Link className={styles['navLinks']} to="/">Furniture</Link>
                </li>
                <li>
                    <Link className={styles['navLinks']} to="/">Appliances</Link>
                </li>
            </ul>
        </aside>
    )
}

export default RightAside;