import React, { useState} from "react";


function UpdateEmp(props) {
    const [employeeData, setEmployeeData] = useState({
        id: props.employee ? props.employee.id : "",
        name: props.employee ? props.employee.name : "",
        // Add other fields as necessary
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData({
            ...employeeData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
   
        console.log("Updated employee data:", employeeData);
    
    };

    return (
        <> 
            <h1>Update Employee</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Employee Name:</label>
                    <input type="text" id="name" name="name" value={employeeData.name} onChange={handleChange} />
                </div>
                {/* Add other input fields for other employee data */}
                <button type="submit" >Update</button>
            </form>
        </>
    );
}

export default UpdateEmp;