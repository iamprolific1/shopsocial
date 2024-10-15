import React, { useState, useEffect } from "react";
import styles from "./index.module.css";

export const VerifyAccountMessage: React.FC = () => {
    const message = `To keep your account secure, please verify your email by entering the code we just sent you. It should arrive shortly in your inbox. If you don't see it, kindly request a new code. Your security is our priority, and this step helps us ensure a safe experience.`;

    const [displayedText, setDisplayedText] = useState<string>("");
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        if (index < message.length) {
        const timeOut = setTimeout(() => {
            setDisplayedText((prev) => prev + message[index]);
            setIndex((prev) => prev + 1);
        }, 50);
        return () => clearTimeout(timeOut);
        }
    }, [index, message]);

    return (
        <div className={styles["welcomeText"]}>
            <p>
                {displayedText}
                <span className={styles["cursor"]}>|</span>
            </p>
        </div>
    );
};
