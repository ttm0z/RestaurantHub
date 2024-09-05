import { Link } from "react-router-dom";

const EmployeeManager = () => {
    return (
        <>
            <h3>Employee Manager</h3>
            <ul>
                <li>Get Employees</li>
                <li>Create, Delete Employee</li>
                <li>Update Employee Details</li>
                <li>Other Employee Management Tools</li>
            </ul>
            <Link to={'/'}><button>Dashboard</button></Link>
        </>
    );
};

export default EmployeeManager;