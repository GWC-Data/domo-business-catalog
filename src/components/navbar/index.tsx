import { Link } from "react-router-dom";

type props = {
    activeNav: string
}
const Navbar = ({ activeNav }:props) => {
  return (
    <header className="header">
      <div className="main-header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand">
              <figure className="mb-0 banner-logo">
                <img src="./assets/images/logo.svg" width="250" height="250" alt="" className="img-fluid" />
              </figure>
            </Link>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-5">
                <li className={activeNav === "home" ? "nav-item active" : "nav-item"}>
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/service" className="nav-link">Services</Link>
                </li>
                <li className={activeNav === "project" ? "nav-item active" : "nav-item"}>
                  <Link to="/project" className="nav-link">Projects</Link>
                </li>
                <li className="nav-item ml-2">
                  <Link to="/contact" className="nav-link">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;