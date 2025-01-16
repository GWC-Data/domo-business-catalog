/* eslint-disable max-len */
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import "./home.css";

const HomePage = () => {
  return (
    <>
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
                    <img src="./assets/images/banner_2.png" alt="" className="img-fluid" />
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

      {/* service-section */}
      <section className="gwc_domo-section" >
        <figure className="gwc_domo-dotimage mb-0">
          <img src="./assets/images/gwc_domo-dotimage.png" alt="" className="img-fluid" />
        </figure>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-md-1 order-2">
              <div className="gwc_domo_contentbox">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="gwc_domo-box box-mb">
                      <figure className="gwc_domo-marketicon">
                        <img src="./assets/images/service-marketicon.png" alt="" className="img-fluid" />
                      </figure> 
                      <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>200+ Domo Certified Experts</div>
                      {/* <p className="text-size-18">Our team consists of highly skilled professionals, certified across Domo’s ecosystem—ensuring exceptional service delivery and expertise.</p> */}
                    </div>   
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="box-top">
                      <div className="gwc_domo-box box-mb">
                        <figure className="gwc_domo-producticon">
                          <img src="./assets/images/service-producticon.png" alt="" className="img-fluid" />
                        </figure>
                        <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>100,000+ Hours of Delivery</div>
                        {/* <p className="text-size-18">With over 100K hours dedicated to building and scaling Domo solutions, we’ve set the standard for quality, speed, and innovation.</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="gwc_domo-box">
                      <figure className="gwc_domo-designicon">
                        <img src="./assets/images/service-designicon.png" alt="" className="img-fluid" />
                      </figure>
                      <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>300+ Tailored Solutions Delivered</div>
                      {/* <p className="text-size-18">We have successfully delivered over 300 innovative Domo solutions, including dashboards, apps, integrations, and AI-driven analytics—customized to meet unique business needs.</p> */}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="box-top">
                      <div className="gwc_domo-box">
                        <figure className="gwc_domo-dataicon">
                          <img src="./assets/images/service-dataicon.png" alt="" className="img-fluid" />
                        </figure>
                        <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>Award-Winning Innovation</div>
                        {/* <p className="text-size-18">Our focus on crafting cutting-edge solutions and solving complex challenges has solidified our reputation as Domo’s go-to partner.</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-md-2 order-1">
              <div className="gwc_domo_content position-relative" data-aos="fade-right" style={{paddingTop: "120px" }}>
                <figure className="gwc_domo-rightcircle mb-0">
                  <img src="./assets/images/service-rightcircle.png" alt="" className="img-fluid" />
                </figure>
                {/* <h6>Our Services</h6> */}
                <h2>Why gwc for domo</h2>
                <p>As the implementation partner for Domo, GWC provides intuitive experiences infused with AI, data science, and a robust data foundation. Seamlessly integrating with your current cloud and legacy systems, our solutions ignite curiosity and drive substantial business impact.
                </p>
                <img src="./assets/images/domo_certificate/Picture1.png" width="113" height="114" alt="" />
                <img src="./assets/images/domo_certificate/Picture2.png" width="113" height="114" className="mx-3" alt="" />
                <img src="./assets/images/domo_certificate/Picture3.png" width="113" height="114" alt="" />
              </div>
            </div>
          </div>
        </div>
        <figure className="gwc_domo-rightlayer mb-0">
          <img src="./assets/images/service-rightlayer.png" alt="" className="img-fluid" />
        </figure>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">Partnership</h2>
          <div className="row text-center mt-5">
            <div className="col-6 col-md-2 mb-4">
              <figure>
                <img src="./assets/images/partners/Picture5.jpg" alt="Partner 1" className="img-fluid" />
              </figure>
            </div>
            <div className="col-6 col-md-2 mb-4">
              <figure>
                <img src="./assets/images/partners/Picture6.jpg" alt="Partner 2" className="img-fluid" />
              </figure>
            </div>
            <div className="col-6 col-md-2 mb-4">
              <figure>
                <img src="./assets/images/partners/Picture7.jpg" alt="Partner 3" className="img-fluid" />
              </figure>
            </div>
            <div className="col-6 col-md-2 mb-4">
              <figure>
                <img src="./assets/images/partners/Picture8.jpg" alt="Partner 4" className="img-fluid" />
              </figure>
            </div>
            <div className="col-6 col-md-2 mb-4">
              <figure>
                <img src="./assets/images/partners/Picture9.jpg" alt="Partner 5" className="img-fluid" />
              </figure>
            </div>
            <div className="col-6 col-md-2 mb-4">
              <figure>
                <img src="./assets/images/partners/Picture10.jpg" alt="Partner 6" className="img-fluid" />
              </figure>
            </div>
          </div>
        </div>
      </section>    
      <Footer />
    </>
  );
};

export default HomePage;