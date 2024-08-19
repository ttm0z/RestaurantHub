import React, { useEffect, useState } from 'react';

import MenuItem from './MenuItem';
import useMenuItems from '../../hooks/useMenuItems';

import './ItemList.css';

const ItemList = () => {
    const { items, loading, error } = useMenuItems();
    
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    
    useEffect(() => {
        // Filter items based on search term whenever items or searchTerm changes
        const results = items.filter(item =>
            item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(results);
        // Reset to the first page when filtering changes
        setCurrentPage(1);
    }, [items, searchTerm]);

    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = filteredItems.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='list-container'>
            <input
                type="text"
                placeholder='Search'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />

            <ul className='item-container'>
                {currentItems.length > 0 ? (
                    currentItems.map(currentItem => (
                        <MenuItem key={currentItem.itemId} item={currentItem} />
                    ))
                ) : (
                    <p>You don't have any menu items</p>
                )}
            </ul>

            {/* Pagination controls */}
            <div className='pagination-controls'>
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ItemList;
