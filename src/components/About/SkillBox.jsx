
function SkillBox({title, bg}) {
  return (
    <div className={`w-fit px-3 py-1 rounded-md text-sm bg-white/100 text-black/100`} style={{backgroundColor: bg}}>
        <h1>{title}</h1>
    </div>
  )
}

export default SkillBox