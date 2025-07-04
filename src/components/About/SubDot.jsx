import SkillBox from "./SkillBox"

function SubDot({items, heading}) {
  return (
    <div className="relative mb-4">
        <div className="w-2 h-2 dark:bg-white bg-black -translate-x-1/2 rounded-full "></div>
        <h1 className="absolute top-0 ml-4 text-[16px] sm:text-[18px] leading-2 text-black dark:text-white">{heading}</h1>
        <div className="flex gap-2 ml-4 mt-4 flex-wrap">
            {items.map((item, idx) => (
            <SkillBox title={item.name} bg={item.color} key={idx}/>
          ))}
        </div>
    </div>
  )
}

export default SubDot