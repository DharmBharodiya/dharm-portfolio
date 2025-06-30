import React from 'react'

function ThemeBtn() {
  return (
    <div className='h-full inline-block'>
        <button className='cursor-pointer' onClick={() => console.log("clicked")}>
            <div className='bg-white/30 text-white w-[40px] h-[40px] flex items-center justify-center rounded-full leading-2'>
                
                    <img src="../public/images/day.png" alt="day" className='h-[25px] w-[25px]' />
            </div>
        </button>
    </div>
  )
}

export default ThemeBtn