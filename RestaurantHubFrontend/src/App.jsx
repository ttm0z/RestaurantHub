import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard';

import MenuManager from './components/Menu/MenuManager';
import CreateMenu from './components/Menu/CreateMenu';
import EditMenu from './components/Menu/EditMenu';

import MenuItemsManager from './components/MenuItem/MenuItemsManager';
import CreateMenuItem from './components/MenuItem/CreateMenuItem';
import EditMenuItem from './components/MenuItem/EditMenuItem';
import OrderManager from './components/Order/OrderManager';
import TicketManager from './components/Ticket/TicketManager';
import EmployeeManager from './components/Employee/EmployeeManager';
import DiningAreaManager from './components/DiningArea/DiningAreaManager';


import './App.css';


function App() {
    return (
        <Router>
            <div className="app-container">
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        
                        <Route path="/menus" element={<MenuManager />} />
                        <Route path="/menus/create" element={<CreateMenu />} />
                        <Route path="/menus/edit/:menuId" element={<EditMenu />} />
                        
                        <Route path="/menu-items" element={<MenuItemsManager />} />
                        <Route path="/menu-items/create" element={<CreateMenuItem />} />
                        <Route path="/menu-items/edit/:itemId" element={<EditMenuItem />} />

                        <Route path="/orders" element={<OrderManager />} />
                        <Route path="/tickets" element={<TicketManager />} />
                        <Route path="/employees" element={<EmployeeManager />} />
                        <Route path="/dining-areas" element={<DiningAreaManager />} />

                    </Routes>
                </div>
            </div>
        </Router>
    );
}
export default App;

