import React from 'react'

//Photos
import Product1 from '@/assets/img/products/forU1.png'
import Product2 from '@/assets/img/products/forU2.png'
import Product3 from '@/assets/img/products/forU3.png'

export const ForYou = () => {
    return (
        <main className='my-16'>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-primaryText text-6xl font-bold font-[RobotoSlab] p-5'>Designer Clothes For You</p>
                <p className='text-primaryText text-xl font-medium p-5 mb-8'>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p>

                {/* Products */}
                <div className='flex flex-row justify-evenly gap-10'>
                    <div className='flex flex-col items-center gap-2 max-w-[430px] hover:scale-105 cursor-pointer'>
                        <img src={Product1} />
                        <p className='text-3xl text-primaryText font-semibold'>Accessories</p>
                        <p className='text-xl text-[#373737] font-medium text-center'>Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 max-w-[430px] hover:scale-105 cursor-pointer'>
                        <img src={Product2} />
                        <p className='text-3xl text-primaryText font-semibold'>Dresses</p>
                        <p className='text-xl text-[#373737] font-medium text-center'>Explore a stunning range of designer dresses, including evening gowns and chic day dresses.</p>
                    </div>
                    <div className='flex flex-col items-center gap-2 max-w-[430px] hover:scale-105 cursor-pointer'>
                        <img src={Product3} />
                        <p className='text-3xl text-primaryText font-semibold'>Outerwear</p>
                        <p className='text-xl text-[#373737] font-medium text-center'>Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.</p>
                    </div>
                </div>

            </div>
        </main>
    )
}