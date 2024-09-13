import React from 'react'
import HeadPhoto from '@/assets/img/HeadPhoto.png'
import Dots from '@/assets/img/dots.png'

export const HeroSection = () => {
    return (
        <main>
            <div className='flex flex-row gap-5 md:gap-10 justify-around mx-5 md:m-16'>

                {/* Left Section */}
                <div className='flex flex-col justify-between w-fit 2xl:max-w-[650px]'>
                    <p className='font-bold md:leading-snug text-3xl md:text-6xl xl:text-[5rem] text-primaryText font-[Rufina]'>Discover and Find Your Own Fashion!</p>
                    <p className='font-medium text-sm md:my-5 md:text-2xl xl:text-2xl text-secondaryText leading-10'>Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</p>
                    <button className='max-w-56 md:max-w-72 bg-secondaryBackground px-10 py-4 text-xl text-white hover:bg-secondaryText hover: rounded shadow-2xl'>EXPLORE NOW</button>
                </div>

                {/* Right Photo */}
                <div className='relative h-fit'>
                    <div>
                        <img src={HeadPhoto} className='' />
                    </div>
                    <div className='absolute right-0 top-1/4'>
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