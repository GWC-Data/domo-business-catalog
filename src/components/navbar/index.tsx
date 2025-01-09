// import { Link } from "react-router-dom";

type props = {
    activeNav: string
}
const Navbar = ({ activeNav }:props) => {
  console.log(activeNav);
  return (
    // <header className="header">
    //   <div className="main-header">
    //     <div className="container-fluid container">
    //       <nav className="navbar navbar-expand-lg navbar-light">
    //         <Link to="/" className="navbar-brand">
    //           <figure className="mb-0 banner-logo">
    //             <img src="./assets/images/logo.svg" width="250" height="250" alt="" className="img-fluid" />
    //           </figure>
    //         </Link>
    //         <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
    //           aria-label="Toggle navigation">
    //           <span className="navbar-toggler-icon"></span>
    //           <span className="navbar-toggler-icon"></span>
    //           <span className="navbar-toggler-icon"></span>
    //         </button>
    //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //           <ul className="navbar-nav ml-5">
    //             <li className={activeNav === "home" ? "nav-item active" : "nav-item"}>
    //               <Link to="/" className="nav-link">Home</Link>
    //             </li>
    //             <li className={activeNav === "service" ? "nav-item active" : "nav-item"}>
    //               <Link to="/service" className="nav-link">Services</Link>
    //             </li>
    //             <li className={activeNav === "project" ? "nav-item active" : "nav-item"}>
    //               <Link to="/project" className="nav-link">Projects</Link>
    //             </li>
    //             <li className="nav-item">
    //               <Link to="/#" className="nav-link">Products</Link>
    //             </li>
    //             <li className="nav-item ml-2">
    //               <Link to="/#" className="nav-link">360 Apps</Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </nav>
    //     </div>
    //   </div>
    // </header>
    <div className="banner_outer">
      <header className="header">
        <div className="main-header">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="./index.html"><figure className="mb-0 banner-logo"><img src="./assets/images/logo.svg" alt="" width="250" className="img-fluid" /></figure></a>
              <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="./index.html">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./about.html">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./service.html">Services</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <figure className="banner-layerright mb-0">
        <img src="./assets/images/banner-layerright.png" className="img-fluid" alt="" />
      </figure>
      <section className="banner-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 col-12" data-aos="fade-right">
              <div className="banner_content">
                <figure className="banner-line mb-0"><img src="./assets/images/banner-line.png" alt="" className="img-fluid" /></figure>
                <h6 className="text-white">WE PROVIDE OUTSOURCED</h6>
                <h1 className="text-white">IT Services & Solutions</h1>
                <p>Doidunt eget semper nec ruam sed hendrerit morbi ac feliseao augue pellentesue morbi acer.</p>
                <a className="get_started button1 text-white text-decoration-none" href="./contact.html">Get Started
                  <figure className="mb-0"><img src="./assets/images/button-arrow.png" alt="" className="img-fluid" /></figure>
                </a>
                <a className="get_started button2 text-white text-decoration-none" href="./contact.html">Contact Us
                  <figure className="mb-0"><img src="./assets/images/button-arrow.png" alt="" className="img-fluid" /></figure>
                </a>
                <figure className="banner-circleleft mb-0">
                  <img src="./assets/images/banner-circleleft.png" className="img-fluid" alt="" />
                </figure>
                <figure className="banner-dotleft mb-0">
                  <img src="./assets/images/banner-dotleft.png" className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="banner_wrapper">
                <figure className="mb-0 banner-image">
                  <img src="./assets/images/banner-image.jpg" alt="" className="img-fluid" />
                </figure>
                <div className="position-relative">
                  <a className="popup-vimeo" href="https://video-previews.elements.envatousercontent.com/h264-video-previews/d1c81f1e-849f-4d45-ae57-b61c2f5db34a/25628048.mp4">
                    <figure className="mb-0 banner-vedioimage">
                      <img className="thumb img-fluid" src="./assets/images/banner-vedioimage.png" alt="" />
                    </figure>
                  </a>
                </div>
                <figure className="banner-circleright mb-0">
                  <img src="./assets/images/banner-circleright.png" className="img-fluid" alt="" />
                </figure>
                <figure className="banner-dotright mb-0">
                  <img src="./assets/images/banner-dotright.png" className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;