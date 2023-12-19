'use client'

import Link from 'next/link'
import Image from 'next/image'
import {Navbar} from 'flowbite-react'

export const Header = () => {
  return (
    <Navbar className="border-b-[1px]">
      <Navbar.Brand as={Link} href="/">
        <Image
          src="/logo.png"
          width={34.95}
          height={36}
          className="mr-3 h-6 sm:h-9"
          alt="QR Code Generator Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          QRCode Generator
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
