import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </header>
  );
}

export default Header;
