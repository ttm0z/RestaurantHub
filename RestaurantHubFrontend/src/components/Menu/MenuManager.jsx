import React from "react";
import { Link } from "react-router-dom";

import MenuList from './MenuList';

import "./MenuManager.css"

const MenuManager = () => {
    
    return (    
        <div className="menu-mgmt">
            <div className="menu-panel" >
                <h3>Menus</h3>
                <div className="ctrl-panel">
                    <Link to={'/'}> <button>Dashboard</button> </Link>
                    <Link to={'/menus/create'}> <button>Create Menu</button> </Link>
                </div>
            </div>
            <MenuList />
        </div>
        
        
        
        
        
    );
};

export default MenuManager;