import React from 'react'
import ImageCard from './ImageCard'
import images from './images'
import Instagram from './Instagram'

function ActualGallery() {
  return (
    <div className='w-full columns-1 sm:columns-2 lg:columns-3 mt-6'>
    {/* // <div className='w-full column-[300px] mt-6'> */}
    {/* what happens here is that sort function sorts the array with the help of math.random, the random function
    generate a number between 0 and 1, and if the sort function gets -(negative) it lets the first element stay before the 
    second element, if it gets 0 than things stays same, and if it comes positive  than first item comes after second one
    here substracting 0.5 from random value gives range of -0.5 to 0.5 which helps in randomizing things,
    this comparison of -, 0 and + happends for all the items 
    */}
        {images.sort(() => Math.random() - 0.5).map((image, idx)=>(
            <ImageCard
            src={image}
            key={idx}
            alt={image}
            // description={image.description}
            />
        ))}

        <Instagram/>
    </div>
  )
}

export default ActualGallery