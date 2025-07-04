
import Timeline from '../components/About/TimeLine'
import Header from '../components/Header'

function AboutPage() {
  return (
    <div className='w-full ml-10 mr-10'>
         <Header
            heading="About"
            description="i&apos;m an artist, illustrator & filmmaker remixing creativity with code. i turn pixels, paint, and a few 0s & 1s into digital magic."
            className={"w-[250px] sm:w-lg mb-10"}
         />
         <Timeline/>
    </div>
  )
}

export default AboutPage