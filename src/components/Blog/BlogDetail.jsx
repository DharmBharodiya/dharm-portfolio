import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Link, NavLink, useParams } from "react-router-dom";
import FloatingDock from "../FloatingDock/Dock";
import { useTheme } from "../../ThemeContext";

const BlogDetail = () => {
  const { slug } = useParams();
  const [markdown, setMarkdown] = useState("");

  const { theme } = useTheme();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const mod = await import(`../../BlogPosts/${slug}.md?raw`);
        setMarkdown(mod.default || mod);
      } catch (error) {
        setMarkdown("# Blog post not found.");
      }
    };
    fetchBlog();
  }, [slug]);

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <div
        className={` ${theme === "light" ? "prose" : "prose prose-invert text-white"} w-[80%] mt-6`}
      >
        <ReactMarkdown>{markdown}</ReactMarkdown>
        <Link
          to="/blog"
          className={`${theme === "light" ? "text-white bg-black" : "text-black bg-white"} px-4 py-1 rounded-md border-0 decoration-0 no-underline`}
        >
          ← Go back
        </Link>
      </div>
      <FloatingDock />
    </div>
  );
};

export default BlogDetail;
