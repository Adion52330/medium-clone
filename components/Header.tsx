import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            src="https://links.papareact.com/yvf"
            className="w-44 cursor-pointer object-contain"
            alt=""
          />
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="rounded-full bg-green-600 px-4 py-1 text-white">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <h3 className="text-green-600">Sign In</h3>
        <h3 className="rounded-full border-2 border-green-600 px-4 py-1 text-green-600">
          Get Started
        </h3>
      </div>
    </header>
  )
}

export default Header
