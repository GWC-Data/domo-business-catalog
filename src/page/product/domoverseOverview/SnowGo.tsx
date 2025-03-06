/* eslint-disable max-len */
import { RiAccountPinCircleLine } from "react-icons/ri";
import { TiDatabase } from "react-icons/ti";
import { MdOutlineQueryStats, MdOutlineWarehouse} from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { IoAlertSharp } from "react-icons/io5";
import "../../home/home.css";
import '../Domoverse.css';


const SnowGo = () => {
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row">
          {/* cards*/}
          <section className="gwc_domo-section">
            <figure className="gwc_domo-dotimage mb-0">
              <img src="./assets/images/gwc_domo-dotimage.png" alt="" className="img-fluid" />
            </figure>
            <div className="col-12 mt-3">
              <div className="col-12 text-center mb-3">
                <h4 className="text-white">What's Included in SnowGO?</h4>
                <p className="text-white">SnowGO comes packed with features like account usage insights, query performance monitoring, cost management, data pipeline tracking, security compliance, and proactive alerts to streamline your Snowflake governance.</p>
              </div>
              <div className="row">
                {/* Card 1: Account Overview */}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="domoverse-product-card h-100 ">
                    <div className="d-flex align-items-center justify-content-start mb-2">
                      <RiAccountPinCircleLine className="icon mr-2" />
                      <h5 className="snowgo-card-title m-0">Account Overview</h5>
                    </div>
                    <div className="card-content">
                      <div className="feature-block">
                        <p className="feature-title">Optimize Usage:</p>
                        <ul className="feature-list">
                          <li>Gain insights into storage costs, compute usage, and user activity.</li>
                          <li>Identify largest tables and track database trends for smarter decisions.</li>
                        </ul>
                      </div>
                      <div className="feature-block">
                        <p className="feature-title">Manage Costs:</p>
                        <ul className="feature-list">
                          <li>Spot cost drivers and forecast expenses.</li>
                          <li>Control spending with clear visibility into usage patterns.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Data Governance */}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="domoverse-product-card h-100">
                    <div className="d-flex align-items-center justify-content-start mb-2">
                      <TiDatabase  className="icon mr-2" />
                      <h5 className="snowgo-card-title m-0">Data Governance</h5>
                    </div>
                    <div className="card-content">
                      <div className="feature-block">
                        <p className="feature-title">Ensure Compliance:</p>
                        <ul className="feature-list">
                          <li>Maintain accuracy and reliability with data freshness tracking.</li>
                          <li>Stay compliant by monitoring metadata and schema changes.</li>
                        </ul>
                      </div>
                      <div className="feature-block">
                        <p className="feature-title">Eliminate Waste:</p>
                        <ul className="feature-list">
                          <li>Identify redundant datasets and outdated views.</li>
                          <li>Streamline your data environment for maximum efficiency.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Query Performance*/}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="domoverse-product-card h-100">
                    <div className="d-flex align-items-center justify-content-start mb-2">
                      <MdOutlineQueryStats className="icon mr-2" />
                      <h5 className="snowgo-card-title m-0">Query Performance</h5>
                    </div>
                    <div className="card-content">
                      <div className="feature-block">
                        <p className="feature-title">Boost Efficiency:</p>
                        <ul className="feature-list">
                          <li>Track inefficient queries and execution trends.</li>
                          <li>Detect bottlenecks and improve resource utilization.</li>
                        </ul>
                      </div>
                      <div className="feature-block">
                        <p className="feature-title">Monitor Utilization:</p>
                        <ul className="feature-list">
                          <li>See top users, warehouse performance, and query success rates.</li>
                          <li>Optimize query performance for faster results.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 4: Warehouse Performance */}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="domoverse-product-card h-100">
                    <div className="d-flex align-items-center justify-content-start mb-2">
                      <MdOutlineWarehouse className="icon mr-2" />
                      <h5 className="snowgo-card-title m-0">Warehouse Performance</h5>
                    </div>
                    <div className="card-content">
                      <div className="feature-block">
                        <p className="feature-title">Right-Size Warehouses:</p>
                        <ul className="feature-list">
                          <li>Optimize warehouse sizing and scaling events to match needs.</li>
                          <li>Monitor concurrency levels for seamless operations.</li>
                        </ul>
                      </div>
                      <div className="feature-block">
                        <p className="feature-title">Cut Costs:</p>
                        <ul className="feature-list">
                          <li>Track credit consumption and reduce idle time.</li>
                          <li>Highlight inefficiencies to drive cost savings.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 5: Security & Compliance */}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="domoverse-product-card h-100">
                    <div className="d-flex align-items-center justify-content-start mb-2">
                      <AiOutlineSafety className="icon mr-2" />
                      <h5 className="snowgo-card-title m-0">Security & Compliance</h5>
                    </div>
                    <div className="card-content">
                      <div className="feature-block">
                        <p className="feature-title">Stay Secure:</p>
                        <ul className="feature-list">
                          <li>Monitor logins, role changes, and suspicious activities.</li>
                          <li>Ensure your environment adheres to compliance policies.</li>
                        </ul>
                      </div>
                      <div className="feature-block">
                        <p className="feature-title">Control Access:</p>
                        <ul className="feature-list">
                          <li>Manage privileges to prevent unauthorized access.</li>
                          <li>Protect sensitive data with robust security measures.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 6: Alerts & Anomalies */}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="domoverse-product-card h-100">
                    <div className="d-flex align-items-center justify-content-start mb-2">
                      <IoAlertSharp className="icon mr-2" />
                      <h5 className="snowgo-card-title m-0">Security & Compliance</h5>
                    </div>
                    <div className="card-content">
                      <div className="feature-block">
                        <p className="feature-title">Proactive Monitoring:</p>
                        <ul className="feature-list">
                          <li>Detect anomalies in queries, credit usage, and logins.</li>
                          <li>Generates responses instantly from content</li>
                        </ul>
                      </div>
                      <div className="feature-block">
                        <p className="feature-title">Stay Ahead:</p>
                        <ul className="feature-list">
                          <li>Identify failed queries and inactive databases.</li>
                          <li>Resolve issues before they impact performance.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*Flowchart Diagram*/}
          <div className="col-12 mt-5">
            <div className='col-lg-12 col-md-6 col-12 mb-3 text-center'>
              <h4>SnowGO Architecture Overview</h4>
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
          <div>
          </div>
        </div>
        <div className="mt-4">
            <iframe src="https://embed.domo.com/embed/pages/zvroO" width="100%" height="1000" frameBorder={"0"}></iframe>
        </div>
      </div>
    </div>
  );
};

export default SnowGo;