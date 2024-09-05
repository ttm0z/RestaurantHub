import React, { useEffect, useState } from 'react';

import Menu from './Menu';

import useMenus from '../../hooks/useMenus';
import './MenuList.css';

const MenuList = () => {
    const {menus, loading, error} = useMenus();

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <div className="menu-list-container">
            <ul className='menu-container'>
                {menus.length > 0 ? (
                    menus.map(menu => (
                        <Menu key={menu.menuId} menu={menu} />
                    ))
                ) : (
                    <p>You don't have any menus</p>
                )}
            </ul>
        </div>
    );
}
export default MenuList;