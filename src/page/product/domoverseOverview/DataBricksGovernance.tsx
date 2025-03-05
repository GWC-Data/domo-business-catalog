/* eslint-disable max-len */
import "../infobeam.css";
import "../../home/home.css";

const  DataBricksGovernance = () => {
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
                <h4 className="text-white">What's Included in Databricks Governance?</h4>
                <p className="text-white">Databricks Governance offers features like account usage tracking, query performance monitoring, cost management, security compliance, data pipeline insights, and proactive alerts to streamline your Databricks operations.</p>
              </div>
              <div className="row">
                {/* Card 1: Account Overview */}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="product-card red h-100 ">
                    <h5 className="card-title">Account Overview</h5>
                    <div className="card-content">
                      <div className="feature-block">
                        <p className="feature-title">Track Usage:</p>
                        <ul className="feature-list">
                          <li>Gain insights into workspace activity, resource consumption, and user engagement</li>
                          <li>Identify underutilized resources and trends to optimize usage.</li>
                        </ul>
                      </div>
                      <div className="feature-block">
                        <p className="feature-title">Cost Optimization:</p>
                        <ul className="feature-list">
                          <li>Manage costs efficiently by monitoring cluster usage and resource allocation.</li>
                          <li>Detect and address inefficiencies to reduce expenses.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Data Governance */}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="product-card red h-100">
                    <h5 className="card-title">Data Governance</h5>
                    <div className="card-content">
                      <div className="feature-block">
                        <p className="feature-title">Enforce Policies:</p>
                        <ul className="feature-list">
                          <li>Ensure data quality, lineage tracking, and access management compliance.</li>
                          <li>Maintain structured practices for better governance.</li>
                        </ul>
                      </div>
                      <div className="feature-block">
                        <p className="feature-title">Cataloging & Lineage:</p>
                        <ul className="feature-list">
                          <li>Track metadata and catalog datasets to improve visibility.</li>
                          <li>Ensure well-documented and reliable data systems.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Query Performance*/}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="product-card red h-100">
                    <h5 className="card-title">Query Performance</h5>
                    <div className="card-content">
                      <div className="feature-block">
                        <p className="feature-title">Monitor Trends:</p>
                        <ul className="feature-list">
                          <li>Track query concurrency and warehouse utilization.</li>
                          <li>Identify slow queries and enhance execution speed.</li>
                        </ul>
                      </div>
                      <div className="feature-block">
                        <p className="feature-title">Optimize Workloads:</p>
                        <ul className="feature-list">
                          <li>Detect bottlenecks and tune queries for better performance.</li>
                          <li>Enhance execution speed with actionable insights.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 4: Warehouse Performance */}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="product-card red h-100">
                    <h5 className="card-title">Warehouse Performance</h5>
                    <div className="card-content">
                      <div className="feature-block">
                        <p className="feature-title">Resource Utilization:</p>
                        <ul className="feature-list">
                          <li>Analyze SQL warehouse efficiency and track scaling behavior.</li>
                          <li>Monitor query execution trends for smoother operations.</li>
                        </ul>
                      </div>
                      <div className="feature-block">
                        <p className="feature-title">Performance Tuning:</p>
                        <ul className="feature-list">
                          <li>Receive recommendations for optimal configurations.</li>
                          <li>Enhance throughput and reduce idle time.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 5: Security & Compliance */}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="product-card red h-100">
                    <h5 className="card-title">Security & Compliance</h5>
                    <div className="card-content">
                      <div className="feature-block">
                        <p className="feature-title">Secure Access:</p>
                        <ul className="feature-list">
                          <li>Monitor user access, authentication logs, and audit trails.</li>
                          <li>Enforce role-based access controls and data encryption policies.</li>
                        </ul>
                      </div>
                      <div className="feature-block">
                        <p className="feature-title">Proactive Protection:</p>
                        <ul className="feature-list">
                          <li>Detect unauthorized access and mitigate security risks in real time.</li>
                          <li>Maintain compliance with enforced policies.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 6: Alerts & Anomalies */}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="product-card red h-100">
                    <h5 className="card-title">Alerts & Anomalies</h5>
                    <div className="card-content">
                      <div className="feature-block">
                        <p className="feature-title">Detect Issues:</p>
                        <ul className="feature-list">
                          <li>Identify unusual patterns in queries, costs, and security logs.</li>
                          <li>Detect job failures, cost spikes, and unauthorized access.</li>
                        </ul>
                      </div>
                      <div className="feature-block">
                        <p className="feature-title">Proactive Alerts:</p>
                        <ul className="feature-list">
                          <li>Get real-time alerts to resolve issues before they impact operations.</li>
                          <li>•	Maintain stability with proactive issue management.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <figure className="gwc_domo-rightlayer mb-0">
              <img src="./assets/images/service-rightlayer.png" alt="" className="img-fluid" />
            </figure>
          </section>

          {/*Flowchart Diagram*/}
          <div className="col-12 mt-5">
            <div className='col-lg-12 col-md-6 col-12 mb-3 text-center'>
              <h4>Databricks Governance Architecture Overview</h4>
              <p>The architecture integrates Databricks with Domo's federated data and cloud amplifiers for seamless data access. Data is transformed using Domo Magic ETL and visualized in dashboards and apps to support efficient decision-making.</p>
            </div>
            {/* <div className="flow-chart-container">
              <img
                src="./assets/images/products/infobeamAI.drawio.svg"
                alt="Architecture Diagram"
                className="architecture-image"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataBricksGovernance;