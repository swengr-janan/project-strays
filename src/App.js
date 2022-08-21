import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Landing, MintingSoon } from './pages'

import './App.css'

const App = () => (
  <Router>
    {process.env.REACT_APP_STATUS === 'maintenance'
      ? (
        <>
          <Toaster />
          <MintingSoon />
        </>
      )
      : (
        <>
          <Toaster />
          <Routes>
            <Route path="/" exact element={<Landing />} />
          </Routes>
        </>
      )}
  </Router>

)

export default App
