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
          className="mr-3 ml-1 sm:ml-3"
          alt="QR Code Generator Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          QRCode Generator
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className={'pr-0 sm:pr-4'}>
        <Navbar.Link href="/scanner">Scanner</Navbar.Link>
        <Navbar.Link as={Link} href="/">
          Generator
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
