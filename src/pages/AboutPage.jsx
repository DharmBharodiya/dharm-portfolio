
import Timeline from '../components/About/TimeLine'
import Header from '../components/Header'
import SkillRepeat from '../components/About/SkillRepeat'
import Education from '../components/About/Education'
import Expereince from '../components/About/Expereince'
import FloatingDock from '../components/FloatingDock/Dock'

function AboutPage() {
  return (
    <div className='w-full flex justify-center items-left flex-col ml-10 mr-10'>
         <Header
            heading="About"
            description="i&apos;m an artist, illustrator & filmmaker remixing creativity with code. i turn pixels, paint, and a few 0s & 1s into digital magic."
            className={"w-[250px] sm:w-lg mb-10"}
         />
        <div>
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