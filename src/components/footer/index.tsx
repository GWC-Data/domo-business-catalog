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
                <div className="lower">
                  <div className="lower-content">
                    <figure className="icon">
                      <img src="./assets/images/footer-callicon.png" alt="" className="img-fluid" />
                    </figure>
                    <div className="content">
                      <span className="text-white">Call us:</span>
                      <Link to="/" className="text-size-18 mb-0 text text-decoration-none">
                        +91 95914 33122
                      </Link>
                    </div>
                  </div>
                  <div className="lower-content ">
                    <figure className="icon">
                      <img
                        src="./assets/images/footer-emailicon.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                    <div className="content">
                      <span className="text-white">Email us:</span>
                      <Link to="/" className="text-size-18 mb-0 text-decoration-none">
                        indiahr@gwcdata.ai
                      </Link>
                    </div>
                  </div>
                </div>
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
                    <Link to="/abount" className="text-size-18 text text-decoration-none">
                      About
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
                  <li>
                    <Link to="/contact" className="text-size-18 text text-decoration-none">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 col-12 d-lg-block d-none">
              <div className="links">
                <h4 className="heading text-white">Our Services</h4>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link to="" className="text-size-18 text text-decoration-none">
                      Cloud Service
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="text-size-18 text text-decoration-none">
                      Testimonial
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="text-size-18 text text-decoration-none">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="text-size-18 text text-decoration-none">
                      Digital marketing
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="text-size-18 text text-decoration-none">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-sm-block d-none">
              <div className="icons">
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
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row copyright-border">
              <div className="col-lg-6 col-md-6 col-sm-12 co-12 column">
                <p className="text-size-16">Copyright ©2023 Technofy.com All Rights Reserved</p>
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
