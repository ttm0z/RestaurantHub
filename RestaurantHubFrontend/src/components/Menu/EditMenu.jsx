
import React, {useState} from "react";
import { useParams, Link } from "react-router-dom";

import ItemList from "../MenuItem/ItemList";

import useMenu from "../../hooks/useMenu";
import useUpdateMenu from "../../hooks/useUpdateMenu";

import "./EditMenu.css"

const EditMenu = () => {
    const menuId = useParams();
    const {menu, loading, error} = useMenu(menuId.menuId);
    const {updateMenu, loading: uLoading, error: uError} = useUpdateMenu(menuId.menuId);
    const [showItemList, setShowItemList] = useState(false);

    const handleAddMenuItem = async (item) => {
        console.log("AddMenuItem")
        const newMenu = {
            ...menu,
            menuItems: [...menu.menuItems, item]
        };

        const response = await updateMenu(newMenu);

    }
    
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <div className="edit-menu">
            <div className="edit-menu-column-1">
            <h3>{menu.menuName} </h3>
            <div className="items-list">
                {menu.menuItems.length > 0 ? (
                    menu.menuItems.map(item => (
                        <div className="item">
                            <p>{item.itemName}</p>
                            <p>{item.price}</p>
                        </div>
                        
                    ))
                ):(
                    <p>This menu has no items</p>
                )}
            </div>

            <div className="edit-menu-controls">
                <Link><button>Delete Menu</button></Link>
                <button onClick={() => setShowItemList(!showItemList)}>Add Menu Item</button>
                <Link to={`/menus`}><button>Back</button></Link>
            </div>
            </div>
            
            <div className="edit-menu-column-2">
                {showItemList && (
                    <div className="edit-menu-item-list">
                        <h3>Add an Item to this Menu</h3>
                        <ItemList onAddItem={handleAddMenuItem} mode={"add"}/>
                    </div>
                )}
            </div>
        </div>
    );    
};

export default EditMenu;
