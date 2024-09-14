import React from 'react'
import HeadPhoto from '@/assets/img/HeadPhoto.png'
import Dots from '@/assets/img/dots.png'
import { CartIcon } from '@/utils/icons.util';

export const HeroSection = () => {
    return (
        <main>
            <div className='flex flex-col sm:flex-row gap-5 md:gap-10 justify-around mx-5 md:m-16'>

                {/* Left Section */}
                <div className='flex flex-col justify-evenly w-fit 2xl:max-w-[650px]'>
                    <p className='font-bold text-center sm:text-left md:leading-snug text-2xl sm:text-4xl md:text-6xl xl:text-[5rem] text-primaryText font-[Rufina]'>Discover and Find Your Own Fashion!</p>
                    <p className='font-medium text-center sm:text-left text-sm sm:text-lg sm:my-5 md:my-8 md:text-2xl text-secondaryText my-5 sm:leading-10'>Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</p>
                    <span className='flex justify-between items-center'>
                        <button className='max-w-40 sm:max-w-56 md:max-w-72 bg-secondaryBackground text-sm px-2 sm:px-10 py-4 sm:text-xl text-white hover:bg-secondaryText hover: rounded shadow-2xl'>EXPLORE NOW</button>
                        <span className='contents sm:hidden hover:scale-110 cursor-pointer'>
                            <CartIcon />
                        </span>
                    </span>
                </div>

                {/* Right Photo */}
                <div className='relative h-fit'>
                    <div>
                        <img src={HeadPhoto} className='' />
                    </div>
                    <div className='absolute right-0 top-1/4 -z-10 sm:z-10'>
                        <img src={Dots} width={100} />
                    </div>
                    <div className='absolute left-0 bottom-20'>
                        <img src={Dots} width={100} />
                    </div>
                </div>

            </div>
        </main>
    )
}