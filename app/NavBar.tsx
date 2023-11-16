'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { IoBug } from "react-icons/io5";
import cx from 'classnames';

const NavBar = () => {

  const currentPathname = usePathname()
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
            className={cx({
                'text-zinc-900': link.href === currentPathname,
                'text-zinc-500': link.href !== currentPathname,
                'hover:text-zinc-800 transition-colors': true
            })}
            href={link.href}>
              {link.name}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
