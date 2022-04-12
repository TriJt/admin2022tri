import React, { Component } from 'react'
import "react-datepicker/dist/react-datepicker.css"
import './createuser.scss'
import axios from 'axios';


export default class CreateUsers extends Component {
  constructor(props){ 
    super(props); 

    // Khai báo các hàm sử dụng để thay đổi dữ liệu 
    this.onChangeUsername = this.onChangeUsername.bind(this); 
    this.onChangePassword= this.onChangePassword.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeTelephone = this.onChangeTelephone.bind(this);
    this.onChangeSalary = this.onChangeSalary.bind(this);
    this.onChangePosition= this.onChangePosition.bind(this);
    this.onchangeNumbership = this.onchangeNumbership.bind(this);
    this.onChangenote = this.onChangenote.bind(this);

    // khai báo hàm để submit dữ liệu sau khi thay đổi 
    this.onSubmit = this.onSubmit.bind(this); 

    
    // khai báo các trường dữ liệu ban đầu vào trong state
    this.state = { 
        username : '', 
        password  : '', 
        name:'',
        address:'',
        telephone:'',
        salary:'',
        salarys:[],
        position: '',
        positions :[], 
        numbership: '', 
        numberships: [], 
        note: ''
    }
  }

    //thành phần đã gắn kết 
    componentDidMount(){ 
      this.setState({
        positions: ['Position','Captain','Driver','Sailor'],
        position: ''
      });
      this.setState({
        salarys: ['Salary',5000000,6000000,7000000,8000000,9000000,10000000,11000000,12000000], 
        salary: ''
      })

      axios.get('http://localhost:5000/Shipsroute/').then(response => { 
        if(response.data.length > 0) 
        { 
          this.setState({   
            numberships: response.data.map(ships => ships.numberShip), 
            numbership: response.data[0].numbership
          })
        }
      })
    }

    // thay đổi các trường trong dữ liệu của tàu 

    onChangeUsername(e){ 
      this.setState({ 
        username: e.target.value
      }); 
    }

    onChangePassword(e){ 
      this.setState({
        password: e.target.value
      });
    }

    onChangeName(e){ 
      this.setState({ 
        name: e.target.value
      }); 
    }

    onChangeAddress(e){ 
      this.setState({ 
        address: e.target.value
      }); 
    }

    onChangeTelephone(e){ 
        this.setState({ 
        telephone: e.target.value
        }); 
      }

    onChangeSalary(e){ 
      this.setState({ 
        salary: e.target.value
      }); 
    }

    onChangePosition(e){ 
      this.setState({ 
        position: e.target.value
      }); 
    }

    onchangeNumbership(e){ 
      this.setState({
        numbership:e.target.value
      })
    }

    onChangenote(e){ 
      this.setState({ 
        note: e.target.value
      }); 
    }

    //Submit các dữ liệu được thay đổi 

    onSubmit(e){ 
      e.preventDefault();

      const user = { 
        username: this.state.username, 
        password: this.state.password, 
        name: this.state.name, 
        address: this.state.address, 
        telephone: this.state.telephone, 
        salary: this.state.salary, 
        position: this.state.position,
        numbership: this.state.numbership,
        note: this.state.note
      }
      
      axios.post('http://localhost:5000/Userroute/add',user)
      .then(res => {
        console.log(res); 
        console.log(res.data)
      });
      ; 
        window.alert("User was added");
        window.location = '/users'; 
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
              placeholder='Username'
              value={this.state.username} 
              onChange={this.onChangeUsername}
              /> 
            </div>

            <div className='formInput'>
            <input
              className='datepicker'
              required
              type='password'
              autoComplete='off'
              placeholder="Password"
              value={this.state.password} 
              onChange={this.onChangePassword}
            />
            </div>
            
            <div className='formInput'> 
              <input
              required
              className='datepicker'
              type ="text"
              placeholder="Name"  
              value={this.state.name} 
              onChange={this.onChangeName}
            /> 
            </div>

            <div className='formInput'>
              <input 
                required
                className='datepicker'
                autoComplete='off'
                type="text"
                placeholder = "Address"
                value={this.state.address}
                onChange={this.onChangeAddress}
                />
            </div>
            <div className='formInput'>
              <input 
              className='datepicker'
              required
              autoComplete='off'
              type='number'
              
              placeholder = "Telephone"
              value={this.state.telephone}
              onChange={this.onChangeTelephone}
              />
            </div>

            <div className='formInput'>
            <select className='datepicker'
              required
              value={this.state.salary}
              onChange={this.onChangeSalary}            
              > 
              {
                this.state.salarys.map( function(salary){

                  return <option
                  key={salary}
                  value= {salary}>
                    {salary}
                  </option>
                })
              }
              </select>
            </div>
            
            <div className='formInput'>
              <select className='datepicker'
              required
              value={this.state.position}
              onChange={this.onChangePosition}            
              > 
              {
                this.state.positions.map( function(position){

                  return <option
                  key={position}
                  value= {position}>
                    {position}
                  </option>
                })
              }
              </select>
            </div>


            {/* Khi thêm user, số thành viên thuộc tùa được thêm phải +1  **** Quan trọng  */}
            <div className='formInput'>
              <select className='datepicker'
              required
              value={this.state.numbership}
              onChange={this.onchangeNumbership}            
              > 
              {
                this.state.numberships.map( function(numbership){

                  return <option
                  key= {numbership}
                  value= {numbership}>
                    {numbership}
                  </option>
                })
              }
              </select>
            </div>

            <div className='formInput'>
              <textarea
              className='note'
              autoComplete='off'
              type='text'
              placeholder = "Note *"
              value={this.state.Note}
              onChange={this.onChangenote}
              />
            </div>
            <div className='formInput'>
            <button type='submit'>
              Create
            </button>
            </div >
           

          </form>
          
      </div>
    )
  }
}


