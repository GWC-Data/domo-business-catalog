 
import React, { useState } from "react";
import "../../style.css";

const Compensation = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="container mt-5">
      <div>
        <h4>Compensation and Career Growth Tracker</h4>
        <p>Ensures that compensation strategies align with industry standards and employee expectations.</p>
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
                      <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>Compensation and Benefits Dashboard</div>
                    </div>   
                  </div>
                  <div style={{ cursor:"pointer"}} className="col-lg-6 col-md-6 col-sm-6 col-6" onClick={() => setSelected(2)} >
                    <div className="box-top">
                      <div className={selected === 2 ? "domo_app-box box-mb active" : "domo_app-box box-mb"}>
                        <figure className="domo_app-producticon">
                          <img src="./assets/images/service-producticon.png" alt="" className="img-fluid" />
                        </figure>
                        <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>Compensation Benchmarking Dashboard</div>
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
                      <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>Succession Planning Dashboard</div>
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
                      <h2>Compensation and Benefits Dashboard</h2>
                      <p>Ensure equitable and competitive compensation to retain top talent.</p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Track salary ranges, bonuses, and benefits by role and location.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Compare compensation packages with industry benchmarks.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Measure the ROI of compensation changes on employee performance and retention.
                        </li>
                      </ul>
                    </React.Fragment>
                  )
                }
                {
                  selected === 2 && (
                    <React.Fragment>
                      <h2>Compensation Benchmarking Dashboard</h2>
                      <p>Compare compensation practices to industry standards to remain competitive.</p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Analyze salary benchmarks by role and location.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Track compensation adjustments and market trends.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Align compensation strategies with employee expectations.
                        </li>
                      </ul>
                    </React.Fragment>
                  )
                }
                {
                  selected === 3 && (
                    <React.Fragment>
                      <h2>Succession Planning Dashboard</h2>
                      <p>Ensure leadership continuity by tracking potential candidates for key roles.</p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Identify critical roles and potential successors.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Measure readiness and develop targeted development plans.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Track leadership development program effectiveness.
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

export default Compensation;