import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './Component/NavBar'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Section1 from './Component/Section1'
import Services from './Component/Services'
import StayInTouch from './Component/StayInTouch'
import Footer from './Component/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <BrowserRouter>
      <NavBar/>
      <Section1/>
      <Services/>
      <StayInTouch/>
      <Footer/>
      </BrowserRouter>
    </Fragment>
    
  )
}

export default App
