import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">

      <li className="navigation__list-item">
          <Link to="/" className="navigation__link">
            Home 
          </Link>
        </li>

        <li className="navigation__list-item">
        <Link to="/timezone" className="navigation__link">
            WTWR
          </Link>
        </li>

        <li className="navigation__list-item">
          <Link to="/about" className="navigation__link">
            About
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navigation;
