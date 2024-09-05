import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import ItemList from './ItemList'

import "./MenuItemsManager.css"
import { FaHome, FaPlusCircle, FaTablet } from "react-icons/fa";

const MenuItemsManager = () => {
    
    return (
            <>
                <div className="menu-item-mgmt">
                    <div className="menu-item-panel" >
                        <div className="panel">
                            <h2>Menu Items</h2>
                            <Link to={'/'}> <FaHome className="icon"/> </Link>
                            <Link to={'/menus'}> <FaTablet className="icon" /> </Link>
                            <Link to={'/menu-items/create'}> <FaPlusCircle className="icon" /> </Link>
                        </div>
                        
                        
                
                        <ItemList />

                    </div>
            
                </div>    
            </>
        
    );
};

export default MenuItemsManager;