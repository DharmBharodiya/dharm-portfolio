import { motion } from "framer-motion"

function Header({heading, description, className}) {
  return (
    <div className={`flex flex-col ${className}`}>
        <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className='text-5xl sm:text-6xl font-black text-black dark:text-white font-space-grotesk selection:bg-green-400 overflow-hidden selection:text-black'>
          {heading}
        </motion.h1>
        <div className='flex flex-col'>
            {description.split('\n').map((line, index) => (
                <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                className='text-md pr-1 w-full sm:text-md md:text-md dark:text-white text-black font-space-grotesk selection:bg-pink-400 selection:text-black'>
                    {line}
                </motion.p>
            ))}
        </div>
    </div>
  )
}

export default Header