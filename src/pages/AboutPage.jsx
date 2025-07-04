
import Timeline from '../components/About/TimeLine'
import Header from '../components/Header'

function AboutPage() {
  return (
    <div>
         <Header
            heading="About"
            description="i&apos;m an artist, illustrator & filmmaker remixing creativity with code. i turn pixels, paint, and a few 0s & 1s into digital magic."
            className={"w-xl"}
         />
         <Timeline/>
    </div>
  )
}

export default AboutPage