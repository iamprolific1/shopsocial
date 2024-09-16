import { ManufacturerAsideNav } from "../../components/DashboardAsideBar/ManufacturerAsideNav";
import { AuthenticatedTopBar } from "../../components/TopBar/AuthenticatedTopBar";
import Chart5 from "../../features/charts/Chart5";
import Chart6 from "../../features/charts/Chart6";
import Chart7 from "../../features/charts/Chart7";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InventoryOverview from "../../features/charts/InventoryBarChart";
import RadialChart2 from "../../features/charts/RadialChart2";
import { Table } from "../../components/UI/Table/Table";
import { Column } from "../../components/UI/Table/Table";
import styles from "./index.module.css";

type ProductionData = {
    id: string;
    date: string;
    productName: string;
    quantityOrdered: number;
    quantityProduced: number;
    status: "Completed" | "In Production" | "Quality Check";
    productionLine: string;
    machineUsed: string;
    supervisor: string;
    shift: "Day" | "Night";
};

const columns: Column<ProductionData>[] = [
    { header: "ID", accessor: "id", align: 'center',
        render: (item: ProductionData) => {
            return <span className=' font-bold'>{item.id}</span>
        }
    },
    { header: "Date", accessor: "date", align: 'center' },
    { header: "Product Name", accessor: "productName", align: 'center' },
    { header: "Quantity Ordered", accessor: "quantityOrdered", align: 'center' },
    { header: "Quantity Produced", accessor: "quantityProduced", align: 'center' },
    { header: "Production Line", accessor: "productionLine", align: 'center' },
    { header: "Machine Used", accessor: "machineUsed", align: 'center' },
    { header: "Supervisor", accessor: "supervisor", align: 'center' },
    { header: "Shift", accessor: "shift", align: 'center' },
    { header: "Status", accessor: "status", align: 'center',
        render: (item: ProductionData)=> {
            let color = '';
            switch (item.status) {
                case 'Completed':
                    color ='success';
                    break;
                case 'Quality Check':
                    color ='primary';
                    break;
                case 'In Production':
                    color ='danger';
                    break;
                default:
                    color ='default';
                    break;
            }
            return <span className={`text-${color} font-semibold`}>{item.status}</span>
        }
    },
    
];

const data: ProductionData[] = [
    {
        id: "ee8bfbfc",
        date: "12 Mar 2023",
        productName: "Product D",
        quantityOrdered: 995,
        quantityProduced: 451,
        status: "In Production",
        productionLine: "Line 1",
        machineUsed: "Machine B",
        supervisor: "Emily Davis",
        shift: "Day",
    },
    {
        id: "7233feb9",
        date: "13 Mar 2023",
        productName: "Product D",
        quantityOrdered: 691,
        quantityProduced: 418,
        status: "In Production",
        productionLine: "Line 2",
        machineUsed: "Machine A",
        supervisor: "Jane Smith",
        shift: "Day",
    },
    {
        id: "084fa985",
        date: "14 Mar 2023",
        productName: "Product B",
        quantityOrdered: 577,
        quantityProduced: 334,
        status: "Completed",
        productionLine: "Line 1",
        machineUsed: "Machine C",
        supervisor: "Michael Johnson",
        shift: "Night",
    },
    {
        id: "b9972abc",
        date: "15 Mar 2023",
        productName: "Product A",
        quantityOrdered: 300,
        quantityProduced: 300,
        status: "Completed",
        productionLine: "Line 3",
        machineUsed: "Machine D",
        supervisor: "David Thompson",
        shift: "Day",
    },
    {
        id: "cb8d1e93",
        date: "16 Mar 2023",
        productName: "Product E",
        quantityOrdered: 780,
        quantityProduced: 690,
        status: "Quality Check",
        productionLine: "Line 4",
        machineUsed: "Machine E",
        supervisor: "Chris Johnson",
        shift: "Night",
    },
    {
        id: "da9c3f34",
        date: "17 Mar 2023",
        productName: "Product F",
        quantityOrdered: 520,
        quantityProduced: 480,
        status: "Completed",
        productionLine: "Line 2",
        machineUsed: "Machine F",
        supervisor: "Olivia Brown",
        shift: "Day",
    },
    {
        id: "f45a4b25",
        date: "18 Mar 2023",
        productName: "Product G",
        quantityOrdered: 600,
        quantityProduced: 500,
        status: "In Production",
        productionLine: "Line 1",
        machineUsed: "Machine G",
        supervisor: "Robert White",
        shift: "Night",
    },
    {
        id: "637b2f18",
        date: "19 Mar 2023",
        productName: "Product H",
        quantityOrdered: 350,
        quantityProduced: 330,
        status: "Quality Check",
        productionLine: "Line 3",
        machineUsed: "Machine H",
        supervisor: "Emily Davis",
        shift: "Day",
    },
    {
        id: "892fb024",
        date: "20 Mar 2023",
        productName: "Product I",
        quantityOrdered: 450,
        quantityProduced: 400,
        status: "In Production",
        productionLine: "Line 4",
        machineUsed: "Machine I",
        supervisor: "Jane Smith",
        shift: "Night",
    },
    {
        id: "a4560c12",
        date: "21 Mar 2023",
        productName: "Product J",
        quantityOrdered: 750,
        quantityProduced: 700,
        status: "Completed",
        productionLine: "Line 1",
        machineUsed: "Machine J",
        supervisor: "Michael Johnson",
        shift: "Day",
    },
    {
        id: "baf670d5",
        date: "22 Mar 2023",
        productName: "Product K",
        quantityOrdered: 580,
        quantityProduced: 550,
        status: "In Production",
        productionLine: "Line 2",
        machineUsed: "Machine K",
        supervisor: "David Thompson",
        shift: "Night",
    },
    {
        id: "c12bfb7c",
        date: "23 Mar 2023",
        productName: "Product L",
        quantityOrdered: 620,
        quantityProduced: 610,
        status: "Quality Check",
        productionLine: "Line 3",
        machineUsed: "Machine L",
        supervisor: "Chris Johnson",
        shift: "Day",
    },
    {
        id: "d98d3e10",
        date: "24 Mar 2023",
        productName: "Product M",
        quantityOrdered: 470,
        quantityProduced: 450,
        status: "Completed",
        productionLine: "Line 4",
        machineUsed: "Machine M",
        supervisor: "Olivia Brown",
        shift: "Night",
    },
    {
        id: "ea01b834",
        date: "25 Mar 2023",
        productName: "Product N",
        quantityOrdered: 510,
        quantityProduced: 500,
        status: "In Production",
        productionLine: "Line 1",
        machineUsed: "Machine N",
        supervisor: "Robert White",
        shift: "Day",
    },
    {
        id: "fb4a5f29",
        date: "26 Mar 2023",
        productName: "Product O",
        quantityOrdered: 640,
        quantityProduced: 600,
        status: "Completed",
        productionLine: "Line 2",
        machineUsed: "Machine O",
        supervisor: "Emily Davis",
        shift: "Night",
    },
    {
        id: "0c1f2d38",
        date: "27 Mar 2023",
        productName: "Product P",
        quantityOrdered: 550,
        quantityProduced: 540,
        status: "In Production",
        productionLine: "Line 3",
        machineUsed: "Machine P",
        supervisor: "Jane Smith",
        shift: "Day",
    },
    {
        id: "12bfe67a",
        date: "28 Mar 2023",
        productName: "Product Q",
        quantityOrdered: 300,
        quantityProduced: 280,
        status: "Completed",
        productionLine: "Line 4",
        machineUsed: "Machine Q",
        supervisor: "Michael Johnson",
        shift: "Night",
    },
    {
        id: "23d7a2b5",
        date: "29 Mar 2023",
        productName: "Product R",
        quantityOrdered: 430,
        quantityProduced: 400,
        status: "Quality Check",
        productionLine: "Line 1",
        machineUsed: "Machine R",
        supervisor: "David Thompson",
        shift: "Day",
    },
    {
        id: "3489bf6d",
        date: "30 Mar 2023",
        productName: "Product S",
        quantityOrdered: 520,
        quantityProduced: 510,
        status: "In Production",
        productionLine: "Line 2",
        machineUsed: "Machine S",
        supervisor: "Chris Johnson",
        shift: "Night",
    },
    {
        id: "451ea93f",
        date: "31 Mar 2023",
        productName: "Product T",
        quantityOrdered: 480,
        quantityProduced: 470,
        status: "Completed",
        productionLine: "Line 3",
        machineUsed: "Machine T",
        supervisor: "Olivia Brown",
        shift: "Day",
    },
];

const ManufacturerDashboard = () => {
    return (
        <div className={styles["container"]}>
        <ManufacturerAsideNav />
        <div className={styles["right_panel"]}>
            <AuthenticatedTopBar />
            <div className=" px-4">
            <h3 className={styles["header"]}>Overview</h3>
            <div className=" flex items-center justify-between gap-x-4">
                <div className={`${styles["card"]} w-[33.3%]`}>
                <p className={styles["card_Text"]}>Total Units Produced</p>
                <div className={styles["price_Chart"]}>
                    <div className={styles["unit"]}>830Units</div>
                    <div>
                    <Chart5 />
                    </div>
                </div>
                <div className={styles["metricContainer"]}>
                    <div className=" flex items-center gap-x-1">
                    <div className={styles["arrowIcon"]}>
                        <ArrowDropUpIcon sx={{ fontSize: "25px" }} />
                    </div>
                    <div
                        className={`${styles["percentage"]} ${styles["success"]}`}
                    >
                        +37%
                        <span className={styles["tooltip"]}>
                        (Efficiency improved by 37%)
                        </span>
                    </div>
                    </div>
                    <div className={styles["metricTimePeriod"]}>
                    Compared to last week
                    </div>
                </div>
                </div>
                {/*  */}
                <div className={`${styles["card"]} w-[33.3%]`}>
                <p className={styles["card_Text"]}>Average Production Rate</p>
                <div className={styles["price_Chart"]}>
                    <div className={styles["unit"]}>250Units/hr</div>
                    <div>
                    <Chart6 />
                    </div>
                </div>
                <div className="metricContainer">
                    <div className=" flex items-center gap-x-1">
                    <div className={styles["arrowIcon"]}>
                        <ArrowDropDownIcon
                        sx={{ fontSize: "25px", color: "#FF3333" }}
                        />
                    </div>
                    <div
                        className={`${styles["percentage"]} ${styles["danger"]}`}
                    >
                        -29%
                        <span className={styles["tooltip"]}>
                        (Production decreased by 29%)
                        </span>
                    </div>
                    </div>
                    <div className={styles["metricTimePeriod"]}>
                    From previous week
                    </div>
                </div>
                </div>
                {/*  */}
                <div className={`${styles["card"]} w-[33.3%]`}>
                <p className={styles["card_Text"]}>Production Time (hrs)</p>
                <div className={styles["price_Chart"]}>
                    <div className={styles["unit"]}>20hrs</div>
                    <div>
                    <Chart7 />
                    </div>
                </div>
                <div className="metricContainer">
                    <div className="flex items-center gap-x-1">
                    <div className={styles["arrowIcon"]}>
                        <ArrowDropUpIcon sx={{ fontSize: "25px" }} />
                    </div>
                    <div
                        className={`${styles["percentage"]} ${styles["success"]}`}
                    >
                        +57%
                        <span className={styles["tooltip"]}>
                        (Improved production efficiency)
                        </span>
                    </div>
                    </div>
                    <div className={styles["metricTimePeriod"]}>
                    this week vs last week
                    </div>
                </div>
                </div>
            </div>

            <div className={styles["charts"]}>
                <div className={styles["chart1"]}>
                <div className={styles["chart1_Heading"]}>
                    <h3>Inventory Overview</h3>
                    <div className={styles["chart1_Toggle"]}>
                    <p>Monthly</p>
                    <ArrowDropDownIcon />
                    </div>
                </div>
                {/* Chart1 */}
                <InventoryOverview />
                </div>
                <div className={styles["chart2"]}>
                <RadialChart2 />
                </div>
            </div>

            <div className={styles["tableContainer"]}>
                <Table
                    columns={columns}
                    data={data}
                    columnColor="#16962B"
                />
            </div>
            </div>
        </div>
        </div>
    );
};

export default ManufacturerDashboard;
