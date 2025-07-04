import SkillBox from "./SkillBox"
import { languages, frameworksAndTools, designTools } from "./Skills"

function TimeLine() {
  return (
    <div className="relative">
      {/* vertical line */}
      <div className="bg-black dark:bg-white/100 w-px h-full absolute"></div>
      
      {/* heading */}
      <div className="relative mb-10">
        <div className="w-4 h-4 bg-black dark:bg-white/100 rounded-full -translate-x-1/2"></div>
        <h1 className="absolute top-0 ml-4 text-3xl leading-6  text-black dark:text-white" style={{ fontFamily: 'New Valley, sans-serif'}}>Skills</h1>
      </div>

      {/* sub-dots */}
      <div className="relative mb-4">
        <div className="w-2 h-2 dark:bg-white/100 bg-black -translate-x-1/2 rounded-full "></div>
        <h1 className="absolute top-0 ml-4 text-xl leading-2 text-black dark:text-white">Languages</h1>
        <div className="flex gap-2 ml-4 mt-4">
            {languages.map((language, idx) => (
            <SkillBox title={language.name} bg={language.color} key={idx}/>
          ))}
        </div>
      </div>

      <div className="relative mb-4">
        <div className="w-2 h-2 bg-black dark:bg-white/100 -translate-x-1/2 rounded-full "></div>
        <h1 className="absolute top-0 ml-4 text-xl leading-2 text-black dark:text-white">Frameworks & Tools</h1>
        <div className="flex gap-2 ml-4 mt-4 flex-wrap">
            {frameworksAndTools.map((framework, idx) => (
            <SkillBox title={framework.name} bg={framework.color} key={idx}/>
          ))}
        </div>
      </div>

      <div className="relative mb-4">
        <div className="w-2 h-2 bg-dark dark:bg-white/100 -translate-x-1/2 rounded-full "></div>
        <h1 className="absolute top-0 ml-4 text-xl leading-2 text-black dark:text-white">Design Tools</h1>
        <div className="flex gap-2 ml-4 mt-4">
            {designTools.map((design, idx) => (
            <SkillBox title={design.name} bg={design.color} key={idx}/>
          ))}
        </div>
      </div>
    </div>  
  )
}

export default TimeLine