import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <header>
      <img src={logo} alt="Logo van UNC INC" />
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login/Logout</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
