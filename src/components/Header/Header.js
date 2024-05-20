import "./Header.css";
import Navigation from "../Navigation/Navigation";

import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <header className="header">
      <div className="header__titles">
        <HashLink smooth to="/" className="header__title">
          WTWR 2.0
        </HashLink>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
