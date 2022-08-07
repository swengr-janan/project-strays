import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { MintingSoon } from './pages'
import './App.css'

const App = () => (
  <Router>
    {process.env.REACT_APP_STATUS === 'maintenance'
      ? <MintingSoon />
      : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" exact />
          </Routes>
        </>
      )}
  </Router>

)

export default App
