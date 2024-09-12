import React from 'react'
import { Header, Footer, LogoutButton } from '@/components';
import { useNavigate } from 'react-router-dom';

export const DashBoard = () => {
    const navigate = useNavigate();
    return (
        <main>
            <Header value='LOGOUT' />
            <div className='flex flex-col justify-center items-center gap-10 h-screen'>
                <p className='text-primaryText text-7xl'>Seller Dashboard</p>
                <p className='text-primaryText text-4xl'>Coming Soon...</p>
                <button
                    onClick={() => navigate("/")}
                    className='bg-secondaryBackground px-10 py-4 text-xl text-white hover:bg-secondaryText hover: rounded shadow-2xl'
                >
                    BACK TO HOME →
                </button>
                <LogoutButton />
            </div>
            <Footer />
        </main>
    )
}
