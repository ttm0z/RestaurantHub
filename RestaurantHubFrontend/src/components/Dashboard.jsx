import React from "react";
import { Link } from "react-router-dom";
import './Dashboard.css'

const Dashboard = () => {
    
    return (
        <>
            <div className="panel">
                <h2>Dashboard</h2>
                <Link to = {'/menus'}>
                    <button>Menu Manager</button>
                </Link>

                <Link to = {'/menu-items'}>
                    <button>Menu Item Manager</button>
                </Link>

                <Link to = {'/orders'}>
                    <button>Order Manager</button>
                </Link>

                <Link to = {'/tickets'}>
                    <button>Ticketing System</button>
                </Link>

                <Link to = {'/service-areas'}>
                    <button>Service Areas</button>
                </Link>

                <Link to = {'/employees'}>
                    <button>Employee Management</button>
                </Link>
            
            </div>
            
            <ul>
                <h3>To Do -- Sept. 4, 2024</h3>
                <li>Conduct more detailed Use Case Analysis</li>
                <li>UI Prototyping. Finalize UI designs early</li>

            </ul>
            <div className="dashboard-panel">
                


            </div>
            
        </>
        
        
    );
};

export default Dashboard;