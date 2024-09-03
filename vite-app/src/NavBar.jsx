
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style={navStyle}>
            <ul style={ulStyle}>
                <li style={liStyle}><Link to="/">Home</Link></li>
                <li style={liStyle}><Link to="/about">About</Link></li>
                <li style={liStyle}><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

const navStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px',
};

const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
};

const liStyle = {
    margin: '0 10px',
};

export default NavBar;