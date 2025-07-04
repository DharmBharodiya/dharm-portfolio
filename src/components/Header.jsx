import { motion } from "framer-motion"

function Header({heading, description, className}) {
  return (
    <div className={`flex flex-col ${className}`}>
        <motion.h1
        initial={{y:100}}
        animate={{y:0}}
        transition={{duration: .1}}
        className='text-5xl sm:text-6xl font-black text-black dark:text-white font-space-grotesk selection:bg-green-400 overflow-hidden selection:text-black'>
          {heading}
        </motion.h1>
        <p className='text-xs pr-5 w-full sm:text-lg dark:text-white text-black font-space-grotesk selection:bg-pink-400 selection:text-black'>{description}</p>
    </div>
  )
}

export default Header