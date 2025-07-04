import Timeline from '../components/About/TimeLine'
import Header from '../components/Header'
import SkillRepeat from '../components/About/SkillRepeat'
import Education from '../components/About/Education'
import Expereince from '../components/About/Expereince'
import FloatingDock from '../components/FloatingDock/Dock'

function AboutPage() {
  return (
    <div className='w-full flex justify-center items-left sm:items-left sm:ml-20 md:ml-40 lg:ml-100 mt-10 flex-col pl-10 pr-10'> {/* Changed to padding for consistent alignment */}
         <Header
            heading="About"
            description="i&apos;m an artist, filmmaker & developer - remixing creativity with code. i turn pixels, paint, and a few 0s & 1s into digital magic."
            className={"w-[250px] sm:w-lg mb-10 relative" } /* Removed margin-left */
         />
        <div> {/* Removed margin-left */}
            <Timeline
            timelineHeading="Education"
            content={<Education/>}/>
            <Timeline
            timelineHeading="Skills"
            content={<SkillRepeat/>}/>
            <Timeline
            timelineHeading="Experience"
            content={<Expereince/>}/>
        </div>
        <FloatingDock/>
    </div>
  )
}

export default AboutPage