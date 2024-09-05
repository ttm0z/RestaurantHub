import { useEffect, useState } from 'react';
import axios from 'axios';

const useMenu = (menuId, reloadKey) => {
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
    }, [menuId, reloadKey]);

    const deleteMenu = async () => {
        try {
            await axios.delete(`http://localhost:8080/Menus/${menuId}`);
            // Trigger a re-fetch by updating the reloadKey
        } catch (error) {
            console.error("Error removing menu:", error);
            setError(error);
        }
    };

    return { menu, loading, error, deleteMenu };
};

export default useMenu;
