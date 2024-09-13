import React from 'react'

//Photos
import Product1 from '@/assets/img/products/forU1.png'
import Product2 from '@/assets/img/products/forU2.png'
import Product3 from '@/assets/img/products/forU3.png'

export const ForYou = () => {

    const styles = {
        testStyle: 'text-base md:text-xl text-[#373737] font-medium text-center',
        headStyle: 'text-xl md:text-3xl text-primaryText font-semibold',
        transitionStyle: 'flex flex-col items-center gap-2 max-w-[430px] hover:scale-105 cursor-pointer'
    }

    return (
        <main className='my-16 mx-5'>

            {/* HeadText */}
            <div className='flex flex-col justify-center items-center'>
                <p className='text-primaryText text-center text-3xl sm:text-5xl md:text-6xl font-bold font-[RobotoSlab] p-5'>Designer Clothes For You</p>
                <p className='text-primaryText text-base text-center md:text-xl font-medium p-5 mb-8'>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p>

                {/* Products */}
                <div className='flex flex-col sm:flex-row justify-evenly gap-10'>
                    <div className={styles.transitionStyle}>
                        <img src={Product1} />
                        <p className={styles.headStyle}>Accessories</p>
                        <p className={styles.testStyle}>Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.</p>
                    </div>
                    <div className={styles.transitionStyle}>
                        <img src={Product2} />
                        <p className={styles.headStyle}>Dresses</p>
                        <p className={styles.testStyle}>Explore a stunning range of designer dresses, including evening gowns and chic day dresses.</p>
                    </div>
                    <div className={styles.transitionStyle}>
                        <img src={Product3} />
                        <p className={styles.headStyle}>Outerwear</p>
                        <p className={styles.testStyle}>Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.</p>
                    </div>
                </div>

            </div>
        </main>
    )
}