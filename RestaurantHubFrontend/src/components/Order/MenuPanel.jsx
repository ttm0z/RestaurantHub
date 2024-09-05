import React, { useState } from "react";
import useMenus from "../../hooks/useMenus";
import useMenu from "../../hooks/useMenu";
import "./MenuPanel.css";

const MenuPanel = ({onItemClick}) => {
    const { menus, loading, error } = useMenus();
    const [selectedMenu, setSelectedMenu] = useState(null); // Initialize as -1
    const { menu, loading: menuLoading, error: menuError } = useMenu(selectedMenu);

    const handleMenuClick = (menuId) => {
        
        setSelectedMenu(menuId);
    };

    const handleItemClick = (item) => {
        onItemClick(item);
    };
    return (
        <div className="menu-panel">
            <div className="panel">
                <h3>Menus</h3>
            </div>
            <div className="menus">
                {menus.map(menu => (
                    <p
                        key={menu.menuId}
                        onClick={() => handleMenuClick(menu.menuId)}
                        className={menu.menuId === selectedMenu ? "selected-menu" : ""}
                    >
                        {menu.menuName}
                    </p>
                ))}
            </div>
            <div className="menu-items-panel">
                        {selectedMenu !== -1 && !menuLoading && menu && (
                            <>
                                <h3>{menu.menuName}</h3>
                                <div className="items">
                                    {menu.menuItems && menu.menuItems.map(item => (
                                        <div
                                            key={item.itemId}
                                            onClick={() => handleItemClick(item)}
                                            className="item"
                                        >
                                            <p>{item.itemName}</p>
                                            <p>${item.price.toFixed(2)}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                        {menuLoading && <p>Loading menu items...</p>}
                        {menuError && <p></p>}
                    </div>
            {error && <p>Error loading menus</p>}
        </div>
    );
};

export default MenuPanel;
