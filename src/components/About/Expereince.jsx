import { useTheme } from "../../ThemeContext"
import ContentBox from "./ContentBox"
import { motion } from "framer-motion"

function Expereince() {
  const {theme} = useTheme()
  return (
    <div className="relative">
        <ContentBox
        heading="Visual Designer | rough.co.in"
        description="Designed bold, trend-forward apparel and social media content that captured the brand’s raw, streetwear aesthetic." />
        <ContentBox
        heading="Designer | Beyond Meds Foundation"
        description="Developed impactful social media content and visual strategies for key campaigns, enhancing engagement and the NGO’s brand." />
        <motion.img
        src={`${theme === "dark" ? "/images/flowerWhite.png" : "/images/flowerBlack.png"}`}
        alt="flower"
        className="absolute sm:w-12 sm:h-12 w-10 h-10 -top-12 right-35 sm:right-86 sm:-top-15 md:right-164"
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

export default Expereince