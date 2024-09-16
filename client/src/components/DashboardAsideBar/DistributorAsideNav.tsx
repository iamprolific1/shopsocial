import Logo1 from '../../assets/logo.png'
import AsideNav from "./AsideNav";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
// import SupplierOutlinedIcon from "@mui/icons-material/GroupWorkOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

export const DistributorAsideNav = ()=> {
    const navItems = [
        { icon: <DashboardIcon />, label: 'Dashboard', to: '#distributorDashboard', isActive: true },
        { icon: <InventoryOutlinedIcon />, label: 'Inventory Management', to: '#inventoryManagement' },
        { icon: <LocalMallOutlinedIcon />, label: 'Order Fufilment', to: '#orderFufilment' },
        { icon: <TrackChangesOutlinedIcon />, label: 'Shipment Tracking', to: '#shipmentTracking' },
        // { icon: <SupplierOutlinedIcon />, label: 'Supplier Relationships', to: '#supplierRelationships' },
        { icon: <LocalShippingOutlinedIcon />, label: 'Logistics Overview', to: '#logisticsOverview' },
        { icon: <SupportAgentOutlinedIcon />, label: 'Customer Support', to: '#customerSupport' },
        { icon: <SettingsOutlinedIcon />, label: 'Settings', to: '#settings' },
    ]

    const secondNavItems = [
        { icon: <HelpOutlineOutlinedIcon />, label: 'Help', to: '#help' },
        { icon: <LogoutOutlinedIcon />, label: 'Logout', to: '#logout' },
    ]
    return (
        <AsideNav
            logoSrc={Logo1}
            navItems={navItems}
            SecondNavItems={secondNavItems}
        />
    )
}