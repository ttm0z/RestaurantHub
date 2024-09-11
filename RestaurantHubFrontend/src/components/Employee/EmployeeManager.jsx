import { Link } from "react-router-dom";
import useEmployees from "../../hooks/useEmployees";
import { FaHome, FaPlusCircle } from "react-icons/fa";
import "./EmployeeManager.css"
const EmployeeManager = () => {
    
    const {employees, loading, error} = useEmployees();

    return (
        <>
            <div className="panel">
                <h2>Employee Manager</h2>
                
                <Link to={`/`}>
                    <FaHome className="icon"/>
                </Link>
                
                
            </div>
            <div className="panel">
                <h3>Employees</h3>
                <Link to={`/employees/create`}>
                    <FaPlusCircle className="icon"/>
                </Link>
            </div>
            
            <div className="employee-list">
                
                {employees && employees.map(employee => (
                    <div className="employee">
                        <h3>{employee.firstName} {employee.lastName}</h3>
                        <p>{employee.category}</p>
                        <p>$ {employee.salary} / hr</p>
                    </div>
                    
                ))}
            </div>
        </>
    );
};

export default EmployeeManager;