import BentoBox from './BentoBox';
import ThemeBtn from './ThemeBtn';
// import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

function MainPara() {
  const text = "Dharm";
  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const images = React.useMemo(() => [
    "images/dhrm1.png",
    "images/dhrm2.png",
    "images/dhrm3.png",
    "images/dhrm5.png",
    "images/dhrm6.png",
    "images/dhrm7.png",
    "images/dhrm10.png",
    "images/dhrm11.png",
    "images/dhrm12.png",
  ], []);

  React.useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);

  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className='flex justify-center flex-col items-center selection:bg-green-500 selection:text-black transition-colors duration-300 mt-3'>
        <div className='flex flex-col-reverse sm:flex-row justify-center items-center mb-2 w-full'>
            <div className='flex-1 flex flex-col justify-center items-center sm:items-start sm:ml-10'>
              <h1 className='dark:text-white relative font-geist font-black sm:!font-light text-[60px] sm:text-[70px] mb-0 text-left transition-all duration-300'>
                {text.split('').map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={textVariants}
                    className="sm:hover:font-black transition-all duration-150 sm:hover:cursor-pointer"
                  >
                    {char}
                  </motion.span>
                ))}
                <ThemeBtn/>
              </h1>
              <motion.p 
              initial={{opacity: 0, y:20}}
              animate={{opacity: 1, y:0}}
              transition={{delay: 0.2}}
              className='shimmer-text text-gray-800 font-bold dark:text-white text-[18px] mt-0 text-left selection:bg-pink-500 transition-colors duration-300'
              >20 y/o | dev. x designer.</motion.p>
              <motion.p
              initial={{opacity: 0, y:20}}
              animate={{opacity: 1, y:0}}
              transition={{delay: 0.3}}
              className='text-gray-600 dark:text-[#bbbbbb] text-[16px] max-w-xs leading-5 text-center sm:text-left transition-colors duration-300'>i  turn thoughts into threads of code and color—crafting digital spaces where design breathes, interaction dances, and ideas come alive.</motion.p>
            </div>
            <div className='flex-1 flex justify-center sm:mb-0'>
              <img src={randomImage} alt="dhrmcharacter" className='w-[165px] h-[165px] sm:w-[200px] sm:h-[200px]' />
            </div>
            {/* <ArrowUpRight size={46} color='white'/> */}
        </div>
        
        <motion.div 
    initial={{opacity: 0, y:20}}
    animate={{opacity: 1, y:0}}
    transition={{duration: 0.2, delay: 0.3}}
        className='grid grid-cols-6 w-full p-4 gap-2 sm:w-[700px]'>
            <BentoBox
            className='bg-[linear-gradient(90deg,_rgba(2,0,36,1)_0%,_rgba(9,9,121,1)_50%,_rgba(0,212,255,1)_100%)] dark:bg-[linear-gradient(90deg,_rgba(2,0,36,0.65)_0%,_rgba(9,9,121,0.60)_50%,_rgba(0,212,255,0.70)_100%)] transition-colors duration-200'
            width="col-span-6 sm:col-span-2"
            heading="About"
            description="get to know dharm :)"
            flowerClass="absolute -right-1 -top-8  sm:-right-7 sm:-top-8 w-18 h-18 sm:w-22 sm:h-22"
            flowerClass2="hidden"
            thePath="/about"
            />

            <BentoBox
            className='bg-[linear-gradient(90deg,_rgba(26,0,51,1)_0%,_rgba(76,29,149,1)_50%,_rgba(255,0,150,1)_100%)] dark:bg-[linear-gradient(90deg,_rgba(26,0,51,0.6)_0%,_rgba(76,29,149,0.65)_50%,_rgba(255,0,150,0.90)_100%)] transition-colors duration-200'
            heading="Projects"
            description="see what dharm makes hehe"
            width="col-span-3 sm:col-span-4"
            flowerClass="absolute hidden sm:block -right-7 top-10 w-15 h-15"
            flowerClass2="hidden"
            thePath="/projects"
            />

            <BentoBox
            className='bg-[linear-gradient(90deg,_rgba(51,0,0,1)_0%,_rgba(136,0,0,1)_50%,_rgba(255,69,0,1)_100%)] dark:bg-[linear-gradient(90deg,_rgba(51,0,0,0.6)_0%,_rgba(136,0,0,0.65)_50%,_rgba(255,69,0,0.70)_100%)] transition-colors duration-200'
            heading="Gallery"
            description="my artworks & photographs"
            width="col-span-3 sm:col-span-4"
            flowerClass="absolute hidden sm:block -left-8 -top-6 w-13 h-13"
            flowerClass2="hidden"
            thePath="/gallery"
            />

            <BentoBox
            className='bg-[linear-gradient(90deg,_rgba(0,51,51,1)_0%,_rgba(0,128,128,1)_50%,_rgba(57,255,20,1)_100%)] dark:bg-[linear-gradient(90deg,_rgba(0,51,51,0.6)_0%,_rgba(0,128,128,0.65)_50%,_rgba(57,255,20,0.70)_100%)] transition-colors duration-200'
            heading="Socials"
            description="where can you find me?"
            width="col-span-6 sm:col-span-2"
            flowerClass="absolute left-65 top-27 w-10 h-10 sm:-left-8 sm:top-30 sm:w-13 sm:h-13"
            flowerClass2="block w-10 h-10 -top-6 left-2 absolute sm:hidden"
            thePath="/socials"
            />
        </motion.div>

        {/* <div>
          <p className='text-white shimmer-text'>&copy; 2025 dhrm.tech</p>
        </div> */}
    </div>
  );
}

export default MainPara;

/* To address the loading delay for the random image:
     1. We used the `useMemo` hook to create the `images` array. This ensures the array is only initialized once and does not change unnecessarily during re-renders.
     2. We used the `useEffect` hook to preload all images in the `images` array. Preloading means creating an `Image` object for each image and setting its `src` property. This caches the images in the browser, so they load instantly when displayed.
     3. The `randomImage` variable selects a random image from the preloaded `images` array using `Math.random`. */