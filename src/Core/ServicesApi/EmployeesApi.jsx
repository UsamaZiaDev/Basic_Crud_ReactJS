import axios from "axios"


class EmployeesApi {

    employeeApi (){
        return axios.get("http://localhost:3002/employees")
    }




}
export default new EmployeesApi()