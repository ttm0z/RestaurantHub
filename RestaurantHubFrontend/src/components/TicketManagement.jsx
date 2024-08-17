import React from "react";
import { Link } from "react-router-dom";
import "./TicketManagement.css"

const TicketManagement = () => {
    
    return (
        <div className="ticket-mgmt-body">
            <h3>Ticketing System</h3>
            <div className="ticket-mgmt">
                <div className="tickets-panel" >
                    <h3>Active Orders</h3>
                    <div className="tickets">
                        There are no Active Orders
                    </div>
                    
                    <div className="tickets-ctrl-panel">

                    </div>  
                </div>
            </div>
            <Link to={'/'}> <button>Dashboard</button> </Link>
        </div>
        
        
        
        
    );
};

export default TicketManagement;