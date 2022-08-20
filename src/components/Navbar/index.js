import logo from '../../images/strays-logo-white.png'
import { Discord, Twitter } from '../../icons'

const Navbar = () => (
  <nav className="py-4 px-6 text-sm text-white">
    <div className="flex">
      <div className="flex-none text-gray-light">
        <img src={logo} alt="Strays Logo" width="50" height="50" />
      </div>
      <div className="flex flex-auto">
        <ul className="flex flex-auto justify-end px-4">
          <li className="text-gray-light p-4 text-xl">
            <a href="#mint">
              MINT
            </a>
          </li>
          <li className="text-gray-light p-4 text-xl">
            <a href="#roadmap">
              ROADMAP
            </a>
          </li>
          <li className="text-gray-light p-4 text-xl">
            <a href="#faqs">
              FAQs
            </a>
          </li>
          <li className="text-gray-light p-4 text-xl">
            <a href="#team">
              TEAM
            </a>
          </li>
        </ul>
        <div className="flex-none flex items-center">
          <div className="flex-none text-gray-light">
            <Twitter className="fill-gray-light mx-2" />
          </div>
          <div className="flex-none">
            <Discord className="fill-gray-light mx-2" />
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
