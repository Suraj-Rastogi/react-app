import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import EmployeeService from '../Services/EmployeeService';
// import {useHistory} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
class AddEmployee extends Component {
    constructor(props){
        super(props);
        this.state ={
            name:'',
            email:'',
            dob:'',
            qualification:'',
            domain:'',
            address:'',
            password:'',
            experiance:'',
            contact:''

        }
        this.changeNamehandler = this.changeNamehandler.bind(this);
        this.changeEmailhandler = this.changeEmailhandler.bind(this);
        this.changeDobhandler = this.changeDobhandler.bind(this);
        this.changeQualificationhandler = this.changeQualificationhandler.bind(this);
        this.changeDomainhandler = this.changeDomainhandler.bind(this);
        this.changePasswordhandler = this.changePasswordhandler.bind(this);
        this.changeAddresshandler = this.changeAddresshandler.bind(this);
        this.changeContacthandler = this.changeContacthandler.bind(this);
        this.changeExperiancehandler = this.changeExperiancehandler.bind(this);
       


        this.saveEmployee = this.saveEmployee.bind(this);
        // this.cancel = this.cancel.bind(this);
    }
    saveEmployee = (e)=>{
        e.preventDefault();
        let employee = {
            name:this.state.name,
            email:this.state.email,
            dob:this.state.dob,
            qualification:this.state.qualification,
            domain:this.state.domain,
            address:this.state.address,
            password:this.state.password,
            contact:this.state.contact,
            experiance:this.state.experiance
        }
        console.warn("employee =>"+JSON.stringify(employee));

        EmployeeService.addEmployee(employee).then((res)=>{
                    this.props.history("/employees");
        });
    }
    // cancel=(e)=>{
    //     e.preventDefault();
    // }
    changeNamehandler=(e)=>{
        this.setState({name:e.target.value});
    }
    changeEmailhandler=(e)=>{
        this.setState({email:e.target.value});
    }
    changeDobhandler=(e)=>{
        this.setState({dob:e.target.value});
    }
    changePasswordhandler=(e)=>{
        this.setState({qualification:e.target.value});
    }
    changeDomainhandler=(e)=>{
        this.setState({domain:e.target.value});
    }
    changeAddresshandler=(e)=>{
        this.setState({address:e.target.value});
    }
    changeContacthandler=(e)=>{
        this.setState({contact:e.target.value});
    }
    changePasswordhandler=(e)=>{
        this.setState({password:e.target.value});
    }
    changeExperiancehandler=(e)=>{
        this.setState({experiance:e.target.value});
    }
    changeQualificationhandler=(e)=>{
        this.setState({qualification:e.target.value});
    }
    render() {
        return (
            <div className='container'>
                <br/> <br/>
                <div    className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                         <h3 className='text-center'>Add Employee</h3>
                         <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label>Name:</label>
                                    <input type='text' name="name" className='form-control' placeholder='Enter Name' 
                                    value={this.state.name} onChange={this.changeNamehandler} />
                                </div><br/>
                                <div className='form-group'>
                                    <label >Email:</label>
                                    <input type='email' name="email" className='form-control' placeholder='Enter Email' 
                                    value={this.state.email} onChange={this.changeEmailhandler} />
                                </div><br/>
                                <div className='form-group'>
                                    <label>Date Of Birth:</label>
                                    <input type='text' name="dob" className='form-control' placeholder='Enter Date of Birth' 
                                    value={this.state.dob} onChange={this.changeDobhandler} />
                                </div><br/>
                                <div className='form-group'>
                                    <label>Qualification:</label>
                                    <input type='text' name="qualification" className='form-control' placeholder='Enter Qualification' 
                                    value={this.state.qualification} onChange={this.changeQualificationhandler} />
                                </div><br/>
                                <div className='form-group'>
                                    <label>Domain:</label>
                                    <input type='text' name="domain" className='form-control' placeholder='Enter Domain' 
                                    value={this.state.domain} onChange={this.changeDomainhandler} />
                                </div><br/>
                                <div className='form-group'>
                                    <label>Password:</label>
                                    <input type='password' name="password" className='form-control' placeholder='Enter Password' 
                                    value={this.state.password} onChange={this.changePasswordhandler} />
                                </div><br/>
                                <div className='form-group'>
                                    <label>Address:</label>
                                    <input type='text' name="address" className='form-control' placeholder='Enter Address' 
                                    value={this.state.address} onChange={this.changeAddresshandler} />
                                </div><br/>   
                                <div className='form-group'>
                                    <label>Contact:</label>
                                    <input type='number' name="contact" className='form-control' placeholder='Enter Contact' 
                                    value={this.state.contact} onChange={this.changeContacthandler} />
                                </div><br/>
                                <div className='form-group'>
                                    <label>Experiance:</label>
                                    <input type='text' name="experiance" className='form-control' placeholder='Enter Experiance' 
                                    value={this.state.experiance} onChange={this.changeExperiancehandler} />
                                </div><br/>
                                <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                                <Link to="/employees"><button className='btn btn-danger'  style={{marginLeft:"10px"}}>Cancel</button></Link>
                            </form>
                         </div>
                    </div>

                </div>
                <br/><br/>
            </div>
        );
    }
}

// export default AddEmployee;
export default (props) => (
    <AddEmployee history={useNavigate()} />
  );
