import { AuthenticatedTopBar } from "../../components/TopBar/AuthenticatedTopBar"
import { CreditCard } from "../../components/Card/CreditCard";
import { Button } from '@mui/material';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import order1 from "../../assets/order-1.png"
import styles from './index.module.css';
import { CurrencyFormatter } from "../../utils/CurrencyFormatter";

const PaymentGateway = ()=> (
    <div>
        <AuthenticatedTopBar />
        <div className={styles['container']}>
            <div className={styles['orderSummary']}>
                <div className='flex items-center justify-between'>
                    <h3 className='text-[#333] font-semibold text-[17px]'>Order Summary</h3>
                    <Button
                        variant='contained'

                        sx={{
                            background: '#4AD461',
                            textTransform: 'capitalize',
                            '&:hover': {
                                background: '#1dc939'
                            }
                        }}
                    >
                        <ArrowBackIosIcon sx={{ fontSize: '14px' }} /> Go back to cart
                    </Button>
                </div>
                {/*  */}
                <div className={styles['orderInfo']}>
                    {/* column headers */}
                    <div className='grid grid-cols-4 gap-4 py-2 text-gray-500 font-semibold text-[15px]'>
                        <div className='text-gray-500 font-semibold text-[15px] col-span-2'>Products</div>
                        <div className='text-gray-500 font-semibold text-[15px]'>Quantity</div>
                        <div className='text-gray-500 font-semibold text-[15px]'>Price</div>
                    </div>
                    {/* scrollable container for order items */}
                    <div className='w-full flex flex-col gap-y-1 max-h-[300px] overflow-y-auto '>
                        <div className='grid grid-cols-4 items-center gap-4 py-3 bg-gray-50 rounded-lg shadow-sm'>
                            <div className='flex items-center gap-2 col-span-2'>
                                <img src={order1} className='w-16 h-16 object-cover rounded-md' />
                                <div className="text-[#333] font-semibold text-[13px]">Macbook Pro</div>
                            </div>
                            <div className="text-[#333] font-semibold text-[13px]">1</div>
                            <div className="text-[#333] font-semibold text-[13px]">{CurrencyFormatter(530000)}</div>
                        </div>
                        {/*  */}
                        <div className='grid grid-cols-4 items-center gap-4 py-3 bg-gray-50 rounded-lg shadow-sm'>
                            <div className='flex items-center gap-2 col-span-2'>
                                <img src={order1} className='w-16 h-16 object-cover rounded-md' />
                                <div className="text-[#333] font-semibold text-[13px]">Macbook Pro</div>
                            </div>
                            <div className="text-[#333] font-semibold text-[13px]">1</div>
                            <div className="text-[#333] font-semibold text-[13px]">{CurrencyFormatter(530000)}</div>
                        </div>
                        <div className='grid grid-cols-4 items-center gap-4 py-3 bg-gray-50 rounded-lg shadow-sm'>
                            <div className='flex items-center gap-2 col-span-2'>
                                <img src={order1} className='w-16 h-16 object-cover rounded-md' />
                                <div className="text-[#333] font-semibold text-[13px]">Macbook Pro</div>
                            </div>
                            <div className="text-[#333] font-semibold text-[13px]">1</div>
                            <div className="text-[#333] font-semibold text-[13px]">{CurrencyFormatter(530000)}</div>
                        </div>
                        
                    </div>
                    <div className="flex justify-center items-center flex-col gap-x-5 mt-5 gap-y-4">
                        <h4 className="text-gray-500 text-[15px] text-capitalize font-medium">total amount payable</h4>
                        <h4 className='text-[#16962B] font-semibold text-[18px] tracking-wide'>
                            {CurrencyFormatter(620000)}
                        </h4>
                    </div>
                </div>
            </div>
            <div className=''>
                {/* <PaymentInputs /> */}
                <CreditCard />
            </div>
        </div>
        {/* Add payment gateway components here */}
    </div>
)

export default PaymentGateway;