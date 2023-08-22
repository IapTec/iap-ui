import React from 'react'
import LPFaq from './sections/faq'
import LPHero from './sections/hero'
import LPNews from './sections/news'
import LPEvent from './sections/event'
import LPHeader from './components/header'
import LPFooter from './components/footer'
import LPPartner from './sections/partner'
import LPPrayerWall from './sections/prayer-wall'

const LandingPage: React.FC = () => {
    return (
        <>
            <LPHeader />
            <LPHero />
            <LPEvent />
            <LPPrayerWall />
            <LPNews />
            <LPPartner />
            <LPFaq />
            <LPFooter />
        </>
    )
}

export default LandingPage
