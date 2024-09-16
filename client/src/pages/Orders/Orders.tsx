import React from 'react';
import { Link } from 'react-router-dom';
import { OrdersSideNav } from '../../components/DashboardAsideBar/OrdersNav.tsx';
import { AuthenticatedTopBar } from '../../components/TopBar/AuthenticatedTopBar';
import { OrderTable } from '../../components/UI/Table/OrderTable.tsx';
import { CurrencyFormatter } from '../../utils/CurrencyFormatter.ts';
import { Column } from "../../components/UI/Table/OrderTable.tsx";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button } from '@mui/material';
import image1 from "../../assets/assets_img/image12.jpg";
import image2 from '../../assets/chair-1.png';
import image3 from '../../assets/order-1.png';
import styles from './index.module.css';

type OrdersData = {
    orderId: string;
    image: React.ReactNode;
    customerName: string;
    location: string;
    vendor: string;
    item: string;
    total: string | number;
    status: string;
    info: React.ReactNode
}

const columns: Column<OrdersData>[] = [
    { header: '#OrderID', accessor: 'orderId', align: 'center',
        render: (item: OrdersData)=>{
            const orderId = item.orderId;
            return <span className=' font-bold'>{orderId}</span>
        }
    },
    { header: 'Image', accessor: 'image', align: 'center',
        render: (item: OrdersData)=>{
            const image = item.image;
            return <div className={styles.orderImage}>{image}</div>
        }
    },
    { header: 'Customer Name', accessor: 'customerName', align: 'center' },
    { header: 'Location', accessor: 'location', align: 'center' },
    { header: 'Vendor', accessor: 'vendor', align: 'center' },
    { header: 'Item', accessor: 'item', align: 'center' },
    { header: 'Total', accessor: 'total', align: 'center' },
    { header: 'Status', accessor: 'status', align: 'center', 
        render: (item: OrdersData)=> {
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
        render: (item: OrdersData)=>{
            const info = item.info;
            return <Link to='#productDetails' className=' text-green-400'>{info}</Link>
        }
    },
]

const data: OrdersData[] = [
    { 
        orderId: '#719261',
        image: <img src={image1} alt="productImage" />,
        customerName: 'James Foster',
        location: 'Lagos, Nigeria',
        vendor: 'Blue Tyga',
        item: 'Blue Tyga Hoodie',
        total: CurrencyFormatter(50000),
        status: 'Processing',
        info: <Link to='#productDetails'>view details</Link>
    },
    { 
        orderId: '#719261',
        image: <img src={image2} alt="productImage" />,
        customerName: 'James Foster',
        location: 'Lagos, Nigeria',
        vendor: 'Blue Tyga',
        item: 'Blue Tyga Hoodie',
        total: CurrencyFormatter(50000),
        status: 'Shipped',
        info: <Link to='#productDetails'>view details</Link>
    },
    { 
        orderId: '#719261',
        image: <img src={image3} alt="productImage" />,
        customerName: 'James Foster',
        location: 'Lagos, Nigeria',
        vendor: 'Blue Tyga',
        item: 'Blue Tyga Hoodie',
        total: CurrencyFormatter(50000),
        status: 'Delivered',
        info: <Link to='#productDetails'>view details</Link>
    },
    { 
        orderId: '#719261',
        image: <img src={image3} alt="productImage" />,
        customerName: 'James Foster',
        location: 'Lagos, Nigeria',
        vendor: 'Blue Tyga',
        item: 'Blue Tyga Hoodie',
        total: CurrencyFormatter(50000),
        status: 'Cancelled',
        info: <Link to='#productDetails'>view details</Link>
    },
    { 
        orderId: '#719261',
        image: <img src={image3} alt="productImage" />,
        customerName: 'James Foster',
        location: 'Lagos, Nigeria',
        vendor: 'Blue Tyga',
        item: 'Blue Tyga Hoodie',
        total: CurrencyFormatter(50000),
        status: 'Shipped',
        info: <Link to='#productDetails'>view details</Link>
    },
    { 
        orderId: '#719261',
        image: <img src={image3} alt="productImage" />,
        customerName: 'James Foster',
        location: 'Lagos, Nigeria',
        vendor: 'Blue Tyga',
        item: 'Blue Tyga Hoodie',
        total: CurrencyFormatter(50000),
        status: 'Processing',
        info: <Link to='#productDetails'>view details</Link>
    },
    { 
        orderId: '#719261',
        image: <img src={image3} alt="productImage" />,
        customerName: 'James Foster',
        location: 'Lagos, Nigeria',
        vendor: 'Blue Tyga',
        item: 'Blue Tyga Hoodie',
        total: CurrencyFormatter(50000),
        status: 'Cancelled',
        info: <Link to='#productDetails'>view details</Link>
    },
    { 
        orderId: '#719261',
        image: <img src={image3} alt="productImage" />,
        customerName: 'James Foster',
        location: 'Lagos, Nigeria',
        vendor: 'Blue Tyga',
        item: 'Blue Tyga Hoodie',
        total: CurrencyFormatter(50000),
        status: 'Delivered',
        info: <Link to='#productDetails'>view details</Link>
    },
    { 
        orderId: '#719261',
        image: <img src={image3} alt="productImage" />,
        customerName: 'James Foster',
        location: 'Lagos, Nigeria',
        vendor: 'Blue Tyga',
        item: 'Blue Tyga Hoodie',
        total: CurrencyFormatter(50000),
        status: 'Processing',
        info: <Link to='#productDetails'>view details</Link>
    },
    { 
        orderId: '#719261',
        image: <img src={image3} alt="productImage" />,
        customerName: 'James Foster',
        location: 'Lagos, Nigeria',
        vendor: 'Blue Tyga',
        item: 'Blue Tyga Hoodie',
        total: CurrencyFormatter(50000),
        status: 'Processing',
        info: <Link to='#productDetails'>view details</Link>
    },
    { 
        orderId: '#719261',
        image: <img src={image3} alt="productImage" />,
        customerName: 'James Foster',
        location: 'Lagos, Nigeria',
        vendor: 'Blue Tyga',
        item: 'Blue Tyga Hoodie',
        total: CurrencyFormatter(50000),
        status: 'Shipped',
        info: <Link to='#productDetails'>view details</Link>
    },
]

const Orders = ()=> {
    return (
        <div className={styles['wrapper']}>
            <OrdersSideNav />
            <div className={styles['right_Panel']}>
                <AuthenticatedTopBar />
                <div className=' px-4 flex items-center justify-between mb-2'>
                    <h3 className={styles['header']}>Orders</h3>
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
                </div>
                <div>
                    <OrderTable
                        title='Recent Orders'
                        columns={columns}
                        data={data}
                        columnColor={'#16962B'}
                        
                    />
                </div>
            </div>
            
        </div>

    )
}

export default Orders;
