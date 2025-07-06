import Timeline from '../components/About/TimeLine'
import Header from '../components/Header'
import SkillRepeat from '../components/About/SkillRepeat'
import Education from '../components/About/Education'
import Expereince from '../components/About/Expereince'
import FloatingDock from '../components/FloatingDock/Dock'
import CustomCursor from '../components/CustomCursor'
import { motion } from 'framer-motion'

function AboutPage() {
  return (
    <div className='w-full flex justify-center items-center sm:items-center ml-40 mt-10 flex-col pl-10 pr-10'> {/* Changed to padding for consistent alignment */}
    <CustomCursor/>
         <Header
            heading="About"
            description={`i'm an artist, filmmaker & developer - remixing creativity with code.\ni turn pixels, paint, and a few 0s & 1s into digital magic.`}
            className={"w-[300px] sm:w-xl mb-10 relative" } /* Removed margin-left */
         />
        <div> {/* Removed margin-left */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
                <Timeline
                timelineHeading="Education"
                content={<Education/>}/>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
                <Timeline
                timelineHeading="Skills"
                content={<SkillRepeat/>}/>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
                <Timeline
                timelineHeading="Experience"
                content={<Expereince/>}/>
            </motion.div>
        </div>
        <FloatingDock/>
    </div>
  )
}

export default AboutPage