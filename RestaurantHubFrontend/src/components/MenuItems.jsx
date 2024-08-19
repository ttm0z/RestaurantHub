import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./MenuItems.css"

const MenuItems = () => {
    
    //add as a custom hook
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/MenuItems")
    })

    return (
        <div className="menu-item-mgmt-body">
            <h3>Menu Management</h3>
        <div className="menu-item-mgmt">
            <div className="menu-item-panel" >
                <h3>Menus Items</h3>
                <ul>
                    {menuItems.length > 0 ? (
                        menuItems.map(item => (
                            <li key={item.itemId}>{item.itemName}</li>
                        ))
                    ) : (
                        <p>You Don't have any Menu Items</p>
                    )}
                    
                </ul>
                
                
                
                <div className="ctrl-panel">
                    <button>View Menus</button>
                    <button>Create New Menu Item</button>
                </div>


            </div>
            
            </div>
            <Link to={'/'}> <button>Dashboard</button> </Link>
        </div>
        
        
        
        
    );
};

export default MenuItems;