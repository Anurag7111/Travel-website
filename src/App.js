import React from 'react'
import Footer from './component/Footer'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Recommend from './component/Recommend'
// import ScrollToTop from './component/ScrollToTop'
import Services from './component/Services'
import Testimonials from './component/Testimonials'

export default function App() {
  return (
    <>
      {/* <ScrollToTop /> */}
      <Navbar />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials />
      <Footer />
    </>
  )
}
