import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
import axios from "axios"
import "./datatable.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';


export default class DataTable extends React.Component {
  constructor(props){ 
    super(props); 

    this.state = { ships: []}
  }

  componentDidMount(){ 
    axios.get('http://localhost:5000/Shipsroute/')
    .then(res => { 
      const ships = res.data; 
      this.setState({ships}); 
    })
  }


  deleteShip(id){ 
    axios.delete('http://localhost:5000/Shipsroute/' + id)
    .then( res => console.log(res.data)); 
    this.setState({
      ships : this.state.ships.filter(sl => sl._id !== id)
    })
  }


  render(){
  return (
  <div className='datatable'>
    <TableContainer className='containertable' component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='tableheader'>
          <TableRow >
            <TableCell className='tableCell'>Number</TableCell>
            <TableCell className='tableCell'>Name</TableCell>
            <TableCell className='tableCell'>Member</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
            <TableCell className='tableCell'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.ships.map((row) => (
            <TableRow
              key={row.numberShip}  
            
            >
              <TableCell component="th" scope="row">
                {row.numberShip}
              </TableCell>
              <TableCell className='tableCell'>{row.nameofShip}</TableCell>
              <TableCell className='tableCell'>{row.numberofmember}</TableCell>
              <TableCell className='tableCell'>
                <span className={`Status ${row.Status}`}> 
                {row.Status}
                </span>
                </TableCell>
              <TableCell className='tableCell'>
                <button className='viewButton' > <Link to={ "/ships/" + row._id + "/view" } className ='link' >View  </Link></button>
                <button className='deleteButton'  onClick={() =>{this.deleteShip(row._id)}}>   Delete</button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
  }
}