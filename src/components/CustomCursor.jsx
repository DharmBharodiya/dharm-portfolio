import React, { useState, useEffect } from 'react'

function CustomCursor() {

    const [position, setPosition] = useState({x:0, y:0});

    useEffect(() => {
        const move = (e) => {
            setPosition({x: e.clientX, y: e.clientY});
        };
        window.addEventListener("mousemove", move);

        return () => window.removeEventListener("mousemove", move)
    }, [])

  return (
     <div
      className="sm:fixed sm:block hidden top-0 left-0 w-8 h-8 rounded-full bg-amber-300 bg-cover pointer-events-none z-[9999] mix-blend-difference"
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
      }}
    >
        </div>
  )
}

export default CustomCursor