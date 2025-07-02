import React from 'react'

function Header({heading, description, className}) {
  return (
    <div className={`flex justify-center items-left flex-col text-white ${className}`}>
        <h1 className='text-6xl font-black text-white font-spaace-grotesk'>{heading}</h1>
        <p className='text-m text-white font-space-grotesk'>{description}</p>
    </div>
  )
}

export default Header