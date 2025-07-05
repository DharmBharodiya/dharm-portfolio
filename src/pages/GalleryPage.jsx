
import CustomCursor from "../components/CustomCursor"
import FloatingDock from "../components/FloatingDock/Dock"
import ActualGallery from "../components/Gallery/ActualGallery"
import Header from "../components/Header"
import { useTheme } from "../ThemeContext"
import { motion } from "framer-motion"

function GalleryPage() {

    const {theme} = useTheme()
  return (
    <div className="mt-4">
        <CustomCursor/>
        <motion.img
            src={`${theme === "dark" ? "/images/flowerWhite.png" : "/images/flowerBlack.png"}`}
            alt="flowerwhite"
            className="absolute w-8 h-8 sm:w-10 sm:h-10 ml-48 sm:ml-58"
            animate={{ rotate: 360 }}
            initial={{ rotate: 0 }}
            transition={{
                repeat: Infinity,
                ease: 'linear',
                duration: 8, // 10 seconds for a moderate spin speed
                repeatType: 'loop',}}
      />
        <Header
        heading="Gallery"
        description="This is what dharm makes and clicks. Some colors, some stills, putting context in every moment."
        className={"w-[250px] sm:w-xl mb-10 relative" }
        />

        <div>
            <ActualGallery/>
        </div>

        <FloatingDock/>
    </div>
  )
}

export default GalleryPage