/* eslint-disable no-unused-vars */
import React from 'react'
import HeroSection from '../components/homesections/HeroSection'
import NumSection from '../components/homesections/NumSection'
import ServiceSection from '../components/homesections/ServiceSection'
import PortfolioSection from '../components/homesections/PortfolioSection'

const Home = () => {
    return (
        <div className=''>
            <section>
                <HeroSection />
                <NumSection />
                <ServiceSection />
                <PortfolioSection />
            </section>
        </div>
    )
}

export default Home