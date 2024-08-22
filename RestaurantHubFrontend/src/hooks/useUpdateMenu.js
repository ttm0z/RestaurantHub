import { useState } from 'react';
import axios from 'axios';

const useUpdateMenu = (menuId) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateMenu = async (formData) => {
        setLoading(true);
        try {
            console.log("data: ",formData);
            const response = await axios.put(`http://localhost:8080/Menus/${menuId}`, formData, {
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

    return { updateMenu, loading, error };
};

export default useUpdateMenu;
