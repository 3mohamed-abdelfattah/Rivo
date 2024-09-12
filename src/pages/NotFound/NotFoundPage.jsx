import React from 'react'
import { Header, Footer } from '@/components';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <main>
            <Header value='BACK TO HOME →' />
            <div className='flex flex-col justify-center items-center gap-10 h-screen'>
                <p className='text-primaryText text-7xl'>Error 404</p>
                <p className='text-primaryText text-4xl'>Invalid URL...</p>
                <button
                    onClick={() => navigate("/")}
                    className='bg-secondaryBackground px-10 py-4 text-xl text-white hover:bg-secondaryText hover: rounded shadow-2xl'
                >
                    BACK TO HOME →
                </button>
            </div>
            <Footer />
        </main>
    )
}
