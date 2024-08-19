import React from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.css';

// You can use Font Awesome or Material Icons for the icons
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

const MenuItem = ({ item }) => {
    
    return (
        <div className='menu-item'>
            
        <div className='menu-item-content'>
                
            <div className='menu-item-top'>
                <div className='menu-item-details'>
                        <h3>{item.itemName}</h3>
                        <p>${item.price.toFixed(2)}</p>
                    </div>

                    <div className='menu-item-actions'>

                        <button className='edit-button' title='Edit'>
                            <Link to={`/menu-item-mgmt/edit/${item.itemId}`}><FaEdit /></Link>
                        </button>

                        <button className='delete-button' title='Delete'>
                            <Link to={`/menu-item-mgmt/delete/${item.itemId}`}><FaTrashAlt /></Link>
                        </button>
                    </div>
            </div>
            <div className='menu-item-bottom'>
                <button>Add to Menu</button>
            </div>
        </div>
            
        </div>
        
    );
}

export default MenuItem;
