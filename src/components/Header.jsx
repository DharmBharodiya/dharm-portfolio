import React from 'react'

function Header({heading, description, className}) {
  return (
    <div className={`flex justify-center items-left flex-col text-black dark:text-white ${className}`}>
        <h1 className='text-4xl sm:text-6xl font-black text-black dark:text-white font-spaace-grotesk selection:bg-green-400 selection:text-black'>{heading}</h1>
        <p className='text-xs pr-5 w-full sm:text-lg dark:text-white text-black font-space-grotesk selection:bg-pink-400 selection:text-black'>{description}</p>
    </div>
  )
}

export default Header