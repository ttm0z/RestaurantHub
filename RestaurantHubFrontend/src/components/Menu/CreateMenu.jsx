import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ItemList from '../MenuItem/ItemList';

import useCreateMenu from '../../hooks/useCreateMenu';

import "./CreateMenu.css";
import { FaArrowCircleLeft, FaPlusCircle } from 'react-icons/fa';



const CreateMenu = ({ }) => {
    
    const [menuName, setMenuName] = useState('');
    const [menuItems, setMenuItems] = useState([]);
    
    const {createMenu, loading, error} = useCreateMenu();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newMenu = {
            menuName,
            menuItems
        };

        try {
            const menu = await createMenu(newMenu);
            console.log("Menu Created Successfully: ", menu);
            
        } 
        catch (error) {
            console.error('Error creating menu:', error);
        }
    };


    return (
        <div className="create-menu-container">
            <h3>Create New Menu</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="itemName">Menu Name:</label>
                    <input
                        type="text"
                        id="itemName"
                        value={menuName}
                        onChange={(e) => setMenuName(e.target.value)}
                        required
                    />
                    <button className='invisible-button' type="submit"><FaPlusCircle className='icon'/></button>
                </div>
                
                
            </form>
            <Link to={`/menus`}>
                    <FaArrowCircleLeft className="icon" />
            </Link>
        </div>
    );
};

export default CreateMenu;
