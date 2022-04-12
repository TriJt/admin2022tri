import "./sidebar.scss"
import Dashboard from '@mui/icons-material/Dashboard'; 
import InventorySharpIcon from '@mui/icons-material/InventorySharp';
import PeopleSharpIcon from '@mui/icons-material/PeopleSharp';
import SupportSharpIcon from '@mui/icons-material/SupportSharp';
import NotificationsActiveSharpIcon from '@mui/icons-material/NotificationsActiveSharp';
import QueryStatsSharpIcon from '@mui/icons-material/QueryStatsSharp';
import BookIcon from '@mui/icons-material/Book';import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link}from "react-router-dom"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
          {/* <span className="logo">AdventureDawn</span> */}
          <Link to="/"  className="logo"><span className="logo">AdventureDawn</span></Link>
          <hr/>
      </div>
      
      <div className="center">
          <ul>
              <p className="title">MAIN</p>
              <li>
                <Dashboard className="icon" />
                 <Link to="/" className="link"> <span>Dashboard</span></Link> 
              </li>

              <p className="title">LIST</p>
              <li>
                <InventorySharpIcon className="icon" />
                <Link to="/ships" className="link"> <span>Ships</span></Link>
                 
              </li>
              <li>
                <PeopleSharpIcon className="icon" />
                <Link  to="/users" className="link"> <span>Users</span></Link> 
              </li>

              <p className="title">USEFUL</p>
              
              <li>
              <NotificationsActiveSharpIcon className="icon" />
              <Link  to="/create" className="link"> <span>Create Ship</span></Link>
              </li>
              <li>
              <NotificationsActiveSharpIcon className="icon" />
              <Link  to="/createuser" className="link"> <span>Create User</span></Link>
              </li>
              <li>
              <QueryStatsSharpIcon className="icon" />

                  <span>Stats</span>
              </li>
              <p className="title">SERVICE</p>
              <li> 
              <SupportSharpIcon className="icon" />
                  <span>Support System</span>
              </li>
              <li>
              <BookIcon className="icon" />
                  <span>Logs</span>
              </li>
              <li>
              <SettingsApplicationsSharpIcon className="icon" />
                  <span>Settings</span>
              </li>
              <p className="title">USER</p>
              <li>
              <AccountCircleIcon className="icon" />
                  <span>Profile</span>
              </li>
              <li>
              <ExitToAppSharpIcon className="icon" />
                  <span>Logout</span>
              </li>
            
          </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>

    </div>
  )
}

export default Sidebar
