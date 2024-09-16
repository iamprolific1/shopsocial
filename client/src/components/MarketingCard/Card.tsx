import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

interface CardData {
    title: string;
    count: number | string;
    reportLink: string;
}

interface CardProps {
    data: CardData[];

}

export const Card: React.FC<CardProps> = ({ data })=> {
    return (
        <section className='px-4 mt-4 mb-2 grid grid-cols-3 gap-4'>
            {
                data.map((data, index)=> (
                    <div key={index} className={styles['card']}>
                        <div className='font-semibold text-[16px] text-[#333] tracking-wide mb-2'>
                            {data.title}
                        </div>
                        <div className='text-[#333333bd] font-medium text-[20px] mt-3 mb-3'>
                            {data.count}
                        </div>
                        <div className={styles['report']}>
                            <Link to='#report' className='text-[#16962B] font-medium text-[14px] tracking-wider'>
                                {data.reportLink}
                            </Link>
                        </div>

                    </div>
                ))
            }
        </section>
    )
}  