import { Discord, Twitter } from '../../icons'
import './style.css'

const MintingSoon = () => {
  const submit = () => {
    // eslint-disable-next-line no-console
    console.log('form submit')
  }

  return (
    <div id="MintingSoon" className="p-5">
      <div className="flex justify-center logo-wrapper">
        <img src="images/logo.png" alt="Project Stray Logo" className="logo" />
      </div>
      <div className="minting-soon-content flex flex-col justify-center items-center text-center">
        <h1 className="py-5 leading-none sm:text-8xl lg:text-9xl">MINTING SOON</h1>
        <p className="py-5 sm:text-3xl lg:text-4xl">
          3,333 free-ranging urban dogs in the city. Join us as we rescue and show them some love.
        </p>
      </div>
      <div className="form-wrapper flex justify-center pt-8 sm:w-full md:w-128">
        <form onSubmit={submit}>
          <input className="sm:text-base md:text-2xl" type="email" placeholder="Please enter your email address" required />
          <button className="sm:text-xl md:text-2xl" type="submit">Notify Me</button>
        </form>
      </div>
      <div className="socials flex justify-center items-center gap-5 mt-16">
        {/* Discord */}
        <a href="https://discord.gg/t3stBfrT" target="_blank" rel="noreferrer">
          <Discord />
        </a>

        {/* Twitter */}
        <a href="https://twitter.com/ProjectStrays" target="_blank" rel="noreferrer">
          <Twitter />
        </a>
      </div>
    </div>
  )
}

export default MintingSoon
