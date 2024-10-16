import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faUser, faMagnifyingGlass, faBars} from '@fortawesome/free-solid-svg-icons';

export function Header() {
  return (
    <header className = 'flex bg-white  py-6 ' >
        {/* plus */}
        <div className='text-1xl font-Helvitica w-80  ml-16 '>
           <span> + </span> <span className='ml-2'>Contact Us</span>
        </div>
       

        {/* gucci */}
        <div className='flex text-4xl font-serif gap-2  w-1/2  justify-center '>
        <span>G</span><span>U</span><span>C</span><span>C</span><span>I</span>
        </div>
        {/* fonts */}
        <div className = 'flex gap-7  w-60 justify-end mr-4 '>
        <i className = ""><Link href="">
            <FontAwesomeIcon icon={ faBagShopping} className="h-6 w-6 " /> 
          </Link></i>

          <i className = ""><Link href="">
            <FontAwesomeIcon icon={ faUser} className="h-5 w-5" /> 
          </Link></i>

          <i className = ""><Link href="">
            <FontAwesomeIcon icon={ faMagnifyingGlass } className="h-6 w-6" /> 
          </Link></i>

          <i className = ""><Link href="">
            <FontAwesomeIcon icon={ faBars} className="h-6 w-6" /> 
          </Link></i>
        </div>

        <div className='w-30  mr-20 '>
          <h2>MENU</h2>
        </div>
    </header>

  )
}


 
