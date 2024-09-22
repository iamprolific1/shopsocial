import React from 'react';
import { Button } from '@mui/material';
import styles from './index.module.css'

interface TemplateProps {
    title: string;
    description: string;
    price: string | number;
    imageUrl: string;
    onLearnMore?: ()=> void;
}

export const EmailTemplateCard:React.FC<TemplateProps> = ({ title, description, price, imageUrl, onLearnMore })=> {
    return (
        <div className={styles['card']}>
            <div className={styles['card-image']}>
                <img src={imageUrl} alt={title} />
            </div>
            <div className={styles['card-content']}>
                <h3 className={styles['card-title']}>{title}</h3>
                <p className={styles['card-description']}>{description}</p>
                <div className={styles['card-footer']}>
                    <span className={styles['price']}>{price}</span>
                    <Button 
                    onClick={onLearnMore} color='success'
                    variant="contained"
                    sx={{
                        background: '#2ecc71',
                        color: 'white',
                        textTransform: 'capitalize',
                        transition: 'all 0.3s ease',

                        '&:hover': {
                            background: '#27ae60'
                        }
                    }}
                    >Learn More</Button>
                </div>
            </div>
        </div>
    )
}