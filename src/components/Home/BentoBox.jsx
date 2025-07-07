import { ArrowUpRight, Repeat } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTheme } from '../../ThemeContext'

function BentoBox({className = "", width, heading, description, flowerClass, flowerClass2, thePath}) {

  const {theme} = useTheme()

  return (
    <div
    className={`${width} ${className} cursor-pointer relative h-35 sm:h-40 rounded-2xl p-4 hover:scale-100 hover:z-10000 transition duration-75`}>
        <Link to={thePath}>
          <h1
          className={`text-white text-2xl sm:text-3xl font-bold group font-space-grotesk`}>
              {heading}
              <ArrowUpRight
              className='w-6 h-6 inline-flex relative group-hover:-top-0.5 group-hover:-right-0.5 transition duration-75 '
              />
          </h1>
          <p className='text-white/80 text-10px sm:text-[15px] break-words font-space-grotesk'>{description}</p>
        </Link>
        <motion.img
          src={`${theme === "dark" ? "/images/flowerWhite.png" : "/images/flowerBordered.png"}`}
          alt="flower"
          className={`${flowerClass} z-1000000`}
          animate={{ rotate: 360 }}
          initial={{ rotate: 0 }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 8, // 10 seconds for a moderate spin speed
            repeatType: 'loop',
          }}
        />
        <motion.img
          src={`${theme === "dark" ? "/images/flowerWhite.png" : "/images/flowerBordered.png"}`}
          alt="flower"
          className={`${flowerClass2} z-1000000`}
          animate={{ rotate: 360 }}
          initial={{ rotate: 0 }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 8, // 10 seconds for a moderate spin speed
            repeatType: 'loop',
          }}
        />
    </div> 
  )
}

export default BentoBox