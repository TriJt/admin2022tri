
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import axios from "axios"; 

export default class TableSingle extends React.Component {
    constructor(props){ 
      super(props); 
  
      this.state = { trips: []}
    }
  
    componentDidMount(){ 
      axios.get('http://localhost:5000/Triprouter/')
      .then(res => { 
        const trips = res.data; 
        this.setState({trips}); 
      })
    }
  
    
  
  
  
    render(){
    return (
      
      <div className='datatable'>
        <div className="title"><h3> LIST OF THE TRIP</h3> </div>
        
      <TableContainer className='containertable' component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className='tableheader'>
            <TableRow >
              <TableCell className='tableCell'>NumberShip</TableCell>
              <TableCell className='tableCell'>Dayout</TableCell>
              <TableCell className='tableCell'>Dayin</TableCell>
              <TableCell className='tableCell'>Fuel</TableCell>
              <TableCell className='tableCell'>Revenue</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.trips.map((row) => (
              <TableRow
                key={row._id}  
              
              >
                <TableCell className='tableCell' >{row.numberShip}</TableCell>
                <TableCell className='tableCell'>{row.dayout}</TableCell>
                <TableCell className='tableCell'>{row.dayin}</TableCell>
                <TableCell className='tableCell'>{row.fuel}</TableCell>
                <TableCell className='tableCell'>{row.revenue}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    );
    }
  }