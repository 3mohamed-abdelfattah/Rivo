import React from 'react'
import { Header, HeroSection, BestSell, OurProduct, ForYou, Footer, FeedBack } from '@/components'

export const HomePage = () => {

    return (
        <main>
            <Header />
            <HeroSection />
            <BestSell />
            <OurProduct />
            <ForYou />
            <FeedBack />
            <Footer />
        </main>
    )
}