import "./newships.scss"; 
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/navbar"
import Create from "../../components/create-ship/CreateShips.component"

const Newships = () => {
  return (
    <div className= "newships">
      <Sidebar/>
      <div className="containerNewships">
      <Navbar/> 
        <div className="top">
          <h3> CREATE SHIP</h3>
        </div>
        <div className="bottom">
          <div className="left">
            </div>
          <div className="right">
          <Create/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newships
