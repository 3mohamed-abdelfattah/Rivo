import React from 'react'
import { Header, Footer } from '@/components';
import { Link } from 'react-router-dom';

export const SignUpPage = () => {
    return (
        <main>
            <Header value='LOGIN' />
            <div className='flex flex-col justify-center items-center gap-20 my-24'>
                <div className='flex flex-col gap-4 text-center'>
                    <p className='text-primaryText text-5xl'>Welcome To Rivo !</p>
                    <p className='text-primaryText text-3xl'>Let's get to know you..</p>
                </div>
                <form className='flex flex-col gap-10'>
                    <div className='flex flex-row gap-4'>
                        <input
                            className='p-3 border-2 border-secondaryBackground rounded'
                            type="text"
                            id="userName"
                            required
                            placeholder='@user_name'
                            size={20}
                        />
                        <input
                            className='p-3 border-2 border-secondaryBackground rounded'
                            type="email"
                            id="email"
                            required
                            placeholder='example@mail.com'
                            size={30}
                        />
                    </div>
                    <input
                        className='p-3 border-2 border-secondaryBackground rounded'
                        type="password"
                        id="password"
                        required
                        placeholder='Password'
                    />
                    <input
                        className='p-3 border-2 border-secondaryBackground rounded'
                        type="password"
                        id="confirmPassword"
                        required
                        placeholder='Confirm Password'
                    />
                    <div className='flex justify-between items-center'>
                        <p className='text-primaryText text-base underline'>Are you a seller?</p>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                        </label>
                    </div>
                    <button
                        onClick={() => navigate("/")}
                        className='bg-secondaryBackground border-2 border-secondaryBackground px-10 py-4 text-xl text-white hover:bg-white hover:text-primaryText rounded shadow-2xl'
                    >
                        REGISTER →
                    </button>
                </form>
                <p>Already have an account?
                    <Link className='px-2 text-primaryText font-bold underline' to='/login'>
                        Login
                    </Link>
                </p>
            </div>
            <Footer />
        </main>
    )
}