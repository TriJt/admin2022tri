import * as React from 'react';
import axios from "axios"; 
import "./datauser.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';


export default class Datauser extends React.Component {
  constructor(props){ 
    super(props); 

    this.state = { users: []}
  }

  componentDidMount(){ 
    axios.get('http://localhost:5000/Userroute/')
    .then(res => { 
      const users = res.data; 
      this.setState({users}); 
    })
  }

  deleteUser(id){ 
    axios.delete('http://localhost:5000/Userroute/' + id)
    .then( res => console.log(res.data)); 
    this.setState({
      users : this.state.users.filter(sl => sl._id !== id)
    })
  }



  render(){
  return (

    <div className='datatable'>
    <TableContainer className='containertable' component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='tableheader'>
          <TableRow >
            <TableCell className='tableCell'>Name</TableCell>
            <TableCell className='tableCell'>Address</TableCell>
            <TableCell className='tableCell'>Telephone</TableCell>
            <TableCell className='tableCell'>NumberShip</TableCell>
            <TableCell className='tableCell'>Position</TableCell>
            <TableCell className='tableCell'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.users.map((row) => (
            <TableRow
              key={row._id}  
            
            >
              <TableCell className='tableCell' >{row.name}</TableCell>
              <TableCell className='tableCell'>{row.address}</TableCell>
              <TableCell className='tableCell'>(+84)  {row.telephone}</TableCell>
              <TableCell className='tableCell'>{row.numbership}</TableCell>
              <TableCell className='tableCell'>
                <span className={`position ${row.position}`}>{row.position}</span>
                </TableCell>
              <TableCell className='tableCell'>
                <button className='viewButton' > <Link to={ "/users/" + row._id + "/view" } className ='link' >View  </Link></button>
                <button className='deleteButton'  onClick={() =>{this.deleteUser(row._id)}}>   Delete</button>
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