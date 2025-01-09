/* eslint-disable max-len */
 
 
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const HomePage = () => {
  return (
    <>
      {/* <div className="banner_outer">
        <Navbar activeNav="home" />
        <figure className="banner-layerright mb-0">
          <img src="./assets/images/banner-layerright.png" className="img-fluid" alt="" />
        </figure>
        <section className="banner-section">
          <div className="container-fluid container">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-12 col-12" data-aos="fade-right">
                <div className="banner_content">
                  <figure className="banner-line mb-0"><img src="./assets/images/banner-line.png" alt="" className="img-fluid" /></figure>
                  <h6 className="text-white">WE PROVIDE OUTSOURCED</h6>
                  <h1 className="text-white">IT Services & Solutions</h1>
                  <p>
                  Empowering Business with Data & AI Insights to Drive Informed Actions.
                  </p>
                  <Link to="" className="get_started button1 text-white text-decoration-none">Get Started
                    <figure className="mb-0"><img src="./assets/images/button-arrow.png" alt="" className="img-fluid" /></figure>
                  </Link>
                  <Link to="" className="get_started button2 text-white text-decoration-none">Contact Us
                    <figure className="mb-0"><img src="./assets/images/button-arrow.png" alt="" className="img-fluid" /></figure>
                  </Link>
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
                    <Link className="popup-vimeo" to="https://video-previews.elements.envatousercontent.com/h264-video-previews/d1c81f1e-849f-4d45-ae57-b61c2f5db34a/25628048.mp4">
                      <figure className="mb-0 banner-vedioimage">
                        <img className="thumb img-fluid" style={{cursor: "pointer"}} src="./assets/images/banner-vedioimage.png" alt="" />
                      </figure>
                    </Link>
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
      </div> */}

      <div className="banner_outer">
        <Navbar activeNav="home" />
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
                  <p>Empowering Business with Data & AI Insights to Drive Informed Actions.</p>
                  <a className="get_started button1 text-white text-decoration-none" href="./contact.html">Get Started
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
                    <img src="./assets/images/banner.png" alt="" className="img-fluid" />
                    {/* <video autoPlay muted loop className="img-fluid" />
                      <source src="./assets/images/Homepage.mp4" type="video/mp4" />
                    </video> */}
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

      <section className="achievement-section">
        <figure className="service-rightlayer mb-0">
          <img src="./assets/images/service-leftlayer.png" alt="" className="img-fluid" />
        </figure>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="achievement_content" data-aos="fade-right">
                <figure className="offer-circleimage mb-0">
                  <img src="./assets/images/offer-circleimage.png" alt="" className="img-fluid" />
                </figure>
                <h6>About Us</h6>
                <h2>Innovate Solution For Success</h2>
                <p>As a trusted NASSCOM member and a specialist in data analytics and Artificial Intelligence solutions provider, GWC places customer-centricity at the center. Our core values encompass:</p>
                <ul className="list-unstyled mb-0">
                  <li className="text"><i className="fa-solid fa-circle-check mr-2"></i>Problem-solving prowess</li>
                  <li className="text"><i className="fa-solid fa-circle-check mr-2"></i>Continuous pursuit of value addition</li>
                  <li className="text"><i className="fa-solid fa-circle-check mr-2"></i>A strong emphasis on technology</li>
                  <li className="text"><i className="fa-solid fa-circle-check mr-2"></i>Innovation in everything</li>
                  <li className="text"><i className="fa-solid fa-circle-check mr-2"></i>Being an extended arm for business partners</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-12 mt-5">
              <div className="achievement_wrapper">
                <div className="achievement-box box1">
                  <figure className="icon achievement-icon">
                    <img src="./assets/images/achievement-clienticon.png" alt="" className="img-fluid" />
                  </figure> 
                  <div className="wrapper">
                    <h3>30+</h3>
                    <p className="text-size-18 mb-0">Customers</p>
                  </div>
                </div> 
                <div className="achievement-box box2">
                  <figure className="icon1 achievement-icon">
                    <img src="./assets/images/achievement-projecticon.png" alt="" className="img-fluid" />
                  </figure>
                  <div className="wrapper">
                    <h3>7+</h3>
                    <p className="text-size-18 mb-0">Office Locations</p>
                  </div>
                </div>
                <div className="achievement-box box3">
                  <figure className="icon achievement-icon">
                    <img src="./assets/images/achievement-teamicon.png" alt="" className="img-fluid" />
                  </figure> 
                  <div className="wrapper">
                    <div className="number number1">
                      <h3 className="value counter">200</h3>
                      <span className="plus">+</span>
                    </div>
                    <p className="text text-size-18 mb-0">Employees</p>
                  </div>
                </div> 
                <div className="achievement-box box4">
                  <figure className="icon1 achievement-icon">
                    <img src="./assets/images/achievement-awardicon.png" alt="" className="img-fluid" />
                  </figure>
                  <div className="wrapper">
                    <div className="number">
                      <h3 className="value counter">150</h3>
                      <span className="plus">+</span>
                    </div>
                    <p className="text text-size-18 mb-0">Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure className="service-leftlayer mb-0">
          <img src="./assets/images/service-rightlayer.png" alt="" className="img-fluid" />
        </figure>
      </section>

      <section className="blog-section">
        <figure className="offer-toplayer mb-0">
          <img src="./assets/images/offer-toplayer.png" alt="" className="img-fluid" />
        </figure>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="" data-aos="fade-right">
                {/* <h6>News and articles</h6> */}
                <h2>why gwc for domo?</h2>
                {/* <p>Grursus mal suada faci lisis lorem ipsum dolarorit more ame ion consectetur elit vesti at bulum nec
                        odio aea the dumm recreo that dolocons.</p> */}
                {/* <figure className="offer-circleimage mb-0">
                  <img src="./assets/images/offer-circleimage.png" alt="" className="img-fluid" />
                </figure> */}
                <div className="row">
                  <div className="w-25 row col-12 col-lg-4 col-md-4 col-sm-4">
                    <figure className="col-12 col-lg-12 col-md-12 col-sm-12">
                      <img src="./assets/images/certi1-HQSy2jez.png" alt="" width="160" className="img-fluid" />
                    </figure>
                    <figure className="col-12 col-lg-12 col-md-12 col-sm-12">
                      <img src="./assets/images/certi1-HQSy2jez.png" alt="" width="160" className="img-fluid" />
                    </figure>
                    <figure className="col-12 col-lg-12 col-md-12 col-sm-12">
                      <img src="./assets/images/certi1-HQSy2jez.png" alt="" width="160" className="img-fluid" />
                    </figure>
                  </div>
                  <section className="w-75 row col-12 col-lg-8 col-md-8 col-sm-8" style={{zIndex: 100}}>
                    <div className="domogwc-box col-14 col-lg-4">
                      <img src="./assets/images/achievement-clienticon.png" alt="" className="" />
                      <p className="text-size-18 mb-0">200+ DOMO Certified Experts</p>
                    </div> 
                    <div className="domogwc-box domogwc-box col-14 col-lg-4">
                      <img src="./assets/images/achievement-projecticon.png" alt="" className="" />
                      <p className="text-size-18 mb-0">Award WinningInnovation & Reusable assets</p>
                    </div>
                    <div className="domogwc-box col-14 col-lg-4">
                      <img src="./assets/images/achievement-teamicon.png" alt="" className="" />
                      <p className="text-size-18 mb-0">50K+ Hours of Delivery</p>
                    </div> 
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <figure className="offer-bottomlayer mb-0" style={{zIndex: -1}}>
          <img src="./assets/images/offer-bottomlayer.png" alt="" className="img-fluid" />
        </figure> */}
      </section>    
      <Footer />
    </>
  );
};

export default HomePage;