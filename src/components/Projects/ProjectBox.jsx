import { ArrowUpRight } from "lucide-react"
import { useTheme } from "../../ThemeContext"
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"

function ProjectBox({flowerClass, bg, title, description, src}) {

    const {theme} = useTheme()

  return (
    <div
    className={`text-white flex relative rounded-xl px-4 py-2 pb-8 sm:px-6 sm:py-4 sm:pb-12 ${bg} hover:scale-101 transition-all duration-200 hover:z-9999999`}
    >
        <div className="mr-4 sm:mr-20">
            <h1
            className="text-xl sm:text-2xl"
            style={{fontFamily: "New Valley"}}
            >
                {title}
            </h1>
            <p className="text-xs sm:text-sm w-2xs sm:w-md">
                {description}
            </p>
        </div>
        <div className="cursor-pointer hover:translate-x-2 transition-transform duration-200">
            <h1>
                <NavLink to={src} target="_blank">
                    <ArrowUpRight/>
                </NavLink>
            </h1>
        </div>
        <div className={` ${flowerClass} z-9999 `}>
           <motion.img
            src={`${theme === "dark" ? "/images/flowerWhite.png" : "/images/flowerBordered.png"}`}
            alt="flowerwhite"
            animate={{ rotate: 360 }}
            initial={{ rotate: 0 }}
            transition={{
                repeat: Infinity,
                ease: 'linear',
                duration: 8, // 10 seconds for a moderate spin speed
                repeatType: 'loop',}}
      />
        </div>
    </div>
  )
}

export default ProjectBox