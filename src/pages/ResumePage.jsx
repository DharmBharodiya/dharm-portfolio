import FloatingDock from "../components/FloatingDock/Dock";
import Header from "../components/Header";
import Links from "../components/Socials/Links";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";
import CustomCursor from "../components/CustomCursor";

function ResumePage() {
  const { theme } = useTheme();
  return (
    <div className="ml-5">
      <CustomCursor />
      <motion.img
        src={`${theme === "dark" ? "/images/flowerWhite.png" : "/images/flowerBlack.png"}`}
        alt="flowerwhite"
        className="absolute w-12 h-12 sm:w-14 sm:h-14 ml-52 sm:ml-63"
        animate={{ rotate: 360 }}
        initial={{ rotate: 0 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 8, // 10 seconds for a moderate spin speed
          repeatType: "loop",
        }}
      />
      <Header
        heading="Resume"
        description={`a professional - get to know me`}
        className={
          "w-[250px] sm:w-2xl mb-10 relative"
        } /* Removed margin-left */
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
      >
        <div className="dark:text-white text-2xl text-black leading-6 mt-6 mb-6">
          <h1>
            <span className="relative group text-red-400 cursor-pointer font-medium">
              <a
                href="mailto:dharmbharodiya@gmail.com"
                className="shimmer-text2"
              >
                RESUME UNDER CONSTRUCTION.
              </a>
            </span>
          </h1>
        </div>
      </motion.div>
      <FloatingDock />
    </div>
  );
}

export default ResumePage;
