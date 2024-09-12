import React from 'react'
import { Header } from '@/components'
import { HeroSection } from '@/components/heros/HeroSection'
import { BestSell } from '../../components/best_sell/BestSell'

export const HomePage = () => {

    return (
        <main>
            <Header />
            <HeroSection />
            <BestSell />
        </main>
    )
}