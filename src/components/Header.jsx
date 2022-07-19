import logo from '../img/planet.png';
import { NavLink } from 'react-router-dom';

const navLinkStyles = ({ isActive }) => {
    return {
        fontWeight: isActive ? 'bold' : "normal",
        textDecoration: isActive ? "underline" : "none",
    }
}

const Header = () => (
    <header className="d-flex justify-content-between container align-items-center my-2 border-bottom pb-2">
        <div className="d-flex gap-3">
            <img src={logo} alt="logo" width="50px" />
            <h1>Space Traveler's Hub</h1>
        </div>
        <nav className="d-flex gap-3 text-decoration-none">
            <NavLink style={navLinkStyles} to={"/"}>Rockets</NavLink>
            <NavLink style={navLinkStyles} to={"/missions"}>Missions</NavLink>
            <NavLink style={navLinkStyles} to={"/profile"}>My Profile</NavLink>
        </nav>
    </header>
);

export default Header;