import React, { useEffect, useState } from 'react';
import { Header, Footer } from '@/components';
import { Star } from '@/utils/icons.util';

export const ShopPage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res);
                }
                return res.json();
            })
            .then((data) => {
                setProducts(data);
                console.log(data);
            })
            .catch((err) => console.error('Fetch error: ', err));
    }, []);

    return (
        <main>
            <Header />
            <div className='flex flex-col justify-center items-center gap-16 mt-20'>
                <p className='text-primaryText text-5xl font-bold font-[RobotoSlab]'>Our Products</p>
                {/* Products */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5 m-5'>
                    {products.map((product) => (
                        <div key={product.id} className='flex flex-col m-5 items-center gap-2 hover:scale-105 cursor-pointer shadow-xl rounded'>
                            <img src={product.image} alt={product.title} className='w-full h-64 object-contain' />
                            <p className='text-xl font-semibold text-center'>{product.title}</p>
                            <p className='flex flex-row items-center gap-5 text-xl font-medium'>
                                ${product.price}
                                <span className='text-[#454545] font-thin'>|</span>
                                <span className='flex'>{product.rating?.rate ? product.rating.rate : 'N/A'} <Star /></span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
