import React from "react";
import { Link } from "react-router-dom";
import "./OrderManager.css"
import useMenus from "../hooks/useMenus";

const OrderManager = () => {
    
    const {menus, loading, error} = useMenus();


    return (
        <div className="order-mgmt-body">
            <h3>Order Management</h3>
            
            <div className="col-container">
            <div className="order-col">
                <div className="order-panel" >
                    <h3>New Order</h3>
                </div>
            </div>
            
                
            <div className="menu-col">
                    <div className="menu-panel">
                        <h3>Menus</h3>
                        <div className="menu-list">
                            {menus.map(menu => (
                                <p>{menu.menuName}</p>
                            ))}
                        </div>
                    </div>
                    <div className="menu-items-panel">
                        <h3>Menu Items</h3>
                    </div>
            </div>  
            </div>
            
        </div>
    );
};

export default OrderManager;