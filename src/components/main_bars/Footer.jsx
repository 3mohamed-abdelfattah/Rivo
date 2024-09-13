import React from 'react'
import { Facebook, Instagram, RivoLogo, Twitter } from '@/utils/icons.util'

export const Footer = () => {
    return (
        <footer className='flex flex-col justify-between bg-secondaryBackground p-5 gap-12'>
            <div className='flex justify-between md:justify-evenly p-10 items-center'>

                <div className='hidden md:flex flex-col gap-7 text-white'>
                    <RivoLogo />
                    <p>Social Media</p>
                    <span className='flex gap-8 cursor-pointer'><Facebook /> <Twitter /> <Instagram /></span>
                </div>

                <span className='flex flex-col gap-10 w-full'>
                    <div className='flex md:hidden flex-col gap-4 text-white'>
                        <RivoLogo />
                        <p>Social Media</p>
                        <span className='flex gap-8 cursor-pointer'><Facebook /> <Twitter /> <Instagram /></span>
                    </div>
                    <span className='flex flex-row justify-between sm:justify-evenly'>
                        <div className='flex flex-col gap-3'>
                            <p className='text-base lg:text-xl text-white font-medium font-[RobotoSlab]'>SHOP</p>
                            <p className='text-base lg:text-xl hover:scale-110 cursor-pointer hover:text-white text-[#C2EFD4]'>Products</p>
                            <p className='text-base lg:text-xl hover:scale-110 cursor-pointer hover:text-white text-[#C2EFD4]'>Overview</p>
                            <p className='text-base lg:text-xl hover:scale-110 cursor-pointer hover:text-white text-[#C2EFD4]'>Pricing</p>
                            <p className='text-base lg:text-xl hover:scale-110 cursor-pointer hover:text-white text-[#C2EFD4]'>Releases</p>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <p className='text-base lg:text-xl text-white font-medium font-[RobotoSlab]'>COMPANY</p>
                            <p className='text-base lg:text-xl hover:scale-110 cursor-pointer hover:text-white text-[#C2EFD4]'>About us</p>
                            <p className='text-base lg:text-xl hover:scale-110 cursor-pointer hover:text-white text-[#C2EFD4]'>Contact</p>
                            <p className='text-base lg:text-xl hover:scale-110 cursor-pointer hover:text-white text-[#C2EFD4]'>News</p>
                            <p className='text-base lg:text-xl hover:scale-110 cursor-pointer hover:text-white text-[#C2EFD4]'>Support</p>
                        </div>
                    </span>
                    <div className='flex sm:hidden flex-col gap-3'>
                        <p className='text-base lg:text-xl text-white font-medium font-[RobotoSlab]'>STAY UP TO DATE</p>
                        <span className='flex items-center'>
                            <input
                                placeholder='Enter your email'
                                className='relative bg-secondaryBackground border-1 border-[#A3F3BE] p-2 w-36 sm:w-80'
                            />
                            <button className='bg-[#A3F3BE] text-base lg:text-xl font-medium p-2'>SUBMIT</button>
                        </span>
                    </div>
                </span>

                <div className='hidden sm:flex flex-col gap-3'>
                    <p className='text-base lg:text-xl text-white font-medium font-[RobotoSlab]'>STAY UP TO DATE</p>
                    <span className='flex items-center'>
                        <input
                            placeholder='Enter your email'
                            className='relative bg-secondaryBackground border-2 border-[#A3F3BE] p-2 xl:w-80'
                        />
                        <button className='bg-[#A3F3BE] text-base lg:text-xl font-medium p-2'>SUBMIT</button>
                    </span>
                </div>

            </div>
            <span className='flex flex-row p-5 justify-center items-center gap-5'>
                <hr className='border-1 border-[#A3F3BE] w-3/4' />
                <span className='text-white hover:scale-110 cursor-pointer hover:text-secondaryText'>Terms</span>
                <span className='text-white hover:scale-110 cursor-pointer hover:text-secondaryText'>Privacy</span>
                <span className='text-white hover:scale-110 cursor-pointer hover:text-secondaryText'>Cookies</span>
            </span>
        </footer>
    )
}