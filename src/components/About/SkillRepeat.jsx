import SubDot from "./SubDot"
import { languages, frameworksAndTools, designTools } from "./Skills"
import { motion } from "framer-motion"
import { useTheme } from "../../ThemeContext"

function SkillRepeat() {
  const {theme} = useTheme()
  return (
    <div className="relative">
        <SubDot items={languages} heading="Languages"/>
        <SubDot items={frameworksAndTools} heading="Frameworks & Tools"/>
        <SubDot items={designTools} heading="Design Tools"/>
        <motion.img
        src={`${theme === "dark" ? "/images/flowerWhite.png" : "/images/flowerBlack.png"}`}
        alt="flowerwhite"
        className="absolute w-6 h-6 sm:w-8 sm:h-8 -top-19 -left-4"
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

export default SkillRepeat