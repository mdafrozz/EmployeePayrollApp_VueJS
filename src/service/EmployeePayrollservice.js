import axios from 'axios';

const BASE_URL = 'http://localhost:8080/employeepayrollservice';

class EmployeePayrollService{

    getAllEmployees(){
        return axios.get(`${BASE_URL}/getall`);
    }

    addEmployee(data){
        return axios.post(`${BASE_URL}/create`, data)
    }

    deleteEmployee(id) {
        return axios.delete(`${BASE_URL}/delete/${id}`);
      }
    
    getEmployee(id) {
        return axios.get(`${BASE_URL}/get/${id}`);
      }
    
    updateEmployee(id, data) {
        return axios.put(`${BASE_URL}/update/${id}`, data);
      }
}

export default new EmployeePayrollService();