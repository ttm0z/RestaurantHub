import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./OrderManager.css";
import useMenus from "../hooks/useMenus";
import useMenu from "../hooks/useMenu";

const OrderManager = () => {
    const { menus, loading, error } = useMenus();
    const [selectedMenu, setSelectedMenu] = useState(null);
    const { menu, loading: menuLoading, error: menuError } = useMenu(selectedMenu);
    const [orderItems, setOrderItems] = useState({});

    const handleMenuClick = (menuId) => {
        setSelectedMenu(menuId);
    };

    const handleItemClick = (item) => {
        setOrderItems(prevItems => {
            const updatedItems = { ...prevItems };
            if (updatedItems[item.itemId]) {
                
                updatedItems[item.itemId].count += 1;
            } else {
                
                updatedItems[item.itemId] = { ...item, count: 1 };
            }
            return updatedItems;
        });
    };
    const total = Object.values(orderItems).reduce((acc, item) => acc + (item.price * item.count), 0);

    return (
        <div className="order-mgmt-body">
            <h3>Order Management</h3>
            <div className="col-container">
                <div className="order-col">
                    <div className="order-panel">
                        <h3>New Order</h3>
                        <ul>
                            {Object.values(orderItems).map(item => (
                                <li key={item.itemId}>
                                    {item.count}x . . . {item.itemName} . . . ${item.count * item.price}
                                </li>
                            ))}
                        </ul>
                        <p>Total . . . ${total}</p>
                    </div>
                </div>
                <div className="menu-col">
                    <div className="menu-panel">
                        <h3>Menus</h3>
                        <div className="menu-list">
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
                                            <p>{item.price}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                        {menuLoading && <p>Loading menu items...</p>}
                        {menuError && <p>Error loading menu items</p>}
                    </div>
                </div>
            </div>
            <Link to={'/'}><button>Dashboard</button></Link>
        </div>
    );
};

export default OrderManager;
