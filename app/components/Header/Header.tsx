'use client'
import {FC} from 'react'
import Link from 'next/link'
import cn from 'classnames'
import {Navbar} from 'flowbite-react'

import {HeaderProps} from './Header.props'

export const Header: FC<HeaderProps> = (props) => {
  return (
    <Navbar fluid {...props} className={cn(props?.className, 'bg-gray-300')}>
      <div className="container mx-auto px-4">
        <Navbar.Brand as={Link} href="/" title="Mem Creator">
          <svg
            className="w-6 h-6 text-sky-900"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 21 21">
            <path d="M20.817 9.085a10 10 0 0 0-19.77 2.9A10.108 10.108 0 0 0 6.762 20a9.689 9.689 0 0 0 4.2 1h.012a3.011 3.011 0 0 0 2.144-.884A2.968 2.968 0 0 0 14 18v-.86A1.041 1.041 0 0 1 15 16h2.7a2.976 2.976 0 0 0 2.838-2.024 9.93 9.93 0 0 0 .279-4.891ZM5.5 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2.707-3.793a1 1 0 1 1-1.414-1.414 1 1 0 0 1 1.414 1.414Zm2.872-1.624a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4.128 1.624a1 1 0 1 1-1.414-1.413 1 1 0 0 1 1.414 1.413Z" />
          </svg>
        </Navbar.Brand>
      </div>
    </Navbar>
  )
}
