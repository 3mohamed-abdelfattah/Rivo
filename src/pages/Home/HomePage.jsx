import React from 'react'
import { Header, HeroSection, BestSell, OurProduct, ForYou, Footer } from '@/components'

export const HomePage = () => {

    return (
        <main>
            <div className=' bg-primaryBackground h-screen'>
                <Header />
                <HeroSection />
            </div>
            <BestSell />
            <OurProduct />
            <ForYou />
            <Footer />
        </main>
    )
}