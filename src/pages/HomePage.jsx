import React from 'react'
import MainPara from '../components/Home/MainPara'
import Footer from '../components/Footer'
// import { useTheme } from '../ThemeContext'

function HomePage() {
  // const {theme} = useTheme();
  return (
    <div className={`w-auto min-h-screen flex flex-col justify-center items-center`}>
        {/* <TestFont/> */}
        <MainPara/>
    </div>
  )
}

export default HomePage