import { useState } from 'react';
import axios from 'axios';

const useUpdateMenuItem = (itemId) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateMenuItem = async (formData) => {
        setLoading(true);
        try {
            console.log("data: ",formData);
            const response = await axios.put(`http://localhost:8080/MenuItems/${itemId}`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            setLoading(false);
            return response.data;  
        } catch (error) {
            setError(error);
            setLoading(false);
            throw error;  
        }
    };

    return { updateMenuItem, loading, error };
};

export default useUpdateMenuItem;
