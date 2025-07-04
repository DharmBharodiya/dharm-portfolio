
function ContentBox({heading, description}) {
  return (
     <div className="relative mb-4">
        <div className="w-2 h-2 dark:bg-white bg-black -translate-x-1/2 rounded-full "></div>
        <h1 className="absolute top-0 ml-4 text-[15.5px] sm:text-[16px] leading-4 sm:leading-2 text-black dark:text-white font-space-grotesk">{heading}</h1>
        <div className="flex gap-2 ml-4 mt-5 sm:mt-2 flex-wrap">
            <p className="text-xs dark:text-gray-300 text-black">{description}</p>
        </div>
    </div>
  )
}

export default ContentBox