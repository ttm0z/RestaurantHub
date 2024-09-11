import { useEffect, useState } from 'react';
import axios from 'axios';

const useServiceAreas = () => {
    const [serviceAreas, setServiceAreas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServiceAreas = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/ServiceAreas`);
                setServiceAreas(response.data);
                setLoading(false);
            }
            catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchServiceAreas();
    }, []);

    return {serviceAreas, loading, error};
};

export default useServiceAreas;