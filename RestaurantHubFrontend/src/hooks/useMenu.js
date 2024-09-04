import { useEffect, useState } from 'react';
import axios from 'axios';

const useMenu = (menuId) => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/Menus/${menuId}`);
                setMenu(response.data);
                setLoading(false);
            }
            catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchMenu();
    }, [menuId]);

    return {menu, loading, error};
};

export default useMenu;