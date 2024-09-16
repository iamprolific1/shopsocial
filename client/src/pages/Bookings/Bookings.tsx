import { Link } from "react-router-dom";
import AsideNav from "../../components/DashboardAsideBar/AsideNav";
import { AuthenticatedTopBar } from "../../components/TopBar/AuthenticatedTopBar";
import { OrderTable } from "../../components/UI/Table/OrderTable.tsx";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter.ts";
import { Column } from "../../components/UI/Table/OrderTable.tsx";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import MoreOutlinedIcon from "@mui/icons-material/MoreOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button } from "@mui/material";
import Logo1 from "../../assets/logo.png";
import image1 from "../../assets/assets_img/image12.jpg";
// import image2 from "../../assets/chair-1.png";
// import image3 from "../../assets/order-1.png";
import styles from "./index.module.css";

const navItems = [
    { icon: <DashboardIcon />, label: 'Dashboard', to: '#dashboard' },
    { icon: <SellOutlinedIcon />, label: 'Sales', to: '#sales', isActive: true },
    { icon: <MoreOutlinedIcon />, label: 'Catalog', to: '#catalog' },
    { icon: <GroupOutlinedIcon />, label: 'Customers', to: '#customers' },
    { icon: <CampaignOutlinedIcon />, label: 'Marketing', to: '#marketing' },
    { icon: <SettingsOutlinedIcon />, label: 'Settings', to: '#settings' },
    { icon: <BuildOutlinedIcon />, label: 'Configure', to: '#configure' },
];

const secondNavItems = [
    { icon: <HelpOutlineOutlinedIcon />, label: 'Help', to: '#help' },
    { icon: <LogoutOutlinedIcon />, label: 'Logout', to: '#logout', textRed: 'text-red-600' },
];

type BookingsData = {
    orderId: string;
    image: React.ReactNode;
    totalQuantity: number;
    customerName: string;
    bookingDate: string;
    grandTotal: string | number;
    status: string;
    info: React.ReactNode;
};

const columns: Column<BookingsData>[] = [
    { header: '#OrderID', accessor: 'orderId', align: 'center',
        render: (item: BookingsData)=>{
            const orderId = item.orderId;
            return <span className=' font-bold'>{orderId}</span>
        }
    },
    { header: 'Image', accessor: 'image', align: 'center',
        render: (item: BookingsData)=>{
            const image = item.image;
            return <div className={styles.shipmentImage}>{image}</div>
        }
    },
    { header: 'Total Quantity', accessor: 'totalQuantity', align: 'center' },
    { header: 'Customer Name', accessor: 'customerName', align: 'center' },
    { header: 'Booking Date', accessor: 'bookingDate', align: 'center' },
    { header: 'Grand Total', accessor: 'grandTotal', align: 'center' },
    { header: 'Status', accessor: 'status', align: 'center', 
        render: (item: BookingsData)=> {
            let color = '';
            switch (item.status) {
                case 'Delivered':
                    color ='success';
                    break;
                case 'Processing':
                    color ='warning';
                    break;
                case 'Shipped':
                    color ='primary';
                    break;
                case 'Cancelled':
                    color ='danger';
                    break;
                default:
                    color ='default';
                    break;
            }
            return <span className={`text-${color} font-semibold`}>{item.status}</span>
        }
    },
    { header: 'Info', accessor: 'info', align: 'center',
        render: (item: BookingsData)=>{
            const info = item.info;
            return <Link to='#productDetails' className=' text-green-400'>{info}</Link>
        }
    },
];

const data: BookingsData[] = [
    {
        orderId: "#719261",
        image: <img src={image1} alt="productImage" />,
        totalQuantity: 1,
        customerName: "James Foster",
        bookingDate: "04-10-22  03:45:06",
        grandTotal: CurrencyFormatter(25000),
        status: "Processing",
        info: <Link to="#productDetails">view details</Link>,
    },
    {
        orderId: "#719261",
        image: <img src={image1} alt="productImage" />,
        totalQuantity: 1,
        customerName: "James Foster",
        bookingDate: "04-10-22  03:45:06",
        grandTotal: CurrencyFormatter(25000),
        status: "Processing",
        info: <Link to="#productDetails">view details</Link>,
    },
    {
        orderId: "#719261",
        image: <img src={image1} alt="productImage" />,
        totalQuantity: 1,
        customerName: "James Foster",
        bookingDate: "04-10-22  03:45:06",
        grandTotal: CurrencyFormatter(25000),
        status: "Processing",
        info: <Link to="#productDetails">view details</Link>,
    },
    {
        orderId: "#719261",
        image: <img src={image1} alt="productImage" />,
        totalQuantity: 1,
        customerName: "James Foster",
        bookingDate: "04-10-22  03:45:06",
        grandTotal: CurrencyFormatter(25000),
        status: "Processing",
        info: <Link to="#productDetails">view details</Link>,
    },

];

const Bookings = () => {
    return (
        <div className={styles['container']}>
            <AsideNav
                navItems={navItems}
                logoSrc={Logo1}
                SecondNavItems={secondNavItems}
            />
            <div className={styles['right_Panel']}>
                <AuthenticatedTopBar />
                <div className="px-4 flex items-center justify-between mb-2">
                    <h3 className={styles['header']}>Bookings</h3>
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
                            Filter <ArrowDropDownIcon /> 
                        </Button>

                        <Button
                            variant='contained'
                            color='success'

                            sx={{ background: '#16962B'}}
                        >Refund</Button>
                    </div>
                </div>

                <div>
                    <OrderTable 
                        title={'Recent Bookings'}
                        columns={columns}
                        columnColor="#16962B"
                        data={data}
                    />
                </div>
            </div>
        </div>
    );
};

export default Bookings;
