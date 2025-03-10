/* eslint-disable max-len */
import "../infobeam.css";
import "../../home/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import "../domodocxOverview/DomoDocxCard.css";
import { MdOutlineCreditScore } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GrDocumentPerformance } from "react-icons/gr";


const DataBricksGovernance = () => {
  return (
    < >
      <div className=" " >
        <div className="row" style={{backgroundColor:"#F0584B"}}>
          {/* cards*/}
          <section className="container" >
            <figure className="gwc_domo-dotimage mb-0">
              <img src="./assets/images/gwc_domo-dotimage.png" alt="" className="img-fluid" />
            </figure>
            <div className="col-12 mt-3 ">
              <div className="col-12 text-center mb-3 ">
                <h2 className="text-white">What's Included in Domo Governor?</h2>
                <p className="text-white">
                Domo Governor includes features like centralized governance tools, automation workflows, real-time alerts, resource usage tracking, and actionable insights to optimize your Domo instance.   </p>
              </div>
              <div className="row " style={{marginTop:"60px"}}>
                {/* Card 1: Credit-Based Governance */}
                <div className="col-lg-4 col-md-6 col-12 mb-5 ">
                  <div className="feature-card">
                    <div className="rounded_icon">
                      <MdOutlineCreditScore className="icon " />
                    </div>
                      <h2 className="feature-title">
                      Credit-Based Governance
                      </h2>
                      
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Track Usage: Monitor credit usage across datasets, dataflows, and dashboards seamlessly.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Optimize Resources: Receive automated alerts to optimize credit consumption effectively.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Visual Lineage: View dataset relationships with clear, interactive lineage maps.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Effortless Insights: Gain visibility into resource utilization for better decision-making.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Smart Monitoring: Proactively identify and address inefficiencies in credit usage.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 2: Data Security & Management  */}
                <div className="col-lg-4 col-md-6 col-12 mb-5 ">
                  <div className="feature-card">
                    <div className="rounded_icon">
                      <RiSecurePaymentLine className="icon " />
                    </div>
                      <h2 className="feature-title">
                      Data Security & Management
                      </h2>
                      
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Token Management: Secure token-based authentication ensures encrypted access.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          API Control: Maintain fine-grained API control for enhanced governance.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Encryption: Protect data in transit with SSL/TLS encryption to prevent breaches.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Compliance: Automate workflows to enforce compliance and reduce errors.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Security Best Practices: Safeguard sensitive data with robust governance measures.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 3: Performance Optimization*/}
                <div className="col-lg-4 col-md-6 col-12 mb-5 ">
                  <div className="feature-card">
                    <div className="rounded_icon">
                      <GrDocumentPerformance className="icon " />
                    </div>
                      <h2 className="feature-title">
                      Performance Optimization
                      </h2>
                      
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Memoization: Speed up processing by caching results to avoid redundant calculations.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Optimized Rendering: Deliver smooth user experiences with efficient rendering techniques.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Automated Tasks: Streamline operations with secure, automated workflows.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Real-Time Alerts: Identify and resolve performance bottlenecks proactively.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Scalable Solutions: Ensure consistent performance as usage scales up.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* <figure className="gwc_domo-rightlayer mb-0">
              <img src="./assets/images/service-rightlayer.png" alt="" className="img-fluid" />
            </figure> */}
          </section>
      
        </div>
       {/*Flowchart Diagram*/}
       <div className="container mt-5">
        <div className='col-lg-12 col-md-6 col-12 mb-3 text-center'>
          <h2 className="mb-5">Domo Governor Architecture Overview</h2>
          <p>Domo Governor integrates with Domo's core instance to centralize management and governance. Automated workflows and real-time monitoring provide seamless oversight, while dashboards deliver actionable insights for optimized operations.</p>
        </div>
        <div className="flow-chart-container">
          <img
            src="./assets/images/products/Domo Governance.drawio.svg"
            alt="Architecture Diagram"
            className="architecture-image"
          />
        </div>
      </div>
      <div className="mt-4">
        <iframe src="https://embed.domo.com/cards/ANRPl" width="100%" height="650" frameBorder={"0"}></iframe>
      </div>
      </div>
    </>
  );
};

export default DataBricksGovernance;
