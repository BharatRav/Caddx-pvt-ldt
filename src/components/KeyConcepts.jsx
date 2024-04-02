import React from 'react'
import KeyConceptCard from './KeyConceptCard'
import {KeyConceptConfig} from '../configs/KeyConceptConfig'

const KeyConcepts = () => {
  return (
    <div className='bg-gray-400 flex gap-8 flex-col py-5 px-4'>
        <div className='flex flex-col gap-2 mt-5'>
            <h2 className='font-bold text-4xl'>Transformative learning for every team</h2>
            <p>We meet all your learning needs, so you don’t have to spend time managing multiple providers.</p>
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>{KeyConceptConfig.map((item,idx)=>(
            <KeyConceptCard key={idx} title={item.title} desc={item.desc} icon={item.icon}/>
        ))}</div>
      
    </div>
  )
}

export default KeyConcepts
