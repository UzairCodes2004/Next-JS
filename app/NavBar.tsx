'use client';  
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
const NavBar = () => {
  const { status, data: session } = useSession()
  
  return (
    <div className='flex justify-evenly bg-pink-500'>
      <Link href="/home">Home</Link>
      <Link href="/users">Users</Link>
      <Link href="/blog">Blogs</Link>
      {/* {status === 'authenticated' && <div>{session?.user?.name}</div>}
      {status === 'unauthenticated' && <Link href="/login">Login</Link>} */}
    </div>
  )
}

export default NavBar
