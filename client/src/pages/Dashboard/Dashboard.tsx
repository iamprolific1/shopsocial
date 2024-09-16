import { DashboardAsideNav } from '../../components/DashboardAsideBar/DashboardAsideNav';
import { AuthenticatedTopBar } from '../../components/TopBar/AuthenticatedTopBar';
import { CurrencyFormatter } from '../../utils/CurrencyFormatter';
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Chart1 from '../../features/charts/Chart1';
import Chart2 from '../../features/charts/Chart2';
import Chart3 from '../../features/charts/Chart3';
import Chart4 from '../../features/charts/Chart4';
import BarChart from '../../features/charts/Barchart';
import RadialChart from '../../features/charts/RadialChart';
import { Table } from '../../components/UI/Table/Table';
import { Column } from '../../components/UI/Table/Table'
import { Button } from '../../components/Button';
import styles from './index.module.css';

type OrderData = {
    orderId: string;
    date: string;
    customerName: string;
    location: string;
    tracking: string;
    items: string;
    amount: string | number;
    status: string;
}


const columns: Column<OrderData>[] = [
    { header: 'OrderID', accessor: 'orderId',
        align: 'center',
        render: (item: OrderData) => {
            const orderID = item.orderId;
            return <span className=' font-bold'>{orderID}</span>
        }
    },
    { header: 'Date', accessor: 'date', align: 'center' },
    { header: 'Customer Name', accessor: 'customerName', align: 'center' },
    { header: 'Location', accessor: 'location', align: 'center' },
    { header: 'Tracking', accessor: 'tracking', align: 'center' },
    { header: 'Items', accessor: 'items', align: 'center' },
    { header: 'Amount', accessor: 'amount', align: 'center' },
    { header: 'Status', accessor: 'status', align: 'center',
        render: (item: OrderData) => {
            let color = '';
            switch (item.status) {
                case 'Delivered':
                    color ='success';
                    break;
                case 'Processing':
                    color ='warning';
                    break;
                case 'Cancelled':
                    color ='danger';
                    break;
                case 'Shipped':
                    color ='primary';
                    break;
                default:
                    color ='default';
                    break;
            }
            return <span className={`text-${color} font-semibold`}>{item.status}</span>
        }
    }
];

const data: OrderData[] = [
    {
        orderId: "#719261",
        date: "13 Apr 2024",
        customerName: "Mr Daniel Stephen",
        location: "Lagos, Nigeria",
        tracking: "GUHYIF12",
        items: "Macbook Pro",
        amount: CurrencyFormatter(1300000),
        status: "Delivered",
    },
    {
        orderId: "#719262",
        date: "14 Apr 2024",
        customerName: "Ms Jane Doe",
        location: "Abuja, Nigeria",
        tracking: "HJY34TY8",
        items: "iPhone 14",
        amount: CurrencyFormatter(1850000),
        status: "Shipped",
    },
    {
        orderId: "#719263",
        date: "15 Apr 2024",
        customerName: "Mr John Smith",
        location: "Kano, Nigeria",
        tracking: "UY76TGB2",
        items: "Dell XPS 13",
        amount: CurrencyFormatter(850000),
        status: "Processing",
    },
    {
        orderId: "#719264",
        date: "16 Apr 2024",
        customerName: "Mrs Mary Johnson",
        location: "Ibadan, Nigeria",
        tracking: "WE34HYT9",
        items: "Samsung Galaxy S21",
        amount: CurrencyFormatter(720000),
        status: "Cancelled",
    },
    {
        orderId: "#719265",
        date: "17 Apr 2024",
        customerName: "Mr Peter Parker",
        location: "Port Harcourt, Nigeria",
        tracking: "LO89BVFR",
        items: "Sony PlayStation 5",
        amount: CurrencyFormatter(497500),
        status: "Delivered",
    },
    {
        orderId: "#719266",
        date: "18 Apr 2024",
        customerName: "Ms Natasha Romanoff",
        location: "Benin City, Nigeria",
        tracking: "NJHY78OK",
        items: "Microsoft Surface Pro",
        amount: CurrencyFormatter(297000),
        status: "Delivered",
    },
    {
        orderId: "#719267",
        date: "19 Apr 2024",
        customerName: "Mr Bruce Wayne",
        location: "Enugu, Nigeria",
        tracking: "JKLO43FG",
        items: "Apple Watch Series 8",
        amount: CurrencyFormatter(89020),
        status: "Shipped",
    },
    {
        orderId: "#719268",
        date: "20 Apr 2024",
        customerName: "Ms Carol Danvers",
        location: "Uyo, Nigeria",
        tracking: "XYN78TYU",
        items: "Asus ROG Laptop",
        amount: CurrencyFormatter(420000),
        status: "Processing",
    },
    {
        orderId: "#719269",
        date: "21 Apr 2024",
        customerName: "Mr Tony Stark",
        location: "Jos, Nigeria",
        tracking: "BHY65OPL",
        items: "Google Pixel 7",
        amount: CurrencyFormatter(750000),
        status: "Delivered",
    },
    {
        orderId: "#719270",
        date: "22 Apr 2024",
        customerName: "Ms Diana Prince",
        location: "Warri, Nigeria",
        tracking: "LOPO78HG",
        items: "HP Spectre x360",
        amount: CurrencyFormatter(540250),
        status: "Shipped",
    },
    {
        orderId: "#719271",
        date: "23 Apr 2024",
        customerName: "Mr Clark Kent",
        location: "Owerri, Nigeria",
        tracking: "VGHT67OL",
        items: "AirPods Pro",
        amount: CurrencyFormatter(48700),
        status: "Delivered",
    },
];

const Dashboard =()=>{
    return (
        <div className={styles['container']}>
            <DashboardAsideNav />
            <div className={styles['right_panel']}>
                <AuthenticatedTopBar />
                <div className='px-4'>
                    <h3 className={styles['header']}>Overview</h3>
                    <div className=' flex items-center justify-between gap-x-5'>
                        <div className={styles['card']}>
                            <p className={styles['card_Text']}>Total Sales</p>
                            <div className={styles['price_Chart']}>
                                <div className={styles['price']}>$450k</div>
                                <div>
                                    <Chart1 />
                                </div>
                            </div>
                            <div className=' flex items-center gap-x-3 mt-4 justify-center'>
                                <div className={styles['arrowIcon']}>
                                    <ArrowDropUpIcon sx={{ fontSize: '25px' }} />
                                </div>
                                <div className={`${styles['percentage']} ${styles['success']}`}>45%</div>
                                <div className={styles['timePeriod']}>this week</div>
                            </div>
                        </div>
                        <div className={styles['card']}>
                            <p className={styles['card_Text']}>Total Items</p>
                            <div className={styles['price_Chart']}>
                                <div className={styles['price']}>1500</div>
                                <div>
                                    <Chart2 />
                                </div>
                            </div>
                            <div className=' flex items-center gap-x-3 mt-4 justify-center'>
                                <div className={styles['arrowIcon']}>
                                    <ArrowDropUpIcon sx={{ fontSize: '25px' }} />
                                </div>
                                <div className={`${styles['percentage']} ${styles['success']}`}>45%</div>
                                <div className={styles['timePeriod']}>this week</div>
                            </div>
                        </div>
                        <div className={styles['card']}>
                            <p className={styles['card_Text']}>Average Sales</p>
                            <div className={styles['price_Chart']}>
                                <div className={styles['price']}>2.00M</div>
                                <div>
                                    <Chart3 />
                                </div>
                            </div>
                            <div className=' flex items-center gap-x-3 mt-4 justify-center'>
                                <div className={styles['arrowIcon']}>
                                    <ArrowDropDownIcon sx={{ fontSize: '25px', color: '#FF3333'}} />
                                </div>
                                <div className={`${styles['percentage']} ${styles['danger']}`}>-15%</div>
                                <div className={styles['timePeriod']}>this week</div>
                            </div>
                        </div>
                        <div className={styles['card']}>
                            <p className={styles['card_Text']}>Orders Delivered</p>
                            <div className={styles['price_Chart']}>
                                <div className={styles['price']}>20.48%</div>
                                <div>
                                    <Chart4 />
                                </div>
                            </div>
                            <div className=' flex items-center gap-x-3 mt-4 justify-center'>
                                <div className={styles['arrowIcon']}>
                                    <ArrowDropUpIcon sx={{ fontSize: '25px' }} />
                                </div>
                                <div className={`${styles['percentage']} ${styles['success']}`}>45%</div>
                                <div className={styles['timePeriod']}>this week</div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles['charts']}`}>
                        <div className={styles['chart1']}>
                            <div className={styles['chart1_Heading']}>
                                <h3>Total Revenue</h3>
                                <div className={styles['chart1_Toggle']}>
                                    <p>Yearly</p>
                                    <ArrowDropDownIcon />
                                </div>
                            </div>
                            <BarChart />
                        </div>
                        <div className={styles['chart2']}>
                            <RadialChart />
                        </div>
                    </div>
                    <div className={styles['tableContainer']}>
                        <Table 
                            title={'Recent Orders'} 
                            columns={columns} 
                            data={data}
                            columnColor='#16962B' 
                            button={
                                <Button type='primary' className=' flex items-center justify-center'>Filter <ArrowDropDownIcon sx={{ fontSize: '25px'}} /></Button>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard