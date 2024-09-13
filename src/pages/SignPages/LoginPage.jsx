import React, { useState } from 'react';
import { Header, Footer } from '@/components';
import { Link, useNavigate } from 'react-router-dom';

export const LoginPage = () => {

    const styles = {
        errorStyle: 'text-red-600',
        inputStyle: 'p-3 border-2 border-secondaryBackground rounded'
    }

    const [data, setData] = useState({
        userName: '',
        password: '',
    });

    const [error, setError] = useState({
        errorUserName: '',
        errorPassword: '',
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://retoolapi.dev/BECzAp/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const users = await response.json();

            const user = users.find(user =>
                user.userName === data.userName && user.password === data.password
            );

            if (user) {
                if (user.role === true) {
                    navigate('/seller_dashboard');
                } else {
                    navigate('/');
                }
            } else {
                setError({
                    ...error,
                    errorUserName: 'Invalid username or password',
                });
            }

        } catch (error) {
            console.error(error);
        }
    };

    const handleData = (e) => {
        const { id, value } = e.target;
        if (id === 'userName') {
            setData({
                ...data,
                userName: value
            });
            setError({
                ...error,
                errorUserName: /\s/.test(value)
                    ? 'Username must be all lowercase'
                    : ''
            });
        } else if (id === 'password') {
            setData({
                ...data,
                password: value
            });
            setError({
                ...error,
                errorPassword: value.length <= 6
                    ? 'Password must be at least 6 characters'
                    : ''
            });
        }
    };

    return (
        <main>
            <Header value='REGISTER' />
            <div className='flex flex-col justify-center items-center gap-20 my-24'>
                <p className='text-primaryText text-3xl sm:text-5xl'>Welcome Back!</p>
                <form className='flex flex-col gap-10' onSubmit={(e) => handleSubmit(e)}>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <input
                            className={styles.inputStyle}
                            type="text"
                            onChange={(e) => { handleData(e); }}
                            value={data.userName}
                            id="userName"
                            required
                            placeholder='@user_name'
                            size={20}
                        />
                        <input
                            className={styles.inputStyle}
                            type="password"
                            id="password"
                            onChange={(e) => { handleData(e); }}
                            value={data.password}
                            required
                            placeholder='Password'
                            size={30}
                        />
                    </div>
                    {(error.errorUserName || error.errorPassword) && (
                        <div>
                            <p className={styles.errorStyle}>{error.errorUserName}</p>
                            <p className={styles.errorStyle}>{error.errorPassword}</p>
                        </div>
                    )}
                    <button
                        disabled={error.errorUserName || error.errorPassword}
                        className='bg-secondaryBackground border-2 border-secondaryBackground px-10 py-4 text-xl text-white hover:bg-white hover:text-primaryText rounded shadow-2xl'
                    >
                        LOGIN →
                    </button>
                </form>
                <p>Didn't have an account?
                    <Link className='px-2 text-primaryText font-bold underline' to='/sign_up'>
                        Register
                    </Link>
                </p>
            </div>
            <Footer />
        </main>
    );
};
