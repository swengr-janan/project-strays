import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const closeMobileMenu = () => setClick(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          PROJECT STRAYS
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/mint" className="nav-links" onClick={closeMobileMenu}>
              Mint
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/roadmap" className="nav-links" onClick={closeMobileMenu}>
              Roadmap
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/faq" className="nav-links" onClick={closeMobileMenu}>
              FAQs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/team" className="nav-links" onClick={closeMobileMenu}>
              Team
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
