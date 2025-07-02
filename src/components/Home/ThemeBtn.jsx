import React from 'react'
import { useTheme } from '../../ThemeContext'
import { Sun, Moon } from 'lucide-react'

function ThemeBtn() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className='h-full inline-block'>
        <button 
          className='cursor-pointer group' 
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
            <div className='bg-white/30 hover:bg-white/40 text-white w-[40px] h-[40px] flex items-center justify-center rounded-full leading-2 transition-all duration-200 group-hover:scale-105'>
                {theme === 'dark' ? (
                  <Sun className='h-[20px] w-[20px] text-yellow-300' />
                ) : (
                  <Moon className='h-[20px] w-[20px] text-blue-300' />
                )}
            </div>
        </button>
    </div>
  )
}

export default ThemeBtn