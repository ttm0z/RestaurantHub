import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useCreateEmployee from '../../hooks/useCreateEmployee';

import "./CreateEmployee.css";
import { FaArrowCircleLeft, FaPlusCircle } from 'react-icons/fa';

const CreateEmployee = () => {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [category, setCategory] = useState('');
    const [salary, setSalary] = useState('');
    const [email, setEmail] = useState('');
    
    const { createEmployee, loading, error } = useCreateEmployee();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newEmployee = {
            firstName,
            lastName,
            category,
            salary,
            email
        };

        try {
            const employee = await createEmployee(newEmployee);
            console.log("Employee Created Successfully: ", employee);
            
        } catch (error) {
            console.error('Error creating employee:', error);
        }
    };

    return (
        <div className="create-employee-container">
            <div className="panel">
                <h2>Create New Employee</h2>
            </div>
            <div className="create-employee-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="employeeFirstName">First Name:</label>
                    <input
                        type="text"
                        id="employeeFirstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />

                    <label htmlFor="employeeLastName">Last Name:</label>
                    <input
                        type="text"
                        id="employeeLastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />

                    <label htmlFor="employeeCategory">Category:</label>
                    <input
                        type="text"
                        id="employeeCategory"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />

                    <label htmlFor="employeeSalary">Salary:</label>
                    <input
                        type="number"
                        id="employeeSalary"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        required
                    />

                    <label htmlFor="employeeEmail">Email:</label>
                    <input
                        type="string"
                        id="employeeEmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <button className="invisible-button" type="submit">
                        <FaPlusCircle className="icon" />
                    </button>
                </div>
            </form>
            </div>


            <Link to={`/employees`}>
                <FaArrowCircleLeft className="icon" /> 
            </Link>
        </div>
    );
};

export default CreateEmployee;
