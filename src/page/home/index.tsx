/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
import { useEffect } from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import "./home.css";
import Confetti from "../../components/Items/Confetti";
//import chennaiRetailLogo from '../assets/chennai_retail_summit_logo.svg'; // adjust the path if you're deeper in the folder

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const partners = [
    { name: "databricks", src: "./assets/images/partners/Picture5.jpg" },
    { name: "snowflake", src: "./assets/images/partners/Picture6.jpg" },
    { name: "google-cloud", src: "./assets/images/partners/Picture7.jpg" },
    { name: "aws", src: "./assets/images/partners/Picture8.jpg" },
    { name: "azure", src: "./assets/images/partners/Picture9.jpg" },
    { name: "salesforce", src: "./assets/images/partners/Picture10.jpg" },
  ];

  return (
    <>
      <div className="banner_outer">
        <Navbar activeNav="home" />
        <section className="banner-section">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5 col-md-12 col-sm-12 col-12" data-aos="fade-right">
                <div className="banner_content">
                  <figure className="banner-line">
                    <img src="./assets/images/banner-line.png" alt="" className="img-fluid" />
                  </figure>
                  <h1 className="text-white mt-4">SOLUTION MATTERS</h1>
                  <p>Empowering Business with Data & AI Insights to Drive Informed Actions.</p>
                  <figure className="banner-circleleft mb-0">
                    <img src="./assets/images/banner-circleleft.png" className="img-fluid" alt="" />
                  </figure>
                  <figure className="banner-dotleft mb-0">
                    <img src="./assets/images/banner-dotleft.png" className="img-fluid" alt="" />
                  </figure>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                <div className="w-100 d-flex justify-content-center align-items-center">
                  <a className="" href="./index.html">
                    <figure className="mb-0 banner-logo">
                      <img
                        src="./assets/images/domopalooza.svg"
                        alt=""
                        width="500"
                        className="img-fluid"
                      />
                    </figure>
                  </a>
                </div>
                <div className="banner_wrapper">
                  <figure className="banner-circleright mb-0">
                    <img
                      src="./assets/images/banner-circleright.png"
                      className="img-fluid"
                      alt=""
                    />
                  </figure>
                  {/* <figure className="banner-dotright mb-0">
                    <img src="./assets/images/banner-dotright.png" className="img-fluid" alt="" />
                  </figure> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="achievement-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="achievement_content" data-aos="fade-right">
                <h6>About Us</h6>
                <h2>Innovate Solution For Success</h2>
                <p>
                  As a trusted NASSCOM member and a specialist in data analytics and Artificial
                  Intelligence solutions provider, GWC places customer-centricity at the center. Our
                  core values encompass:
                </p>
                <div className="aboutus-list">
                  <ul className="list-unstyled mb-0 text-left">
                    <li className="text">
                      <i className="fa-solid fa-circle-check mr-2" style={{ color: "#569C3C" }}></i>
                      Problem-solving prowess
                    </li>
                    <li className="text">
                      <i className="fa-solid fa-circle-check mr-2" style={{ color: "#569C3C" }}></i>
                      Continuous pursuit of value addition
                    </li>
                    <li className="text">
                      <i className="fa-solid fa-circle-check mr-2" style={{ color: "#569C3C" }}></i>
                      A strong emphasis on technology
                    </li>
                    <li className="text">
                      <i className="fa-solid fa-circle-check mr-2" style={{ color: "#569C3C" }}></i>
                      Innovation in everything
                    </li>
                    <li className="text">
                      <i className="fa-solid fa-circle-check mr-2" style={{ color: "#569C3C" }}></i>
                      Being an extended arm for business partners
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-12 mt-5">
              <div className="row ">
                <div className="col-lg-6 col-md-3 col-sm-6 col-6 d-flex align-items-center justify-content-center">
                  <div className="about-box text-center d-flex align-items-center justify-content-center flex-column">
                    <figure className="icon1 achievement-icon">
                      <img
                        src="./assets/images/handshake.png"
                        alt=""
                        className="img-fluid"
                        width={65}
                      />
                    </figure>
                    <div className="wrapper text-center">
                      <h3>60+</h3>
                      <p className="text-size-18 mb-0">Customers</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-3 col-sm-6 col-6 d-flex align-items-center justify-content-center">
                  <div className="about-box text-center d-flex align-items-center justify-content-center flex-column">
                    <figure className="icon1 achievement-icon">
                      <img
                        src="./assets/images/maps-and-location.png"
                        alt=""
                        className="img-fluid"
                        width={60}
                      />
                    </figure>
                    <div className="wrapper text-center">
                      <h3>7+</h3>
                      <p className="text-size-18 mb-0">Office Locations</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-3 col-sm-6 col-6 d-flex align-items-center justify-content-center">
                  <div className="about-box text-center d-flex align-items-center justify-content-center flex-column">
                    <figure className="icon1 achievement-icon">
                      <img
                        src="./assets/images/avatar.png"
                        alt=""
                        className="img-fluid"
                        width={55}
                      />
                    </figure>
                    <div className="wrapper text-center">
                      <div className="number number1 d-flex justify-content-center">
                        <h3 className="value counter">200</h3>
                        <h3 className="plus">+</h3>
                      </div>
                      <p className="text text-size-18 mb-0">Employees</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-3 col-sm-6 col-6 d-flex align-items-center justify-content-center">
                  <div className="about-box text-center d-flex align-items-center justify-content-center flex-column">
                    <figure className="icon1 achievement-icon">
                      <img
                        src="./assets/images/star-award.png"
                        alt=""
                        className="img-fluid"
                        width={65}
                      />
                    </figure>
                    <div className="wrapper text-center">
                      <div className="number d-flex justify-content-center">
                        <h3 className="value counter">150</h3>
                        <h3 className="plus">+</h3>
                      </div>
                      <p className="text text-size-18 mb-0">Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* service-section */}
      <section className="gwc_domo-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="homepage-service-box1 col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-2">
              <div className="gwc_domo_contentbox">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="gwc_domo-box">
                      <figure className="gwc_domo-marketicon">
                        <img
                          src="./assets/images/service-marketicon.png"
                          alt=""
                          className="img-fluid"
                        />
                      </figure>
                      <div className="font-weight-bold" style={{ fontSize: "1.3rem" }}>
                        200+ Domo Certified Experts
                      </div>
                      {/* <p className="text-size-18">Our team consists of highly skilled professionals, certified across Domo’s ecosystem—ensuring exceptional service delivery and expertise.</p> */}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="box-top">
                      <div className="gwc_domo-box">
                        <figure className="gwc_domo-producticon">
                          <img
                            src="./assets/images/service-producticon.png"
                            alt=""
                            className="img-fluid"
                          />
                        </figure>
                        <div className="font-weight-bold" style={{ fontSize: "1.3rem" }}>
                          100,000+ Hours of Delivery
                        </div>
                        {/* <p className="text-size-18">With over 100K hours dedicated to building and scaling Domo solutions, we’ve set the standard for quality, speed, and innovation.</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="gwc_domo-box">
                      <figure className="gwc_domo-designicon">
                        <img
                          src="./assets/images/service-designicon.png"
                          alt=""
                          className="img-fluid"
                        />
                      </figure>
                      <div className="font-weight-bold" style={{ fontSize: "1.3rem" }}>
                        300+ Tailored Solutions Delivered
                      </div>
                      {/* <p className="text-size-18">We have successfully delivered over 300 innovative Domo solutions, including dashboards, apps, integrations, and AI-driven analytics—customized to meet unique business needs.</p> */}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="box-top">
                      <div className="gwc_domo-box">
                        <figure className="gwc_domo-dataicon">
                          <img
                            src="./assets/images/service-dataicon.png"
                            alt=""
                            className="img-fluid"
                          />
                        </figure>
                        <div className="font-weight-bold" style={{ fontSize: "1.3rem" }}>
                          Award-Winning Innovation
                        </div>
                        {/* <p className="text-size-18">Our focus on crafting cutting-edge solutions and solving complex challenges has solidified our reputation as Domo’s go-to partner.</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="homepage-service-box2 col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-1">
              <div className="gwc_domo_content position-relative" data-aos="fade-right">
                {/* <figure className="gwc_domo-rightcircle mb-0">
                  <img src="./assets/images/service-rightcircle.png" alt="" className="img-fluid" />
                </figure> */}
                {/* <h6>Our Services</h6> */}
                <h2>Why gwc for domo</h2>
                <p>
                  As the implementation partner for Domo, GWC provides intuitive experiences infused
                  with AI, data science, and a robust data foundation. Seamlessly integrating with
                  your current cloud and legacy systems, our solutions ignite curiosity and drive
                  substantial business impact.
                </p>
                <img
                  src="./assets/images/domo_certificate/Picture1.png"
                  width="113"
                  height="114"
                  alt=""
                />
                <img
                  src="./assets/images/domo_certificate/Picture2.png"
                  width="113"
                  height="114"
                  className="mx-3"
                  alt=""
                />
                <img
                  src="./assets/images/domo_certificate/Picture3.png"
                  width="113"
                  height="114"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <figure className="gwc_domo-rightlayer mb-0">
          <img src="./assets/images/service-rightlayer.png" alt="" className="img-fluid" />
        </figure>
      </section>

      <section className="py-5" style={{ margin: "60px 0" }}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: "80px" }}>
            Partnership
          </h2>
          <div className="partner-row">
            {partners.map((partner: any, index: any) => (
              <div className="partner-logo" key={index}>
                <img src={partner.src} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ padding: "100px 0", background: "#7daccf" }}>
        <div className="container">
          <div className="text-center">
            <h2 className="text-white mb-5">Meet Our Teams</h2>
            <p className="text-white">
              Our leaders consistently cultivate a culture of success, propelling our ongoing
              transformation and fostering global growth. They steer our initiatives towards
              excellence and innovation, driving the organization towards new heights of
              achievement.
            </p>
          </div>
          <div className="row text-center mt-5">
            <div className="col-lg-3 col-sm-4 col-md-3 col-6 mb-5">
              <div className="">
                <img
                  src="./assets/images/team/naveen.png"
                  alt=""
                  className="rounded-circle img-fluid bg-white team-img"
                />
                <h5 className="mt-3">Naveen Kumar</h5>
                <div className="small text-uppercase text-white">Founder & CEO</div>
              </div>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/naveenkumarnawinkrp/" target="_blank" className="social-link">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3 col-6 mb-5">
              <div className="">
                <img
                  src="./assets/images/team/subash.png"
                  alt=""
                  className="rounded-circle img-fluid bg-white team-img"
                />
                <h5 className="mt-3">Subash Ramu</h5>
                <div className="small text-uppercase text-white">Chief Technology Officer</div>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/subash-ramu-92553784/" target="_blank" className="social-link">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3 col-6 mb-5">
              <div className="">
                <img
                  src="./assets/images/team/shanhank.png"
                  alt=""
                  className="rounded-circle img-fluid bg-white team-img"
                />
                <h5 className="mt-3">Shashank Ravikumar</h5>
                <div className="small text-uppercase text-white">Chief Strategy Officer</div>
              </div>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/shashank-ravikumar-780649125/" target="_blank" className="social-link">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3 col-6 mb-5">
              <div className="">
                <img
                  src="./assets/images/team/prasanna.png"
                  alt=""
                  className="rounded-circle img-fluid bg-white team-img"
                />
                <h5 className="mt-3">Prasanna Srinivasan</h5>
                <div className="small text-uppercase text-white">Chief Operating Officer</div>
              </div>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/prasanna-srinivasan-a533b062/" target="_blank" className="social-link">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3 col-6 mb-5">
              <div className="">
                <img
                  src="./assets/images/team/srinath.png"
                  alt=""
                  className="rounded-circle img-fluid bg-white team-img"
                />
                <h5 className="mt-3">Srinath Raja</h5>
                <div className="small text-uppercase text-white">Chief Data Officer</div>
              </div>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/srinath-raja-8a5710115/" target="_blank" className="social-link">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3 col-6 mb-5">
              <div className="">
                <img
                  src="./assets/images/team/santhosh.png"
                  alt=""
                  className="rounded-circle img-fluid bg-white team-img"
                />
                <h5 className="mt-3">Santhosh Kumar</h5>
                <div className="small text-uppercase text-white">Chief Innovation Officer</div>
              </div>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/santhosh-kumar-5a3ba3121/" target="_blank" className="social-link">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3 col-6 mb-5">
              <div className="">
                <img
                  src="./assets/images/team/madhu.png"
                  alt=""
                  className="rounded-circle img-fluid bg-white team-img"
                />
                <h5 className="mt-3">Madhu Sudhanan</h5>
                <div className="small text-uppercase text-white">VP, Data-Engineering</div>
              </div>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/madhu-sudhanan-mahendran-a00b4477/" target="_blank" className="social-link">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-4 col-md-3 col-6 mb-5">
              <div className="">
                <img
                  src="./assets/images/team/mamtha.png"
                  alt=""
                  className="rounded-circle img-fluid bg-white team-img"
                />
                <h5 className="mt-3">Mamtha Shanmugam</h5>
                <div className="small text-uppercase text-white">Associate Director</div>
              </div>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <a href="https://www.linkedin.com/in/mamtha-shanmugam-43ba8016a/" target="_blank" className="social-link">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Confetti />
    </>
  );
};

export default HomePage;
