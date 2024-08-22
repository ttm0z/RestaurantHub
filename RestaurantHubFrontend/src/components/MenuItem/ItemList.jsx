import React, { useEffect, useState } from 'react';

import MenuItem from './MenuItem';
import useMenuItems from '../../hooks/useMenuItems';

import './ItemList.css';

const ItemList = ({onAddItem, mode="edit"}) => {
    
    const { items, loading, error } = useMenuItems();
    
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    
    useEffect(() => {
        const results = items.filter(item =>
            item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(results);
        
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
                        <MenuItem 
                            key={currentItem.itemId} 
                            item={currentItem} 
                            mode={mode}
                            onAddItem={onAddItem} />
                    ))
                ) : (
                    <p>No Items Available</p>
                )}
            </ul>

            
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
