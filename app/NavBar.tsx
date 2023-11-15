import Link from 'next/link'
import React from 'react'
import { IoBug } from "react-icons/io5";

const NavBar = () => {

  const links = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Issues', href: '/issues' }
  ]

  return (
    <nav className='flex items-center space-x-6 border-b mb-5 px-5 h-14'>
      <Link href='/'>
        <IoBug />
      </Link>
      <ul className='flex items-center h-14 space-x-6'>
        {links.map(link => (
          <Link    
            key={link.name} 
            className='text-zinc-500 hover:text-zinc-800 transition-colors' 
            href={link.href}>
              {link.name}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
