import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Navbar from '../../Components/Header/Header'
import Autoplay from '../../Components/Carousel/Carousel'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Autoplay />
    </div>
  )
}

export default Home