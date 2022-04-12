import React, { Component } from 'react'
// import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"
import './createship.scss'
import axios from 'axios';


export default class CreateShips extends Component {
  constructor(props){ 
    super(props); 

    // Khai báo các hàm sử dụng để thay đổi dữ liệu 
    this.onChangeNumberofShip = this.onChangeNumberofShip.bind(this); 
    this.onChangeNameofShip = this.onChangeNameofShip.bind(this);
    this.onChangeNumberofmember = this.onChangeNumberofmember.bind(this);
    // this.onChangeDayout = this.onChangeDayout.bind(this);
    // this.onChangeDayin = this.onChangeDayin.bind(this);
    // this.onChangeFuel = this.onChangeFuel.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    // this.onChangenote = this.onChangenote.bind(this);

    // khai báo hàm để submit dữ liệu sau khi thay đổi 
    this.onSubmit = this.onSubmit.bind(this); 

    
    // khai báo các trường dữ liệu ban đầu vào trong state
    this.state = { 
      numberShip : '', 
       nameofShip  : '', 
       numberofmember : '', 
      //  Dayout: new Date(), 
      //  Dayin: new Date(), 
      //  Fuel: '', 
       Status:'',
      //  note: ''
    }
  }

    //thành phần đã gắn kết 
    componentDidMount(){ 
      this.setState({
        nameofShip: ''
      })
    }

    // thay đổi các trường trong dữ liệu của tàu 

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


    // onChangeDayout(date){ 
    //   this.setState({ 
    //     Dayout: date
    //   }); 
    // }

    // onChangeDayin(date){ 
    //   this.setState({ 
    //     Dayin: date
    //   }); 
    // }

    // onChangeFuel(e){ 
    //   this.setState({ 
    //     Fuel: e.target.value
    //   }); 
    // }

    // onChangenote(e){ 
    //   this.setState({ 
    //     note: e.target.value
    //   }); 
    // }

    //Submit các dữ liệu được thay đổi 

    onSubmit(e){ 
      e.preventDefault();

      const ship = { 
        numberShip: this.state.numberShip, 
        nameofShip: this.state.nameofShip, 
        numberofmember: this.state.numberofmember, 
        // Dayout: this.state.Dayout, 
        // Dayin: this.state.Dayin, 
        // Fuel: this.state.Fuel, 
        Status: this.state.Status,
        // note: this.state.note
      }
      
      axios.post('http://localhost:5000/Shipsroute/add',ship)
      .then(res => {
        console.log(res); 
        console.log(res.data)
      });
      
      ; 

        
        window.alert("Ship was added");
        window.location = "/ships";
    }
     
    
    

  render() {
    return (
      <div className='container'>        
            {/* đây là form để nhập  */}
          <form onSubmit={this.onSubmit} > 
            <div className='formInput'> 
              <input
              className='datepicker'
              required
              type='text'
              autoComplete='off'
              id="numberShip"
              placeholder='The Number'
              value={this.state.numberShip} 
              onChange={this.onChangeNumberofShip}
              /> 
            </div>

            <div className='formInput'>
            <input
              className='datepicker'
              required
              id="nameofship"
              type='text'
              autoComplete='off'
              placeholder="Name of ships"
              value={this.state.nameofShip} 
              onChange={this.onChangeNameofShip}
            />
            </div>
            
            <div className='formInput'> 
              <input
              required
              className='datepicker'
              id="numberofmember"
              type ="number"
              placeholder="Members"  
              value={this.state.numberofmember} 
              onChange={this.onChangeNumberofmember}
            /> 
            </div>

            {/* <div className='formInput'>
              <input 
                required
                className='datepicker'
                type="number"
                placeholder = "Fuel"
                value={this.state.Fuel}
                onChange={this.onChangeFuel}
                />
            </div>
            <div className='formInput'>
              <input 
              className='datepicker'
              id="note"
              autoComplete='off'
              type='text'
              placeholder = "Note"
              value={this.state.note}
              onChange={this.onChangenote}
              />
            </div> */}

            <div className='formInput'>
              <input 
              className='datepicker'
              id="Status"
              autoComplete='off'
              type='text'
              placeholder = "Status"
              value={this.state.Status}
              onChange={this.onChangeStatus}
              />
            </div>

            {/* <div className='formInput'>
              <DatePicker 
              className='datepicker'
              selected={this.state.Dayout}
              onChange={this.onChangeDayout}
              />
            </div>

            <div className='formInput'> 
              <DatePicker 
              className='datepicker'
              selected={this.state.Dayin}
              onChange={this.onChangeDayin}
              minDate={this.state.Dayout}
              />
            </div> */}

            <button
            type='submit'
            >
              Create
            </button>

          </form>
          
      </div>
    )
  }
}


