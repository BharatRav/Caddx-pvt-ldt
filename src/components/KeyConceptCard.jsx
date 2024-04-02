import React from 'react'

const KeyConceptCard = ({icon,title,desc}) => {
  return (
    <div className='flex flex-col gap-2 bg-transparent max-w-sm bg-[#f1f1f1] hover:scale-105 cursor-pointer duration-200 text-black opacity-80 rounded-lg p-4 shadow-md'>
      {/* <div>{icon}</div> */}
      <h5 className='text-black font-bold text-xl'>{title}</h5>
      <p className='text-gray-500 first-letter:capitalize'>{desc}</p>
      <button className='text-purple-500 cursor-pointer border-none self-start hover:underline'>Learn More.</button>
    </div>
  )
}

export default KeyConceptCard
