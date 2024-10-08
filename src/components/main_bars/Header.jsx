import React from 'react'
import { CartIcon, RivoLogo } from '@/utils/icons.util'
import { Link } from 'react-router-dom'

export const Header = (props) => {

    const styles = {
        transitionStyle: 'hover:scale-110 cursor-pointer hover:underline hover:decoration-4 hover:underline-offset-8',
    }

    return (
        <header className='bg-primaryBackground'>
            <div className='flex justify-between items-center pb-10 sm:py-14 p-2 lg:px-24'>

                {/* Logo */}
                <div className='text-primaryText'>
                    <RivoLogo />
                </div>

                {/* Navigation */}
                <div className='hidden sm:contents'>
                    <ul className='flex text-primaryText flex-row text-sm md:text-base lg:text-xl gap-5 lg:gap-10 font-medium'>
                        <Link to='/'>
                            <li className={styles.transitionStyle}>HOME</li>
                        </Link>
                        <Link to='/shop'>
                            <li className={styles.transitionStyle}>SHOP</li>
                        </Link>
                        <li className={styles.transitionStyle}>FEATURES</li>
                        <li className={styles.transitionStyle}>CONTACT</li>
                    </ul>
                </div>

                {/* Login & Cart */}
                <div className='flex sm:flex-row items-center gap-1 md:gap-5 xl:gap-14'>
                    <span className='hidden sm:flex hover:scale-110 cursor-pointer'>
                        <CartIcon />
                    </span>
                    <Link to='/login'>
                        <button className='border-2 border-primaryText px-7 md:px-11 py-2 md:py-3 text-base md:text-xl hover:bg-primaryText hover:text-white rounded'>
                            {props.value ? props.value : "LOGIN"}
                        </button>
                    </Link>
                </div>

            </div>
        </header>
    )
}
