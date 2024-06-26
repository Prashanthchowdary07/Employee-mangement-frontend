import React, {  useState,useRef } from "react";
import { useNavigate } from "react-router";
//Usage of useRef and useEffect
const Login=()=>{
   const [uname,setUname]=useState("")
   const [pwd,setPwd]=useState("")
   const navigate = useNavigate();

const handleUname=(e)=>{
    setUname(e.target.value)
}

const handlePwd=(e)=>{
    setPwd(e.target.value)
}

const formSubmit=(e)=>{
    e.preventDefault();
    console.log(uname+ " "+pwd)
    if(uname==="prashanth" && pwd==="12345")
    navigate("/employeelist")
    else
    alert("Invalid credentials")
}

const logout=()=>{
    navigate("/logout")
}


    return (
     
    
        <div className="container" >
           
            <form className="form-group" 
            id="myForm" onSubmit={formSubmit}>
                <label className="form-label" htmlFor="uname">Uname</label>
                <input className="form-control" 
                type="text"
                name="uname"
                id="uname"
                 onChange={handleUname}
                placeholder="Enter username"></input>


                <label className="form-label" htmlFor="pwd">Password</label>
                <input className="form-control" 
                 onChange={handlePwd}
                    type="password"
                    name="pwd"
                    id="pwd"
                    placeholder="Enter password"></input>
                <button className="btn btn-primary" 
                type="submit" >Submit</button>

            <button className="btn btn-success" 
                type="submit" onClick={logout}>Logout</button>

            </form>
        </div>
       
  
     
)

    
}
export default Login