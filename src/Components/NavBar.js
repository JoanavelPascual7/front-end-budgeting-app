import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/transactions" className="navbar-home-link">
      <h1 className="navbar-title">Joanavel's Budget App</h1>
      </Link>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/transactions/new" className="navbar-link">
            New transaction
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
