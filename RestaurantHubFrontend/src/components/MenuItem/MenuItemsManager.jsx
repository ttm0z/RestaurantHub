import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ItemList from './ItemList'

import "./MenuItemsManager.css"

const MenuItemsManager = () => {
    
    return (
        <div className="menu-item-mgmt-body">
            
        <div className="menu-item-mgmt">
            
            <div className="menu-item-panel" >
                
                <h3 className="menu-items-header">Menu Items</h3>
                <div className="ctrl-panel">
                    <Link to={'/menus'}> <button>View Menus</button> </Link>
                    <Link to={'/menu-items/create'}> <button>Create Menu Item</button> </Link>
                    <Link to={'/'}> <button>Dashboard</button> </Link>
                </div>
                
                <ItemList />

            </div>
            
            </div>
            
        </div>
        
        
        
        
    );
};

export default MenuItemsManager;