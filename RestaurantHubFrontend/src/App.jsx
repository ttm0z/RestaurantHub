import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard';

import MenuManager from './components/Menu/MenuManager';

import OrderManager from './components/OrderManager';

import MenuItemsManager from './components/MenuItem/MenuItemsManager';
import CreateMenuItem from './components/MenuItem/CreateMenuItem';

import TicketManager from './components/TicketManager';

import './App.css';


function App() {
    return (
        <Router>
            <div className="app-container">
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/menus" element={<MenuManager />} />
                        <Route path="/menu-items" element={<MenuItemsManager />} />
                        <Route path="/menu-items/create" element={<CreateMenuItem />} />
                        <Route path="/orders" element={<OrderManager />} />
                        <Route path="/tickets" element={<TicketManager />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
export default App;

