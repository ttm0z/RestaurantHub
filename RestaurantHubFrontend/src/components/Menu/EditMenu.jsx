import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Menu from "./Menu";
import ItemList from "../MenuItem/ItemList";
import useMenu from "../../hooks/useMenu";
import useUpdateMenu from "../../hooks/useUpdateMenu";

import "./EditMenu.css";
import { FaArrowCircleLeft, FaBackward, FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const EditMenu = () => {
    const { menuId } = useParams();
    
    // State to trigger a re-fetch
    const [reloadKey, setReloadKey] = useState(0);
    
    // Fetch the menu data with the reloadKey as a dependency
    const { menu, loading, error } = useMenu(menuId, reloadKey);
    const { updateMenu, loading: uLoading, error: uError } = useUpdateMenu(menuId);

    const [showItemList, setShowItemList] = useState(false);

    const handleAddMenuItem = async (item) => {
        console.log("AddMenuItem");
        const newMenu = {
            ...menu,
            menuItems: [...menu.menuItems, item],
        };

        const response = await updateMenu(newMenu);
        if (response) {
            // Trigger a re-fetch by updating the reloadKey
            setReloadKey(prevKey => prevKey + 1);
        }
    };

    const handleRemoveMenuItem = async (itemId) => {
        console.log(itemId)
        const updatedItems = menu.menuItems.filter(item => item.itemId !== itemId);
        const updatedMenu = { ...menu, menuItems: updatedItems };

        const response = await updateMenu(updatedMenu);
        if (response) {
            setReloadKey(prevKey => prevKey + 1);
        }
    };

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="edit-menu">
            <div className="edit-menu-column-1">
                <h2> Edit Menu</h2>
                <Menu menu={menu} mode='edit' onRemoveItem={handleRemoveMenuItem}/>
                <div className="edit-menu-controls">
                    <div onClick={() => setShowItemList(!showItemList)}>
                        {!showItemList ? (<FaPlusCircle className="icon" />)
                        :               (<FaMinusCircle className="icon"/>)}
                    </div>
                    <Link to={`/menus`}>
                    <FaArrowCircleLeft className="icon" />
                    </Link>
                </div>
            </div>

            <div className="edit-menu-column-2">
                {showItemList && (
                    <div className="edit-menu-item-list">
                        <h2>Add Items</h2>
                        <ItemList onAddItem={handleAddMenuItem} mode={"add"} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default EditMenu;
