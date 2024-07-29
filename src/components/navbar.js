import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Query Application</h1>
            <div className="links">
                <Link  className="link" to="/">Home</Link>
                <Link  className="link" to="/newQuery">New Query</Link>
                <Link className="link" to="/profile">Profile</Link>
            </div>
        </nav>

     );
}
 
export default Navbar;