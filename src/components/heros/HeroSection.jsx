import React from 'react'
import HeadPhoto from '@/assets/img/HeadPhoto.png'
import Dots from '@/assets/img/dots.png'

export const HeroSection = () => {
    return (
        <main>
            <div className='flex flex-row justify-between mx-32'>

                {/* Left Section */}
                <div className='max-w-[650px]'>
                    <p className='font-bold text-[5rem] text-primaryText font-[Rufina]'>Discover and Find Your Own Fashion!</p>
                    <p className='font-medium text-2xl text-secondaryText my-16 leading-10'>Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</p>
                    <button className='bg-secondaryBackground px-10 py-4 text-xl text-white hover:bg-secondaryText hover: rounded shadow-2xl'>EXPLORE NOW</button>
                </div>

                {/* Right Photo */}
                <div className='relative h-fit'>
                    <div className='z-50'>
                        <img src={HeadPhoto} />
                    </div>
                    <div className='absolute right-5 top-1/4 z-10'>
                        <img src={Dots} width={100} />
                    </div>
                    <div className='absolute left-5 bottom-20 z-10'>
                        <img src={Dots} width={100} />
                    </div>
                </div>

            </div>
        </main>
    )
}