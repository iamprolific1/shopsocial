import React from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'; // Example icon import
import styles from './index.module.css';

export type MarketingActivityProps = {
    campaignTitle: string;
    campaignSubtitle: string;
    status: string;
    ctr: string;
    cost: string;
    sales: string;
    sessions: string;
    statusColor: string;
}

export const MarketingActivity:React.FC<MarketingActivityProps> = ({
    campaignTitle,
    campaignSubtitle,
    status,
    ctr,
    cost,
    sales,
    sessions,
    statusColor
})=> {
    return (
        <div className={styles['data']}>
            <div className='text-center flex items-baseline gap-x-2 justify-center'>
                <div className={styles['icon']}>
                    <EmailOutlinedIcon />
                </div>
                <div className={styles['dataTitle']}>
                    <h4>{campaignTitle}</h4>
                    <h6>{campaignSubtitle}</h6>
                </div>
            </div>
            <div className='text-center text-gray-500 tracking-wide text-[14px]' style={{ color: statusColor}}>{status}</div>
            <div className='text-center text-gray-500 tracking-wide text-[14px]'>{ctr}</div>
            <div className='text-center text-gray-500 tracking-wide text-[14px]'>{cost}</div>
            <div className='text-center text-gray-500 tracking-wide text-[14px]'>{sales}</div>
            <div className='text-center text-gray-500 tracking-wide text-[14px]'>{sessions}</div>
        </div>
    )
}