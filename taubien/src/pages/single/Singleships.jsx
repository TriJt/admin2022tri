import "./singleships.scss"
import * as React from 'react';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/navbar"
import { Link } from "react-router-dom"
import { useParams} from "react-router"
import axios from "axios"; 
import Chart from "../../components/chart/Chart"
import TableSingle from "../../components/table-single/Tablesingle"

 class Singleships extends React.Component {
  constructor(props){ 
    super(props); 

    this.state = { ships: []}

    
  }
  componentDidMount(){ 
    axios.get('http://localhost:5000/Shipsroute/' + this.props.params.shipId )
    .then(res => { 
      const ships = res.data; 
      this.setState({ships}); 
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
            <button key={this.state.ships._id}  className="editButton"> <Link to={ "/ships/" + this.state.ships._id + "/edit" }> Edit</Link></button>
            <div className="item"> 
              <div className="detail">
                <h4 className="itemTitle">{this.state.ships.nameofShip}</h4>
                <div className="detailItem">
                  <span className="itemKey"> Number: </span>
                  <span className="itemValue">{this.state.ships.numberShip}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey"> Member: </span>
                  <span className="itemValue">{this.state.ships.numberofmember}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey"> Status: </span>
                  <span className="itemValue">{this.state.ships.Status}</span>
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
  return <Singleships 
    {...props}
    params = {useParams()}

  />
};