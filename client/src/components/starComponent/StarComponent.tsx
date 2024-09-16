import React from 'react';
import IconButton from "@mui/material/IconButton";
import styles from "../MainContentFeed/index.module.css";
import Stars from "../../assets/icons/Stars"

const StarComponent: React.FC = () => {
    const count:number = 5
    return (
        <>
            {Array.from({ length: count }).map((_, index)=>(
                <IconButton key={index} className={styles['stars']}>
                    <Stars />
                </IconButton>
            ))}
        </>
    )

}

export default StarComponent;