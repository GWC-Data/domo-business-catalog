/* eslint-disable max-len */
import "../infobeam.css";
import "../../home/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import "../domodocxOverview/DomoDocxCard.css";
import { MdOutlineDataUsage, MdOutlineSecurity ,MdSupervisorAccount  } from "react-icons/md";
import { SiGooglebigquery } from "react-icons/si";
import { RiDatabaseLine } from "react-icons/ri";
import { TbAlertSquareRounded } from "react-icons/tb";

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
                <h2 className="text-white">What's Included in Databricks Governance?</h2>
                <p className="text-white">
                Databricks Governance offers features like account usage tracking, query performance monitoring, cost management, security compliance, data pipeline insights, and proactive alerts to streamline your Databricks operations.                </p>
              </div>
              <div className="row " style={{marginTop:"60px"}}>
                {/* Card 1: Account Overview */}
                <div className="col-lg-4 col-md-6 col-12 mb-5 ">
                  <div className="feature-card">
                    <div className="rounded_icon">
                      <MdSupervisorAccount className="icon " />
                    </div>
                      <h2 className="feature-title">
                      Account Overview
                      </h2>
                      <h5 className="feature-title">
                      Track Usage:
                      </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Gain insights into workspace activity, resource consumption, and user engagement
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Identify underutilized resources and trends to optimize usage.
                        </li>
                      </ul>
                    </div>
                    <h5 className="feature-title">
                    Cost Optimization:
                      </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Manage costs efficiently by monitoring cluster usage and resource allocation.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Detect and address inefficiencies to reduce expenses.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 2: Data Governance  */}
                <div className="col-lg-4 col-md-6 col-12 mb-5 ">
                  <div className="feature-card">
                    <div className="rounded_icon">
                      <MdOutlineDataUsage className="icon " />
                    </div>
                      <h2 className="feature-title">
                      Data Governance
                      </h2>
                      <h5 className="feature-title">
                      Enforce Policies:
                      </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Ensure data quality, lineage tracking, and access management compliance.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Maintain structured practices for better governance.
                        </li>
                      </ul>
                    </div>
                    <h5 className="feature-title">
                    Cataloging & Lineage:
                      </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Track metadata and catalog datasets to improve visibility.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Ensure well-documented and reliable data systems.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 3: Query Performance */}
                <div className="col-lg-4 col-md-6 col-12 mb-5 ">
                  <div className="feature-card">
                    <div className="rounded_icon">
                      <SiGooglebigquery className="icon " />
                    </div>
                      <h2 className="feature-title">
                      Query Performance
                      </h2>
                      <h5 className="feature-title">
                      Monitor Trends:
                      </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Track query concurrency and warehouse utilization.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Identify slow queries and enhance execution speed.
                        </li>
                      </ul>
                    </div>
                    <h5 className="feature-title">
                    Optimize Workloads:
                      </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Detect bottlenecks and tune queries for better performance.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Enhance execution speed with actionable insights.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 4: Warehouse Performance */}
                <div className="col-lg-4 col-md-6 col-12 mb-5 ">
                  <div className="feature-card">
                    <div className="rounded_icon">
                      <RiDatabaseLine className="icon " />
                    </div>
                      <h2 className="feature-title">
                      Warehouse Performance
                      </h2>
                      <h5 className="feature-title">
                      Resource Utilization:
                      </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Analyze SQL warehouse efficiency and track scaling behavior.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Monitor query execution trends for smoother operations.
                        </li>
                      </ul>
                    </div>
                    <h5 className="feature-title">
                    Performance Tuning:
                      </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Receive recommendations for optimal configurations.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Enhance throughput and reduce idle time.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 5: Security & Compliance */}
                <div className="col-lg-4 col-md-6 col-12 mb-5 ">
                  <div className="feature-card">
                    <div className="rounded_icon">
                      <MdOutlineSecurity className="icon " />
                    </div>
                      <h2 className="feature-title">
                      Security & Compliance
                      </h2>
                      <h5 className="feature-title">
                      Secure Access:
                      </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Monitor user access, authentication logs, and audit trails.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Enforce role-based access controls and data encryption policies.
                        </li>
                      </ul>
                    </div>
                    <h5 className="feature-title">
                    Proactive Protection:
                      </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Detect unauthorized access and mitigate security risks in real time.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Maintain compliance with enforced policies.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 6: Alerts & Anomalies */}
                <div className="col-lg-4 col-md-6 col-12 mb-5 ">
                  <div className="feature-card">
                    <div className="rounded_icon">
                      <TbAlertSquareRounded className="icon " />
                    </div>
                      <h2 className="feature-title">
                      Alerts & Anomalies
                      </h2>
                      <h5 className="feature-title">
                      Detect Issues:
                      </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Identify unusual patterns in queries, costs, and security logs.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Detect job failures, cost spikes, and unauthorized access.
                        </li>
                      </ul>
                    </div>
                    <h5 className="feature-title">
                    Proactive Alerts:
                      </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Get real-time alerts to resolve issues before they impact operations.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Maintain stability with proactive issue management.
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
          <h2 className="mb-5">Databricks Governance Architecture Overview</h2>
          <p>The architecture integrates Databricks with Domo's federated data and cloud amplifiers for seamless data access. Data is transformed using Domo Magic ETL and visualized in dashboards and apps to support efficient decision-making.</p>
        </div>
        <div className="flow-chart-container">
          <img
            src="./assets/images/products/Data bricks Governance.drawio.svg"
            alt="Architecture Diagram"
            className="architecture-image"
          />
        </div>
      </div>
      <div className="mt-4">
        <iframe src="https://embed.domo.com/embed/pages/Gv15J" width="100%" height="1000" frameBorder={"0"}></iframe>
      </div>
      </div>
    </>
  );
};

export default DataBricksGovernance;
