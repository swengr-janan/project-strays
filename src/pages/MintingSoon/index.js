import { useState } from 'react'
import toast from 'react-hot-toast'
import { Discord, Twitter } from '../../icons'
import './style.css'

const MintingSoon = () => {
  const [email, setEmail] = useState({
    email: '',
  })

  const [isSending, setIsSending] = useState(false)

  const submit = async () => {
    setIsSending(true)
    await fetch(`https://api.strays.dog/v1/email?key=${process.env.REACT_APP_API_KEY}`, {
      method: 'POST',
      body: JSON.stringify(email),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setEmail({ email: '' })
        setIsSending(false)
        toast(json.message, {
          position: 'top-right',
          icon: json.success ? '✅' : '❌',
        })
      })
      .catch(() => {
        toast('Something went wrong. Please try again later.', {
          position: 'top-right',
          icon: '❌',
        })
      })
  }

  return (
    <div id="MintingSoon" className="p-5">
      <div className="flex justify-center logo-wrapper">
        <img src="images/logo.webp" alt="Project Stray Logo" className="logo" />
      </div>
      <div className="minting-soon-content flex flex-col justify-center items-center text-center">
        <h1 className="py-5 leading-none sm:text-8xl lg:text-9xl">MINTING SOON</h1>
        <p className="py-5 sm:text-3xl lg:text-4xl">
          3,333 free-ranging urban dogs in the city. Join us as we rescue and show them some love.
        </p>
      </div>
      <div className="form-wrapper flex justify-center pt-4 sm:w-full md:w-128">
        <div>
          <input value={email.email} onChange={(e) => setEmail({ email: e.target.value })} className="sm:text-base md:text-2xl" type="email" placeholder="Please enter your email address" required />
          <button onClick={submit} className="sm:text-xl md:text-2xl" type="submit" disabled={isSending}>{isSending ? 'Sending...' : 'Notify Me'}</button>
        </div>
      </div>
      <div className="socials flex justify-center items-center gap-5 mt-8">
        {/* Discord */}
        <a href="https://discord.gg/t3stBfrT" target="_blank" rel="noreferrer">
          <Discord className="fill-gray-dark" />
        </a>

        {/* Twitter */}
        <a href="https://twitter.com/ProjectStrays" target="_blank" rel="noreferrer">
          <Twitter className="fill-gray-dark" />
        </a>
      </div>
    </div>
  )
}

export default MintingSoon
