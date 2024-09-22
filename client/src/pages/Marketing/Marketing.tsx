
import AsideNav from "../../components/DashboardAsideBar/AsideNav";
import { AuthenticatedTopBar } from "../../components/TopBar/AuthenticatedTopBar";
import { Card } from '../../components/MarketingCard/Card';
import { MarketingTable } from '../../components/MarketingCard/MarketingTable';
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";
// import { Table } from '../../components/MarketingCard/Table';
import DashboardIcon from "@mui/icons-material/Dashboard";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import MoreOutlinedIcon from "@mui/icons-material/MoreOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";

import { Button } from "@mui/material";
import Logo1 from "../../assets/logo.png";
import video14 from '../../assets/videos/video14.mp4';
import { VideoPlayer } from '../../components/VideoPlayer/VideoPlayer';

import styles from "./index.module.css";

const navItems = [
    { icon: <DashboardIcon />, label: 'Dashboard', to: '#dashboard' },
    { icon: <SellOutlinedIcon />, label: 'Orders', to: '#orders' },
    { icon: <MoreOutlinedIcon />, label: 'Catalog', to: '#catalog' },
    { icon: <GroupOutlinedIcon />, label: 'Customers', to: '#customers' },
    { icon: <CampaignOutlinedIcon />, label: 'Marketing', to: '#marketing', isActive: true },
    { icon: <SettingsOutlinedIcon />, label: 'Settings', to: '#settings' },
    { icon: <BuildOutlinedIcon />, label: 'Configure', to: '#configure' },
];

const secondNavItems = [
    { icon: <HelpOutlineOutlinedIcon />, label: "Help", to: "#help" },
    {
        icon: <LogoutOutlinedIcon />,
        label: "Logout",
        to: "#logout",
        textRed: "text-red-600",
    },
];

const cardData = [
    { title: 'Online store session', count: 0, reportLink: 'view report' },
    { title: 'Online store conversion rate', count: '0%', reportLink: 'view report' },
    { title: 'Average order value', count: CurrencyFormatter(0), reportLink: 'view report' },
    { title: 'Total sales', count: CurrencyFormatter(0), reportLink: 'view report' },
    { title: 'Sales attributed to marketing', count: CurrencyFormatter(0), reportLink: 'view report' },
    { title: 'Order attributed to marketing', count: 0, reportLink: 'view report' },
];

const Marketing = ()=> {
    

    return (
        <div className={styles['container']}>
            <AsideNav
                navItems={navItems}
                logoSrc={Logo1}
                SecondNavItems={secondNavItems}
            />
            <div className={styles['right_Panel']}>
                <AuthenticatedTopBar />
                <section className='px-4 flex items-center justify-between mb-2'>
                    <h3 className={styles['header']}>Marketing</h3>
                    <div className=' flex items-center gap-x-2'>
                        <Button 
                            variant='outlined' 
                            color='success'
                            sx={{
                                transition: 'background-color 0.3s ease',
                                '&:hover': {
                                    background: '#16962B',
                                    color: 'white',
                                    border: 'none',
                                }
                            }}
                        >
                            Last 30 Days
                        </Button>

                        <Button
                            variant='contained'
                            color='success'

                            sx={{ 
                                background: '#16962B',
                                '&:hover': {
                                    background:'#16962B',
                                }
                            }}
                        >Create Campaign</Button>
                    </div>
                </section>
                <section className='flex px-4 gap-x-2 mt-2 bg-white'>
                    <VideoPlayer videoSrc={video14} />

                    <div className={styles['marketingDetails']}>
                        <h4 className=' text-[18px] px-3 py-2 tracking-wide font-bold text-[#333333e1]'>E-mail marketing on shopsocial</h4>
                        <div className=' text-[14px] px-3 py-2 tracking-wider font-normal text-[#333333ea]'>
                            <div className={styles['subHeader']}>Grow your business with E-mail marketing on shopsocial</div>
                            With ShopSocial's email marketing tools, you can easily boost engagement, increase sales, and build customer loyalty. Send personalized campaigns, promote new products and exclusive offers, and automate your marketing efforts without any hassle. Start creating targeted emails that drive real results and grow your business with ease.
                        </div>
                        <div className={styles['text']}>Get started on ShopSocial today!</div>
                        <div className='px-3 py-2'>
                            <Button
                                variant='outlined'
                                sx={{
                                    border: '1px solid #16962B',
                                    color: '#333333ab',
                                    textTransform: 'capitalize',
                                    fontSize: '15px',
                                    '&:hover': {
                                        border: '1px solid #16962B',
                                        transition: 'all 0.3s ease',
                                        background: '#16962B',
                                        color: '#fff',
                                    }
                                }}
                            >
                                Explore E-mail templates
                            </Button>
                        </div>
                    </div>
                </section>

                <Card 
                    data={cardData}
                />
                <MarketingTable />
                
                <section className={styles['adContainer']}>
                    <div className="font-semibold text-gray-400 mt-1 mb-2">Marketing Apps</div>
                    <p className='font-medium text-[#333] tracking-wide text-[15px] mb-2'>Increase sessions, engage shoppers, and promote products by adding more marketing apps.</p>

                    <div className='flex flex-col gap-y-4 mt-3'>
                        <div className='flex items-stretch gap-x-2'>
                            <img src={Logo1} className='w-[40px] h-[40px] rounded-full' />
                            <div>
                                <h4 className='text-[#16942B] font-semibold text-[15px] tracking-wide mb-2'>ShopSocial</h4>
                                <span className='text-gray-400 text-[13px] tracking-wider font-medium'>Reach shoppers and get discovered across google.</span>
                            </div>
                        </div>

                        <Button
                            variant='outlined'

                            sx={{
                                width: '30%',
                                border: '1px solid #16962B',
                                color: '#333333d2',
                                margin: '10px 0',
                                textTransform: 'capitalize',

                                '&:hover': {
                                    border: '1px solid #16962B',
                                    background: '#16962B',
                                    color: '#fff',
                                    transition: 'all 0.3s ease'
                                }
                            }}
                        >
                            view more marketing apps
                        </Button>
                    </div>

                    <div className='mt-5 mb-2 flex items-center gap-x-2'>
                        <VideoPlayer videoSrc={video14} />
                        <div className={styles['marketingDetails']}>
                            <h4 className='text-[#333] text-[18px] tracking-wide font-bold text-center'>How to advertise on shopsocial</h4>
                            <div className='text-[13px] mt-2 mb-2 tracking-wider font-medium text-center'>
                                Advertising on ShopSocial offers various opportunities to grow your business by leveraging targeted and effective marketing tools. You can promote your products through sponsored listings, ensuring they appear at the top of search results, and create personalized email campaigns to reach specific customer segments. By tapping into social media promotions and partnering with influencers, you can expand your brand's reach and engage a broader audience. Additionally, ShopSocial allows you to offer discounts or coupons to attract more buyers, while providing detailed analytics to optimize your ads for better performance and higher returns.
                            </div>
                            <Button
                                variant='contained'

                                sx={{
                                    width: '25%',
                                    margin: '0 auto',
                                    fontSize: '15px',
                                    background: '#16962B',
                                    textTransform: 'capitalize',

                                    '&:hover': {
                                        background: '#16962B',
                                        transition: 'all 0.3s ease'
                                    }
                                }}
                            >
                                Learn more
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Marketing;