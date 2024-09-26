import { OrdersSideNav } from "../../components/DashboardAsideBar/OrdersNav.tsx";
import { AuthenticatedTopBar } from "../../components/TopBar/AuthenticatedTopBar";
import { CurrencyFormatter } from "../../utils/CurrencyFormatter.ts";
import { Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DownloadIcon from "@mui/icons-material/Download";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styles from './index.module.css';

const RefundsDetails = ()=> {
    return (
        <div>
            <OrdersSideNav />
            <div className={styles['right_Panel']}>
                <AuthenticatedTopBar />
                <div className="flex px-4 items-center justify-between mb-2">
                    <h3 className={styles['header']}>Refunds</h3>
                    <div className="flex items-center gap-x-4">
                        <Button
                            variant='outlined'

                            sx={{
                                border: '1px solid #16962B',
                                color: '#16962B',
                                '&:hover': {
                                    border: '1px solid #16962B'
                                }
                            }}
                        >
                            filter <ArrowDropDownIcon />
                        </Button>
                        <Button
                            variant='contained'

                            sx={{
                                background: '#16962B',
                                '&:hover': {
                                    background: '#16962B'
                                }
                            }}
                        >
                            Download Info <DownloadIcon />
                        </Button>
                    </div>
                </div>
                <div className={styles['wrapper']}>
                    <section className={styles['refund-info']}>
                        <h2>Order and Account Information</h2>
                        <div className={styles['refund-details']}>
                            <div className={styles['refund-details-left']}>
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
                            <div className={styles['refund-details-right']}>
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
                        <div className="w-full mt-5">
                            <h4 className="text-[#333] font-semibold">Refund Details:</h4>
                            <div className="w-full mt-3 mb-2 p-2">
                                <div className={styles['columns']}>
                                    <div className="text-[#16962B] text-[15px] font-semibold text-center px-1">#OrderID</div>
                                    <div className="text-[#16962B] text-[15px] font-semibold text-center px-1">Item</div>
                                    <div className="text-[#16962B] text-[15px] font-semibold text-center px-1">Price</div>
                                    <div className="text-[#16962B] text-[15px] font-semibold text-center">Status</div>
                                    <div className="text-[#16962B] text-[15px] font-semibold text-center px-1">Subtotal</div>
                                    <div className="text-[#16962B] text-[15px] font-semibold text-center px-1">Tax Percent</div>
                                    <div className="text-[#16962B] text-[15px] font-semibold text-center px-1">Tax Amount</div>
                                    <div className="text-[#16962B] text-[15px] font-semibold text-center px-1">Amount to refund</div>
                                </div>
                                <div className={styles['data']}>
                                    <div className='text-[#333] text-[15px] font-semibold text-center'>#719261</div>
                                    <div className='text-[#333] text-[15px] font-semibold text-center'>Macbook pro</div>
                                    <div className='text-[#333] text-[15px] font-semibold text-center'>{CurrencyFormatter(530000)}</div>
                                    <div className='text-red-500 text-[15px] font-semibold text-center'>Canceled</div>
                                    <div className='text-[#333] text-[15px] font-semibold text-center'>{CurrencyFormatter(530000)}</div>
                                    <div className='text-[#333] text-[15px] font-semibold text-center'>0.0000%</div>
                                    <div className='text-[#333] text-[15px] font-semibold text-center'>{CurrencyFormatter(0)}</div>
                                    <div className='text-[#333] text-[15px] font-semibold text-center'>{CurrencyFormatter(530000)}</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-between px-2 mt-6">
                            <div>

                                <Button
                                    variant='contained'

                                    sx={{
                                        background: '#16962B',
                                        textTransform: 'capitalize',

                                        '&:hover': {
                                            background: '#16962B'
                                        }
                                    }}  
                                >
                                    Proceed to Payment
                                </Button>
                            </div>

                            <div className="flex flex-col gap-y-2 px-2">
                                <div className="flex items-center gap-x-3">
                                    <h5 className="text-[#333] text-[16px] font-semibold">Subtotal:</h5>
                                    <span className="text-gray text-[14px] font-medium">{CurrencyFormatter(530000)}</span>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <h5 className="text-[#333] text-[16px] font-semibold">Shipping & Handling:</h5>
                                    <span className="text-gray text-[14px] font-medium">{CurrencyFormatter(0)}</span>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <h5 className="text-[#333] text-[16px] font-semibold">Tax:</h5>
                                    <span className="text-gray text-[14px] font-medium">{CurrencyFormatter(0)}</span>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <h5 className="text-[#333] text-[16px] font-semibold">Grand Total:</h5>
                                    <span className="text-gray text-[14px] font-medium">{CurrencyFormatter(530000)}</span>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <h5 className="text-[#333] text-[16px] font-semibold">Total Paid:</h5>
                                    <span className="text-gray text-[14px] font-medium">{CurrencyFormatter(530000)}</span>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <h5 className="text-[#333] text-[16px] font-semibold">Total Refunded:</h5>
                                    <span className="text-gray text-[14px] font-medium">{CurrencyFormatter(530000)}</span>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <h5 className="text-[#333] text-[16px] font-semibold">Total Due:</h5>
                                    <span className="text-gray text-[14px] font-medium">{CurrencyFormatter(0)}</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default RefundsDetails;