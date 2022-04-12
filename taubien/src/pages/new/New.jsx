import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/navbar"
import Createuser from "../../components/create-user/CreateUser"
import "./new.scss"; 



const New = () => {
  return (
    <div className='new'>
      <Sidebar/>
      <div className="containerNewuser">
      <Navbar/> 
        <div className="top">
          <h3> CREATE USER</h3>
        </div>
        <div className="bottom">
          <div className="left">
            </div>
          <div className="right">
          <Createuser/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New; 
