 import React, { useState } from "react";
import "../../style.css";

const ImprovingFeedback = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="container mt-5">
      <div>
        <h4>Improving Feedback and Care Quality</h4>
        <p>Enhance patient experience and loyalty through data-driven insights into service quality.</p>
      </div>
      <section className="domo_app-section" >
        <div className="container">
          <div className="row" style={{ padding:"50px 0"}}>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-md-1 order-2">
              <div className="domo_app_contentbox">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6" onClick={() => setSelected(1)} style={{ cursor:"pointer"}}>
                    <div className={selected === 1 ? "domo_app-box box-mb active" : "domo_app-box box-mb"}>
                      <figure className="domo_app-marketicon">
                        <img src="./assets/images/service-marketicon.png" alt="" className="img-fluid" />
                      </figure> 
                      <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>Net Promoter Score (NPS) Analysis</div>
                    </div>   
                  </div>
                  <div style={{ cursor:"pointer"}} className="col-lg-6 col-md-6 col-sm-6 col-6" onClick={() => setSelected(2)} >
                    <div className="box-top">
                      <div className={selected === 2 ? "domo_app-box box-mb active" : "domo_app-box box-mb"}>
                        <figure className="domo_app-producticon">
                          <img src="./assets/images/service-producticon.png" alt="" className="img-fluid" />
                        </figure>
                        <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>Feedback Trend Analysis</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6" onClick={() => setSelected(3)} style={{ cursor:"pointer"}}>
                    <div className={selected === 3 ? "domo_app-box active" : "domo_app-box"}>
                      <figure className="domo_app-designicon">
                        <img src="./assets/images/service-designicon.png" alt="" className="img-fluid" />
                      </figure>
                      <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>Service Quality Metrics</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-md-2 order-1">
              <div className="domo_app_content position-relative" data-aos="fade-right" style={{paddingTop: "120px" }}>
                {
                  selected === 1 && (
                    <React.Fragment>
                      <h2>Net Promoter Score (NPS) Analysis</h2>
                      <p>
                      Measure patient loyalty and the likelihood of referrals.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Improve NPS scores to enhance patient sentiment.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Increase referral rates through better care.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Address feedback to improve patient experience.
                        </li>
                      </ul>
                    </React.Fragment>
                  )
                }
                {
                  selected === 2 && (
                    <React.Fragment>
                      <h2>Feedback Trend Analysis</h2>
                      <p>
                      Analyze feedback trends to identify areas of improvement.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Address recurring complaints.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Enhance department-wise service quality.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Implement changes based on patient suggestions.
                        </li>
                      </ul>
                    </React.Fragment>
                  )
                }
                {
                  selected === 3 && (
                    <React.Fragment>
                      <h2>Service Quality Metrics</h2>
                      <p>
                      Monitor overall patient satisfaction and service quality.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Improve satisfaction scores.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Enhance timeliness and efficiency of services.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Ensure continuous improvement in patient care.
                        </li>
                      </ul>
                    </React.Fragment>
                  )
                }               
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImprovingFeedback;