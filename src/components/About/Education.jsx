import ContentBox from "./ContentBox"
import { motion } from "framer-motion"
import { useTheme } from "../../ThemeContext"

function Education() {
  const {theme} = useTheme()

  return (
    <div className="relative">
      <ContentBox
      heading="A D Patel Insitute of Technology, Anand"
      description="Final year student, purusing B.Tech IT"
      />
      <motion.img
      src={`${theme === "dark" ? "/images/flowerWhite.png" : "/images/flowerBlack.png"}`}
      alt="flowerwhite"
      // right-32 sm:right-88 md:right-165
      className="absolute w-10 h-10 sm:w-12 sm:h-12 -top-14 ml-40"
      animate={{ rotate: 360 }}
          initial={{ rotate: 0 }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 8, // 10 seconds for a moderate spin speed
            repeatType: 'loop',}}
      />
    </div>
  )
}

export default Education