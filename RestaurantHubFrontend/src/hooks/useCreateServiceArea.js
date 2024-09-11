import { useState } from 'react';
import axios from 'axios';

const useCreateServiceArea = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createServiceArea = async (formData) => {
        setLoading(true);
        try {
            console.log("data: ",formData);
            const response = await axios.post(`http://localhost:8080/employees`, formData, {
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

    return { createServiceArea, loading, error };
};

export default useCreateServiceArea;
