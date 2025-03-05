import Navbar from "../../components/navbar";
import './mass.css'
import DomodelVideo from "./DomodelVideo";

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
                    DOMASS (Migration as a Service) Simplifies BI Migration
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
                  <h4 className="text-white">Value Props of DOMASS</h4>
                  <p className="text-white">DOMAAS automates formula and field conversions, ensuring accurate and efficient migration of dashboards and data models. It reduces migration time by 65%, offering faster deployment with minimal technical expertise required
                  </p>
                </div>
                <div className="row">
                  {/* Card 1: Authentication & Security */}
                  <div className="col-lg-4 col-md-6 col-12 mb-3">
                    <div className="product-card red h-100 ">
                      <h5 className="card-title">Automation Migration Accelerators</h5>
                      <div className="card-content">
                        <p>DOMAAS accelerates automation by seamlessly converting formulas and fields, reducing manual mapping errors and streamlining migration.</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: File Management */}
                  <div className="col-lg-4 col-md-6 col-12 mb-3">
                    <div className="product-card red h-100 ">
                      <h5 className="card-title">Fast Migration 60% Migration TAT Improvement</h5>
                      <div className="card-content">
                        <p>Ensures rapid migration of dashboards and data models to DOMO, preserving all relationships and data structures while improving migration TAT by 60%,
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: AI-Powered Chatbot */}
                  <div className="col-lg-4 col-md-6 col-12 mb-3">
                    <div className="product-card red h-100 ">
                      <h5 className="card-title">40% Reduction in Migration Cost</h5>
                      <div className="card-content">
                        <p>DOMAAS reduces migration costs by 40% by enabling users with SQL knowledge to manage the process, eliminating the need for expertise in LookML or DAX
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Domo AppDB */}
                  <div className="col-lg-4 col-md-6 col-12 mb-3">
                    <div className="product-card red h-100 ">
                      <h5 className="card-title">Predictable Outcomes Low Manual Intervention</h5>
                      <div className="card-content">
                        <p>Automates much of the migration process, reducing costs and the time required to transition to DOMO ensuring faster deployment, <strong>65% of time saved</strong></p>
                      </div>
                    </div>
                  </div>

                  {/* Card 5: API Integration */}
                  <div className="col-lg-4 col-md-6 col-12 mb-3">
                    <div className="product-card red h-100 ">
                      <h5 className="card-title">Technical Expertise Source - Target Mapping</h5>
                      <div className="card-content">
                        <p>Automatically maps source-to-target data by generating ER diagrams for each dashboard visual, offering clear insights into data connections.</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 6: Real-Time AI Processing */}
                  <div className="col-lg-4 col-md-6 col-12 mb-3">
                    <div className="product-card red h-100 ">
                      <h5 className="card-title">Scalable for Large Migrations</h5>
                      <div className="card-content">
                        <p>DOMAAS efficiently handles large-scale migrations, ensuring seamless data
                          transfer, optimized performance and regardless of complexity.</p>
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
          <div className="col-12">
            <div className="domass-architecture-image-container">
              <img
                src="./assets/images/products/domass_ar1.png"
                alt="Architecture Diagram"
                className="img-fluid"
              />
            </div>
          </div>

          {/*Video container */}
          <section className="gwc_domo-section">
            <figure className="gwc_domo-dotimage mb-0">
              <img src="./assets/images/gwc_domo-dotimage.png" alt="" className="img-fluid" />
            </figure>
            <div className="col-12 mt-3">
              <DomodelVideo />
            </div>
            <figure className="gwc_domo-rightlayer mb-0">
              <img src="./assets/images/service-rightlayer.png" alt="" className="img-fluid" />
            </figure>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Maas;