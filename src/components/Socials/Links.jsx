import { useState } from "react"
import { socials } from "./socials"
import { ArrowUpRight } from "lucide-react"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

function Links() {
  // function to get random color
  const getRandomColor = () => {
    const colors = ["#f87171", "#facc15", "#6ee7b7", "#f472b6", "#fdba74"]; // red, yellow, green, pink, orange
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const [hoverColor, setHoverColor] = useState({}); // index -> color

  const handleMouseEnter = (idx) => {
    setHoverColor((prev) => ({
      ...prev,
      [idx]: getRandomColor(),
    }));
  };

  const handleMouseLeave = (idx) => {
    setHoverColor((prev) => ({
      ...prev,
      [idx]: "", // reset color
    }));
  };

  return (
    <div className="dark:text-white text-black font-space-grotesk">
      {socials.map((social, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.2 }}
        >
          <div
            className={`flex items-center gap-2 pb-2 transition-all duration-100`}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            style={{ color: hoverColor[idx] || "" }}
          >
            <NavLink to={social.link} target="_blank" rel="noopener noreferrer">
              <div className="flex group relative w-fit">
                <social.icon className="w-10 h-10" />
                <ArrowUpRight className="w-7 h-7 relative -bottom-3 right-0 group-hover:bottom-0 group-hover:-right-0.75 transition-all duration-200" />
              </div>
            </NavLink>
            <p className="text-2xl">{social.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Links;
