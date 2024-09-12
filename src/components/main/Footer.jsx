import React from 'react'
import { Facebook, Instagram, RivoLogo, Twitter } from '../../utils/icons.util'

export const Footer = () => {
    return (
        <footer className='bg-secondaryBackground'>
            <div className='flex justify-evenly p-10 items-center'>

                <div className='flex flex-col gap-7 text-white'>
                    <RivoLogo />
                    <p>Social Media</p>
                    <span className='flex gap-8'><Facebook /> <Twitter /> <Instagram /></span>
                </div>

                <div className='flex flex-col gap-3'>
                    <p className='text-xl text-white font-medium font-[RobotoSlab]'>SHOP</p>
                    <p className='text-xl text-[#C2EFD4]'>Products</p>
                    <p className='text-xl text-[#C2EFD4]'>Overview</p>
                    <p className='text-xl text-[#C2EFD4]'>Pricing</p>
                    <p className='text-xl text-[#C2EFD4]'>Releases</p>
                </div>

                <div className='flex flex-col gap-3'>
                    <p className='text-xl text-white font-medium font-[RobotoSlab]'>COMPANY</p>
                    <p className='text-xl text-[#C2EFD4]'>About us</p>
                    <p className='text-xl text-[#C2EFD4]'>Contact</p>
                    <p className='text-xl text-[#C2EFD4]'>News</p>
                    <p className='text-xl text-[#C2EFD4]'>Support</p>
                </div>

                <div className='flex flex-col gap-3'>
                    <p className='text-xl text-white font-medium font-[RobotoSlab]'>STAY UP TO DATE</p>
                    <span className='flex items-center'>
                        <input
                            placeholder='Enter your email'
                            className='relative bg-secondaryBackground border-2 border-[#A3F3BE] p-2 w-80'
                        />
                        <button className='bg-[#A3F3BE] text-xl font-medium p-2'>SUBMIT</button>
                    </span>
                </div>

            </div>
            <span className='flex flex-row p-5 justify-center items-center gap-5'>
                <hr className='border-2 border-[#A3F3BE] w-3/4' />
                <span className='text-white'>Terms</span>
                <span className='text-white'>Privacy</span>
                <span className='text-white'>Cookies</span>
            </span>
        </footer>
    )
}