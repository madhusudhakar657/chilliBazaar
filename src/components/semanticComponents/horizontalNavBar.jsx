/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { LiaPepperHotSolid } from "react-icons/lia";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { RiMenuUnfold2Line, RiMenuUnfoldLine } from "react-icons/ri";
import { navItems } from '../../staticJsonData';
import { Link, NavLink } from 'react-router-dom';
import { FaCartPlus, FaSearch } from 'react-icons/fa';



export default function HorizontalNavBar({ isMenuOpen, toggleSideNav }) {
  return (
    <nav  style={{ backgroundImage: `url('assets/istockphoto-1020105066-612x612.jpg')`}} 
    className='flex min-w-full bg-cover backdrop-blur-sm w-screen fixed top-0 justify-around items-center bg-green-100 h-20 z-10' >
      <div className='w-1/5 app-logo px-3   flex justify-between items-center '>
        <span className='pr-4 w-1/5 text-white text-3xl' onClick={toggleSideNav}>{!isMenuOpen ? <RiMenuUnfoldLine /> : <RiMenuUnfold2Line />}</span>
        <div className='flex w-4/5 items-center'>
          {/* <LiaPepperHotSolid className='text-5xl text-white' /> */}
          <img height={"55px"} width={"55px"} src='assets/gradient-spicy-logo-template-design_23-2149641027.png' alt="Mirchi"/>
          <p className='text-white font-bold text-lg lg:text-2xl md:text-2xl font-serif'>Chilli Bazaar</p>
        </div>
      </div>
      {/* <div className='w-3/5 flex justify-evenly items-center app-menu-items'> */}
      <div className="w-2/5 flex list-none justify-evenly items-center app-menu-items">
        <NavLink to="/" className={({ isActive }) => `px-3 mx-1 border-2 border-transparent rounded  py-1 text-lg font-medium font-medium font-serif tracking-normal hover:text-blue-600 hover:border-blue-600 ${isActive ? 'bg-white text-red-600' : "text-white"}`}>Home </NavLink>
        <NavLink to="/aboutUs" className={({ isActive }) => `px-3 mx-1 border-2 border-transparent rounded  py-1 text-lg font-medium font-medium font-serif tracking-normal hover:text-blue-600 hover:border-blue-600 ${isActive ? 'bg-white text-red-600' : "text-white"}`}>About Us</NavLink>
        <NavLink to="/products" className={({ isActive }) => `px-3 mx-1 border-2 border-transparent rounded  py-1 text-lg font-medium font-medium font-serif tracking-normal hover:text-blue-600 hover:border-blue-600 ${isActive ? 'bg-white text-red-600' : "text-white"}`}>Product </NavLink>
        <NavLink to="/supplier" className={({ isActive }) => `px-3 mx-1 border-2 border-transparent rounded  py-1 text-lg font-medium font-medium font-serif tracking-normal hover:text-blue-600 hover:border-blue-600 ${isActive ? 'bg-white text-red-600' : "text-white"}`}>Suppliers</NavLink>
        <NavLink to="/selling" className={({ isActive }) => `px-3 mx-1 border-2 border-transparent rounded  py-1 text-lg font-medium font-medium font-serif tracking-normal hover:text-blue-600 hover:border-blue-600 ${isActive ? 'bg-white text-red-600' : "text-white"}`}>Selling</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `px-3 mx-1 border-2 border-transparent rounded  py-1 text-lg font-medium font-medium font-serif tracking-normal hover:text-blue-600 hover:border-blue-600 ${isActive ? 'bg-white text-red-600' : "text-white"}`}>Contact</NavLink>
        </div>
      {/* {navItems?.map(each => {
          return <a className='text-red-600 text-lg font-medium font-sans tracking-normal hover:text-blue-600' key={each.id}>{each.item}</a>
        })}
      </div> */}
      <div className='w-1/5 flex justify-between items-center px-3 login-info'>

        <Link to="/login" className='text-white text-base font-medium font-serif tracking-normal
          hover:text-blue-600'>Login/Register</Link>

        <Link to="/search" className='text-white text-lg font-medium font-sans
          tracking-normal hover:text-blue-600'><FaSearch className='text-xl font-serif' /></Link>

        <Link to="/cart" className='text-white text-lg font-medium font-sans
          tracking-normal hover:text-blue-600'>
            <div className='flex'>
              <AiOutlineShoppingCart className='text-3xl' />
              <p className='bg-red-600 text-xs p-0.5 h-5 w-5 text-center relative text-white -top-4 right-4 rounded-full'><strong>{9}</strong></p>
              <sub className='right-5 font-serif text-lg top-1 '>Cart</sub>
            </div>
            
            </Link>

      </div>
      </nav>
  )
}
