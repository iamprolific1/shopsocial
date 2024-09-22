import React from 'react';
import { Button } from "@mui/material";
import { MarketingActivity, MarketingActivityProps } from './MarketingActivity';
import { CurrencyFormatter } from '../../utils/CurrencyFormatter';
import styles from './index.module.css';

const activityData:MarketingActivityProps[] =[
    {
        campaignTitle: 'Untitled',
        campaignSubtitle: 'Untitled Campaign',
        status: 'Draft',
        ctr: '0%',
        cost: '-',
        sales: CurrencyFormatter(0),
        sessions: '0',
        statusColor: ''
    },
    {
        campaignTitle: 'Untitled',
        campaignSubtitle: 'Untitled Campaign',
        status: 'Sent',
        ctr: '0%',
        cost: '-',
        sales: CurrencyFormatter(0),
        sessions: '0',
        statusColor: ''
    },
    {
        campaignTitle: 'Untitled',
        campaignSubtitle: 'Untitled Campaign',
        status: 'Deleted',
        ctr: '0%',
        cost: '-',
        sales: CurrencyFormatter(0),
        sessions: '0',
        statusColor: ''
    },
]

function checkStatus(status: string): string{
    
    switch (status) {
        case 'Draft':
            return 'orange';
        case 'Sent':
            return 'green'
        case 'Deleted':
            return 'red'
        default:
            return 'gray'
    }
}

export const MarketingTable: React.FC = ()=> {
    return (
        <section className='px-4 mt-5 mb-2'>
            <div className="font-semibold text-gray-400 mt-1 mb-2">Recent Marketing Activities</div>
            <div className={styles['tableContainer']}>
                <div className={styles['columns']}>
                    <div className='font-bold text-[16px] text-center tracking-wide mb-3 py-2 text-[#333]'>Campaign</div>
                    <div className='font-bold text-[16px] text-center tracking-wide mb-3 py-2 text-[#333]'>Status</div>
                    <div className='font-bold text-[16px] text-center tracking-wide mb-3 py-2 text-[#333]'>CTR</div>
                    <div className='font-bold text-[16px] text-center tracking-wide mb-3 py-2 text-[#333]'>Cost</div>
                    <div className='font-bold text-[16px] text-center tracking-wide mb-3 py-2 text-[#333]'>Sales</div>
                    <div className='font-bold text-[16px] text-center tracking-wide mb-3 py-2 text-[#333]'>Sessions</div>
                </div>
                {
                    activityData.map((item, index)=> (
                        <MarketingActivity 
                            key={index}
                            campaignTitle={item.campaignTitle}
                            campaignSubtitle={item.campaignSubtitle}
                            status={item.status}
                            ctr={item.ctr}
                            cost={item.cost}
                            sales={item.sales}
                            sessions={item.sessions}
                            statusColor={checkStatus(item.status)}
                        />
                    ))
                }

                <div className='mt-5 mb-2 flex items-center gap-x-[4rem] px-4'>
                    <Button
                        variant='outlined'
                        sx={{
                            border: '1px solid #16962B',
                            fontSize: '15px',
                            color: '#333333d2',
                            textTransform: 'lowercase',
                            marginLeft: '30px',

                            '&:hover': {
                                transition: 'all 0.3s ease',
                                border: '1px solid #16962B',
                                background: '#16962B',
                                color: '#fff'
                            }
                        }}
                    >
                        View all
                    </Button>

                    <div className='tracking-wider text-gray-400 text-[14px] font-medium flex-1 text-center'>Showing data from the last 30 days</div>
                </div>
            </div>
        </section>
    )
}