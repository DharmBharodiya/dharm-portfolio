import FloatingDock from '../components/FloatingDock/Dock'
import Header from '../components/Header'
import Links from '../components/Socials/Links'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'
import CustomCursor from '../components/CustomCursor'

function SocialsPage() {

    const {theme} = useTheme();
    return (
    <div>
        <CustomCursor/>
         <motion.img
            src={`${theme === "dark" ? "/images/flowerWhite.png" : "/images/flowerBlack.png"}`}
            alt="flowerwhite"
            className="absolute w-12 h-12 sm:w-14 sm:h-14 ml-48 sm:ml-58"
            animate={{ rotate: 360 }}
            initial={{ rotate: 0 }}
            transition={{
                repeat: Infinity,
                ease: 'linear',
                duration: 8, // 10 seconds for a moderate spin speed
                repeatType: 'loop',}}
      />
        <Header
            heading="Socials"
            description="Connect with dharm on several internet penthouses that he owns, you could connect or drop a follow for a drink :)🍹"
            className={"w-[250px] sm:w-2xl mb-10 relative" } /* Removed margin-left */
         />
        <Links/>
        <div className='dark:text-white text-2xl text-black leading-6 mt-6'>
            <h1>Email me at <span className='relative group text-red-400 cursor-pointer font-medium'>
                mail.
                <span className='absolute text-sm bg-green-600 text-[#fff] rounded-md px-2 py-1 -left-20 -top-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    dharmbharodiya@gmail.com
                </span>
                </span>
                </h1>
            <h1>Much Love,</h1>
            <h1 className='font-bold w-fit'>
                <span className='relative group'>Dharm
                <span className='absolute -bottom-12 left-0 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-200'>
                    <div className='flex'>
                        <img src="images/kiss.png" alt="kisses" className='w-15 h-15'/>
                    </div>
                </span>
                </span>
            </h1>
        </div>
        <FloatingDock/>
    </div>
  )
}

export default SocialsPage