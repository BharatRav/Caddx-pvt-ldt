import React from 'react'



const ImageAndData = ({img,heading,description,toggle,idx}) => {
  return (
    <div className={`flex flex-col gap-2 p-4 md:flex-row ${toggle?"md:flex-row-reverse flex-col-reverse" :""}`}>
      <div className='md:w-1/2 w-full h-full'><img src={img} className='rounded-lg max-h-80 min-w-full md:px-4 md:rounded-3xl'/></div>
      <div className='py-2 md:w-1/2 flex justify-center flex-col md:px-8 gap-5'>
        <h4 className='text-center  text-black font-semibold text-xl'>{heading}</h4>
        <p className='text-center font-medium text-gray-500'>{description}</p>
      </div>
    </div>
  )
}

export default ImageAndData
