/* eslint-disable no-unused-vars */
import React from 'react'
import { IoCloseSharp } from "react-icons/io5";


 // eslint-disable-next-line react/prop-types
 const SideNavBar =({closeToggleSideNav,isMenuOpen})=> {
  return (
    <div onClick={(e) => e.stopPropagation()} className={`sidenav md:w-1/6 lg:w-1/6 w-1/3  ${isMenuOpen ? 'active' : ''}`}>
      <div className='w-full h-14 bg-red-800'>
        {/* <span className='bg-transparent text-2xl mt-1 pr-1 float-right' onClick={closeToggleSideNav} ><IoCloseSharp/></span> */}
      </div>
    </div>
  )
}
export default SideNavBar;