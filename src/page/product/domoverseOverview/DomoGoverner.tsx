/* eslint-disable max-len */
import "../infobeam.css";
import "../../home/home.css";

const DomoGoverner = () => {
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
                <h4 className="text-white">What's Included in Domo Governor?</h4>
                <p className="text-white">Domo Governor includes features like centralized governance tools, automation workflows, real-time alerts, resource usage tracking, and actionable insights to optimize your Domo instance.</p>
              </div>
              <div className="row">
                {/* Card 1: Account Overview */}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="product-card red h-100 ">
                    <h5 className="card-title">. Credit-Based Governance</h5>
                    <div className="card-content">
                      <div className="feature-block">
                        <ul className="feature-list">
                          <li>Track Usage: Monitor credit usage across datasets, dataflows, and dashboards seamlessly.</li>
                          <li>Optimize Resources: Receive automated alerts to optimize credit consumption effectively.</li>
                          <li>Visual Lineage: View dataset relationships with clear, interactive lineage maps.</li>
                          <li>Effortless Insights: Gain visibility into resource utilization for better decision-making.</li>
                          <li>Smart Monitoring: Proactively identify and address inefficiencies in credit usage.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Data Security & Management */}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="product-card red h-100">
                    <h5 className="card-title">Data Security & Management</h5>
                    <div className="card-content">
                      <div className="feature-block">
                        <ul className="feature-list">
                          <li>Token Management: Secure token-based authentication ensures encrypted access.</li>
                          <li>API Control: Maintain fine-grained API control for enhanced governance.</li>
                          <li>Encryption: Protect data in transit with SSL/TLS encryption to prevent breaches.</li>
                          <li>Compliance: Automate workflows to enforce compliance and reduce errors.</li>
                          <li>Security Best Practices: Safeguard sensitive data with robust governance measures.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Performance Optimization*/}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="product-card red h-100">
                    <h5 className="card-title">Performance Optimization</h5>
                    <div className="card-content">
                      <div className="feature-block">
                        <ul className="feature-list">
                          <li>Memoization: Speed up processing by caching results to avoid redundant calculations.</li>
                          <li>Optimized Rendering: Deliver smooth user experiences with efficient rendering techniques.</li>
                          <li>Automated Tasks: Streamline operations with secure, automated workflows.</li>
                          <li>Real-Time Alerts: Identify and resolve performance bottlenecks proactively.</li>
                          <li>Scalable Solutions: Ensure consistent performance as usage scales up.</li>
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
              <h4>Domo Governor Architecture Overview</h4>
              <p>Domo Governor integrates with Domo's core instance to centralize management and governance. Automated workflows and real-time monitoring provide seamless oversight, while dashboards deliver actionable insights for optimized operations.</p>
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

export default DomoGoverner;