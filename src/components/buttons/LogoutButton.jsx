import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const userId = localStorage.getItem('userId');

        if (userId) {
            try {
                const response = await fetch(`https://retoolapi.dev/BECzAp/users/${userId}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    localStorage.removeItem('userId');
                    navigate('/login');
                } else {
                    console.error('Failed to delete');
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            navigate('/login');
        }
    };

    return (
        <button onClick={handleLogout} className='bg-secondaryBackground border-2 border-secondaryBackground px-10 py-4 text-xl text-white hover:bg-white hover:text-primaryText rounded shadow-2xl'>
            LOGOUT →
        </button>
    );
};