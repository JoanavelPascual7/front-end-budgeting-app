import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Joanavel's Budget App</h1>
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
