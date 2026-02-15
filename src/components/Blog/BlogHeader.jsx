import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function BlogHeader({ blog }) {
  const date = blog.date;
  return (
    <div
      className={`text-white flex relative rounded-xl px-4 py-2 pb-2 sm:px-6 sm:py-4 sm:pb-12 ${blog.bg} hover:scale-101 transition-all duration-200 hover:z-9999999`}
    >
      <div className="mr-4 sm:mr-20">
        <h1
          className="text-xl sm:text-2xl font-bold"
          // style={{fontFamily: "New Valley"}}
        >
          {blog.title}
        </h1>
        <p className="text-xs sm:text-sm w-2xs sm:w-md">{blog.excerpt}</p>
        <div className="text-xs flex justify-between items-center mt-2">
          <p>
            <span className="font-semibold">Published:</span>{" "}
            {new Date(date).toDateString()}
          </p>
          <p>{blog.readTime}</p>
        </div>
      </div>
      <div className="cursor-pointer hover:translate-x-2 transition-transform duration-200">
        <h1>
          <NavLink to={`/blog/${blog.slug}`}>
            <ArrowUpRight />
          </NavLink>
        </h1>
      </div>
      {/* <div className={` ${flowerClass} z-9999 `}>
        <motion.img
          src={`${theme === "dark" ? "/images/flowerWhite.png" : "/images/flowerBordered.png"}`}
          alt="flowerwhite"
          animate={{ rotate: 360 }}
          initial={{ rotate: 0 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 8, // 10 seconds for a moderate spin speed
            repeatType: "loop",
          }}
        />
      </div> */}
    </div>
  );
}

export default BlogHeader;
