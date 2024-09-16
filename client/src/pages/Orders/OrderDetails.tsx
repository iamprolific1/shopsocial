import { OrdersSideNav } from "../../components/DashboardAsideBar/OrdersNav.tsx";
import { AuthenticatedTopBar } from "../../components/TopBar/AuthenticatedTopBar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button } from "@mui/material";
import styles from './index.module.css'
import { CurrencyFormatter } from '../../utils/CurrencyFormatter';


export const OrderDetails = ()=> {
    return (
        <div>
            <OrdersSideNav />
            <div className={styles['right_Panel']}>
                <AuthenticatedTopBar />
                <div className=' px-4'>
                    <h3 className={styles['header']}>Order Details</h3>
                    {/* Add order details here */}
                    <div className={styles['container']}>
                        <section className={styles['order-info']}>
                            <h2>Order and Account Information</h2>
                            <div className={styles['order-details']}>
                                <div className={styles['order-details-left']}>
                                    <h4 className=" text-gray-400 mt-3 mb-2 font-bold">Order information</h4>
                                    <div className=" flex items-center gap-x-4 mb-2">
                                        <div className=" text-[#333333e5] font-semibold text-[1rem]">Order Date / Time:</div> 
                                        <div className=" text-[#333333c9] font-medium" style={{ fontSize: '15px', textAlign: 'center'}}>13-12-2022, 08:30:59</div> 
                                    </div>
                                    <div className=" flex items-center gap-x-4 mb-2">
                                        <div className=" text-[#333333e5] font-semibold text-[1rem]">Order Status:</div> 
                                        <div className=" text-green-500 font-medium" style={{ fontSize: '15px'}}>Delivered</div> 
                                    </div>
                                    <div className=" flex items-center gap-x-4 mb-2">
                                        <div className=" text-[#333333e5] font-semibold text-[1rem]">Vendor:</div> 
                                        <div className=" text-[#333333c9] font-medium" style={{ fontSize: '15px'}}>Gadget Space</div> 
                                    </div>

                                    <div className=" mt-3">
                                        <Button
                                            variant='contained'
                                            color="success"
                                        >
                                            <LocationOnIcon /> Track My Item
                                        </Button>
                                    </div>
                                </div>
                                <div className={styles['order-details-right']}>
                                    <h4 className=" text-gray-400 mt-3 mb-2 font-bold">Account information</h4>
                                    <div className=" flex items-center gap-x-4 mb-2">
                                        <div className=" text-[#333333e5] font-semibold text-[1rem]">Customer Name:</div> 
                                        <div className=" text-[#333333c9] font-medium" style={{ fontSize: '15px', textAlign: 'center'}}>Cameron Easton</div> 
                                    </div>
                                    <div className=" flex items-center gap-x-4 mb-2">
                                        <div className=" text-[#333333e5] font-semibold text-[1rem]">Email:</div> 
                                        <div className=" text-[#333333c9] font-medium" style={{ fontSize: '15px', textAlign: 'center'}}>Cameron@gmail.com</div> 
                                    </div>
                                    <div className=" flex items-center gap-x-4 mb-2">
                                        <div className=" text-[#333333e5] font-semibold text-[1rem]">Account Type:</div> 
                                        <div className=" text-[#333333c9] font-medium" style={{ fontSize: '15px', textAlign: 'center'}}>Buyer</div> 
                                    </div>
                                </div>
                            </div>

                            <div className={styles['delivery-info']}>
                                <h2>Delivery and shipping information</h2>
                                <div className={styles['delivery-details']}>
                                    <div className={styles['delivery-details-left']}>
                                        <h4 className=" text-gray-400 mt-3 mb-2 font-bold">Billing information</h4>
                                        <div className=" flex items-center gap-x-4 mb-2">
                                            <div className=" text-[#333333e5] font-semibold text-[1rem]">Delivery Method:</div> 
                                            <div className=" text-[#333333c9] font-medium" style={{ fontSize: '15px', textAlign: 'center'}}>Door Delivery</div> 
                                        </div>
                                        <div className=" flex items-center gap-x-4 mb-2">
                                            <div className=" text-[#333333e5] font-semibold text-[1rem]">Billing Address:</div> 
                                            <div className=" text-[#333333c9] font-medium" style={{ fontSize: '15px', textAlign: 'center'}}>Block A, 7 Unity Road, Lagos, Lagos Nigeria</div> 
                                        </div>
                                        <div className=" flex items-center gap-x-4 mb-2">
                                            <div className=" text-[#333333e5] font-semibold text-[1rem]">Contact:</div> 
                                            <div className=" text-[#16962B] font-medium" style={{ fontSize: '15px', textAlign: 'center'}}>+23490934749</div> 
                                        </div>
                                        <span className=" text-gray-400 text-[14px] mt-2 tracking-wide font-medium">Delivery between 15 October and 16 October</span>
                                    </div>

                                    <div className={styles['delivery-details-right']}>
                                        <h4 className=" text-gray-400 mt-3 mb-2 font-bold">Shipping information</h4>
                                        <div className=" flex items-center gap-x-4 mb-2">
                                            <div className=" text-[#333333e5] font-semibold text-[1rem]">Shipping Method:</div> 
                                            <div className=" text-[#333333c9] font-medium" style={{ fontSize: '15px', textAlign: 'center'}}>Free Shipping</div> 
                                        </div>
                                        <div className=" flex items-center gap-x-4 mb-2">
                                            <div className=" text-[#333333e5] font-semibold text-[1rem]">Shipping Address:</div> 
                                            <div className=" text-[#333333c9] font-medium" style={{ fontSize: '15px', textAlign: 'center'}}>Block A, 7 Unity Road, Lagos, Lagos Nigeria</div> 
                                        </div>
                                        <div className=" flex items-center gap-x-4 mb-2">
                                            <div className=" text-[#333333e5] font-semibold text-[1rem]">Shipping Price:</div> 
                                            <div className=" text-[#333333c9] font-medium" style={{ fontSize: '15px', textAlign: 'center'}}>{CurrencyFormatter(0)}</div> 
                                        </div>
                                        <span className=" text-gray-400 text-[14px] mt-2 tracking-wide font-medium">Shipping between 13 October and 15 October</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles['payment-info']}>
                                <h2>Payment Information</h2>
                                <div className={styles['payment-details']}>
                                    <h4 className=" text-gray-400 mt-3 mb-2 font-bold">Payment information</h4>
                                    <div className=" flex items-center gap-x-4 mb-2">
                                        <div className=" text-[#333333e5] font-semibold text-[1rem]">Payment Method:</div> 
                                        <div className=" text-[#333333c9] font-medium" style={{ fontSize: '15px', textAlign: 'center'}}>Pay with card</div> 
                                    </div>
                                    <div className=" flex items-center gap-x-4 mb-2">
                                        <div className=" text-[#333333e5] font-semibold text-[1rem]">Currency:</div> 
                                        <div className=" text-[#16962B] font-medium" style={{ fontSize: '15px', textAlign: 'center'}}>NGN</div> 
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}