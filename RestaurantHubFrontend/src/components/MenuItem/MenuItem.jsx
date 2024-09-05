import React from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.css';


import { FaTrashAlt, FaEdit, FaPlusCircle} from 'react-icons/fa';

const MenuItem = ({ item, mode, onAddItem }) => {
    
    const handleAddItem = () => {
        if (onAddItem) {
            onAddItem(item);
        }
    }

    return (
        <div className='menu-item'>
            
        <div className='menu-item-content'>
                
            <div className='menu-item-top'>
                <div className='menu-item-details'>
                        <h3>{item.itemName}</h3>
                        <p>${item.price.toFixed(2)}</p>
                    </div>

                    <div className='menu-item-actions'>
                        {mode == "edit" ? (
                            <>
                            <button className='button1' title='Edit'>
                            <Link to={`/menu-items/edit/${item.itemId}`}><FaEdit className='icon'/></Link>
                            </button>

                            <button className='button2' title='Delete'>
                            <Link to={`/menu-items/delete/${item.itemId}`}><FaTrashAlt className='icon'/></Link>
                            </button>    
                            </>
                        ):(
                            <>
                            <button onClick={handleAddItem} className='button1' title='Add'>
                            <FaPlusCircle />
                            </button>
                            </>
                        )}
                        
                    </div>
            </div>

        </div>
            
        </div>
        
    );
}

export default MenuItem;
