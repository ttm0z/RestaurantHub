import React from "react";
import {Link} from 'react-router-dom'


import "./Menu.css"


const Menu = ({ menu }) => {
    console.log(menu)
    return (
        <div className="menu">
            <div className='menu-details'>
                <h3>{menu.menuName}</h3>
            </div>
            <div className="items-list">
                {menu.menuItems.length > 0 ? (
                    menu.menuItems.map(item => (
                        <div>
                            <p className="menu-items">{item.itemName}</p>
                        </div>
                        
                    ))
                ):(
                    <p>This menu has no items</p>
                )}
            </div>
            <div className="control-panel">
                <Link to={`/menus/edit/${menu.menuId}`}><button>Edit</button></Link>
                <Link><button>Delete</button></Link>
            </div>
        </div>
    );
};

export default Menu;