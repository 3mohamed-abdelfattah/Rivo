import React from 'react'
import { Header, HeroSection, BestSell, OurProduct, Footer } from '@/components'
import { ForYou } from '../../components'

export const HomePage = () => {

    return (
        <main>
            <Header />
            <HeroSection />
            <BestSell />
            <OurProduct />
            <ForYou />
            <Footer />
        </main>
    )
}