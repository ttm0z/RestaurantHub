import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useCreateServiceArea from '../../hooks/useCreateServiceArea'; // Assuming you have a similar hook

import './CreateServiceArea.css'; // Update CSS file name as needed
import { FaArrowCircleLeft, FaPlusCircle } from 'react-icons/fa';

const CreateServiceArea = () => {
    
    const [serviceAreaName, setServiceAreaName] = useState('');

    const { createServiceArea, loading, error } = useCreateServiceArea();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newServiceArea = {
            serviceAreaName
        };

        try {
            const serviceArea = await createServiceArea(newServiceArea);
            console.log('Service Area Created Successfully: ', serviceArea);
            
        } catch (error) {
            console.error('Error creating service area:', error);
        }
    };

    return (
        <div className="create-service-area-container">
            <div className="panel">
                <h2>Create New Service Area</h2>
            </div>
            <div className="create-service-area-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="serviceAreaName">Service Area Name:</label>
                    <input
                        type="text"
                        id="serviceAreaName"
                        value={serviceAreaName}
                        onChange={(e) => setServiceAreaName(e.target.value)}
                        required
                    />

                    <button className="invisible-button" type="submit">
                        <FaPlusCircle className="icon" />
                    </button>
                </div>
            </form>
            </div>

            <Link to={`/service-areas`}>
                <FaArrowCircleLeft className="icon" /> 
            </Link>
        </div>
    );
};

export default CreateServiceArea;
