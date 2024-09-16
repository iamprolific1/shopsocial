import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
export const WelcomeText: React.FC = ()=> {
    const message = `Welcome to ShopSocial, your one-stop destination for discovering, shopping, and connecting with the latest trends and exclusive deals! We are excited to have you on board. At ShopSocial, we believe in making shopping a social experience, where you can share your finds, get inspired, and make purchases with confidence. Join our growing community and start exploring a world of endless possibilities. Your satisfaction is our top priority, and we're here to ensure you have an enjoyable and seamless shopping experience.`;

    const [displayedText, setDisplayedText] = useState<string>('');
    const [index, setIndex] = useState<number>(0);

    useEffect(()=>{
        if(index < message.length) {
            const timeOut = setTimeout(()=> {
                setDisplayedText((prev) => (prev + message[index]))
                setIndex((prev) => prev + 1)
            }, 50)
            return ()=> clearTimeout(timeOut)
        }
    }, [index, message])

    return (
        <div className={styles['welcomeText']}>
            <p>
                {displayedText}
                <span className={styles['cursor']}>!</span>
            </p>
        </div>
    )
}