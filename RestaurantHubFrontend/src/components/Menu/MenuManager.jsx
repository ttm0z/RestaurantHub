import React from "react";
import { Link } from "react-router-dom";
import "./MenuManager.css"

const MenuManager = () => {
    
    return (
        <div className="menu-mgmt-body">
            <h3>Menu Management</h3>
            <div className="menu-mgmt">
                <div className="menu-panel" >
                    <h3>Menus</h3>
                    <div className="ctrl-panel">
                        <Link to={'/'}> <button>Dashboard</button> </Link>
                        <Link to={'/menus/create'}> <button>Create Menu</button> </Link>
                        <Link to={'/'}> <button>Dashboard</button> </Link>
                    </div>

                    {/* add menu list */}
                </div>
            </div>
        </div>
        
        
        
        
    );
};

export default MenuManager;