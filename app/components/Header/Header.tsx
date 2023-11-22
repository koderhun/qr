'use client'

import Link from 'next/link'
import Image from 'next/image'
import {Navbar} from 'flowbite-react'

export const Header = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <Image
          src="/favicon.png"
          width={34.95}
          height={36}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/scanner">Scanner</Navbar.Link>
        <Navbar.Link as={Link} href="/generator">
          Generator
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
