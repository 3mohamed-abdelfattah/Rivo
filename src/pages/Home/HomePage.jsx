import React from 'react'
import { Header, HeroSection, BestSell, OurProduct, ForYou, Footer, FeedBack } from '@/components'

export const HomePage = () => {

    return (
        <main>
            <section className='flex flex-col md:justify-evenly bg-primaryBackground py-10 md:h-screen'>
                <Header value='LOGIN' />
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