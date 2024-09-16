import { useState } from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from "@mui/icons-material/NightsStay";
import styles from './index.module.css'

export const ToggleTheme = () => {
    const [toggleThemeMode, setToggleThemeMode] = useState(false);

    const handleToggle = () => {
        setToggleThemeMode(!toggleThemeMode);
        // document.body.classList.toggle('dark');
        // localStorage.setItem('themeMode', toggleThemeMode);
    }

    return (
        <>
            <div className={`${styles['toggle-switch']} ${styles[toggleThemeMode ? 'dark' : 'light']}`} onClick={handleToggle}>
            <div className={styles['toggle-circle']}>
                {toggleThemeMode ? <NightsStayIcon /> : <WbSunnyIcon />}
            </div>
            </div>
        </>
    )
}