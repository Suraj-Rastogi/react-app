import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import {Link,useParams} from 'react-router-dom';

class ListEmployees extends Component {
     
    constructor(props) {
        super(props);
        this.state = {
            // id: this.props.params.id,
            employees: []
        }
        // this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }
    // addEmployee(){
    //     this.props.history.push('/employees/add'); 
        
    // }
    deleteEmployee=(id)=>{
        // e.preventDefault();
        console.warn("Hello jii");
        console.warn("user param id :",id);
        EmployeeService.deleteEmployeeDetail(id).then((res)=>{
            console.warn("response",res.data);
            alert("Do you want to Delete this user!");
            //window.location.reload(false);
            this.props.history("/employees/add");
            
        })
    }
    editEmployee(employeeid){
        this.props.history('/employees/update/'+employeeid);
    }

    componentDidMount() {
        //call rest api services
        EmployeeService.getEmployee().then((res) => {
            this.setState({ employees: res.data });
        })
    }
    render() {
        return (
            <div>
                {/* <h2 className='text-center'>Employee List</h2> */}
                <div className='row'>
                <h2 className='text-center'>Employee List</h2>
                    <Link to="/employees/add"><button className='btn btn-primary' >Add Employee</button></Link>
                    {/* <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button> */}
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>DOB</td>
                                <td>Qualification</td>
                                <td>Domain</td>
                                <td>Password</td>
                                <td>Address</td>
                                <td>Contact</td>
                                <td>Experience</td>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map((employee) => {
                                    return (
                                        <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>{employee.name}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.dob}</td>
                                            <td>{employee.qualification}</td>
                                            <td>{employee.domain}</td>
                                            <td>{employee.password}</td>
                                            <td>{employee.address}</td>
                                            <td>{employee.contact}</td>
                                            <td>{employee.experiance}</td>
                                            <td><Button  onClick={()=>this.deleteEmployee(employee.id)} variant="danger">Delete</Button></td>
                                            <td><Button  onClick={()=>this.editEmployee(employee.id)} className="btn btn-info" >Update</Button></td>
                                            {/* hello variant="warning" */}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        );
    }
}

// export default ListEmployees;

// export default (props) => (
//     <ListEmployees
//     {...props}
//     params={useParams()}
//      history={useNavigate()} />
//   );
  export default (props) => (
    <ListEmployees
     history={useNavigate()} />
  );

//   export default (props) => (
//     <UpdateEmployee
//         {...props}
//         params={useParams()}
//         history={useNavigate()}
//     />
// );