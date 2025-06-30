import ThemeBtn from './ThemeBtn'
import { ArrowUpRight } from 'lucide-react'

function MainPara() {
  return (
    <div className='flex justify-center items-center selection:bg-red-500'>
        <div>
            <h1 className='text-white font-geist font-extrabold text-[70px]' md-0>Dharm<ThemeBtn/></h1>
            <p className='text-white text-[18px] mt-0'>Pixels. Purpose. Possibility.</p>
            <p className='text-[#bbbbbb] text-[18px] max-w-xs'>i  turn thoughts into threads of code and color—crafting digital spaces where design breathes, interaction dances, and ideas come alive.</p>
            <ArrowUpRight size={46} color='white'/>
        </div>
        <div>
            <img src="../public/images/dhrm1.png" alt="dhrmcharacter" className='w-[200px] h-[200px]'/>
        </div>
    </div>
  )
}

export default MainPara