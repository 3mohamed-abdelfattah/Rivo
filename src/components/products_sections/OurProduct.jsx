import React from 'react'
import { Star } from '@/utils/icons.util'

//Photos
import OurProduct1 from '@/assets/img/products/ourproduct1.png'
import OurProduct2 from '@/assets/img/products/ourproduct2.png'
import OurProduct3 from '@/assets/img/products/ourproduct3.png'
import OurProduct4 from '@/assets/img/products/ourproduct4.png'
import OurProduct5 from '@/assets/img/products/ourproduct5.png'
import OurProduct6 from '@/assets/img/products/ourproduct6.png'
import OurProduct7 from '@/assets/img/products/ourproduct7.png'
import OurProduct8 from '@/assets/img/products/ourproduct8.png'
import Sale from '@/assets/img/SalePhoto.png'

export const OurProduct = () => {

    const styles = {
        testStyle: 'flex flex-row items-center gap-5 text-base md:text-xl font-medium',
        headStyle: 'text-base md:text-xl font-semibold',
        transitionStyle: 'flex flex-col items-center gap-2 hover:scale-105 cursor-pointer',
        hoverStyle: 'hover:scale-105 hover:underline hover:decoration-4 hover:underline-offset-8 cursor-pointer hover:text-primaryText'
    }

    return (
        <main className='mt-16 m-5'>

            {/* HeadText */}
            <div className='flex flex-col justify-center items-center gap-16'>
                <p className='text-primaryText text-4xl sm:text-5xl text-center font-bold font-[RobotoSlab]'>Our Products</p>

                <div>
                    <ul className='flex flex-col sm:flex-row text-center justify-center gap-5 sm:gap-20 md:gap-32 text-[#454545] text-base md:text-2xl font-medium'>
                        <li className={styles.hoverStyle}>SALE</li>
                        <li className={`${styles.hoverStyle} text-primaryText underline decoration-4 underline-offset-8`}>HOT</li>
                        <li className={styles.hoverStyle}>NEW ARRIVALS</li>
                        <li className={styles.hoverStyle}>ACCESSORIES</li>
                    </ul>
                </div>

                {/* Products Section 1 */}
                <div className='flex flex-col sm:flex-row justify-evenly gap-10'>
                    <div className={styles.transitionStyle}>
                        <img src={OurProduct1} />
                        <p className={styles.headStyle}>Regular Fit Long Sleeve Top</p>
                        <p className={styles.testStyle}>$38.99<span className='text-[#454545] font-thin'>|</span><span className='flex'>5.0 <Star /></span></p>
                    </div>
                    <div className={styles.transitionStyle}>
                        <img src={OurProduct2} />
                        <p className={styles.headStyle}>Black Crop Tailored Jacket</p>
                        <p className={styles.testStyle}>$62.99<span className='text-[#454545] font-thin'>|</span><span className='flex'>4.9 <Star /></span></p>
                    </div>
                    <div className={styles.transitionStyle}>
                        <img src={OurProduct3} />
                        <p className={styles.headStyle}>Textured Sunset Shirt</p>
                        <p className={styles.testStyle}>$49.99<span className='text-[#454545] font-thin'>|</span><span className='flex'>5.0 <Star /></span></p>
                    </div>
                    <div className='md:flex hidden flex-col items-center gap-2 hover:scale-105 cursor-pointer'>
                        <img src={OurProduct4} />
                        <p className='font-semibold'>Textured Sunset Shirt</p>
                        <p className='flex flex-row items-center gap-5 text-xl font-medium'>$49.99<span className='text-[#454545] font-thin'>|</span><span className='flex'>5.0 <Star /></span></p>
                    </div>
                </div>

                {/* Products Section 2 */}
                <div className='flex flex-col sm:flex-row justify-evenly gap-10'>
                    <div className={styles.transitionStyle}>
                        <img src={OurProduct5} />
                        <p className={styles.headStyle}>Regular Fit Long Sleeve Top</p>
                        <p className={styles.testStyle}>$38.99<span className='text-[#454545] font-thin'>|</span><span className='flex'>5.0 <Star /></span></p>
                    </div>
                    <div className={styles.transitionStyle}>
                        <img src={OurProduct6} />
                        <p className={styles.headStyle}>Black Crop Tailored Jacket</p>
                        <p className={styles.testStyle}>$62.99<span className='text-[#454545] font-thin'>|</span><span className='flex'>4.9 <Star /></span></p>
                    </div>
                    <div className={styles.transitionStyle}>
                        <img src={OurProduct7} />
                        <p className={styles.headStyle}>Textured Sunset Shirt</p>
                        <p className={styles.testStyle}>$49.99<span className='text-[#454545] font-thin'>|</span><span className='flex'>5.0 <Star /></span></p>
                    </div>
                    <div className='md:flex hidden flex-col items-center gap-2 hover:scale-105 cursor-pointer'>
                        <img src={OurProduct8} />
                        <p className='text-xl font-semibold'>Textured Sunset Shirt</p>
                        <p className='flex flex-row items-center gap-5 text-xl font-medium'>$49.99<span className='text-[#454545] font-thin'>|</span><span className='flex'>5.0 <Star /></span></p>
                    </div>
                </div>

                <div className='my-10'>
                    <img src={Sale} />
                </div>

            </div>
        </main>
    )
}