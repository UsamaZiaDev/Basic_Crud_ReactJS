import { useEffect, useState } from "react"
import TableList from "../Common/TableList/TableList"
import EmployeesApi from './../../Core/ServicesApi/EmployeesApi'
import  { AiFillFileAdd}  from "react-icons/ai";

const Index = () => {
    const tableHead = ["No", "Employee Name", "Department", 'Designation', 'Project', 'Work Mode', 'Action']
    const [emloyeesList, setEmloyeesList] = useState([])


    useEffect(()=>{
      EmployeesApi.employeeApi()
      .then(val => setEmloyeesList(val?.data))
    },[])

    console.log("employee_list__", emloyeesList)
    
  return (
    <>
       <div className="d-flex justify-content-between align-items-center">
          <h2>Employee list</h2>
          <button className="btn btn-dark d-flex align-items-center fw-bold">
            <AiFillFileAdd className="fs-4 me-2"/>
            Add New Employee
          </button>
        </div> 
       
       <TableList
            tableHead={tableHead}
            listObj={emloyeesList}
       />
       
    </>
  )
}

export default Index