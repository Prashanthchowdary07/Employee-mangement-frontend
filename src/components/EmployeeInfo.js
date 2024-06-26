import React from "react";
import { useEffect,useState } from "react";
import{useParams}from "react-router";
import { getEmployeeById } from "./Service/EmployeeService";

const EmployeeInfo = ()=>{
    
    const[empName, setEmpName] = useState('')
   const [empId, setEmpId] = useState(0)
const[empsalary, setEmpSalary] = useState (0-0)
const [mobileNum, setMobileNumber] =useState('')
const[email, setEmail]=useState('')
const [age, setAge] =useState(0) 
const [department, setDepartment]=useState('')
// const (gender, setGender]=useState("*)
const [designation, setdesignation]=useState('')

const {id}=useParams();
useEffect(()=>{

    if(id){
        getEmployeeById(id).then((response) =>{
            setEmpName(response.data.empName)
            setEmpId(response.data.empId)
            setEmpSalary(response.data.empSalary)
            setMobileNumber(response.data.mobileNum)
            setEmail(response.data.email)
            setAge(response.data.age)
            setDepartment(response.data.department)
            setdesignation(response.data.designation)
        }).catch(error => {
            console.log(error)
        })
    }

}, [id])





return (
    <div>
        <h1>Employee Information</h1>
        <h3>Employee Name :{empName}</h3>
        <h3>Employee Id :{empId}</h3>
        <h3>Employee Salary :{empsalary}</h3>
        <h3>Mobile Num:{mobileNum}</h3>
        <h3>Email :{email}</h3>
        <h3>Age :{age}</h3>
        <h3>Department :{department}</h3>
        <h3>Designation :{designation}</h3>
    </div>
);
};

export default EmployeeInfo;