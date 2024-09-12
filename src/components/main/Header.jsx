import React from 'react'
import { CartIcon } from '@/utils/icons.util'
import { RivoLogo } from '../../utils/icons.util'

export const Header = () => {
    return (
        <header>
            <div className='flex justify-between items-center py-14 px-28'>

                {/* Logo */}
                <div className='text-primaryText'>
                    <RivoLogo />
                </div>

                {/* Navigation */}
                <div>
                    <ul className='flex flex-row text-xl gap-12 font-medium'>
                        <li>HOME</li>
                        <li>SHOP</li>
                        <li>FEATURES</li>
                        <li>CONTACT</li>
                    </ul>
                </div>

                {/* Login & Cart */}
                <div className='flex flex-row items-center gap-14'>
                    <CartIcon />
                    <button className='border-2 border-primaryText px-11 py-3 text-xl hover:bg-primaryText hover:text-white rounded'>LOGIN</button>
                </div>

            </div>
        </header>
    )
}