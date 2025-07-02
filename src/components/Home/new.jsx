import BentoBox from './BentoBox'
import ThemeBtn from './ThemeBtn'
import { ArrowUpRight } from 'lucide-react'

function MainPara() {

  return (
    <div className='flex justify-center flex-col items-center selection:bg-green-500 selection:text-black'>
        <div className='flex flex-col-reverse sm:flex-row justify-center items-center mb-10 w-full'>
            <div className='flex-1 flex flex-col justify-center items-center sm:items-start sm:ml-10'>
              <h1 className='text-white font-geist font-extrabold text-[60px] sm:text-[70px] mb-0 text-left dark:text-yellow-400'>Dharm<ThemeBtn/></h1>
              <p className='text-white text-[18px] mt-0 text-left selection:bg-pink-500'>Pixels. Purpose. Possibility.</p>
              <p className='text-[#bbbbbb] text-[16px] max-w-xs leading-5 text-center sm:text-left'>i  turn thoughts into threads of code and color—crafting digital spaces where design breathes, interaction dances, and ideas come alive.</p>
            </div>
            <div className='flex-1 flex justify-center sm:mb-0'>
              <img src="../public/images/dhrm1.png" alt="dhrmcharacter" className='w-[165px] h-[165px] sm:w-[200px] sm:h-[200px]' />
            </div>
            {/* <ArrowUpRight size={46} color='white'/> */}
        </div>
        
        <div className='grid grid-cols-6 w-full p-4 gap-2 sm:w-[700px]'>
            <BentoBox
            className='bg-gradient-to-r from-[#020024]/25 via-[#090979]/20 to-[#00D4FF]/30'
            width="col-span-6 sm:col-span-2"
            heading="About"
            description="get to know dharm :) also some cool photographs & artworks"
            flowerClass="absolute -right-1 -top-8  sm:-right-7 sm:-top-8 w-18 h-18 sm:w-22 sm:h-22"
            flowerClass2="hidden"
            thePath="/about"
            />

            <BentoBox
            className='bg-[linear-gradient(90deg,_rgba(26,0,51,0.2)_0%,_rgba(76,29,149,0.25)_50%,_rgba(255,0,150,0.30)_100%)]'
            heading="Projects"
            description="see what dharm makes hehe"
            width="col-span-3 sm:col-span-4"
            flowerClass="absolute hidden sm:block -right-7 top-10 w-15 h-15"
            flowerClass2="hidden"
            />

            <BentoBox
            className='bg-[linear-gradient(90deg,_rgba(51,0,0,0.2)_0%,_rgba(136,0,0,0.25)_50%,_rgba(255,69,0,0.3)_100%)]'
            heading="Blogs"
            description="i do write sometimes"
            width="col-span-3 sm:col-span-4"
            flowerClass="absolute hidden sm:block -left-8 -top-6 w-13 h-13"
            flowerClass2="hidden"
            />

            <BentoBox
            className='bg-[linear-gradient(90deg,_rgba(0,51,51,0.2)_0%,_rgba(0,128,128,0.25)_50%,_rgba(57,255,20,0.3)_100%)]'
            heading="Socials"
            description="where can you find me?"
            width="col-span-6 sm:col-span-2"
            flowerClass="absolute left-65 top-27 w-10 h-10 sm:-left-8 sm:top-30 sm:w-13 sm:h-13"
            flowerClass2="block w-10 h-10 -top-6 left-2 absolute sm:hidden"
            />
        </div>
    </div>
  )
}

export default MainPara