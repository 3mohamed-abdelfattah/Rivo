import React from 'react'
import { Header, Footer } from '@/components';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
    return (
        <main>
            <Header value='REGISTER' />
            <div className='flex flex-col justify-center items-center gap-20 my-24'>
                <p className='text-primaryText text-5xl'>Welcome Back!</p>
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
                            type="password"
                            id="password"
                            required
                            placeholder='Password'
                            size={30}
                        />
                    </div>
                    <button
                        onClick={() => navigate("/")}
                        className='bg-secondaryBackground border-2 border-secondaryBackground px-10 py-4 text-xl text-white hover:bg-white hover:text-primaryText rounded shadow-2xl'
                    >
                        LOGIN →
                    </button>
                </form>
                <p>Already have an account?
                    <Link className='px-2 text-primaryText font-bold underline' to='sign_up'>
                        Sign in
                    </Link>
                </p>
            </div>
            <Footer />
        </main>
    )
}
