import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className=' grid grid-flow-col p-2'> 
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body