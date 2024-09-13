import React from 'react'
import { Quote, ToLeft, ToRight } from '@/utils/icons.util';

export const FeedBack = () => {

    const styles = {
        testStyle: 'text-2xl text-primaryText font-semibold font-[RobotoSerif] mb-4',
    }

    return (
        <main className='my-20 mx-5'>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-primaryText text-center text-2xl sm:text-4xl md:text-6xl font-bold font-[RobotoSlab] p-5'>Feedback Corner</p>

                {/* FeedBacks */}
                <div className='flex flex-col sm:flex-row justify-evenly gap-10 my-4 sm:my-16'>
                    <div className='flex relative flex-col items-left max-w-[430px] shadow-lg rounded px-10 min-h-64 hover:scale-105 cursor-pointer'>
                        <p className={styles.testStyle}>
                            <Quote />
                            Emily Wilson
                        </p>
                        <p className='text-sm sm:text-base text-[#6F6F6F] p-2 font-medium'>The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!</p>
                    </div>
                    <div className='flex relative flex-col items-left max-w-[430px] shadow-lg rounded bg-primaryBackground px-10 min-h-64 hover:scale-105 cursor-pointer'>
                        <p className={styles.testStyle}>
                            <Quote />
                            Sarah Thompson
                        </p>
                        <p className='text-sm sm:text-base text-primaryText p-2 font-medium'>I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!</p>
                    </div>
                    <div className='md:flex hidden relative flex-col items-left max-w-[430px] shadow-lg rounded px-10 min-h-64 hover:scale-105 cursor-pointer'>
                        <p className={styles.testStyle}>
                            <Quote />
                            Olivia Martinez
                        </p>
                        <p className='text-base text-[#6F6F6F] p-2 font-medium'>I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!</p>
                    </div>
                </div>

                {/* Scroll Button */}
                <span className='flex'>
                    <ToLeft />
                    <ToRight />
                </span>

            </div>
        </main>
    )
}