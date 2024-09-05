import React, {useState} from "react";
import {Link} from 'react-router-dom'
import { FaTrashAlt, FaEdit, FaPlusCircle, FaChevronDown, FaMinusCircle} from 'react-icons/fa';
import useMenu from "../../hooks/useMenu";
import "./Menu.css"


const Menu = ({ menu, mode, onRemoveItem }) => {
    
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const handleRemoveItem = (itemId) => {
        if(onRemoveItem) {
            onRemoveItem(itemId);
        }
    };

    return (
        <div className="menu">
            <div className='menu-details'>
            <div className="details-header">
                <h3>{menu.menuName}</h3>
                <Link className='icon' to={`/menus/edit/${menu.menuId}`}><FaEdit  /></Link>
                <Link className='icon' ><FaTrashAlt onClick={() => {}}  /></Link>
            </div>
                
                <FaChevronDown  className='icon' onClick={toggleDropdown}></FaChevronDown>
                
            </div>
            
            <ul 
                className={`menu-items ${isOpen ? 'show' : ''}`}
                
            >
                    {menu.menuItems.length > 0 ? (
                        menu.menuItems.map(item => (
                            <li key={item.itemId}>{item.itemName} 
                                {mode=='edit' && 
                                (<FaTrashAlt onClick={() => handleRemoveItem(item.itemId)} class="delete-item" />)
                                }
                            </li>
                    ))
                
                ):(
                    <p>This menu has no items</p>
                )}
            </ul>
            
            <div className="control-panel">
                
            </div>
        </div>
    );
};

export default Menu;