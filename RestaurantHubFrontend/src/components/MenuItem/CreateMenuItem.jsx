import React, { useState } from 'react';
import axios from 'axios';
import useCreateMenuItem from '../../hooks/useCreateMenuItem';

const CreateMenuItem = ({ onMenuItemCreated }) => {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');

    const {createMenuItem, loading, error} = useCreateMenuItem();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            itemName,
            price: parseFloat(price),
        };

        try{
            const newItem = await createMenuItem(formData);
            console.log("Item Created Successfully: ", newItem);
        }
        catch(error){
            console.error("Error: ", error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Item Name"
                required
            />
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Creating...' : 'Create Menu Item'}
            </button>
            {error && <p>Error: {error.message}</p>}
        </form>
    );
};

export default CreateMenuItem;
