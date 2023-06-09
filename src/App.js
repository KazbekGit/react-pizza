import React, { useState } from 'react'
import './scss/app.scss'
import Header from './components/Header'
import Home from './components/pages/Home'
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/pages/NotFound'
import Cart from './components/pages/Cart'
import TestPage from './components/pages/TestPage'

export const SearchContext = React.createContext(null)

function App () {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className='wrapper'>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className='content'>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/test' element={<TestPage />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  )
}

export default App
