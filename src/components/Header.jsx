
function Header({heading, description, className}) {
  return (
    <div className={`flex text-left items-left flex-col pt-20 text-black  dark:text-white ${className}`}>
        <h1 className='text-5xl sm:text-6xl font-black text-black dark:text-white font-spaace-grotesk selection:bg-green-400 selection:text-black'>{heading}</h1>
        <p className='text-xs pr-5 w-full sm:text-lg dark:text-white text-black font-space-grotesk selection:bg-pink-400 selection:text-black'>{description}</p>
    </div>
  )
}

export default Header