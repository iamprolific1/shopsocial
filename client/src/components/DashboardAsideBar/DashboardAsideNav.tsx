
import Logo1 from '../../assets/logo.png';

import DashboardIcon from "@mui/icons-material/Dashboard";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import QrCodeScannerOutlinedIcon from "@mui/icons-material/QrCodeScannerOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MoreOutlinedIcon from "@mui/icons-material/MoreOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import AsideNav from './AsideNav';


export const DashboardAsideNav = ()=> {

    const navItems = [
        { icon: <DashboardIcon />, label: 'Dashboard', to: '#dashboard', isActive: true },
        { icon: <SellOutlinedIcon />, label: 'Orders', to: '#orders' },
        { icon: <PaymentOutlinedIcon />, label: 'Payment Method', to: '#paymentMethod' },
        { icon: <MoreOutlinedIcon />, label: 'Catalog', to: '#catalog' },
        { icon: <GroupOutlinedIcon />, label: 'Customers', to: '#customers' },
        { icon: <CampaignOutlinedIcon />, label: 'Marketing', to: '#marketing' },
        { icon: <QrCodeScannerOutlinedIcon />, label: 'QR-Code', to: '#qr-code' },
        { icon: <SettingsOutlinedIcon />, label: 'Settings', to: '#settings' },
    ]

    const secondNavItems = [
        { icon: <HelpOutlineOutlinedIcon />, label: 'Help', to: '#help' },
        { icon: <LogoutOutlinedIcon />, label: 'Logout', to: '#logout', textRed: 'text-red-600' },
    ]
    
    return (
        
        <AsideNav
            navItems={navItems}
            logoSrc={Logo1}
            SecondNavItems={secondNavItems}
        />
    )
}