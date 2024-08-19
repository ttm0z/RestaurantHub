import React from "react";
import { Link } from "react-router-dom";
import './Dashboard.css'
const Dashboard = () => {
    
    return (
        <div>
            <h1 className="dashboard-header">RestaurantHub Version 0.1</h1>
            <ul>
                <h3>To Do</h3>
                <li>Populate database with some test data.</li>
                <li>Elaborate further on use case analysis</li>
                <li>Build out UI Components to fetch and serve existing data and post new data to database</li>
            </ul>
            <div className="panel">
                
                <Link to = {'/menu-mgmt'}>
                    <button>Menu Manager</button>
                </Link>

                <Link to = {'/menu-item-mgmt'}>
                    <button>Menu Item Manager</button>
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