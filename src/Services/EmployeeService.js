import axios from "axios";
const EMPLOYEE_API_BASE_URL = "http://localhost:9696/api/v1/employees";
const ADD_EMPLOYEE_URL = "http://localhost:9696/api/v1/employees/add";
const GET_EMPLOYEE_BY_ID_URL = "http://localhost:9696/api/v1/employees/";
class EmployeeService{
    getEmployee(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    addEmployee(employee){
        return axios.post(ADD_EMPLOYEE_URL,employee);
    }
    getEmployeeById(id){
        return axios.get(EMPLOYEE_API_BASE_URL+'/'+id);
    }
    updateEmployeeDetail(employee,id){
        return axios.put(EMPLOYEE_API_BASE_URL+'/'+id,employee);
    }
    deleteEmployeeDetail(id){
        return axios.delete(EMPLOYEE_API_BASE_URL+'/'+id);
    }
}
export default new EmployeeService();