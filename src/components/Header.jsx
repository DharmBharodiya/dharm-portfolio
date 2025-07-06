import { motion } from "framer-motion"

function Header({heading, description, className}) {
  return (
    <div className={`flex flex-col ${className}`}>
        <motion.h1
        initial={{x:-100}}
        animate={{x:0}}
        transition={{duration: .4}}
        className='text-5xl sm:text-6xl font-black text-black dark:text-white font-space-grotesk selection:bg-green-400 overflow-hidden selection:text-black'>
          {heading}
        </motion.h1>
        <p className='text-md pr-1 w-full sm:text-md md:text-md dark:text-white text-black font-space-grotesk selection:bg-pink-400 selection:text-black'>{description}</p>
    </div>
  )
}

export default Header