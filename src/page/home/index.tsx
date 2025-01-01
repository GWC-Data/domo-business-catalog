/* eslint-disable max-lines */
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

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
                <div className="social-icons position-relative" data-aos="fade-up">
                  <ul className="list-unstyled position-absolute">
                    <li><Link to=""  className="text-decoration-none"><i className="fa-brands fa-facebook-f social-networks"></i></Link></li>
                    <li><Link to=""  className="text-decoration-none"><i className="fa-brands fa-twitter social-networks"></i></Link></li>
                    <li><Link to=""  className="text-decoration-none"><i className="fa-brands fa-google-plus-g social-networks"></i></Link></li>
                    <li><Link to=""  className="text-decoration-none"><i className="fa-brands fa-instagram social-networks"></i></Link></li>
                  </ul>
                </div>
                <div className="banner_content">
                  <figure className="banner-line mb-0"><img src="./assets/images/banner-line.png" alt="" className="img-fluid" /></figure>
                  <h6 className="text-white">WE PROVIDE OUTSOURCED</h6>
                  <h1 className="text-white">IT Services & Solutions</h1>
                  <p>Doidunt eget semper nec ruam sed hendrerit morbi ac feliseao augue pellentesue morbi acer.</p>
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
      </div>
      <section className="service-section">
        <figure className="service-leftlayer mb-0">
          <img src="./assets/images/service-leftlayer.png" alt="" className="img-fluid" />
        </figure>
        <figure className="service-dotimage mb-0">
          <img src="./assets/images/service-dotimage.png" alt="" className="img-fluid" />
        </figure>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="service_contentbox">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="service-box box-mb">
                      <figure className="service-marketicon">
                        <img src="./assets/images/service-marketicon.png" alt="" className="img-fluid" />
                      </figure> 
                      <h4>Digital Marketing</h4>
                      <p className="text-size-18">Nostrum exercitationem ae ullam corporis suscipit labo riosam aliruiea.</p>
                      <Link to="/service" className="arrow text-decoration-none"><i className="circle fa-thin fa-arrow-right"></i></Link>
                    </div>   
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="box-top">
                      <div className="service-box box-mb">
                        <figure className="service-producticon">
                          <img src="./assets/images/service-producticon.png" alt="" className="img-fluid" />
                        </figure>
                        <h4>Product Development</h4>
                        <p className="text-size-18">Nostrum exercitationem ae ullam corporis suscipit labo riosam aliruiea.</p>
                        <Link to="/service" className="arrow text-decoration-none"><i className="circle fa-thin fa-arrow-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="service-box">
                      <figure className="service-designicon">
                        <img src="./assets/images/service-designicon.png" alt="" className="img-fluid" />
                      </figure>
                      <h4>Ui/Ux Designing</h4>
                      <p className="text-size-18">Nostrum exercitationem ae ullam corporis suscipit labo riosam aliruiea.</p>
                      <Link to="/service" className="arrow text-decoration-none"><i className="circle fa-thin fa-arrow-right"></i></Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="box-top">
                      <div className="service-box">
                        <figure className="service-dataicon">
                          <img src="./assets/images/service-dataicon.png" alt="" className="img-fluid" />
                        </figure>
                        <h4>Data Analysis</h4>
                        <p className="text-size-18">Nostrum exercitationem ae ullam corporis suscipit labo riosam aliruiea.</p>
                        <Link to="/service" className="arrow text-decoration-none"><i className="circle fa-thin fa-arrow-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="service_content position-relative" data-aos="fade-right">
                <figure className="service-rightcircle mb-0">
                  <img src="./assets/images/service-rightcircle.png" alt="" className="img-fluid" />
                </figure>
                <h6>Our Services</h6>
                <h2>BEST IT SOLUTION FOR YOUR BUSINESS</h2>
                <p>Grursus mal suada faci lisis lorem ipsum dolarorit more ame
                            ion consectetur elit vesti at bulum nec odio aea the dumm ipsumm recreo that dolocons.</p>
                <ul className="list-unstyled mb-0">
                  <li className="text"><i className="circle fa-duotone fa-check"></i>Quisquam est, rui dolorem ipsum quia dolor corporis.</li>
                  <li className="text"><i className="circle fa-duotone fa-check"></i>Rem aperiam, eaque ipsa quae ab illo inventore veritatis.</li>
                  <li className="text"><i className="circle fa-duotone fa-check"></i>Duis aute irure dolor in reprehenderit in voluptate velio.</li>
                  <li className="text text1"><i className="circle fa-duotone fa-check"></i>Molestiae non recusandae itarue earum rerum maio.</li>
                </ul>
                <Link to="/service" className="get_started text-white text-decoration-none">Get Started
                  <figure className="mb-0"><img src="./assets/images/button-arrow.png" alt="" className="img-fluid" /></figure>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <figure className="service-rightlayer mb-0">
          <img src="./assets/images/service-rightlayer.png" alt="" className="img-fluid" />
        </figure>
      </section>

      <section className="service-section">
        <figure className="service-leftlayer mb-0">
          <img src="./assets/images/service-leftlayer.png" alt="" className="img-fluid" />
        </figure>
        <figure className="service-dotimage mb-0">
          <img src="./assets/images/service-dotimage.png" alt="" className="img-fluid" />
        </figure>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="service_contentbox">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="service-box box-mb">
                      <figure className="service-marketicon">
                        <img src="./assets/images/service-marketicon.png" alt="" className="img-fluid" />
                      </figure> 
                      <h4>Digital Marketing</h4>
                      <p className="text-size-18">Nostrum exercitationem ae ullam corporis suscipit labo riosam aliruiea.</p>
                      <Link to="/service" className="arrow text-decoration-none"><i className="circle fa-thin fa-arrow-right"></i></Link>
                    </div>   
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="box-top">
                      <div className="service-box box-mb">
                        <figure className="service-producticon">
                          <img src="./assets/images/service-producticon.png" alt="" className="img-fluid" />
                        </figure>
                        <h4>Product Development</h4>
                        <p className="text-size-18">Nostrum exercitationem ae ullam corporis suscipit labo riosam aliruiea.</p>
                        <Link to="/service" className="arrow text-decoration-none"><i className="circle fa-thin fa-arrow-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="service-box">
                      <figure className="service-designicon">
                        <img src="./assets/images/service-designicon.png" alt="" className="img-fluid" />
                      </figure>
                      <h4>Ui/Ux Designing</h4>
                      <p className="text-size-18">Nostrum exercitationem ae ullam corporis suscipit labo riosam aliruiea.</p>
                      <Link to="/service" className="arrow text-decoration-none"><i className="circle fa-thin fa-arrow-right"></i></Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="box-top">
                      <div className="service-box">
                        <figure className="service-dataicon">
                          <img src="./assets/images/service-dataicon.png" alt="" className="img-fluid" />
                        </figure>
                        <h4>Data Analysis</h4>
                        <p className="text-size-18">Nostrum exercitationem ae ullam corporis suscipit labo riosam aliruiea.</p>
                        <Link to="/service" className="arrow text-decoration-none"><i className="circle fa-thin fa-arrow-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="service_content position-relative" data-aos="fade-right">
                <figure className="service-rightcircle mb-0">
                  <img src="./assets/images/service-rightcircle.png" alt="" className="img-fluid" />
                </figure>
                <h6>Our Services</h6>
                <h2>BEST IT SOLUTION FOR YOUR BUSINESS</h2>
                <p>Grursus mal suada faci lisis lorem ipsum dolarorit more ame
                        ion consectetur elit vesti at bulum nec odio aea the dumm ipsumm recreo that dolocons.</p>
                <ul className="list-unstyled mb-0">
                  <li className="text"><i className="circle fa-duotone fa-check"></i>Quisquam est, rui dolorem ipsum quia dolor corporis.</li>
                  <li className="text"><i className="circle fa-duotone fa-check"></i>Rem aperiam, eaque ipsa quae ab illo inventore veritatis.</li>
                  <li className="text"><i className="circle fa-duotone fa-check"></i>Duis aute irure dolor in reprehenderit in voluptate velio.</li>
                  <li className="text text1"><i className="circle fa-duotone fa-check"></i>Molestiae non recusandae itarue earum rerum maio.</li>
                </ul>
                <Link to="/service" className="get_started text-white text-decoration-none">Get Started
                  <figure className="mb-0"><img src="./assets/images/button-arrow.png" alt="" className="img-fluid" /></figure>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <figure className="service-rightlayer mb-0">
          <img src="./assets/images/service-rightlayer.png" alt="" className="img-fluid" />
        </figure>
      </section>
      <section className="offer-section">
        <figure className="offer-toplayer mb-0">
          <img src="./assets/images/offer-toplayer.png" alt="" className="img-fluid" />
        </figure>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="offer_content" data-aos="fade-up">
                <h6>what We Offer</h6>
                <h2>Why You Should Choose Us</h2>
                <p>Grursus mal suada faci lisis lorem ipsum dolarorit more ame ion consectetur elit vesti at bulum nec odio aea the dumm recreo that dolocons.</p>
              </div>
            </div>
          </div>
          <div className="row position-relative">
            <figure className="offer-circleimage mb-0">
              <img src="./assets/images/offer-circleimage.png" alt="" className="img-fluid" />
            </figure>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 article_padding">
              <div className="offer_boxcontent">
                <div className="upper_portion">
                  <figure className="mb-0"><img src="./assets/images/offer-image1.jpg" className="article_img" alt="" /></figure>
                  <div className="image_content">
                    <figure className="offer-icon">
                      <img src="./assets/images/offer-icon1.png" alt="" className="img-fluid" />
                    </figure>
                  </div>
                </div>
                <div className="lower_portion_wrapper">
                  <div className="lower_portion">
                    <h4 className="mb-0">Perfect solutions that business demands</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 article_padding">
              <div className="offer_boxcontent">
                <div className="upper_portion">
                  <figure className="mb-0"><img src="./assets/images/offer-image2.jpg" className="article_img" alt="" /></figure>
                  <div className="image_content">
                    <figure className="offer-icon offer-icon2">
                      <img src="./assets/images/offer-icon2.png" alt="" className="img-fluid" />
                    </figure>
                  </div>
                </div>
                <div className="lower_portion_wrapper">
                  <div className="lower_portion">
                    <h4 className="mb-0">We Provide Powerfull Product Strategy</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 article_padding">
              <div className="offer_boxcontent mb-0">
                <div className="upper_portion">
                  <figure className="mb-0"><img src="./assets/images/offer-image3.jpg" className="article_img" alt="" /></figure>
                  <div className="image_content">
                    <figure className="offer-icon">
                      <img src="./assets/images/offer-icon3.png" alt="" className="img-fluid" />
                    </figure>
                  </div>
                </div>
                <div className="lower_portion_wrapper">
                  <div className="lower_portion">
                    <h4 className="mb-0">Help your business grow worldwide</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure className="offer-bottomlayer mb-0">
          <img src="./assets/images/offer-bottomlayer.png" alt="" className="img-fluid" />
        </figure>
      </section>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-2">
              <div className="about_wrapper">
                <figure className="mb-0 about-image1">
                  <img src="./assets/images/about-image1.jpg" alt="" className="" />
                </figure>
                <figure className="mb-0 about-image2">
                  <img src="./assets/images/about-image2.jpg" alt="" className="img-fluid" />
                </figure>
                <div className="image-circle">
                  <div className="years">
                    <span className="text-white value counter">30</span>
                    <sup className="text-white mb-0 plus">+</sup>
                    <span className="text-white text">Years of Experience</span>
                  </div>
                  <figure className="mb-0 about-imagecircle">
                    <img src="./assets/images/about-imagecircle.png" alt="" className="" />
                  </figure>
                </div>
                <figure className="mb-0 about-dot">
                  <img src="./assets/images/about-dot.png" alt="" className="img-fluid" />
                </figure>
                <figure className="mb-0 about-leftcircle">
                  <img src="./assets/images/about-leftcircle.png" alt="" className="img-fluid" />
                </figure>
                <figure className="mb-0 about-layer">
                  <img src="./assets/images/about-layer.png" alt="" className="img-fluid" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-1">
              <div className="about_content" data-aos="fade-right">
                <h6>About us</h6>
                <h2 className="text-white">We help clients invent their future.</h2>
                <p className="text1">Grursus mal suada faci lisis lorem ipsum dolarorit more ae ion consectetur elit vesti at bulum nec odio aea the dumo ipsumm recreo that dolocons.</p>
                <p className="text2">Exercitationem ullam corporis suscipit laboriosam, nisi auali quid exear commodi consequatur.</p>
                <Link to="/about" className="read_more text-white text-decoration-none">Read More
                  <figure className="mb-0"><img src="./assets/images/button-arrow.png" alt="" className="img-fluid" /></figure>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <figure className="mb-0 about-rightimage">
          <img src="./assets/images/about-rightimage.png" alt="" className="img-fluid" />
        </figure>
        <figure className="mb-0 about-rightcircle">
          <img src="./assets/images/about-rightcircle.png" alt="" className="img-fluid" />
        </figure>
      </section>
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
                <h6>Achievements</h6>
                <h2>Some Number of Our Achievements</h2>
                <p>Grursus mal suada faci lisis lorem ipsum dolarorit more
                        ion consectetur elit vesti at bulum nec odio aea the au ipsumm recreo that dolocons.</p>
                <Link to="/about" className="get_started text-white text-decoration-none">Get Started
                  <figure className="mb-0"><img src="./assets/images/button-arrow.png" alt="" className="img-fluid" /></figure>
                </Link>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="achievement_wrapper">
                <div className="achievement-box box1">
                  <figure className="icon achievement-icon">
                    <img src="./assets/images/achievement-clienticon.png" alt="" className="img-fluid" />
                  </figure> 
                  <div className="wrapper">
                    <h3>3,860</h3>
                    <p className="text-size-18 mb-0">Satisfied Clients</p>
                  </div>
                </div> 
                <div className="achievement-box box2">
                  <figure className="icon1 achievement-icon">
                    <img src="./assets/images/achievement-projecticon.png" alt="" className="img-fluid" />
                  </figure>
                  <div className="wrapper">
                    <h3>8,550</h3>
                    <p className="text-size-18 mb-0">Projects Completed</p>
                  </div>
                </div>
                <div className="achievement-box box3">
                  <figure className="icon achievement-icon">
                    <img src="./assets/images/achievement-teamicon.png" alt="" className="img-fluid" />
                  </figure> 
                  <div className="wrapper">
                    <div className="number number1">
                      <h3 className="value counter">90</h3>
                      <span className="plus">+</span>
                    </div>
                    <p className="text text-size-18 mb-0">Team Members</p>
                  </div>
                </div> 
                <div className="achievement-box box4">
                  <figure className="icon1 achievement-icon">
                    <img src="./assets/images/achievement-awardicon.png" alt="" className="img-fluid" />
                  </figure>
                  <div className="wrapper">
                    <div className="number">
                      <h3 className="value counter">180</h3>
                      <span className="plus">+</span>
                    </div>
                    <p className="text text-size-18 mb-0">Awards Win</p>
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
      <section className="project-section">
        <figure className="offer-toplayer mb-0">
          <img src="./assets/images/offer-toplayer.png" alt="" className="img-fluid" />
        </figure>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="project_content" data-aos="fade-right">
                <h6>RECENT PROJECTS</h6>
                <h2>Our Latest Case Studies</h2>
                <p>Dursus mal suada faci lisis lorem ipsum dolarorit more ame ion consectetur elit vesti at bulum nec
                        odio aea the dumm recreo that dolocons.</p>
                <figure className="offer-circleimage mb-0">
                  <img src="./assets/images/offer-circleimage.png" alt="" className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="case-box1 case-box overlay">
                  <div className="overlay-image">
                    <figure className="image mb-0">
                      <img src="./assets/images/case-image1.jpg" alt="" className="" />
                    </figure>
                  </div>
                  <div className="content">
                    <span className="text-white">Design</span>
                    <h5 className="text-white">Business Analysis</h5>
                    <p className="text-white text-size-18">Rerum hic tenetur sapiente...</p>
                    <i className="circle fa-thin fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-box overlay">
                  <div className="overlay-image">
                    <figure className="image mb-0">
                      <img src="./assets/images/case-image2.jpg" alt="" className="" />
                    </figure>
                  </div>
                  <div className="content">
                    <span className="text-white">Development</span>
                    <h5 className="text-white">Web Development</h5>
                    <p className="text-white text-size-18">Serum hic tenetur a sapiente...</p>
                    <i className="circle fa-thin fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-box2 case-box overlay">
                  <div className="overlay-image">
                    <figure className="image mb-0">
                      <img src="./assets/images/case-image3.jpg" alt="" className="" />
                    </figure>
                  </div>
                  <div className="content">
                    <span className="text-white">Marketing</span>
                    <h5 className="text-white">Digital Marketing</h5>
                    <p className="text-white text-size-18">Terum hic tenetur a sapiente...</p>
                    <i className="circle fa-thin fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-box overlay">
                  <div className="overlay-image">
                    <figure className="image mb-0">
                      <img src="./assets/images/case-image4.jpg" alt="" className="" />
                    </figure>
                  </div>
                  <div className="content">
                    <span className="text-white">Design</span>
                    <h5 className="text-white">Tech Solutions</h5>
                    <p className="text-white text-size-18">Uerum hic tenetur a sapiente...</p>
                    <i className="circle fa-thin fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-box overlay">
                  <div className="overlay-image">
                    <figure className="image mb-0">
                      <img src="./assets/images/case-image5.jpg" alt="" className="" />
                    </figure>
                  </div>
                  <div className="content">
                    <span className="text-white">Security</span>
                    <h5 className="text-white">Cyber Security</h5>
                    <p className="text-white text-size-18">Nerum hic tenetur a sapiente...</p>
                    <i className="circle fa-thin fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-box1 case-box overlay">
                  <div className="overlay-image">
                    <figure className="image mb-0">
                      <img src="./assets/images/case-image1.jpg" alt="" className="" />
                    </figure>
                  </div>
                  <div className="content">
                    <span className="text-white">Design</span>
                    <h5 className="text-white">Business Analysis</h5>
                    <p className="text-white text-size-18">Rerum hic tenetur sapiente...</p>
                    <i className="circle fa-thin fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-box overlay">
                  <div className="overlay-image">
                    <figure className="image mb-0">
                      <img src="./assets/images/case-image2.jpg" alt="" className="" />
                    </figure>
                  </div>
                  <div className="content">
                    <span className="text-white">Development</span>
                    <h5 className="text-white">Web Development</h5>
                    <p className="text-white text-size-18">Serum hic tenetur a sapiente...</p>
                    <i className="circle fa-thin fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-box2 case-box overlay">
                  <div className="overlay-image">
                    <figure className="image mb-0">
                      <img src="./assets/images/case-image3.jpg" alt="" className="" />
                    </figure>
                  </div>
                  <div className="content">
                    <span className="text-white">Marketing</span>
                    <h5 className="text-white">Digital Marketing</h5>
                    <p className="text-white text-size-18">Terum hic tenetur a sapiente...</p>
                    <i className="circle fa-thin fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-box overlay">
                  <div className="overlay-image">
                    <figure className="image mb-0">
                      <img src="./assets/images/case-image4.jpg" alt="" className="" />
                    </figure>
                  </div>
                  <div className="content">
                    <span className="text-white">Design</span>
                    <h5 className="text-white">Tech Solutions</h5>
                    <p className="text-white text-size-18">Uerum hic tenetur a sapiente...</p>
                    <i className="circle fa-thin fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-box overlay">
                  <div className="overlay-image">
                    <figure className="image mb-0">
                      <img src="./assets/images/case-image5.jpg" alt="" className="" />
                    </figure>
                  </div>
                  <div className="content">
                    <span className="text-white">Security</span>
                    <h5 className="text-white">Cyber Security</h5>
                    <p className="text-white text-size-18">Nerum hic tenetur a sapiente...</p>
                    <i className="circle fa-thin fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-box1 case-box overlay">
                  <div className="overlay-image">
                    <figure className="image mb-0">
                      <img src="./assets/images/case-image1.jpg" alt="" className="" />
                    </figure>
                  </div>
                  <div className="content">
                    <span className="text-white">Design</span>
                    <h5 className="text-white">Business Analysis</h5>
                    <p className="text-white text-size-18">Rerum hic tenetur sapiente...</p>
                    <i className="circle fa-thin fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-box overlay">
                  <div className="overlay-image">
                    <figure className="image mb-0">
                      <img src="./assets/images/case-image2.jpg" alt="" className="" />
                    </figure>
                  </div>
                  <div className="content">
                    <span className="text-white">Development</span>
                    <h5 className="text-white">Web Development</h5>
                    <p className="text-white text-size-18">Serum hic tenetur a sapiente...</p>
                    <i className="circle fa-thin fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-box2 case-box overlay">
                  <div className="overlay-image">
                    <figure className="image mb-0">
                      <img src="./assets/images/case-image3.jpg" alt="" className="" />
                    </figure>
                  </div>
                  <div className="content">
                    <span className="text-white">Marketing</span>
                    <h5 className="text-white">Digital Marketing</h5>
                    <p className="text-white text-size-18">Terum hic tenetur a sapiente...</p>
                    <i className="circle fa-thin fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-box overlay">
                  <div className="overlay-image">
                    <figure className="image mb-0">
                      <img src="./assets/images/case-image4.jpg" alt="" className="" />
                    </figure>
                  </div>
                  <div className="content">
                    <span className="text-white">Design</span>
                    <h5 className="text-white">Tech Solutions</h5>
                    <p className="text-white text-size-18">Uerum hic tenetur a sapiente...</p>
                    <i className="circle fa-thin fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="case-box overlay">
                  <div className="overlay-image">
                    <figure className="image mb-0">
                      <img src="./assets/images/case-image5.jpg" alt="" className="" />
                    </figure>
                  </div>
                  <div className="content">
                    <span className="text-white">Security</span>
                    <h5 className="text-white">Cyber Security</h5>
                    <p className="text-white text-size-18">Nerum hic tenetur a sapiente...</p>
                    <i className="circle fa-thin fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure className="offer-bottomlayer mb-0">
          <img src="./assets/images/offer-bottomlayer.png" alt="" className="img-fluid" />
        </figure>
      </section>

      <section className="testimonial-section position-relative">
        <figure className="service-leftlayer mb-0">
          <img src="./assets/images/service-leftlayer.png" alt="" className="img-fluid" />
        </figure>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="testimonial_wrapper position-relative" data-aos="fade-right">
                <figure className="service-rightcircle mb-0">
                  <img src="./assets/images/service-rightcircle.png" alt="" className="img-fluid" />
                </figure>
                <div className="circle_wrapper position-relative">
                  <div className="center-circle">
                    <figure className="testimonial-centerimage mb-0">
                      <img src="./assets/images/testimonial-centerimage.png" alt="" className="img-fluid" />
                    </figure>
                  </div>
                  <figure className="testimonial-image1 position-absolute mb-0">
                    <img src="./assets/images/testimonial-image1.png" alt="" className="img-fluid" />
                  </figure>
                  <figure className="testimonial-image2 position-absolute mb-0">
                    <img src="./assets/images/testimonial-image2.png" alt="" className="img-fluid" />
                  </figure>
                  <figure className="testimonial-image3 position-absolute mb-0">
                    <img src="./assets/images/testimonial-image3.png" alt="" className="img-fluid" />
                  </figure>
                  <figure className="testimonial-image4 position-absolute mb-0">
                    <img src="./assets/images/testimonial-image4.png" alt="" className="img-fluid" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="testimonial_contentwrapper">
                <div className="heading">
                  <h6>TESTIMONIALS</h6>
                  <h2>What Our Customers Have To Say</h2>
                </div>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="testimonial_content">
                        <div className="content-box">
                          <p>Nemo enim ipsam voluptatem quia voluptas sit asperna aut odit aut 
                                            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
                                            sequi nesciuntporro quisuam est, rui dolorem ipsum quia dolor sit amet, 
                                            consectetur adieisci velit sed ruia.</p>
                          <div className="content">
                            <div className="circle">
                              <figure className="testimonial-quote mb-0">
                                <img src="./assets/images/testimonial-quote.png" alt="" className="img-fluid" />
                              </figure>
                            </div>
                            <div className="designation-outer">
                              <span>Kevin James</span>
                              <p className="text-size-18 mb-0">Happy Client</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="testimonial_content">
                        <div className="content-box">
                          <p>Nemo enim ipsam voluptatem quia voluptas sit asperna aut odit aut 
                                            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
                                            sequi nesciuntporro quisuam est, rui dolorem ipsum quia dolor sit amet, 
                                            consectetur adieisci velit sed ruia.</p>
                          <div className="content">
                            <div className="circle">
                              <figure className="testimonial-quote mb-0">
                                <img src="./assets/images/testimonial-quote.png" alt="" className="img-fluid" />
                              </figure>
                            </div>
                            <div className="designation-outer">
                              <span>Kevin James</span>
                              <p className="text-size-18 mb-0">Happy Client</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pagination-outer">
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <i className="fa-solid fa-arrow-left"></i>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <i className="fa-solid fa-arrow-right-long"></i>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure className="service-rightlayer mb-0">
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
              <div className="blog_content" data-aos="fade-right">
                <h6>News and articles</h6>
                <h2>our latest blog posts</h2>
                <p>Grursus mal suada faci lisis lorem ipsum dolarorit more ame ion consectetur elit vesti at bulum nec
                        odio aea the dumm recreo that dolocons.</p>
                <figure className="offer-circleimage mb-0">
                  <img src="./assets/images/offer-circleimage.png" alt="" className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="blog_boxcontent">
                  <div className="upper_portion">
                    <figure className="mb-0"><img src="./assets/images/blog-image1.jpg" className="article_img" alt="" /></figure>
                    <div className="image_content">
                      <div className="content">
                        <h3 className="text-white counter">18</h3>
                        <span className="text-white">March</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower_portion_wrapper">
                    <div className="lower_portion">
                      <h4>Useful Tips From Experts In Service.</h4>
                      <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                      <Link to="" className="read_more text-decoration-none">Read More
                        <figure className="arrow mb-0"><img src="./assets/images/blog-arrow.png" alt="" className="img-fluid" /></figure>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog_boxcontent">
                  <div className="upper_portion">
                    <figure className="mb-0"><img src="./assets/images/blog-image2.jpg" className="article_img" alt="" /></figure>
                    <div className="image_content">
                      <div className="content">
                        <h3 className="text-white counter">26</h3>
                        <span className="text-white">April</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower_portion_wrapper">
                    <div className="lower_portion">
                      <h4>How Will Service Be In The Future.</h4>
                      <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                      <Link to="" className="read_more text-decoration-none">Read More
                        <figure className="arrow mb-0"><img src="./assets/images/blog-arrow.png" alt="" className="img-fluid" /></figure>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog_boxcontent mb-0">
                  <div className="upper_portion">
                    <figure className="mb-0"><img src="./assets/images/blog-image3.jpg" className="article_img" alt="" /></figure>
                    <div className="image_content">
                      <div className="content">
                        <h3 className="text-white counter">09</h3>
                        <span className="text-white">June</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower_portion_wrapper">
                    <div className="lower_portion">
                      <h4>How Service Can Ease Your Pain.</h4>
                      <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                      <Link to="" className="read_more text-decoration-none">Read More
                        <figure className="arrow mb-0"><img src="./assets/images/blog-arrow.png" alt="" className="img-fluid" /></figure>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog_boxcontent">
                  <div className="upper_portion">
                    <figure className="mb-0"><img src="./assets/images/blog-image1.jpg" className="article_img" alt="" /></figure>
                    <div className="image_content">
                      <div className="content">
                        <h3 className="text-white counter">18</h3>
                        <span className="text-white">March</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower_portion_wrapper">
                    <div className="lower_portion">
                      <h4>Useful Tips From Experts In Service.</h4>
                      <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                      <Link to="" className="read_more text-decoration-none">Read More
                        <figure className="arrow mb-0"><img src="./assets/images/blog-arrow.png" alt="" className="img-fluid" /></figure>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog_boxcontent">
                  <div className="upper_portion">
                    <figure className="mb-0"><img src="./assets/images/blog-image2.jpg" className="article_img" alt="" /></figure>
                    <div className="image_content">
                      <div className="content">
                        <h3 className="text-white counter">26</h3>
                        <span className="text-white">April</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower_portion_wrapper">
                    <div className="lower_portion">
                      <h4>How Will Service Be In The Future.</h4>
                      <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                      <Link to="" className="read_more text-decoration-none">Read More
                        <figure className="arrow mb-0"><img src="./assets/images/blog-arrow.png" alt="" className="img-fluid" /></figure>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog_boxcontent mb-0">
                  <div className="upper_portion">
                    <figure className="mb-0"><img src="./assets/images/blog-image3.jpg" className="article_img" alt="" /></figure>
                    <div className="image_content">
                      <div className="content">
                        <h3 className="text-white counter">09</h3>
                        <span className="text-white">June</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower_portion_wrapper">
                    <div className="lower_portion">
                      <h4>How Service Can Ease Your Pain.</h4>
                      <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                      <Link to="" className="read_more text-decoration-none">Read More
                        <figure className="arrow mb-0"><img src="./assets/images/blog-arrow.png" alt="" className="img-fluid" /></figure>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog_boxcontent">
                  <div className="upper_portion">
                    <figure className="mb-0"><img src="./assets/images/blog-image1.jpg" className="article_img" alt="" /></figure>
                    <div className="image_content">
                      <div className="content">
                        <h3 className="text-white counter">18</h3>
                        <span className="text-white">March</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower_portion_wrapper">
                    <div className="lower_portion">
                      <h4>Useful Tips From Experts In Service.</h4>
                      <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                      <Link to="" className="read_more text-decoration-none">Read More
                        <figure className="arrow mb-0"><img src="./assets/images/blog-arrow.png" alt="" className="img-fluid" /></figure>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog_boxcontent">
                  <div className="upper_portion">
                    <figure className="mb-0"><img src="./assets/images/blog-image2.jpg" className="article_img" alt="" /></figure>
                    <div className="image_content">
                      <div className="content">
                        <h3 className="text-white counter">26</h3>
                        <span className="text-white">April</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower_portion_wrapper">
                    <div className="lower_portion">
                      <h4>How Will Service Be In The Future.</h4>
                      <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                      <Link to="" className="read_more text-decoration-none">Read More
                        <figure className="arrow mb-0"><img src="./assets/images/blog-arrow.png" alt="" className="img-fluid" /></figure>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog_boxcontent mb-0">
                  <div className="upper_portion">
                    <figure className="mb-0"><img src="./assets/images/blog-image3.jpg" className="article_img" alt="" /></figure>
                    <div className="image_content">
                      <div className="content">
                        <h3 className="text-white counter">09</h3>
                        <span className="text-white">June</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower_portion_wrapper">
                    <div className="lower_portion">
                      <h4>How Service Can Ease Your Pain.</h4>
                      <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                      <Link to="" className="read_more text-decoration-none">Read More
                        <figure className="arrow mb-0"><img src="./assets/images/blog-arrow.png" alt="" className="img-fluid" /></figure>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure className="offer-bottomlayer mb-0">
          <img src="./assets/images/offer-bottomlayer.png" alt="" className="img-fluid" />
        </figure>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;