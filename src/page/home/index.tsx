 
 
// import { Link } from "react-router-dom";
// import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const HomePage = () => {
  return (
    <>
      <Navbar activeNav="home" />
        

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
                <a className="get_started text-white text-decoration-none" href="./about.html">Get Started
                  <figure className="mb-0"><img src="./assets/images/button-arrow.png" alt="" className="img-fluid" /></figure>
                </a>
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
     
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;