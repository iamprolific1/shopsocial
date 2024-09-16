import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

interface NavItem {
    icon: React.ReactNode;
    label: string;
    to: string;
    isActive?: boolean;
    textRed?: string;
}

interface AsideNavProps {
    logoSrc: string;
    navItems: NavItem[];
    SecondNavItems: NavItem[];
}

const AsideNav: React.FC<AsideNavProps> = ({ logoSrc, navItems, SecondNavItems })=>{
    return (
        <aside className={styles['asideNav']}>
            <div className={styles['logo']}>
                <img src={logoSrc} alt="logo" />
            </div>
            <div className={styles['navMenu']}>
                <ul className={styles['navItems']}>
                    {
                        navItems.map((item, index)=> (
                            <li key={index} className={item.isActive ? styles['active'] : ''}>
                                <Link to={item.to} className={styles['navLink']}>
                                    {item.icon}  {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={styles['second_Nav_Menu']}>
                <ul>
                    {
                        SecondNavItems.map((item, index)=>(
                            <li key={index}>
                                <Link to={item.to} className={`${styles['navLink']} ${item.textRed}`}>
                                    {item.icon}  {item.label}
                                </Link>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </aside>
    )
}

export default AsideNav;