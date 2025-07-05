import React from 'react'
import FloatingDock from '../components/FloatingDock/Dock'
import CustomCursor from '../components/CustomCursor'

function PageNotFound() {
  return (
    <div>
      <CustomCursor/>
      <div className='w-full h-full flex flex-col items-center justify-center text-black dark:text-white'>
        <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold'>OH GOD! CANNOT FIND THE PAGE</h1>
        <p className='text-xl sm:text-2xl'>maybe have a sip or something till you reach your destination</p>
      </div>
      <FloatingDock/>
    </div>
  )
}

export default PageNotFound