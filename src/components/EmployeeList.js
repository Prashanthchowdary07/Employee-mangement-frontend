import React, { useEffect } from "react";
import { useState } from "react";
import { deleteEmployee, getAllEmployee } from "./Service/EmployeeService";
import {Link, Outlet, useNavigate} from 'react-router-dom'

const EmploeeList=()=>{
    const[searchTerm,setSearchTerm]=useState("");
    const navigate=useNavigate();
    const[employee,setEmployee]=useState([])



    
const handleEmployeeInfo = (id) =>{
    navigate(`/employeeInfo/${id}`);
}
    
const deleteEmp=(id)=>{
    deleteEmployee(id).then((response)=>{
            getAllEmpoyeeInfo()
            console.log(response)
         })
         .catch((error)=>console.log("unable to delete"+error))
}

    
   


const updateEmp=(id)=>{
    navigate(`/updateEmp/${id}`);
}



// const employee = [
//     {id:1,name:"rahul"},
//     {id:2,name:"rakesh"},
//     {id:3,name:"ramesh"},
//     {id:4,name:"rohan"}
// ]
  useEffect(()=>{
    getAllEmpoyeeInfo();
},[])



  const getAllEmpoyeeInfo=()=>{
    getAllEmployee().then((response)=>{
        setEmployee(response.data)
        console.log(response.data);

    }).catch(error=>{
        console.log(error);

    })
  }
  const logout=()=>{
    navigate("/logout")
  }
  

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-info flex">
            <ul class="navbar-nav mr-auto">
             <li class="nav-item active">
             <Link class="nav-link" to="/home" >Home</Link>
             </li>
             <li class="nav-item" >
                <Link class="nav-link" to="/AddEmployee" >AddEmployee</Link>
            </li>
            </ul>
            </nav>
            <Outlet />
            <div>
                <table border="3px">
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Employee Name</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                      
                        {employee.map(employee=>(
                            <tr key={employee.empid}>
                                <td>{employee.empid}</td>
                                <td>{employee.empName}</td>
                        
                             
                                <td>
                        
                        
                           
                            <button className="btn btn-danger" onClick={()=>deleteEmp(employee.empid)}>Delete</button>
                            <button className="btn btn-success" onClick={()=>updateEmp(employee.empid)}>Update</button>
                            <button className="btn btn-info" onClick={()=>handleEmployeeInfo(employee.empid)}>Info</button>
                        
                            </td>
                            </tr>
                           ))} 
                    </tbody>
                </table>
                <div className="center">
                <button className="btn btn-primary" type="submit" onClick={logout}>Logout</button>
            </div>
            </div>
        </div>
    )
}

export default EmploeeList