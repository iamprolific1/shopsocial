import AsideNav from "../../components/DashboardAsideBar/AsideNav";
import { AuthenticatedTopBar } from "../../components/TopBar/AuthenticatedTopBar";
import { CurrencyFormatter } from '../../utils/CurrencyFormatter';
import { MarketingTable } from "../../components/MarketingCard/MarketingTable";

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

import styles from './index.module.css';
import Logo1 from "../../assets/logo.png";
import paperplane from '../../assets/Paper_Plane.png'


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

const Campaign = ()=> {
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
                        <h3 className={styles['header']}>Campaign</h3>
                        <span className='text-gray-600 text-[12px] tracking-wide '>Results from campaign</span>
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
                <section className="mt-3 w-[96%] mx-auto p-3 flex items-center">
                    <div className="flex flex-col gap-y-3 w-[75%]">
                        <h3 className="text-[18px] tracking-wide font-semibold text-[#333]">Boost your marketing with shopsocial email.</h3>
                        <span className="text-gray-500 text-[13px] tracking-wide font-medium">
                            99% of all consumers check their email daily. Build customer relationships and drive sales through emails, directly within the admin.
                        </span>

                        <Button
                            variant="outlined"
                            color='success'
                            sx={{ 
                                width: '25%',
                                border: '1px solid #16962B',
                                color: '#333333',
                                marginTop: '15px',
                                transition: 'all 0.3s ease',
                                textTransform: 'capitalize',

                                '&:hover': {
                                    background: '#16962B',
                                    color: '#fff',
                                }
                            }}
                        >
                            Create Email
                        </Button>
                    </div>

                    <div className="w-[25%] flex items-center justify-center">
                        <img src={paperplane} className='w-[120px] h-[120px]' />
                    </div>
                </section>
                <section className="mt-4 w-[96%] mx-auto p-3 grid grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-md flex flex-col gap-y-4 shadow-sm">
                        <h3 className="font-semibold text-[18px] tracking-wide text-[#333]">Sessions</h3>
                        <span className="text-gray-500 text-[16px] font-semibold">0</span>
                    </div>
                    <div className="bg-white p-4 rounded-md flex flex-col gap-y-4 shadow-sm">
                        <h3 className="font-semibold text-[18px] tracking-wide text-[#333]">Orders</h3>
                        <span className="text-gray-500 text-[16px] font-semibold">0</span>
                    </div>
                    <div className="bg-white p-4 rounded-md flex flex-col gap-y-4 shadow-sm">
                        <h3 className="font-semibold text-[18px] tracking-wide text-[#333]">Sales</h3>
                        <span className="text-gray-500 text-[16px] font-semibold">{CurrencyFormatter(0)}</span>
                    </div>
                    <div className="bg-white p-4 rounded-md flex flex-col gap-y-4 shadow-sm">
                        <h3 className="font-semibold text-[18px] tracking-wide text-[#333]">Costs</h3>
                        <span className="text-gray-500 text-[16px] font-semibold">{CurrencyFormatter(0)}</span>
                    </div>
                </section>
                <MarketingTable />
            </div>
        </div>
    )
}

export default Campaign;