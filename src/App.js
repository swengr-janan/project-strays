import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Navbar } from './components'
import { MintingSoon } from './pages'

import './App.css'

const App = () => (
  <Router>
    {process.env.REACT_APP_STATUS === 'maintenance'
      ? <MintingSoon />
      : (
        <>
          <Toaster />
          <Navbar />
          <Routes>
            <Route path="/" exact />
          </Routes>
        </>
      )}
  </Router>

)

export default App
