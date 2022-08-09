import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/admin/category";

class CategoryService {

    getCategory() {
        return axios.get(EMPLOYEE_API_BASE_URL, { headers: { "Authorization": `Bearer ${sessionStorage.getItem('token')}` } });
    }

    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee, { headers: { "Authorization": `Bearer ${sessionStorage.getItem('token')}` } });
    }

    async signIn(employee) {
        await axios.post("http://localhost:8080/authenticate", employee)
            .then(function (response) {
                // I need this data here ^^
                console.log(response.data.token);
                return sessionStorage.setItem('token', response.data.token);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    signUp(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL + '/register');
    }

    getEmployeeById(employeeId) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId, { headers: { "Authorization": `Bearer ${sessionStorage.getItem('token')}` } });
    }

    updateEmployee(employee, employeeId) {
        console.log(EMPLOYEE_API_BASE_URL + '/' + employeeId);
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee, { headers: { "Authorization": `Bearer ${sessionStorage.getItem('token')}` } });
    }

    deleteEmployee(employeeId) {
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId, { headers: { "Authorization": `Bearer ${sessionStorage.getItem('token')}` } });
    }
}

export default new CategoryService()