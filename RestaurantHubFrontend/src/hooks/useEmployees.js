import { useEffect, useState } from 'react';
import axios from 'axios';

const useEmployees = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/employees`);
                setEmployees(response.data);
                setLoading(false);
            }
            catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchEmployees();
    }, []);

    return {employees, loading, error};
};

export default useEmployees;