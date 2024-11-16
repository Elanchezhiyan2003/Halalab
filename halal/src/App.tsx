import React from 'react'
import { Button } from './components/ui/button'

import Footer from './components/footer'
import Header from './components/header'

import Home from './components/Home'
import Aboutus from './components/aboutus'


const App = () => {
  return (
    <div>
      <Header/>
    <Home/>
    <Aboutus/>
      <Footer/>
    </div>
  )
}

export default App;