import React from 'react'
import Link from 'next/link'
const NavBar = () => {
  return (
    <div className='flex justify-evenly bg-pink-500'>
      <Link href="/home">Home</Link>
      <Link href="/users">Users</Link>
      <Link href="/blog">Blogs</Link>      
    </div>
  )
}

export default NavBar
