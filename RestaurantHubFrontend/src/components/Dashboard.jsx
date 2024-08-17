import React from "react";
import { Link } from "react-router-dom";
import './Dashboard.css'
const Dashboard = () => {
    
    return (
        <div>
            <h1 className="dashboard-header">RestaurantHub Version 0.1</h1>
            <ul>
                <h3>To Do</h3>
                <li>Design initial database schema. Populate with test data.</li>
                <li>Design Prototype OrderManagement module using test data</li>
                <li>Elaborate further on use case analysis</li>
            </ul>
            <div className="panel">
                
                <Link to = {'/menu-mgmt'}>
                    <button>Menu Manager</button>
                </Link>

                <Link to = {'/order-mgmt'}>
                    <button>Order Manager</button>
                </Link>

                <Link to = {'/ticket-mgmt'}>
                    <button>Ticketing System</button>
                </Link>

            </div>
            
        </div>
        
        
    );
};

export default Dashboard;