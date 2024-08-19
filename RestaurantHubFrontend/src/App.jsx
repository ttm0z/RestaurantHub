import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import MenuManagement from './components/MenuManagement';
import OrderManagement from './components/OrderManagement';
import MenuItems from './components/MenuItems';
import TicketManagement from './components/TicketManagement';

import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/menu-mgmt" element={<MenuManagement />} />
                        <Route path="/menu-item-mgmt" element={<MenuItems />} />
                        <Route path="/order-mgmt" element={<OrderManagement />} />
                        <Route path="/ticket-mgmt" element={<TicketManagement />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
export default App;

