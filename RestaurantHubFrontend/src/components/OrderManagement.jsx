import React from "react";
import { Link } from "react-router-dom";
import "./OrderManagement.css"

const OrderManagement = () => {
    
    return (
        <div className="order-mgmt-body">
            <h3>Order Management</h3>
            <div className="order-mgmt">
                
                <div className="order-panel" >
                    <h3>New Order</h3>
                    <div className="ctrl-panel">
                        <button>View Menus</button>
                        <button>Create new Menu</button>
                    </div>
                </div>
            
                <div className="menu-items-panel">
                    <h3>Menu Items</h3>
                    <div className="ctrl-panel">
                        <button>View Menu Items</button>
                        <button>Create Menu Items</button>
                    </div>
                </div>

            </div>
            <Link to={'/'}> <button>Dashboard</button> </Link>
        </div>
        
        
        
        
    );
};

export default OrderManagement;