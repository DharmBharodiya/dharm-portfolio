
function TimeLine({timelineHeading, content}) {
  return (
    <div className="relative mb-10">
      {/* vertical line */}
      <div className="bg-black dark:bg-white/100 w-px h-full absolute"></div>
      
      {/* heading */}
      <div className="relative mb-6">
        <div className="w-2.5 h-2.5 sm:w-4 sm:h-4 bg-black dark:bg-white rounded-full -translate-x-1/2"></div>
        <h1 className="absolute top-0 ml-4 text-2xl sm:text-3xl leading-6  text-black dark:text-white" style={{ fontFamily: 'New Valley, sans-serif'}}>{timelineHeading}</h1>
      </div>

      {/* sub-dots */}
      
      {content}

      {/* <div className="relative mb-4">
        <div className="w-2 h-2 bg-black dark:bg-white/100 -translate-x-1/2 rounded-full "></div>
        <h1 className="absolute top-0 ml-4 text-md sm:text-xl leading-2 text-black dark:text-white">Frameworks & Tools</h1>
        <div className="flex gap-2 ml-4 mt-4 flex-wrap">
            {frameworksAndTools.map((framework, idx) => (
            <SkillBox title={framework.name} bg={framework.color} key={idx}/>
          ))}
        </div>
      </div>

      <div className="relative mb-4">
        <div className="w-2 h-2 bg-black dark:bg-white/100 -translate-x-1/2 rounded-full "></div>
        <h1 className="absolute top-0 ml-4 text-md sm:text-xl leading-2 text-black dark:text-white">Design Tools</h1>
        <div className="flex gap-2 ml-4 mt-4 flex-wrap">
            {designTools.map((design, idx) => (
            <SkillBox title={design.name} bg={design.color} key={idx}/>
          ))}
        </div>
      </div> */}
    </div>  
  )
}

export default TimeLine