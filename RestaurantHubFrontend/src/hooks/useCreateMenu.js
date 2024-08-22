import { useState } from 'react';
import axios from 'axios';

const useCreateMenu = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createMenu = async (formData) => {
        setLoading(true);
        try {
            console.log("data: ",formData);
            const response = await axios.post(`http://localhost:8080/Menus`, formData, {
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

    return { createMenu, loading, error };
};

export default useCreateMenu;
