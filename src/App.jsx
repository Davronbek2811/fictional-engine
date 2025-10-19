import { useState } from 'react'
import './App.css'
import Header from './Header'
import MainOne from './MainOne'
import MainTwo from './MainTwo'
import MainThree from './SpecialDishes'
import MainFor from './Testimonials'
import Service from './Services'
import Footer from './Footer'

function App() {

  return (
    <>
      <Header/>
      <MainOne/>
      <MainTwo/>
      <MainThree/>
      <MainFor/>
      <Service/>
      <Footer/>
    </>
  )
}

export default App
