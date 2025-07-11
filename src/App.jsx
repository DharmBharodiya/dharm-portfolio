import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SocialsPage from './pages/SocialsPage'
import GalleryPage from './pages/GalleryPage'
import PageNotFound from './pages/PageNotFound'
import ProjectsPage from './pages/ProjectsPage'


function App() {
  return (
    // <div className='flex flex-col justify-center items-center mt-20'>
    //   <h1 className='text-white bg-black text-center px-7 py-4 text-2xl rounded-[30px] hover:bg-red-500 duration-100 cursor-pointer dark:bg-amber-300 dark:text-black hover:text-white font-geist font-extrabold'>Dharm</h1>
    //   <p className='mt-4 text-lg font-space-grotesk font-light'>Welcome to my portfolio!</p>
    // </div>
  <div className='w-full min-h-screen flex justify-center items-center bg-white dark:bg-[#000] transition-colors duration-300'>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/socials" element={<SocialsPage/>} />
      <Route path="/gallery" element={<GalleryPage/>} />
      <Route path="/projects" element={<ProjectsPage/>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </div>
  )
}

export default App