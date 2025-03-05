/* eslint-disable max-len */
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="container">
        <figure className="footer-leftimage mb-0">
          <img src="./assets/images/footer-leftimage.png" alt="" className="img-fluid" />
        </figure>
        <figure className="mb-0 about-leftcircle">
          <img src="./assets/images/about-rightcircle.png" alt="" className="img-fluid" />
        </figure>
        <div className="middle-portion">
          <div className="row">
            <div className="col-lg-4 col-md-5 col-sm-6 col-12">
              <div className="first-column">
                <Link to="/">
                  <figure className="footer-logo">
                    <img src="./assets/images/logo.svg" width="250" height="250" alt="Logo" className="img-fluid" />
                  </figure>
                </Link>
                <p className="text-size-18 footer-text">
                We ensure better services and better quality at every product you might be interested in and we shall help grow better.
                </p>
                
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12 col-12 d-md-block d-none">
              <div className="links list-pd">
                <h4 className="heading text-white">Quick Links</h4>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="/" className="text-size-18 text text-decoration-none">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/service" className="text-size-18 text text-decoration-none">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/project" className="text-size-18 text text-decoration-none">
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 col-12 d-lg-block d-none">
              <div className="links">
                <h4 className="heading text-white" style={{ opacity: "0" }}>-</h4>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="/product" className="text-size-18 text text-decoration-none">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/app" className="text-size-18 text text-decoration-none">
                      360 Apps
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-sm-block d-none">
              {/* <div className="icons">
                <h4 className="heading mb-0 text-white">Subscribe to</h4>
                <h4 className="heading text-white">Our Newsletter Today!</h4>
                <p className="text-size-18 footer-text text-white">
                  Exerci tation ullamcorper suscipit lobor nisl aliuie naro commodo.
                </p>
                <form id="contactpage1" method="POST" action="./contact-form.php">
                  <div className="form-group mb-0">
                    <input
                      type="text"
                      className="form_style"
                      placeholder="Enter Email Address:"
                      name="email"
                    />
                  </div>
                  <button type="submit" className="subscribe_now text-white text-decoration-none">
                    Subscribe Now
                    <i className="circle fa-thin fa-arrow-right"></i>
                  </button>
                </form>
              </div> */}
              <div className="icons ml-4">
                <div className="lower-content">
                  <svg fill="#6E2B8B" width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>phone-volume</title>
                    <path d="M19.373 11.831c-0.138-0.154-0.337-0.25-0.559-0.25-0.414 0-0.75 0.336-0.75 0.75 0 0.195 0.074 0.373 0.197 0.506l-0-0.001c0.819 0.92 1.32 2.139 1.32 3.476 0 1.602-0.719 3.035-1.852 3.996l-0.008 0.006c-0.136 0.136-0.22 0.324-0.22 0.531 0 0.415 0.336 0.751 0.751 0.751 0.207 0 0.395-0.084 0.531-0.22v0c1.396-1.251 2.27-3.060 2.27-5.072 0-1.717-0.636-3.285-1.685-4.481l0.007 0.008zM22.428 8.776c-0.138-0.152-0.336-0.247-0.557-0.247-0.414 0-0.75 0.336-0.75 0.75 0 0.194 0.073 0.37 0.194 0.503l-0.001-0.001c1.445 1.629 2.328 3.786 2.328 6.149 0 2.819-1.256 5.345-3.24 7.047l-0.012 0.010c-0.136 0.136-0.22 0.324-0.22 0.531 0 0.415 0.336 0.751 0.751 0.751 0.207 0 0.395-0.084 0.531-0.22v0c2.244-2.002 3.65-4.901 3.65-8.129 0-2.741-1.014-5.245-2.686-7.158l0.011 0.013zM25.273 5.524c-0.137-0.146-0.331-0.236-0.546-0.236-0.414 0-0.75 0.336-0.75 0.75 0 0.198 0.077 0.378 0.202 0.512l-0-0c2.215 2.36 3.575 5.544 3.575 9.046 0 3.986-1.763 7.561-4.551 9.986l-0.016 0.014c-0.136 0.136-0.22 0.324-0.22 0.531 0 0.415 0.336 0.751 0.751 0.751 0.207 0 0.395-0.084 0.531-0.22v0c10.635-10.637 1.121-21.030 1.023-21.134zM12.378 11.725c0 0 0 0 0 0 0.248 0 0.469-0.121 0.605-0.307l0.001-0.002 4.282-5.897c0.090-0.122 0.143-0.275 0.143-0.44 0-0.064-0.008-0.127-0.023-0.187l0.001 0.005c-0.141-0.532-0.367-0.997-0.664-1.407l0.008 0.012c-0.178-0.272-0.374-0.509-0.593-0.723l-0.001-0.001-0.004-0.004c-0.952-0.94-2.261-1.52-3.706-1.52-1.446 0-2.757 0.582-3.71 1.524l0-0c-3.379 3.386-5.468 8.060-5.468 13.222s2.089 9.836 5.469 13.222l-0-0c0.943 0.942 2.245 1.525 3.683 1.525 0.006 0 0.012 0 0.018-0h-0.001c0.003 0 0.007 0 0.010 0 1.445 0 2.754-0.581 3.706-1.522l-0.001 0c0.211-0.203 0.399-0.427 0.56-0.671l0.009-0.015c0.301-0.408 0.536-0.886 0.676-1.404l0.007-0.030c0.014-0.055 0.022-0.117 0.022-0.182 0-0.166-0.054-0.319-0.145-0.443l0.001 0.002-4.282-5.899c-0.138-0.188-0.358-0.309-0.606-0.309v0c-0.798 0.001-1.553 0.187-2.224 0.517l0.030-0.013c-0.599-1.412-0.948-3.055-0.948-4.779s0.348-3.367 0.979-4.862l-0.031 0.082c0.641 0.317 1.396 0.502 2.194 0.504h0.001zM9.652 9.428c-0.216 0.057-0.39 0.202-0.485 0.393l-0.002 0.004c-0.902 1.802-1.43 3.927-1.43 6.174s0.528 4.372 1.467 6.256l-0.037-0.081c0.097 0.195 0.271 0.34 0.481 0.397l0.005 0.001c0.055 0.014 0.118 0.022 0.183 0.022 0.162 0 0.313-0.050 0.438-0.135l-0.003 0.002c0.489-0.351 1.081-0.589 1.723-0.664l0.017-0.002 3.818 5.26c-0.108 0.249-0.232 0.464-0.377 0.662l0.007-0.009c-0.113 0.17-0.237 0.317-0.375 0.45l-0.001 0.001c-0.681 0.674-1.618 1.091-2.652 1.091s-1.969-0.416-2.65-1.089l0 0c-3.108-3.114-5.030-7.413-5.030-12.161s1.922-9.047 5.030-12.161l-0 0c0.673-0.671 1.601-1.086 2.626-1.086 0.005 0 0.010 0 0.014 0h-0.001c0.002 0 0.004 0 0.006 0 1.034 0 1.972 0.415 2.655 1.088l-0-0c0.15 0.146 0.284 0.308 0.399 0.483l0.007 0.011c0.129 0.177 0.244 0.378 0.335 0.592l0.008 0.020-3.818 5.259c-0.659-0.076-1.251-0.315-1.75-0.674l0.011 0.008c-0.12-0.085-0.268-0.136-0.429-0.136-0.067 0-0.132 0.009-0.194 0.025l0.005-0.001z"></path>
                  </svg>
                  <div className="content">
                    <span className="text-white">Call us: </span>
                    <Link to="/" className="text-size-18 mb-0 text text-decoration-none h5"  style={{color: "#fff"}}>
                        +91 95914 33122
                    </Link>
                  </div>
                </div>
                <div className="lower-content mt-4">
                  <svg width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g id="icomoon-ignore">
                    </g>
                    <path d="M29.229 13.342l-11.595-11.595c-0.436-0.436-1.016-0.677-1.633-0.677s-1.197 0.24-1.633 0.677l-2.528 2.528h-3.835v3.834l-5.332 5.331v17.491h26.656v-17.489l-0.099-0.099zM28.125 13.747l-4.129 4.129v-8.257l4.129 4.129zM15.121 2.5c0.47-0.47 1.289-0.47 1.759 0l1.774 1.774h-5.307l1.774-1.774zM19.719 5.34l3.211 3.212v10.39l-2.469 2.469-2.829-2.829c-0.436-0.436-1.016-0.677-1.633-0.677s-1.197 0.241-1.633 0.677l-2.871 2.87-2.426-2.426v-13.685h10.649zM4.38 13.24l3.624-3.624v8.343l-4.172-4.172 0.548-0.548zM3.738 16.058v-0.856l7.003 7.003-0.079 0.080-0.001-0.001-6.923 6.923v-13.149zM4.589 29.864l0.573-0.573h0.002l9.957-9.956c0.47-0.47 1.289-0.47 1.759 0l10.531 10.529h-22.822zM28.262 15.36v13.848l-7.046-7.043 7.046-7.046v0.242z" fill="#6E2B8B">

                    </path>
                    <path d="M12.268 8.539h7.464v1.066h-7.464v-1.066z" fill="#6E2B8B">

                    </path>
                    <path d="M12.268 14.937h7.464v1.066h-7.464v-1.066z" fill="#6E2B8B">

                    </path>
                    <path d="M12.268 11.738h5.331v1.066h-5.331v-1.066z" fill="#6E2B8B">

                    </path>
                  </svg>
                  <div className="content">
                    <span className="text-white">Email us: </span>
                    <Link to="/" className="text-size-18 mb-0 text-decoration-none h5" style={{color: "#fff"}}>
                        indiahr@gwcdata.ai
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row copyright-border">
              <div className="col-lg-6 col-md-6 col-sm-12 co-12 column">
                <p className="text-size-16">Copyright ©2025, All Rights Reserved</p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 co-12 d-md-block d-none">
                <div className="social-icons position-relative">
                  <ul className="list-unstyled position-absolute">
                    <li>
                      <Link to="" className="text-decoration-none">
                        <i className="fa-brands fa-facebook-f social-networks"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="text-decoration-none">
                        <i className="fa-brands fa-twitter social-networks"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="text-decoration-none">
                        <i className="fa-brands fa-google-plus-g social-networks"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="text-decoration-none">
                        <i className="fa-brands fa-instagram social-networks"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure className="footer-dotimage mb-0">
          <img src="./assets/images/footer-dotimage.png" alt="" className="img-fluid" />
        </figure>
        <figure className="footer-leftlayer mb-0">
          <img src="./assets/images/footer-leftlayer.png" alt="" className="img-fluid" />
        </figure>
      </div>
    </section>
  );
};

export default Footer;
