
import { Link } from "react-router-dom";
import "./navbar.css";

type props = {
    activeNav: string
}
const Navbar = ({ activeNav }:props) => {
  return (
    <header className="header" style={{background: "#fff"}}>
      <div className="main-header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light justify-content-center align-items-center" style={{padding: "0px !important"}}>
            <a className="navbar-brand" href="./index.html"><figure className="mb-0 banner-logo"><img src="./assets/images/logo.svg" alt="" width="200" className="img-fluid" /></figure></a>
            <a className="navbar-brand mx-5" href="./index.html">
              <figure className="mb-0 banner-logo">
                <img src="https://web-assets.domo.com/miyagi/images/logo/brand/color/logo-brand-domopalooza-color.svg" alt="" width="200" className="img-fluid" />
              </figure>
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className={activeNav === "home" ? "nav-item active" : "nav-item"}>
                  <Link to="/" className="nav-link navbar-text-color">Home</Link>
                </li>
                <li className={activeNav === "service" ? "nav-item active" : "nav-item"}>
                  <a href="/#/service" className="nav-link">Solutions</a>
                </li>
                <li className={activeNav === "product" ? "nav-item active" : "nav-item"}>
                  <Link to="/product" className="nav-link">Products</Link>
                </li>
                <li className={activeNav === "project" ? "nav-item active" : "nav-item"}>
                  <Link to="/project" className="nav-link">Projects</Link>
                </li>
                <li className={activeNav === "app" ? "nav-space nav-item dropdown active ml-2" : "nav-space nav-item dropdown ml-2"}>
                  <Link to="/app" className="nav-link dropdown-toggle dropdown-color navbar-text-color app_nav" id="navbarDropdownmain" role="button" data-toggle="dropdown"> 360 Apps</Link>
                  <div className="dropdown-menu drop-down-content app_nav_content">
                    <ul className="list-unstyled drop-down-pages">
                      <li className="nav-item">
                        <Link to="/app/1" className="dropdown-item nav-link">Retail 360°</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/app/2" className="dropdown-item nav-link">Food Beverage 360°</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/app/3" className="dropdown-item nav-link">Healthcare 360°</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/app/4" className="dropdown-item nav-link">Manufacturing 360°</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/app/5" className="dropdown-item nav-link">Entertainment 360°</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/app/6" className="dropdown-item nav-link">HR 360°</Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              
            </div>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" style={{ background: "#000" }}></span>
              <span className="navbar-toggler-icon" style={{ background: "#000" }}></span>
              <span className="navbar-toggler-icon" style={{ background: "#000" }}></span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;