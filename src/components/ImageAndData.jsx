import React from 'react'

const ImageAndData = ({src,heading,description,toggle}) => {
  return (
    <div className={`flex flex-col gap-2 p-4 md:flex-row ${toggle?"md:flex-row-reverse flex-col-reverse" :""}`}>
      <div className='md:w-1/2 w-full h-full'><img src={src}/></div>
      <div className='py-2 md:w-1/2'>
        <h4 className='text-center'>{heading}</h4>
        <p className='text-center font-medium text-gray-500'>{description}</p>
      </div>
    </div>
  )
}

export default ImageAndData
