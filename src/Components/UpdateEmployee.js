
import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';
import {Link,useParams} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
class UpdateEmployee extends Component {
    constructor(props){
        super(props);
        this.state ={
             id: this.props.params.id,
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
        // this.updateHandler=this.updateHandler.bind(this)
        this.updateEmployee = this.updateEmployee.bind(this);
        // this.cancel = this.cancel.bind(this);
    }
    componentDidMount(){
        //const {paramid} = this.props.params;
        EmployeeService.getEmployeeById(this.state.id).then((res)=>{
            let employee = res.data;
            console.warn("response employee ",employee,employee.name);
            this.setState({name:employee.name,
                 email:employee.email, 
                 domain:employee.domain,
                 dob:employee.dob,
                 qualification:employee.qualification,
                 address:employee.address,
                 password:employee.password,
                 experiance:employee.experiance,
                 contact:employee.contact
                 
                });
        });
    }
    updateEmployee = (e)=>{
        e.preventDefault();
        let employee = {name:this.state.name,
            email:this.state.email,
            dob:this.state.dob,
            qualification:this.state.qualification,
            domain:this.state.domain,
            address:this.state.address,
            password:this.state.password,
            contact:this.state.contact,
            experiance:this.state.experiance
        }
        console.warn("before update employee =>",employee,employee.name,this.state.id);
        console.warn("employee =>"+JSON.stringify(employee));

        EmployeeService.updateEmployeeDetail(employee,this.state.id).then((res)=>{
            this.props.history("/employees");
            console.warn("after update employee =>",employee,employee.name,this.state.id);
            console.warn("after update res =>",res.data);
        })

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
                         <h3 className='text-center'>Update Employee</h3>
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
                                <button className='btn btn-success' onClick={this.updateEmployee}>Update</button>
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

// export default (UpdateEmployee);

// export default (props) => (
//     <UpdateEmployee history={useNavigate()} />
//   );
// export default (props) => (
//     <AddEmployee history={useNavigate()} />
//   );
export default (props) => (
    <UpdateEmployee
        {...props}
        params={useParams()}
        history={useNavigate()}
    />
);