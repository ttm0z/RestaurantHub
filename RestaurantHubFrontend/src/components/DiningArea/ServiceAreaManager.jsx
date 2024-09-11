import { Link } from "react-router-dom";
import useServiceAreas from "../../hooks/useServiceAreas";
import { FaHome, FaPlusCircle } from "react-icons/fa";
const ServiceAreaManager = () => {
    
    const {serviceAreas, loading, error} = useServiceAreas();
    return (
        <>
            <div className="panel">
                <h2>Dining Area Manager</h2>
                <Link>
                    <FaHome to={'/'} className="icon"/>
                </Link>
            </div>
            
            <div className="panel">
                <h3>Service Areas</h3>
                <Link to={`/dining-areas/create-area`}><FaPlusCircle className="icon"/></Link>
            </div>
            <div className="service-areas">
                {serviceAreas && serviceAreas.map(serviceArea => (
                    <p>{serviceArea.serviceAreaName}</p>
                ))}
            </div>                
            <Link to={'/'}><button>Dashboard</button></Link>
        </>
    );
};

export default ServiceAreaManager;