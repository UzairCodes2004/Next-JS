import React, { ReactNode } from 'react'
interface Props{
    childern : ReactNode;
}
const AdminLayout = ({childern}:Props) => {
  return (
    <div className='flex'>
     <aside className='bg-pink-400 p-5 mr-5  '>Admin Sider bar</aside>
     <div>{childern}</div>
    </div>
  )
}

export default AdminLayout
