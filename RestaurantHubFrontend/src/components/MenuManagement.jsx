import React from "react";
import { Link } from "react-router-dom";
import "./MenuManagement.css"

const MenuManagement = () => {
    
    return (
        <div className="menu-mgmt-body">
            <h3>Menu Management</h3>
        <div className="menu-mgmt">
            <div className="menu-panel" >
                <h3>Menus</h3>
                <div className="ctrl-panel">
                    <button>View Menus</button>
                    <button>Create new Menu</button>
                </div>
            </div>
            
            <div className="menu-items-panel">
                <h3>Menu Items</h3>
                <div className="ctrl-panel">
                    <button>View Menu Items</button>
                    <button>Create Menu Items</button>
                </div>
            
            </div>
            </div>
            <Link to={'/'}> <button>Dashboard</button> </Link>
        </div>
        
        
        
        
    );
};

export default MenuManagement;