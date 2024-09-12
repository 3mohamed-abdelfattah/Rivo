import React from 'react'
import { CartIcon, RivoLogo } from '@/utils/icons.util'
import { Link } from 'react-router-dom'

export const Header = (props) => {
    return (
        <header className='bg-primaryBackground'>
            <div className='flex justify-between items-center py-14 px-28'>

                {/* Logo */}
                <div className='text-primaryText'>
                    <RivoLogo />
                </div>

                {/* Navigation */}
                <div className='hidden lg:contents'>
                    <ul className='flex text-primaryText flex-row text-base xl:text-xl gap-12 font-medium'>
                        <Link to='/'>
                            <li className='hover:scale-110 hover:text-white cursor-pointer'>HOME</li>
                        </Link>
                        <Link to='/shop'>
                            <li className='hover:scale-110 hover:text-white cursor-pointer'>SHOP</li>
                        </Link>
                        <li className='hover:scale-110 hover:text-white cursor-pointer'>FEATURES</li>
                        <li className='hover:scale-110 hover:text-white cursor-pointer'>CONTACT</li>
                    </ul>
                </div>

                {/* Login & Cart */}
                <div className='flex flex-row items-center md:gap-14'>
                    <span className='hover:scale-110 cursor-pointer'>
                        <CartIcon />
                    </span>
                    <Link to='/login'>
                        <button className='border-2 border-primaryText px-7 md:px-11 py-2 md:py-3 text-base md:text-xl hover:bg-primaryText hover:text-white rounded'>{props.value ? props.value : "LOGIN"}</button>
                    </Link>
                </div>

            </div>
        </header>
    )
}