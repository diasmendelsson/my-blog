'use client'
import Link from 'next/link'
import {React, useState }from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"
import { Turn as Hamburger } from 'hamburger-react'
import './header.css'



const Header = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <header className='cabecalho'>

      
     
      <div >
        <h1 className='logo'>MD TECH</h1>
       
      </div>

      
      

      <div>
        
        <span className='hamburger'>
          <Hamburger toggled={isOpen} toggle={setOpen} rounded color="#ffffff" />
        </span>
        <ul className={`menu_list ${isOpen ? 'is-open' : ''}`}>
          
          <li ><Link className='menu_item1' href='#'>Início</Link></li>
          <li ><Link className='menu_item' href='#'>Trabalhe Comigo</Link></li>
          <li ><Link className='menu_item' href='#'>Blog</Link></li>
          <li ><Link className='menu_item' href='#'>Contato</Link></li>


        </ul>

      
      </div>
      
      
      <div className='menu_redes'>

        <div className='search_input'>
        <FaSearch color='#ffffff' />
        <input placeholder='Procurar...' className='input'/>
        </div>
        
        <div  className='menu_icons'>
          <FaFacebookF color='#ffffff'/>
          < FaInstagram color='#ffffff' />
          < FaLinkedinIn color='#ffffff' />
          </div>
          
      </div>

   </header>
  )
}


export default Header