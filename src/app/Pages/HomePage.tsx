import React from 'react'
import HeroSection from '../components/Sections/HeroSection'
import Header from '../components/Header'
import ProgramSection from '../components/Sections/ProgramSection'
import AboutSection from '../components/Sections/AboutSection'

function HomePage() {
  return (
    <>
    <Header/>
      <HeroSection/>
      <ProgramSection/>
      <AboutSection/>
    </>
  )
}

export default HomePage
