import { useEffect, useState } from 'react';
import axios from 'axios';

const useMenus = () => {
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/Menus`);
                setMenus(response.data);
                setLoading(false);
            }
            catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchMenus();
    }, []);

    return {menus, loading, error};
};

export default useMenus;