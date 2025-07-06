import React from 'react'
import { motion } from 'framer-motion';
import FloatingDock from '../components/FloatingDock/Dock'
import CustomCursor from '../components/CustomCursor'

function PageNotFound() {
  return (
    <div>
      <CustomCursor/>
      <div className='w-full h-full flex flex-col items-center justify-center text-black dark:text-white'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className='text-3xl sm:text-4xl md:text-6xl font-bold'>
            OH GOD! CANNOT FIND THE PAGE
          </motion.h1>
          <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className='text-xl sm:text-2xl'>
            maybe have a sip or something till you reach your destination
          </motion.p>
      </div>
      <FloatingDock/>
    </div>
  )
}

export default PageNotFound