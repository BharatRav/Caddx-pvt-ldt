import React from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";
const NavRecursion = ({nav}) => {
    console.log(nav)
  return (
      <div className="absolute grid-cols-2 w-full hidden group-hover:grid gap-2 group-hover:ease-in bg-white shadow-xl rounded-lg text-black">
       
        {nav.map((item,cidx)=>{
        return <div className='min-w-56'><Link
            className="hover:bg-orange-red py-1.5 w-full text-soft-black text-sm text-center px-4 first:mt-4 hover:text-[#f6f6f6] hover:transition rounded-lg active:bg-white whitespace-nowrap"
            key={cidx}
            to={item?.navLink}
            >   
            {item?.navItem} 
            </Link>
            </div>

            })}
</div>
  )
}

export default NavRecursion
