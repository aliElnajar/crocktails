import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/" className="logo">
          Crockotails
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  );
};
export default Nav;
