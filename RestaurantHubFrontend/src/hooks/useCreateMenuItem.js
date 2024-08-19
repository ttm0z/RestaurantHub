import { useState } from 'react';
import axios from 'axios';

const useCreateMenuItem = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createMenuItem = async (formData) => {
        setLoading(true);
        try {
            const response = await axios.post(`http://localhost:8080/MenuItems`, formData, {
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

    return { createMenuItem, loading, error };
};

export default useCreateMenuItem;
