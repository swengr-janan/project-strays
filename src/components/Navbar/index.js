import { BiMenu } from 'react-icons/bi'
import { useState } from 'react'
import logo from '../../images/strays-logo-white.png'
import { Discord, Twitter } from '../../icons'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleNavClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="py-4 px-6 text-sm text-white">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-auto justify-between items-center">
          <div className="flex-none text-gray-light">
            <img src={logo} alt="Strays Logo" width="50" height="50" />
          </div>
          <button
            type="button"
            className="md:hidden text-3xl text-gray-light rounded-md hover:bg-gray hover:text-black"
            onClick={handleNavClick}
          >
            <BiMenu />
          </button>
        </div>
        {/* <div className="md:flex flex-auto hidden"> */}
        <div className={`${!isOpen ? 'hidden' : ''} md:flex flex-auto flex-col bg-gray my-3 rounded-md p-5 md:my-0 md:p-0 md:flex-row md:bg-transparent`}>
          <ul className="flex flex-auto md:flex-row items-center flex-col md:justify-end px-4">
            <li>
              <a
                href="#mint"
                className="text-gray-light px-3 py-1 rounded-md text-xl hover:bg-gray-dark hover:text-gray cursor-pointer"
              >
                MINT
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                className="text-gray-light w-100 px-3 py-1 rounded-md text-xl hover:bg-gray-dark hover:text-gray cursor-pointer"
              >
                ROADMAP
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                className="text-gray-light px-3 py-1 rounded-md text-xl hover:bg-gray-dark hover:text-gray cursor-pointer"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="text-gray-light px-3 py-1 rounded-md text-xl hover:bg-gray-dark hover:text-gray cursor-pointer"
              >
                TEAM
              </a>
            </li>
          </ul>
          <div className="flex md:flex-none items-center flex-auto justify-around">
            <div className="cursor-pointer hover:bg-gray-dark p-2 rounded-md">
              <Twitter className="fill-gray-light mx-2" />
            </div>
            <div className="cursor-pointer hover:bg-gray-dark p-2 rounded-md">
              <Discord className="fill-gray-light mx-2" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
