import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

function Header() {
  return (
    <header className='flex items-center justify-between container flex-wrap'>
        <Logo />
        <nav className='flex items-center justify-end gap-6 font-semibold'>
            <Link href={"/"} className=''>
            Recent recipes
            </Link>
            <Link href={"/login"} className=''>
            Account
            </Link>
            <Link href={"/new-recipe"} className='p-3 px-6 sm:p-4 sm:px-8 lg:p-6 lg:px-12 bg-secondary text-white rounded-full'>
            Add new recipe
            </Link>
        </nav>
    </header>
  )
}

export default Header