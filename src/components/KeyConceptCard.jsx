import React from 'react'

const KeyConceptCard = ({icon,title,desc}) => {
  return (
    <div className='flex flex-col gap-2 bg-transparent max-w-sm bg-white hover:scale-105 cursor-pointer duration-200 text-black opacity-95 rounded-lg p-4 shadow-lg'>
     {icon}
      <p className='text-black font-bold text-xl'>{title}</p>
      <p className='text-gray-500 first-letter:capitalize'>{desc}</p>
      <button className='text-purple-500 cursor-pointer border-none self-start hover:underline'>Learn More.</button>
    </div>
  )
}

export default KeyConceptCard
