/* eslint-disable max-len */
import React from "react";

const TestGwc = () => {
  return (
    <div>
      <section className="service-section" >
        <figure className="service-leftlayer mb-0">
          <img src="./assets/images/service-leftlayer.png" alt="" className="img-fluid" />
        </figure>
        <figure className="service-dotimage mb-0">
          <img src="./assets/images/service-dotimage.png" alt="" className="img-fluid" />
        </figure>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-md-1 order-2">
              <div className="service_contentbox">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="service-box box-mb">
                      <figure className="service-marketicon">
                        <img src="./assets/images/service-marketicon.png" alt="" className="img-fluid" />
                      </figure> 
                      <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>200+ Domo Certified Experts</div>
                      {/* <p className="text-size-18">Our team consists of highly skilled professionals, certified across Domo’s ecosystem—ensuring exceptional service delivery and expertise.</p> */}
                      {/* <a className="arrow text-decoration-none" href="./service.html"><i className="circle fa-thin fa-arrow-right"></i></a> */}
                    </div>   
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="box-top">
                      <div className="service-box box-mb">
                        <figure className="service-producticon">
                          <img src="./assets/images/service-producticon.png" alt="" className="img-fluid" />
                        </figure>
                        <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>100,000+ Hours of Delivery</div>
                        {/* <p className="text-size-18">With over 100K hours dedicated to building and scaling Domo solutions, we’ve set the standard for quality, speed, and innovation.</p> */}
                        {/* <a className="arrow text-decoration-none" href="./service.html"><i className="circle fa-thin fa-arrow-right"></i></a> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="service-box">
                      <figure className="service-designicon">
                        <img src="./assets/images/service-designicon.png" alt="" className="img-fluid" />
                      </figure>
                      <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>300+ Tailored Solutions Delivered</div>
                      {/* <p className="text-size-18">We have successfully delivered over 300 innovative Domo solutions, including dashboards, apps, integrations, and AI-driven analytics—customized to meet unique business needs.</p> */}
                      {/* <a className="arrow text-decoration-none" href="./service.html"><i className="circle fa-thin fa-arrow-right"></i></a> */}
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <div className="box-top">
                      <div className="service-box">
                        <figure className="service-dataicon">
                          <img src="./assets/images/service-dataicon.png" alt="" className="img-fluid" />
                        </figure>
                        <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>Award-Winning Innovation</div>
                        {/* <p className="text-size-18">Our focus on crafting cutting-edge solutions and solving complex challenges has solidified our reputation as Domo’s go-to partner.</p> */}
                        {/* <a className="arrow text-decoration-none" href="./service.html"><i className="circle fa-thin fa-arrow-right"></i></a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-md-2 order-1">
              <div className="service_content position-relative" data-aos="fade-right" style={{paddingTop: "120px" }}>
                <figure className="service-rightcircle mb-0">
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
        <figure className="service-rightlayer mb-0">
          <img src="./assets/images/service-rightlayer.png" alt="" className="img-fluid" />
        </figure>
      </section>
    </div>
  );
};

export default TestGwc;