import "./ships.scss"
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/navbar"
import Datatable from "../../components/show-table-ship/Datatable"

const Ships = () => {
  return (
    <div className='ships'>
     <Sidebar/>
     <div className="shipsContainer">
       <Navbar/> 
       <div className="titleTable"> 
        DANH SÁCH CÁC TÀU 
       </div>
        <Datatable/>
     </div>
    </div>
  )
}

export default Ships
