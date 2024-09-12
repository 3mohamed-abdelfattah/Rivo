import React from 'react'
import { Star } from '@/utils/icons.util'

//Photos
import Product1 from '@/assets/img/products/product1.png'
import Product2 from '@/assets/img/products/product2.png'
import Product3 from '@/assets/img/products/product3.png'

export const BestSell = () => {
    return (
        <main className='mt-16'>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-primaryText text-6xl font-bold font-[RobotoSlab] pt-5'>Best Selling</p>
                <p className='text-primaryText text-xl font-medium p-16'>Get in on the trend with our curated selection of best-selling styles.</p>

                {/* Products */}
                <div className='flex flex-row justify-evenly gap-10'>
                    <div className='flex flex-col items-center gap-2 hover:scale-105 cursor-pointer'>
                        <img src={Product1} />
                        <p className='text-xl font-semibold'>Regular Fit Long Sleeve Top</p>
                        <p className='flex flex-row items-center gap-5 text-xl font-medium'>$38.99<span className='text-[#454545] font-thin'>|</span><span className='flex'>5.0 <Star /></span></p>
                    </div>
                    <div className='flex flex-col items-center gap-2 hover:scale-105 cursor-pointer'>
                        <img src={Product2} />
                        <p className='text-xl font-semibold'>Black Crop Tailored Jacket</p>
                        <p className='flex flex-row items-center gap-5 text-xl font-medium'>$62.99<span className='text-[#454545] font-thin'>|</span><span className='flex'>4.9 <Star /></span></p>
                    </div>
                    <div className='flex flex-col items-center gap-2 hover:scale-105 cursor-pointer'>
                        <img src={Product3} />
                        <p className='text-xl font-semibold'>Textured Sunset Shirt</p>
                        <p className='flex flex-row items-center gap-5 text-xl font-medium'>$49.99<span className='text-[#454545] font-thin'>|</span><span className='flex'>5.0 <Star /></span></p>
                    </div>
                </div>

                <button className='border-2 my-14 border-primaryText px-11 py-3 text-xl font-semibold hover:bg-primaryText hover:text-white rounded'>See all →</button>
            </div>
        </main>
    )
}