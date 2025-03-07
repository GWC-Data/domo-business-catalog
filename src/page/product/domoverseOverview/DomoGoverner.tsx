/* eslint-disable max-len */
import { MdOutlineCreditScore } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GrDocumentPerformance } from "react-icons/gr";
import "../infobeam.css";
import "../../home/home.css";

const DomoGoverner = () => {
  return (
    <div>
      {/* cards*/}
      <section className="gwc_domo-section">
        <div className="container mt-3">
          <div className="col-12 text-center mb-3">
            <h2 className="text-white mb-5">What's Included in Domo Governor?</h2>
            <p className="text-white">Domo Governor includes features like centralized governance tools, automation workflows, real-time alerts, resource usage tracking, and actionable insights to optimize your Domo instance.</p>
          </div>
          <div className="row">
            {/* Card 1: Credit-Based Governance */}
            <div className="col-lg-4 col-md-6 col-12 mb-3" >
              <div className="domoverse-product-card h-100 ">
                <div className="d-flex align-items-center justify-content-start mb-2">
                  <MdOutlineCreditScore className="domo-icon mr-2" />
                  <h5 className="domo-card-title m-0">Account Overview</h5>
                </div>
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
              <div className="domoverse-product-card h-100">
                <div className="d-flex align-items-center justify-content-start mb-2">
                  <RiSecurePaymentLine className="domo-icon mr-2" />
                  <h5 className="domo-card-title m-0">Data Security & Management</h5>
                </div>
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
              <div className="domoverse-product-card h-100">
                <div className="d-flex align-items-center justify-content-start mb-2">
                  <GrDocumentPerformance className="domo-icon mr-2" />
                  <h5 className="domo-card-title m-0">Performance Optimization</h5>
                </div>
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
      </section>

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
  );
};

export default DomoGoverner;