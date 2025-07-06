import { ArrowUpRightIcon, Globe2Icon, CameraIcon, Brush } from "lucide-react"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { useTheme } from "../../ThemeContext"

function Instagram() {
    const {theme} = useTheme()
  return (
    <div className="text-white p-6 bg-[#000] rounded-md relative">
        <motion.img
            src={`${theme === "dark" ? "/images/flowerWhite.png" : "/images/flowerBordered.png"}`}
            alt="flowerwhite"
            className="absolute w-12 h-12 top-1/2 -translate-y-1/2 right-1/2 translate-x-30 sm:w-10 sm:h-10  sm:ml-58"
            animate={{ rotate: 360 }}
            initial={{ rotate: 0 }}
            transition={{
                repeat: Infinity,
                ease: 'linear',
                duration: 8, // 10 seconds for a moderate spin speed
                repeatType: 'loop',}}
      />
        <h1 className="text-xl italic"><span className="text-red-500 text-3xl not-italic font-bold">woohooo</span> <br/> you scrolled till here</h1>
        <h1 className="text-xl font-medium mb-3">check out more on</h1>
        <div className="flex">
            <div className="flex pr-6 group">
                <NavLink to="https://www.instagram.com/dharm_bharodiya" target="_blank">
                    <Brush/>
                </NavLink>
                <ArrowUpRightIcon className="relative -bottom-1 group-hover:bottom-1 group-hover:-right-1 group-hover:cursor-pointer transition-all duration-150"/>
            </div>
            <div className="flex group">
                <NavLink to="https://www.instagram.com/456dharm" target="_blank">
                    <CameraIcon/>
                </NavLink>
                <ArrowUpRightIcon className="relative -bottom-1 group-hover:bottom-1 group-hover:-right-1 group-hover:cursor-pointer transition-all duration-150"/>
            </div>
        </div>
    </div>
  )
}

export default Instagram