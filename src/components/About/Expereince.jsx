import { useTheme } from "../../ThemeContext";
import ContentBox from "./ContentBox";
import { motion } from "framer-motion";

function Expereince() {
  const { theme } = useTheme();
  return (
    <div className="relative">
      <ContentBox
        heading="Software Intern | OptimumBrew Tech"
        description="2026 | I worked as a Full Stack Developer and Applied AI intern, where I worked on real-world applications using Next.js, React, Node.js, Express, PostgreSQL, and MongoDB. I worked across the frontend and backend, built APIs, worked with databases, debugged issues, and also explored basic AI/LLM applications. 
"
      />
      <ContentBox
        heading="Tech Intern | Tatvasoft"
        description="2025 | Learnt & built a full stack web app, working with .NET, Angular, Posgresql."
      />
      <ContentBox
        heading="Visual Designer | rough.co.in"
        description="2023 | Designed bold, trend-forward apparel and social media content that captured the brand’s raw, streetwear aesthetic."
      />
      {/* <ContentBox
        heading="Designer | Beyond Meds Foundation"
        description="2021 -22 | Developed impactful social media content and visual strategies for key campaigns, enhancing engagement and the NGO’s brand." /> */}
      <motion.img
        src={`${theme === "dark" ? "/images/flowerWhite.png" : "/images/flowerBlack.png"}`}
        alt="flower"
        className="absolute w-10 h-10 sm:w-12 sm:h-12 -top-14 ml-42"
        animate={{ rotate: 360 }}
        initial={{ rotate: 0 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 8, // 10 seconds for a moderate spin speed
          repeatType: "loop",
        }}
      />
    </div>
  );
}

export default Expereince;
