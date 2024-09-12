import React from 'react'
import { Header, HeroSection, BestSell, OurProduct, ForYou, Footer, FeedBack } from '@/components'

export const HomePage = () => {

    return (
        <main>
            <section className='flex flex-col justify-evenly bg-primaryBackground h-screen'>
                <Header />
                <HeroSection />
            </section>
            <BestSell />
            <OurProduct />
            <ForYou />
            <FeedBack />
            <Footer />
        </main>
    )
}