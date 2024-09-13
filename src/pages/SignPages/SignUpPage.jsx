import React, { useState } from 'react';
import { Header, Footer } from '@/components';
import { Link, useNavigate } from 'react-router-dom';

export const SignUpPage = () => {

    const styles = {
        errorStyle: 'text-red-600',
        inputStyle: 'p-3 border-2 border-secondaryBackground rounded'
    }

    const [data, setData] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        isSeller: false,
    });

    const [error, setError] = useState({
        errorUserName: '',
        errorEmail: '',
        errorPassword: '',
        errorConfirmPassword: '',
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (data.password !== data.confirmPassword) {
            setError({
                ...error,
                errorConfirmPassword: 'Passwords do not match',
            });
            return;
        }

        const userData = {
            userName: data.userName,
            email: data.email,
            password: data.password,
            isSeller: data.isSeller,
        };

        try {
            const response = await fetch('https://retoolapi.dev/BECzAp/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const result = await response.json();
                localStorage.setItem('userId', result.id);
                if (data.isSeller) {
                    navigate('/seller_dashboard');
                } else {
                    navigate('/');
                }
            } else {
                setError({
                    ...error,
                    errorUserName: 'Failed to register',
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setData({
            ...data,
            [id]: type === 'checkbox' ? checked : value,
        });

        if (id === 'password') {
            setError({
                ...error,
                errorPassword: value.length < 6 ? 'Password must be at least 6 characters' : '',
            });
        } else if (id === 'confirmPassword') {
            setError({
                ...error,
                errorConfirmPassword: value !== data.password ? 'Passwords do not match' : '',
            });
        }
    };

    return (
        <main>
            <Header value='REGISTER' />

            <div className='flex flex-col justify-center items-center gap-20 my-24'>
                <div className='flex flex-col gap-4 text-center'>
                    <p className='text-primaryText text-3xl sm:text-5xl'>Welcome To Rivo!</p>
                    <p className='text-primaryText text-lg sm:text-3xl'>Let's get to know you..</p>
                </div>

                <form className='flex flex-col gap-10' onSubmit={handleSubmit}>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <input
                            className={`${styles.inputStyle} sm:w-1/3`}
                            type="text"
                            id="userName"
                            value={data.userName}
                            onChange={handleChange}
                            required
                            placeholder='@user_name'
                        />
                        <input
                            className={`${styles.inputStyle} sm:w-2/3`}
                            type="email"
                            id="email"
                            value={data.email}
                            onChange={handleChange}
                            required
                            placeholder='example@mail.com'
                        />
                    </div>
                    <input
                        className={styles.inputStyle}
                        type="password"
                        id="password"
                        value={data.password}
                        onChange={handleChange}
                        required
                        placeholder='Password'
                    />
                    <input
                        className={styles.inputStyle}
                        type="password"
                        id="confirmPassword"
                        value={data.confirmPassword}
                        onChange={handleChange}
                        required
                        placeholder='Confirm Password'
                    />
                    <div className='flex justify-between items-center'>
                        <p className='text-primaryText text-base underline'>Are you a seller?</p>
                        <label className="switch">
                            <input
                                type="checkbox"
                                id="isSeller"
                                checked={data.isSeller}
                                onChange={handleChange}
                            />
                            <span className="slider round" />
                        </label>
                    </div>
                    {(error.errorUserName || error.errorPassword || error.errorConfirmPassword) && (
                        <div>
                            <p className={styles.errorStyle}>{error.errorUserName}</p>
                            <p className={styles.errorStyle}>{error.errorPassword}</p>
                            <p className={styles.errorStyle}>{error.errorConfirmPassword}</p>
                        </div>
                    )}
                    <button
                        type="submit"
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
    );
};