import React, { useState } from "react";

const Signup= () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setPasswordMatch(false);
            return;
        }
        setPasswordMatch(true);
        console.log("Form submitted:", formData);
    }

    return (
        <div>
            <h2>User Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                         <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Gender:</label>Male
                    
                        <input type="radio"
                        name="gen"
                        value={formData.Male}
                        onChange={handleChange}
                        required/>
                    Female <input
                    type="radio"
                    name="gen"
                    value={formData.Male}
                    onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <label for="qual">Qualification:</label>
                  
                        <select name="qual">
                        <option value="select">select</option>
                        <option value="Btech">Btech</option>
                        <option value="Mtech">Mtech</option></select>
                       
                    
                </div>
                    {!passwordMatch && <p style={{ color: "red" }}>Passwords do not match</p>}
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup