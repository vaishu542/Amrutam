import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Intro from './components/Intro'
import Consultation from './components/Consultation'
import Steps from './components/Steps'
import Experts from './components/Experts'
import Testimonials from './components/Testimonials'
import GetApp from './components/GetApp'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Intro/>
      <Consultation/>
      <Steps/>
      <Testimonials/>
      <Experts/>
      <GetApp/>
      <Footer/>
    </>
  )
}

export default App
