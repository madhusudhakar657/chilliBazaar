/* eslint-disable no-unused-vars */
import React from 'react'
import { FaDesktop, FaFileContract, FaHome, FaHotTub, FaInfoCircle, FaUsers } from 'react-icons/fa';
import { MdOutlineContactPhone, MdSell } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { GiChiliPepper } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const SideNavBar = ({ closeToggleSideNav, isMenuOpen }) => {
  return (
    <div onClick={(e) => e.stopPropagation()} className={`sidenav block md:hidden lg:hidden md:w-1/6 lg:w-1/6 w-1/3  ${isMenuOpen ? 'active' : ''}`}>
      <div className='w-full h-14 bg-red-800'>
        <span className='bg-transparent text-2xl mt-1 pr-1 float-right' onClick={closeToggleSideNav} ><IoCloseSharp /></span>
        <NavLink to="/login" className={({ isActive }) => `xs:text-base flex justify-center items-center  border-2 xs:pt-5 sm:pt-5 float-left pl-2 border-transparent rounded text-lg font-medium font-medium font-serif tracking-normal hover:text-blue-600 ${!isActive ? 'text-white' : "text-blue-400"}`}><span className='mr-2 text-2xl'><IoMdContact /></span> Sign In </NavLink>
      </div>
      <div className="w-full flex flex-col list-none justify-evenly items-start app-menu-items">
        <NavLink onClick={closeToggleSideNav} to="/" className={({ isActive }) => `xs:text-base flex justify-center items-center mx-1 border-2 border-transparent rounded  py-1 text-lg font-medium font-medium font-serif tracking-normal hover:text-blue-600 ${!isActive ? 'text-red-600' : "text-red-600"}`}><span className='mx-2'><FaHome /></span> Home </NavLink>
        <NavLink onClick={closeToggleSideNav} to="/aboutUs" className={({ isActive }) => `xs:text-base flex justify-center items-center  mx-1 border-2 border-transparent rounded  py-1 text-lg font-medium font-medium font-serif tracking-normal hover:text-blue-600 ${!isActive ? 'text-red-600' : "text-red-600"}`}><span className='mx-2'><FaInfoCircle /></span> About Us</NavLink>
        <NavLink onClick={closeToggleSideNav} to="/products" className={({ isActive }) => `xs:text-base flex justify-center items-center  mx-1 border-2 border-transparent rounded  py-1 text-lg font-medium font-medium font-serif tracking-normal hover:text-blue-600 ${!isActive ? 'text-red-600' : "text-red-600"}`}><span className='mx-2'><GiChiliPepper /></span> Products</NavLink>
        <NavLink onClick={closeToggleSideNav} to="/supplier" className={({ isActive }) => `xs:text-base flex justify-center items-center  mx-1 border-2 border-transparent rounded  py-1 text-lg font-medium font-medium font-serif tracking-normal hover:text-blue-600 ${!isActive ? 'text-red-600' : "text-red-600"}`}><span className='mx-2'><FaUsers /></span> Suppliers</NavLink>
        <NavLink onClick={closeToggleSideNav} to="/selling" className={({ isActive }) => `xs:text-base flex justify-center items-center  mx-1 border-2 border-transparent rounded  py-1 text-lg font-medium font-medium font-serif tracking-normal hover:text-blue-600 ${!isActive ? 'text-red-600' : "text-red-600"}`}><span className='mx-2'><MdSell /></span> Selling</NavLink>
        <NavLink onClick={closeToggleSideNav} to="/contact" className={({ isActive }) => `xs:text-base flex justify-center items-center  mx-1 border-2 border-transparent rounded  py-1 text-lg font-medium font-medium font-serif tracking-normal hover:text-blue-600 ${!isActive ? 'text-red-600' : "text-red-600"}`}><span className='mx-2'><MdOutlineContactPhone />        </span> Contact</NavLink>
      </div>
    </div>
  )
}
export default SideNavBar;