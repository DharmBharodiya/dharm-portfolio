import React from 'react'
import { useTheme } from '../../ThemeContext'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion';

function ThemeBtn() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div
    className='inline-block absolute -top-2'>
        <motion.button
          initial={{y: '-80%', opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duartion: .2, delay: .5}} 
          className='cursor-pointer group' 
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
            <div className='bg-gray-200 dark:bg-white/30 hover:bg-gray-300 dark:hover:bg-white/40 text-white w-[40px] h-[40px] flex items-center justify-center rounded-full leading-2 transition-all duration-200 group-hover:scale-105'>
                {theme === 'dark' ? (
                  <Sun className='h-[20px] w-[20px] text-yellow-300' />
                ) : (
                  <Moon className='h-[20px] w-[20px] text-blue-500' />
                )}
            </div>
        </motion.button>
    </div>
  )
}

export default ThemeBtn