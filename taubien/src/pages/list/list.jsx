import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/navbar"
import Datauser from "../../components/table-user/Datauser"; 


const list = () => {
  return (
    <div className='list'>
     <Sidebar/>
     <div className="listContainer">
       <Navbar/> 
       <div className="titleTable"> 
        DANH SÁCH NHÂN VIÊN
       </div>
       
        <Datauser/>
      
     </div>
    </div>
  )
}

export default list
