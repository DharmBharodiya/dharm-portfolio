import React from 'react'
import ImageCard from './ImageCard'

function ActualGallery() {
  return (
    <div className='w-full columns-1 sm:columns-2 lg:columns-3 mt-6'>
        <ImageCard
        src="images/painting1.jpg"
        description="painting 1"
        />
        <ImageCard
        src="images/painting2.jpg"
        description="painting 2"
        />
        <ImageCard
        src="images/image1.jpg"
        description="image 1"
        />
        <ImageCard
        src="images/image2.jpg"
        description="image 2"
        />
        <ImageCard
        src="images/painting4.jpg"
        description="painting4"
        />
        <ImageCard
        src="images/image3.JPG"
        description="image 3"
        />
        <ImageCard
        src="images/image4.jpg"
        description="image 4"
        />
        <ImageCard
        src="images/painting3.jpg"
        description="painting3"
        />
        <ImageCard
        src="images/painting5.jpg"
        description="painting5"
        />
        <ImageCard
        src="images/painting6.png"
        description="painting6"
        />
        <ImageCard
        src="images/painting7.jpg"
        description="painting7"
        />
        <ImageCard
        src="images/painting8.jpg"
        description="painting8"
        />
    </div>
  )
}

export default ActualGallery