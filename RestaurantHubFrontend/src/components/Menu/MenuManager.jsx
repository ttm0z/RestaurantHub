import React from "react";
import { Link } from "react-router-dom";

import MenuList from './MenuList';
import { FaTrashAlt, FaEdit, FaPlusCircle, FaHome, FaCreativeCommonsZero} from 'react-icons/fa';
import "./MenuManager.css"

const MenuManager = () => {
    
    return (    
        <>
        <div className="panel" >
            <h2>Menus</h2>
            <div className="icons">
                <Link to={'/'}> <FaHome /> </Link>
                <Link to={'/menus/create'}> <FaPlusCircle /> </Link>                
            </div>       
        </div>
        
        <div className="menu-mgmt">
            <MenuList />
        </div>
        </>
        
        
        
        
        
    );
};

export default MenuManager;