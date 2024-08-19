import { useEffect, useState } from 'react';
import axios from 'axios';

const useMenuItems = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/MenuItems`);
                setItems(response.data);
                setLoading(false);
            }
            catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchMenuItems();
    }, []);

    return {items, loading, error};
};

export default useMenuItems;