import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./OrderManager.css";
import useMenus from "../../hooks/useMenus";
import useMenu from "../../hooks/useMenu";
import MenuPanel from "./MenuPanel";
import { FaHome, FaPlusCircle, FaShoppingBasket, FaTablet } from "react-icons/fa";

const OrderManager = () => {
    
    const [orderItems, setOrderItems] = useState({});

    const handleItemSelection = (item) => {
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
        <>
            <div className="panel">
                <h2>Orders</h2>
                <Link to={'/'}><FaHome className="icon"/></Link>
            </div>
            <div className="col-container">
                <div className="order-col">
                    <div className="order-panel">
                        <h3>New Order</h3>
                        <ul className="order-items">
                            {Object.values(orderItems).map(item => (
                                <li key={item.itemId} className="dotted-line">
                                    <p>{item.count}x  {item.itemName}</p>
                                    <div className="dots"></div>
                                    <p>${item.count * item.price}</p>
                                </li>
                            ))}
                        </ul>
                        <p>Total . . . ${total.toFixed(2)}</p>
                    </div>
                    
                        <Link to={`/`}>
                        <div className="payment-panel"><button>Pay Now</button></div>
                        </Link>
                    
                </div>
                <MenuPanel onItemClick={handleItemSelection}/>
            </div>
          
        </>
    );
};

export default OrderManager;
