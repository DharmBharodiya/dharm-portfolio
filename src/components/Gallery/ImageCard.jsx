import React from 'react'

// function ImageCard({src, description}) {
function ImageCard({src, alt, description}) {

  return (
    <div className='w-80 mb-4 rounded-md relative text-white group hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-shadow duration-300'>
        <div>
            <img src={src} alt={alt}
            className='w-auto h-auto bg-cover bg-center rounded-md'
            loading='lazy'
            />
        </div>
        <div className='bg-[linear-gradient(to_bottom,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.2)_20%,_rgba(0,0,0,0.4)_40%,_rgba(0,0,0,0.7)_60%,_rgba(0,0,0,0.9)_80%,_rgba(0,0,0,1)_100%)] absolute top-0 left-0 w-full h-full rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <p className='absolute bottom-0 p-4 text-white font-space-grotesk font-regular'>{description}</p>
        </div>
    </div>
  )
}

export default ImageCard