/* eslint-disable max-len */
import "../infobeam.css";
import "../../home/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import "../domodocxOverview/DomoDocxCard.css";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { TiDatabase } from "react-icons/ti";
import { MdOutlineQueryStats, MdOutlineWarehouse} from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { IoAlertSharp } from "react-icons/io5";

const DomoGoverner = () => {
  return (
    < >
      <div className=" " >
        <div className="row mt-5" style={{backgroundColor:"#29B5E8", padding:"100px 0px"}}>
          {/* cards*/}
          <section className="container">
            <figure className="gwc_domo-dotimage mb-0">
              <img src="./assets/images/gwc_domo-dotimage.png" alt="" className="img-fluid" />
            </figure>
            <div className="col-12">
              <div className="col-12 text-center" style={{ marginBottom: "100px" }}>
                <h2 className="text-white mb-4">What's Included in SnowGO?</h2>
                <p className="text-white">
                SnowGO comes packed with features like account usage insights, query performance monitoring, cost management, data pipeline tracking, security compliance, and proactive alerts to streamline your Snowflake governance.
                </p>
              </div>
              <div className="row " style={{marginTop:"60px"}}>
                {/* Card 1: Account Overview */}
                <div className="col-lg-4 col-md-6 col-12 mb-5 ">
                  <div className="feature-card">
                    <div className="rounded_icon">
                      <RiAccountPinCircleLine className="icon text-white" />
                    </div>
                    <h2 className="feature-title">
                      Account Overview
                    </h2>
                    <h5 className="feature-title">
                      Optimize Usage:
                    </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Gain insights into storage costs, compute usage, and user activity.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Identify largest tables and track database trends for smarter decisions.
                        </li>
                      </ul>
                    </div>
                    <h5 className="feature-title">
                    Manage Costs:
                    </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Spot cost drivers and forecast expenses.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Control spending with clear visibility into usage patterns.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 2: Data Governance  */}
                <div className="col-lg-4 col-md-6 col-12 mb-5 ">
                  <div className="feature-card">
                    <div className="rounded_icon">
                      <TiDatabase className="icon text-white" />
                    </div>
                    <h2 className="feature-title">
                      Data Governance
                    </h2>
                    <h5 className="feature-title">
                      Ensure Compliance:
                    </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Maintain accuracy and reliability with data freshness tracking.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Stay compliant by monitoring metadata and schema changes.
                        </li>
                      </ul>
                    </div>
                    <h5 className="feature-title">
                    Eliminate Waste:
                    </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Identify redundant datasets and outdated views.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Streamline your data environment for maximum efficiency.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 3: Query Performance */}
                <div className="col-lg-4 col-md-6 col-12 mb-5 ">
                  <div className="feature-card">
                    <div className="rounded_icon">
                      <MdOutlineQueryStats className="icon text-white" />
                    </div>
                    <h2 className="feature-title">
                      Query Performance
                    </h2>
                    <h5 className="feature-title">
                      Boost Efficiency:
                    </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Track inefficient queries and execution trends.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Detect bottlenecks and improve resource utilization.
                        </li>
                      </ul>
                    </div>
                    <h5 className="feature-title">
                    Monitor Utilization:
                    </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          See top users, warehouse performance, and query success rates.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Optimize query performance for faster results.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 4: Warehouse Performance */}
                <div className="col-lg-4 col-md-6 col-12 mb-5 ">
                  <div className="feature-card">
                    <div className="rounded_icon">
                      <MdOutlineWarehouse className="icon text-white " />
                    </div>
                    <h2 className="feature-title">
                      Warehouse Performance
                    </h2>
                    <h5 className="feature-title">
                      Right-Size Warehouses:
                    </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Optimize warehouse sizing and scaling events to match needs.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Monitor concurrency levels for seamless operations.
                        </li>
                      </ul>
                    </div>
                    <h5 className="feature-title">
                    Cut Costs:
                    </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Track credit consumption and reduce idle time.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Highlight inefficiencies to drive cost savings.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 5: Security & Compliance */}
                <div className="col-lg-4 col-md-6 col-12 mb-5 ">
                  <div className="feature-card">
                    <div className="rounded_icon">
                      <AiOutlineSafety className="icon text-white " />
                    </div>
                    <h2 className="feature-title">
                      Security & Compliance
                    </h2>
                    <h5 className="feature-title">
                      Stay Secure:
                    </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Monitor logins, role changes, and suspicious activities.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Ensure your environment adheres to compliance policies.
                        </li>
                      </ul>
                    </div>
                    <h5 className="feature-title">
                    Control Access:
                    </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Manage privileges to prevent unauthorized access.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Protect sensitive data with robust security measures.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 6: Alerts & Anomalies */}
                <div className="col-lg-4 col-md-6 col-12 mb-5 ">
                  <div className="feature-card">
                    <div className="rounded_icon">
                      <IoAlertSharp className="icon text-white " />
                    </div>
                    <h2 className="feature-title">
                      Alerts & Anomalies
                    </h2>
                    <h5 className="feature-title">
                      Proactive Monitoring:
                    </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Detect anomalies in queries, credit usage, and logins.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Generates responses instantly from content
                        </li>
                      </ul>
                    </div>
                    <h5 className="feature-title">
                    Stay Ahead:
                    </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Identify failed queries and inactive databases.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> 
                          Resolve issues before they impact performance.
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

        <div className="container" style={{padding: "100px 0px"}}>
          <div className="col-12">
            <div className="col-lg-12 col-md-6 col-12 mb-3 text-center ">
              <h2 className="mb-4">SnowGO Architecture</h2>
              <p>SnowGO integrates Snowflake with Domo’s federated data system and cloud amplifiers for seamless data access. It processes data through Domo Magic ETL and visualizes insights via dashboards and apps for smarter decision-making.</p>

            </div>
            <div className="flow-chart-container">
              <img
                src="./assets/images/products/Snowflake Governance.drawio.svg"
                alt="Architecture Diagram"
                className="architecture-image"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 mb-2">
          <iframe src="https://embed.domo.com/embed/pages/0YwzL" width="100%" height="1000" frameBorder={"0"}></iframe>
        </div>
      </div>
    </>
  );
};

export default DomoGoverner;
