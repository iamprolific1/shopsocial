import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
export const LoginWelcomeText: React.FC = ()=> {
    const message = `Log in to continue exploring the latest trends and deals. We're here to make your shopping experience seamless and enjoyable. Let's get started!`;

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