import React from 'react'
import { Star } from '@/utils/icons.util'

//Photos
import Product1 from '@/assets/img/products/product1.png'
import Product2 from '@/assets/img/products/product2.png'
import Product3 from '@/assets/img/products/product3.png'

export const BestSell = () => {

    const styles = {
        testStyle: 'flex flex-row items-center gap-5 text-base md:text-xl font-medium',
        headStyle: 'text-base md:text-xl font-semibold',
        transitionStyle: 'flex flex-col items-center gap-2 hover:scale-105 cursor-pointer'
    }

    return (
        <main className='mt-16 mx-5'>

            {/* HeadText */}
            <div className='flex flex-col justify-center items-center'>
                <p className='text-primaryText text-center text-4xl sm:text-6xl font-bold font-[RobotoSlab] pt-5'>Best Selling</p>
                <p className='text-primaryText sm:text-xl text-center font-medium p-5 sm:p-16'>Get in on the trend with our curated selection of best-selling styles.</p>

                {/* Products */}
                <div className='flex flex-col sm:flex-row justify-evenly gap-10'>
                    <div className={styles.transitionStyle}>
                        <img src={Product1} />
                        <p className={styles.headStyle}>Regular Fit Long Sleeve Top</p>
                        <p className={styles.testStyle}>$38.99<span className='text-[#454545] font-thin'>|</span><span className='flex'>5.0 <Star /></span></p>
                    </div>
                    <div className={styles.transitionStyle}>
                        <img src={Product2} />
                        <p className={styles.headStyle}>Black Crop Tailored Jacket</p>
                        <p className={styles.testStyle}>$62.99<span className='text-[#454545] font-thin'>|</span><span className='flex'>4.9 <Star /></span></p>
                    </div>
                    <div className={styles.transitionStyle}>
                        <img src={Product3} />
                        <p className={styles.headStyle}>Textured Sunset Shirt</p>
                        <p className={styles.testStyle}>$49.99<span className='text-[#454545] font-thin'>|</span><span className='flex'>5.0 <Star /></span></p>
                    </div>
                </div>

                <button className='border-2 my-14 border-primaryText px-11 py-3 text-xl font-semibold hover:bg-primaryText hover:text-white rounded'>See all →</button>
            </div>
        </main>
    )
}