import React from 'react'
import { Header, HeroSection, BestSell, OurProduct, ForYou, Footer, FeedBack } from '@/components'

export const HomePage = () => {

    const styles = {
        sectionStyle: 'flex flex-col md:justify-evenly bg-primaryBackground py-10 md:h-screen',
    }

    return (
        <main>
            <section className={styles.sectionStyle}>
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