import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowLeft, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import useUpdateMenuItem from "../../hooks/useUpdateMenuItem";
const EditMenuItem = (item) => {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const {updateMenuItem, loading, error} = useUpdateMenuItem();
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            itemName,
            price: parseFloat(price),
        };

        try{
            const response = await updateMenuItem(formData);
            console.log("Item Updated Successfully: ", response);
        }
        catch(error){
            console.error("Error: ", error);
        }
    };

    return (
        <>
        <div className="panel">
            <h2>Edit Menu Item</h2>
            <Link to={`/menu-items`}><FaArrowLeft className="icon" /></Link>
            <Link to={`/`}><FaHome className="icon" /></Link>
        </div>

        <div className="edit-item">

            <h3>{item.itemName}</h3>
            <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Item Name"
                required
            />
            <p>{item.price}</p>
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                required
            />
            <button className='invisible-button' type="submit" disabled={loading}>
                {loading ? 'Update...' : (<FaArrowAltCircleRight className="icon"/>)}
            </button>
        </div>
        </>
    );
};

export default EditMenuItem;