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
                <div>
                    <ul className='flex text-primaryText flex-row text-xl gap-12 font-medium'>
                        <li className='hover:scale-110 hover:text-white cursor-pointer'>HOME</li>
                        <li className='hover:scale-110 hover:text-white cursor-pointer'>SHOP</li>
                        <li className='hover:scale-110 hover:text-white cursor-pointer'>FEATURES</li>
                        <li className='hover:scale-110 hover:text-white cursor-pointer'>CONTACT</li>
                    </ul>
                </div>

                {/* Login & Cart */}
                <div className='flex flex-row items-center gap-14'>
                    <span className='hover:scale-110 cursor-pointer'>
                        <CartIcon />
                    </span>
                    <Link to='/login'>
                        <button className='border-2 border-primaryText px-11 py-3 text-xl hover:bg-primaryText hover:text-white rounded'>{props.value}</button>
                    </Link>
                </div>

            </div>
        </header>
    )
}