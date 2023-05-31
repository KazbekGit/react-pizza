import React from 'react'
import './scss/app.scss'
import Header from './components/Header'
import Home from './components/pages/Home' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/pages/NotFound'
import Cart from './components/pages/Cart'

function App () {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <div className='container'>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
