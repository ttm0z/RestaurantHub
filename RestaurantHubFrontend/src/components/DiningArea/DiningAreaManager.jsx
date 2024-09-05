import { Link } from "react-router-dom";
const DiningAreaManager = () => {
    return (
        <>
            <h3>Dining Area Manager</h3>
            <ul>
                <li>Get Service Areas</li>
                <li>List Service Area Details</li>
                <li>Visualize Service Area Details</li>
            </ul>
            <Link to={'/'}><button>Dashboard</button></Link>
        </>
    );
};

export default DiningAreaManager;