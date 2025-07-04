import React, { useEffect, useState } from "react";
import navItems from "./navItems"; // This should still return array of { href, label, icon }

const FloatingDock = () => {
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <>
      {/* Spacer div to prevent content from being hidden */}
      <div className="h-24" />

      {/* Fixed dock */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/40 dark:bg-gray-800/30 backdrop-blur-lg rounded-full shadow-lg shadow-black/5 dark:shadow-white/5 border border-gray-200 dark:border-gray-700/50">
          <nav className="flex items-center p-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <a key={index} href={item.href} className="relative group">
                  {/* Tooltip */}
                  <span
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 text-sm 
                                 text-white dark:text-gray-200 bg-gray-800 dark:bg-gray-700 rounded-md 
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    {item.label}
                  </span>

                  {/* Icon Button */}
                  <div
                    className={`
                      p-3 mx-1 rounded-full transition-all duration-300 ease-out
                      hover:bg-gray-100 dark:hover:bg-gray-700/50
                      ${isActive ? "bg-gray-100 dark:bg-gray-700 scale-110" : "hover:scale-110"}
                      group-hover:-translate-y-1
                    `}
                  >
                    <Icon
                      className={`w-5 h-5 transition-colors duration-200
                        ${
                          isActive
                            ? "text-gray-900 dark:text-gray-100"
                            : "text-gray-600 dark:text-gray-400"
                        }
                      `}
                    />
                  </div>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};

export default FloatingDock;
