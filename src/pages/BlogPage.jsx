import Header from "../components/Header";
import { motion } from "framer-motion";
import CustomCursor from "../components/CustomCursor";
import FloatingDock from "../components/FloatingDock/Dock";
import { posts } from "../posts-json";
import BlogHeader from "../components/Blog/BlogHeader";

function BlogPage() {
  return (
    <div className="mx-6 mt-8">
      <CustomCursor />

      <div className="">
        <Header
          heading="Blog"
          description={`where i my experiences and learnings`}
          className={"w-[300px] sm:w-xl mb-6 relative"}
        />
      </div>
      <div className="flex flex-col gap-2">
        {posts.map((post, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
          >
            <BlogHeader blog={post} />
          </motion.div>
        ))}
      </div>

      <FloatingDock />
    </div>
  );
}

export default BlogPage;
