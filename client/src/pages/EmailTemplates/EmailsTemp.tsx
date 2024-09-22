import AsideNav from "../../components/DashboardAsideBar/AsideNav";
import { AuthenticatedTopBar } from "../../components/TopBar/AuthenticatedTopBar";
import { EmailTemplateCard } from "./EmailTemplateCard";

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
import holidaysale from "../../assets/holidaysale.jpg";
import ecommerce from "../../assets/ecommerce1.jpg";
import businessMeeting from '../../assets/business-meeting.jpg';
import eAdvertising from '../../assets/e-advertising.jpg';
import eLearning from '../../assets/e-learning.jpg';
import flashSale from '../../assets/flash-sale.jpg';
import styles from './index.module.css';


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

const templates = [
    {
        title: 'Holiday Special',
        description: 'Get into the festive spirit with this holiday template!',
        price: '$29.99',
        imageUrl: holidaysale,
        onLearnMore: ()=> {
            alert('This button is clicked')
        }
    },
    {
        title: 'Product Launch',
        description: 'A sleek, modern design perfect for new product launches.',
        price: '$19.99',
        imageUrl: ecommerce,
        onLearnMore: ()=> console.log('clicked')
    },
    {
        title: 'Holiday Special',
        description: 'Get into the festive spirit with this holiday template!',
        price: '$29.99',
        imageUrl: businessMeeting,
    },
    {
        title: 'Product Launch',
        description: 'A sleek, modern design perfect for new product launches.',
        price: '$19.99',
        imageUrl: eAdvertising,
    },
    {
        title: 'Product Launch',
        description: 'A sleek, modern design perfect for new product launches.',
        price: '$19.99',
        imageUrl: eLearning,
    },
    {
        title: 'Product Launch',
        description: 'A sleek, modern design perfect for new product launches.',
        price: '$19.99',
        imageUrl: flashSale,
    },

    // Add more templates as needed
];


const EmailTemp = ()=> {

    return (
        <div className={styles['container']}>
            <AsideNav 
                logoSrc={Logo1}
                navItems={navItems}
                SecondNavItems={secondNavItems}
            />
            <div className={styles['right_Panel']}>
                <AuthenticatedTopBar />
                <section className='px-4 flex items-center justify-between mb-2'>
                    <div>
                        <h3 className={styles['header']}>Emails</h3>
                        <span className='text-gray-600 text-[12px] tracking-wide '>Get started with a pre-built template.</span>
                    </div>
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

                <section className='px-4 mt-3 grid grid-cols-2 gap-4 mb-2'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/94gHaHKmD4Q?si=pC_xs-ECNYYIOI90" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <div className='p-4 text-capitalize flex flex-col gap-y-4 justify-center'>
                        <h3 className='font-semibold text-[#333] text-[20px]'>E-mail marketing on shopsocial</h3>
                        <div className='text-[14px] tracking-wide text-[#333333c7] font-medium'>
                            Boost your brand's visibility and drive sales with targeted email marketing on ShopSocial—reach engaged customers with personalized campaigns that showcase your products, promotions, and updates, all designed to maximize your impact and grow your business.
                        </div>

                        <Button
                            variant='outlined'

                            sx={{
                                width: '25%',
                                color: '#333333da',
                                border: '1px solid #16962B',
                                marginTop: '10px',
                                transition: 'all 0.3s ease',
                                textTransform: 'capitalize',

                                '&:hover': {
                                    background: '#16962B',
                                    color: 'white',
                                    border: '1px solid #16962B'
                                }
                            }}
                        >
                            learn more
                        </Button>
                    </div>
                </section>

                <section className='px-4 mt-7 mb-2'>
                    <span className='text-gray-500 mb-3 font-semibold tracking-wide text-[15px]'>Branded Template</span>

                    <div className='grid grid-cols-3 gap-x-4'>
                        {
                            templates.map((template, index)=> (
                                <EmailTemplateCard 
                                    key={index}
                                    title={template.title}
                                    imageUrl={template.imageUrl}
                                    description={template.description}
                                    price={template.price}
                                    onLearnMore={template.onLearnMore}
                                />
                            ))
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}

export default EmailTemp;