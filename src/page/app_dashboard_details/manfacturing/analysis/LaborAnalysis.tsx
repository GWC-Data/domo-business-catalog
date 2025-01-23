 
import React, { useState } from "react";
import "./style.css";

const LaborAnalysis = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="container mt-5">
      <div>
        <h4>Labor Productivity and Employee Satisfaction analysis</h4>
        <p>Optimize workforce performance and enhance employee satisfaction with data-driven insights.</p>
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
                      <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>Labor Productivity Analysis</div>
                    </div>   
                  </div>
                  <div style={{ cursor:"pointer"}} className="col-lg-6 col-md-6 col-sm-6 col-6" onClick={() => setSelected(2)} >
                    <div className="box-top">
                      <div className={selected === 2 ? "domo_app-box box-mb active" : "domo_app-box box-mb"}>
                        <figure className="domo_app-producticon">
                          <img src="./assets/images/service-producticon.png" alt="" className="img-fluid" />
                        </figure>
                        <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>Attendance and Absenteeism Analysis</div>
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
                      <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>Shift Performance Analysis</div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6" onClick={() => setSelected(4)} style={{ cursor:"pointer"}}>
                    <div className="box-top">
                      <div className={selected === 4 ? "domo_app-box active" : "domo_app-box"}>
                        <figure className="domo_app-dataicon">
                          <img src="./assets/images/service-dataicon.png" alt="" className="img-fluid" />
                        </figure>
                        <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>Employee Satisfaction and Retention Analysis</div>
                      </div>
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
                      <h2>Labor Productivity <br /> Analysis</h2>
                      <p>
                      Monitor workforce efficiency to improve productivity and cost-effectiveness.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Increase output per labor hour.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Reduce labor cost per unit.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Boost overall workforce efficiency.
                        </li>
                      </ul>
                    </React.Fragment>
                  )
                }
                {
                  selected === 2 && (
                    <React.Fragment>
                      <h2>Attendance and Absenteeism Analysis</h2>
                      <p>
                      Track attendance patterns and optimize workforce availability.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Improve overall attendance rates.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Reduce absenteeism and overtime hours.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Enhance scheduling flexibility and resource allocation.
                        </li>
                      </ul>
                    </React.Fragment>
                  )
                }
                {
                  selected === 3 && (
                    <React.Fragment>
                      <h2>Shift Performance Analysis</h2>
                      <p>
                      Assess shift performance to balance workload and improve consistency.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Optimize shift output and performance.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Reduce shift-to-shift variability in productivity.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Improve shift efficiency through data-driven adjustments.
                        </li>
                      </ul>
                    </React.Fragment>
                  )
                }
                {
                  selected === 4 && (
                    <React.Fragment>
                      <h2>Employee Satisfaction and Retention Analysis</h2>
                      <p>
                      Foster a positive work environment to improve employee retention and satisfaction.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Boost employee satisfaction scores.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Increase retention rates and reduce turnover.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Identify and address key factors impacting employee morale.
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

export default LaborAnalysis;