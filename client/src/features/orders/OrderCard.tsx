import React from 'react';

export interface OrderCardDetails {
    image: string;
    brand: string;
    product: string;
    quantityAvailable: string | number;
    price: string | number;
}

interface CardProps {
    data: OrderCardDetails[];
}

export const OrderCard: React.FC<CardProps> =({ data })=> {
    return (
        <div className=' flex flex-col gap-y-7 border-b border-b-gray pb-10 w-full'>
            {
                data.map((item, index)=> (
                    <div key={index} className=' flex items-center gap-x-1 w-full'>
                        <img src={item.image} className='w-[6rem] h-[6rem] object-cover' />
                        <div className=' flex flex-col ml-7'>
                            <h4 className=' font-medium'>{item.brand}</h4>
                            <span className=' text-gray flex items-center gap-x-12 mb-auto text-[12px]'>
                                {item.product} <span className=' font-normal'>x{item.quantityAvailable}</span>
                            </span>
                            <p className=' mt-6 text-green-500'>{item.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}