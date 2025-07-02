import React from 'react'
import MainPara from './components/Home/MainPara'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'


function App() {
  return (
    // <div className='flex flex-col justify-center items-center mt-20'>
    //   <h1 className='text-white bg-black text-center px-7 py-4 text-2xl rounded-[30px] hover:bg-red-500 duration-100 cursor-pointer dark:bg-amber-300 dark:text-black hover:text-white font-geist font-extrabold'>Dharm</h1>
    //   <p className='mt-4 text-lg font-space-grotesk font-light'>Welcome to my portfolio!</p>
    // </div>
  <div className='bg-black w-full min-h-screen flex justify-center items-center'>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
    </Routes>
  </div>
  )
}

export default App