import "./singleships.scss"
import * as React from 'react';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/navbar"
import { Link } from "react-router-dom"
import { useParams} from "react-router"
import axios from "axios"; 
import Chart from "../../components/chart/Chart"
import TableSingle from "../../components/table-single/Tablesingle"

 class  SingleUser extends React.Component {
  constructor(props){ 
    super(props); 

    this.state = { user: []}

    
  }
  componentDidMount(){ 
    axios.get('http://localhost:5000/Userroute/' + this.props.params.userId )
    .then(res => { 
      const user = res.data; 
      this.setState({user}); 
    })
  }

  render(){
  // console.log(this.state); 
  return (
    <div className= "single">
      <Sidebar/>
      <div className="containerSingle">
      <Navbar/> 
        <div className="top">   
          <div className="left">
            <h3 className="title"> INFORMATION</h3>
            <button key={this.state.user._id}  className="editButton"> <Link to={ "/users/" + this.state.user._id + "/edit" }> Edit</Link></button>
            <div className="item"> 
              <div className="detail">
                <h4 className="itemTitle">{this.state.user.name}</h4>
                <div className="detailItem">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">{this.state.user.address}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey"> Telephone: </span>
                  <span className="itemValue">{this.state.user.telephone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey"> Numbership: </span>
                  <span className="itemValue">{this.state.user.numbership}</span>
                </div>

              </div>
            </div>
            
          </div>
          <div className="right">
          <Chart  aspect={2/1} title = "Last 6 Month (Revenue) "  />
        </div>
        </div>
        <div className="bottom">
           
        <TableSingle />
         
          </div>
      </div>
    </div>
  )
}
}

export default function Single({props}){ 
  return <SingleUser
    {...props}
    params = {useParams()}

  />
};