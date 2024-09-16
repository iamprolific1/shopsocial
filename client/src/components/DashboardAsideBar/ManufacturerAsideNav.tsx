
import Logo1 from "../../assets/logo.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AsideNav from './AsideNav';

export const ManufacturerAsideNav = ()=> {
    const navItems = [
        { icon: <DashboardIcon />, label: 'Dashboard', to: '#manufacturerDashboard', isActive: true },
        { icon: <BuildCircleOutlinedIcon />, label: 'Production', to: '#production' },
        { icon: <Inventory2OutlinedIcon />, label: 'Inventory', to: '#inventory' },
        { icon: <BusinessCenterOutlinedIcon />, label: 'Order Management', to: '#orderManagement' },
        { icon: <LocalShippingOutlinedIcon />, label: 'Supply Chain', to: '#supplyChain' },
        { icon: <AnalyticsOutlinedIcon />, label: 'Analytics & Reports', to: '#analytics&reports' },
        { icon: <GroupOutlinedIcon />, label: 'Suppliers', to: '#suppliers' },
        { icon: <SettingsOutlinedIcon />, label: 'Settings', to: '#settings' },
    ]

    const secondNavItems = [
        { icon: <HelpOutlineOutlinedIcon />, label: 'Help', to: '#Help' },
        { icon: <LogoutOutlinedIcon />, label: 'Logout', to: '#Logout', textRed: 'text-red-600' },
    ]
    return (
        <AsideNav 
            navItems={navItems}
            SecondNavItems={secondNavItems}
            logoSrc={Logo1}
        />
    )
}