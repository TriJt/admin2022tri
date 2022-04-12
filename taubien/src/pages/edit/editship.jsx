import  * as React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/navbar"
import axios from "axios"; 
import './editship.scss'
import { useParams } from 'react-router-dom';

class Editship extends React.Component{
  constructor(props){ 
    super(props); 



    this.onChangeNumberofShip = this.onChangeNumberofShip.bind(this); 
    this.onChangeNameofShip = this.onChangeNameofShip.bind(this);
    this.onChangeNumberofmember = this.onChangeNumberofmember.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    

    // khai báo hàm để submit dữ liệu sau khi thay đổi 
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { ships: []}
    
  }
  
  componentDidMount(){ 
    // axios.get('http://localhost:5000/Shipsroute/' + this.state.ships._id +'/update')
    // .then(res => { 
    //   this.setState({ 
    //     numberShip: res.data.numberShip, 
    //     nameofShip: res.data.nameofShip,
    //     numberofmember: res.data.numberofmember, 
    //     Status: res.data.Status
    //   })
    // });
    
    axios.get('http://localhost:5000/Shipsroute/' + this.props.params.id +'/update' )
    .then(res => { 
      const ships = res.data; 
      this.setState({ships});   
    })
  }

  onChangeNumberofShip(e){ 
    this.setState({ 
      numberShip: e.target.value
    }); 
  }

  onChangeStatus(e){ 
    this.setState({
      Status: e.target.value
    });
  }

  onChangeNameofShip(e){ 
    this.setState({ 
      nameofShip: e.target.value
    }); 
  }

  onChangeNumberofmember(e){ 
    this.setState({ 
      numberofmember: e.target.value
    }); 
  }

  onSubmit(e){ 
    e.preventDefault();

    const ship = { 
      numberShip: this.state.numberShip, 
      nameofShip: this.state.nameofShip, 
      numberofmember: this.state.numberofmember, 
      Status: this.state.Status,
    }
    
    axios.post('http://localhost:5000/Shipsroute/'+this.props.params.id +'/update',ship)
    .then(res => {
      console.log(res); 
      console.log(res.data)
    });
    
    

      
      window.alert("Ship was updated");
      window.location = "/ships";
  }

  render(){
  return (
    <div className='ships'>
     <Sidebar/>
     <div className="shipsContainer">
       <Navbar/> 
       <div className="top">
         <div className="left">
          <h3 className='title'>EDIT SHIP</h3>
          <form onSubmit={this.onSubmit}>
          <div className='formInput'> 
          <label className='labelEdit'> </label>
              <input
              className='datepicker'
              required
              type='text'
              placeholder = 'Number'
              autoComplete='off'
              value={this.state.ships.numberShip} 
              onChange={this.onChangeUsername}
              /> 
            </div>
            <div className='formInput'> 
              <input
              className='datepicker'
              required
              type='text'
              autoComplete='off'
              placeholder='Name'
              value={this.state.nameofShip} 
              onChange={this.onChangeUsername}
              /> 
            </div>
            <div className='formInput'> 
              <input
              className='datepicker'
              required
              type='number'
              autoComplete='off'
              placeholder='Member'
              value={this.state.numberofmember} 
              onChange={this.onChangeUsername}
              /> 
            </div>
            <div className='formInput'> 
              <input
              className='datepicker'
              required
              type='text'
              autoComplete='off'
              placeholder='Status'
              value={this.state.Status} 
              onChange={this.onChangeUsername}
              /> 
            </div>
            <button type='submit' className='editbutton'> 
            Update
            </button>

          </form>

         </div>
         <div className="right">asdasd</div>
       </div>
       <div className="bottom"></div>
     </div>
    </div>
  )
}
}
export default function editship({props}){ 
  return <Editship 
  {...props}
  params = {useParams}
  />
   
}



