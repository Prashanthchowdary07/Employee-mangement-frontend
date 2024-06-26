//import { Alert } from "bootstrap";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Home=(props)=>{
    const Navigate=useNavigate();


    const login=()=>{
        Navigate("/login")

    }
    const signup=()=>{
        Navigate("/Signup")
        
    }
    const Logout=()=>{
        Navigate("/Logout")
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <ul>
                        <li>name:Prashanth</li>
                        <li>moblie:8106814961</li>
                        <li>mail:prashanthpavuluri52@gmail.com</li>
                    </ul>
                </div>
                <div className="col-6">
                <form className="form-group">
                    <div>
                        <img src=""></img>
                    </div>
                    {props.isLoggedIn?
                    <button className="btn btn-success">Logout</button>
                :<>
                <button className="btn btn-primary"type="button"onClick={login}>Login</button>
                <button className="btn btn-primary"type="button"onClick={signup}>Signup</button>
                </>}
            </form>
                </div>
            </div> 
            <h1>
                Wellcome User
            </h1>
           
        </div>
    )
}
export default Home