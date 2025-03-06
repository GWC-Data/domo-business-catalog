/* eslint-disable max-len */
import Navbar from "../../components/navbar";
import "./mass.css";
// import DomodelVideo from "./DomodelVideo";

const Maas = () => {

  return (
    <div>
      <div className="sub-banner sub-banner2">
        <figure className="sub-bannerleftlayer mb-0 position-absolute start-0 top-0">
          <img src="./assets/images/sub-bannerleftlayer.png" alt="" className="img-fluid" />
        </figure>

        <Navbar activeNav="product" />

        <section className="banner-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="banner_content text-center position-relative" data-aos="fade-up">
                  <figure className="project-rightcircle service-rightcircle mb-0 position-absolute end-0 top-0">
                    <img src="./assets/images/service-rightcircle.png" alt="" className="img-fluid" />
                  </figure>
                  <h1 className="text-white">DOMAAS</h1>
                  <p className="mx-auto">
                  DOMAAS is a smart migration solution that extracts key details from dashboards across different BI tools and presents them in Domo's format. It automates dataset insights, SQL-based ER diagrams, and visual mappings for a seamless transition. Businesses can migrate without disruption, reducing cost and complexity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <figure className="banner-circleright mb-0 position-absolute end-0 bottom-0">
          <img src="./assets/images/banner-circleright.png" className="img-fluid" alt="" />
        </figure>
        <figure className="sub-bannerrightlayer mb-0 position-absolute end-0 top-0">
          <img src="./assets/images/sub-bannerrightlayer.png" alt="" className="img-fluid" />
        </figure>
      </div>

      {/*Content */}
      <div className="container-fluid mt-5">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-lg-6 col-md-12 text-center">
            <div className="domass-image-container">
              <img
                src="./assets/images/products/domass_first1.png"
                alt="Architecture Diagram"
                className="img-fluid large-image"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="col-lg-6 col-md-12">
            <ul className="content-list">
              <li>
                <strong>Reducing Cost & Investment Concerns</strong> – Automated migration and optimized pricing minimize costs.
              </li>
              <li>
                <strong>Minimizing Business Disruption & Downtime</strong> – Zero downtime migration ensures seamless transitions.
              </li>
              <li>
                <strong>Streamlining Integration Challenges</strong> – Automated mapping and native connectors simplify integration.
              </li>
              <li>
                <strong>Easing Employee Adoption</strong> – Familiar UI, side-by-side validation, and built-in training ease adoption.
              </li>
              <li>
                <strong>Maximizing DOMO ROI</strong> – AI-powered insights, speed optimization, and strong governance maximize value.
              </li>
            </ul>
          </div>


          {/* cards*/}
          <div>
          <section className="gwc_domo-section">
            <figure className="gwc_domo-dotimage mb-0">
              <img src="./assets/images/gwc_domo-dotimage.png" alt="" className="img-fluid" />
            </figure>
            <div className="col-12 mt-3">
              <div className="col-12 text-center mb-3">
                <h4 className="text-white">What's Included in DOMASS?</h4>
              </div>
              <div className="row">
                {/* Card 1: Automated BI Migration Insights*/}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="product-card red h-100 ">
                    <h5 className="card-title">Automated BI Migration Insights</h5>
                    <div className="card-content">
                      <div className="feature-block">
                        <p className="feature-title">Seamless Dashboard Analysis</p>
                        <ul className="feature-list">
                          <li>Extracts key details from Power BI, Tableau, and other BI tools.</li>
                          <li>Documents datasets, reports, and relationships for smooth transiti</li>
                        </ul>
                      </div>
                      <div className="feature-block">
                        <p className="feature-title">One-Click Documentation</p>
                        <ul className="feature-list">
                          <li>Eliminates manual effort with AI-powered insights.</li>
                          <li>Provides structured reports for quick migration reference.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Comprehensive Dataset Insights */}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="product-card red h-100">
                    <h5 className="card-title">Comprehensive Dataset Insights</h5>
                    <div className="card-content">
                      <div className="feature-block">
                        <p className="feature-title">Dataset Information Extraction</p>
                        <ul className="feature-list">
                          <li>Analyzes dataset structures, column details, and metadata.</li>
                          <li>Provides a clear breakdown of data sources and connections.</li>
                        </ul>
                      </div>
                      <div className="feature-block">
                        <p className="feature-title">SQL ER Diagram Generation</p>
                        <ul className="feature-list">
                          <li>Automatically generates ER diagrams based on SQL queries.</li>
                          <li>Helps in understanding dataset relationships visually.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Accurate Dashboard Replication */}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="product-card red h-100">
                    <h5 className="card-title">Accurate Dashboard Replication</h5>
                    <div className="card-content">
                      <div className="feature-block">
                        <p className="feature-title">Visual Insights & Structure</p>
                        <ul className="feature-list">
                          <li>Captures and documents key visual elements from dashboards.</li>
                          <li>Ensures all charts, tables, and filters are mapped accurately.</li>
                        </ul>
                      </div>
                      <div className="feature-block">
                        <p className="feature-title">Beast Mode & Calculation Documentation</p>
                        <ul className="feature-list">
                          <li>Extracts and presents all custom calculations used in dashboards.</li>
                          <li>Ensures a smooth transition of calculated fields.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 4: Minimized Downtime & Disruption */}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="product-card red h-100">
                    <h5 className="card-title">Minimized Downtime & Disruption</h5>
                    <div className="card-content">
                      <div className="feature-block">
                        <p className="feature-title">Zero-Interruption Documentation</p>
                        <ul className="feature-list">
                          <li>Ensures smooth business operations while gathering insight</li>
                          <li>Provides real-time tracking of documented details.</li>
                        </ul>
                      </div>
                      <div className="feature-block">
                        <p className="feature-title">Risk-Free Data Handling</p>
                        <ul className="feature-list">
                          <li>Securely extracts metadata without affecting live dashboards.</li>
                          <li>Verifies accuracy of extracted information before migration.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 5: Optimized Cost & Investment */}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="product-card red h-100">
                    <h5 className="card-title">Optimized Cost & Investment</h5>
                    <div className="card-content">
                      <div className="feature-block">
                        <p className="feature-title">Automated Cost Efficiency</p>
                        <ul className="feature-list">
                          <li>Reduces expenses by automating documentation processes.</li>
                          <li>Minimizes reliance on manual reporting efforts.</li>
                        </ul>
                      </div>
                      <div className="feature-block">
                        <p className="feature-title">Long-Term ROI Benefits</p>
                        <ul className="feature-list">
                          <li>Increases efficiency with structured migration insights.</li>
                          <li>Helps businesses make informed decisions before migrating.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 6: User-Friendly Adoption & Integration */}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="product-card red h-100">
                    <h5 className="card-title">User-Friendly Adoption & Integration</h5>
                    <div className="card-content">
                      <div className="feature-block">
                        <p className="feature-title">Familiar UI & Validation</p>
                        <ul className="feature-list">
                          <li>Retains existing dashboard structures for easy transition.</li>
                          <li>Side-by-side comparison ensures accurate documentation.</li>
                        </ul>
                      </div>
                      <div className="feature-block">
                        <p className="feature-title">Built-in Training & Support</p>
                        <ul className="feature-list">
                          <li>Provides structured insights for smooth user adoption.</li>
                          <li>Reduces learning curve for new users migrating to Domo.</li>
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
          </div>

          {/*Architecture */}
          <div className="col-12 mt-5">
          <div className="flow-chart-container">
              <h4 className='mb-1 text-center'>Architecture Diagram</h4>
              <img
                src="./assets/images/products/DOMAAS.drawio.svg"
                alt="Architecture Diagram"
                className="architecture-image"
              />
            </div>
          </div>

          {/*Video container */}
           {/* <section className="gwc_domo-section">
            <figure className="gwc_domo-dotimage mb-0">
              <img src="./assets/images/gwc_domo-dotimage.png" alt="" className="img-fluid" />
            </figure>
            <div className="col-12 mt-3">
              <DomodelVideo />
            </div>
            <figure className="gwc_domo-rightlayer mb-0">
              <img src="./assets/images/service-rightlayer.png" alt="" className="img-fluid" />
            </figure>
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default Maas;