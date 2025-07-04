
function SkillBox({title, bg}) {
  return (
    <div className={`w-fit px-2 py-0.5 sm:px-3 sm:py-1 rounded-md text-xs sm:text-sm bg-white/100 text-black/100`} style={{backgroundColor: bg}}>
        <h1>{title}</h1>
    </div>
  )
}

export default SkillBox