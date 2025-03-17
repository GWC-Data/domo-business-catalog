/* eslint-disable max-len */
import Navbar from "../../components/navbar";
import { SiInductiveautomation } from "react-icons/si";
import { MdOutlineDatasetLinked } from "react-icons/md";
import { FaAccusoft, FaUserFriends } from "react-icons/fa"; 
import { RxCountdownTimer } from "react-icons/rx"; 
import { GrOptimize } from "react-icons/gr";
import {
  faCoins,
  faClock,
  faCogs,
  faUsers,
  faChartLine,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./mass.css";
import { useEffect } from "react";
// import DomodelVideo from "./DomodelVideo";

const Maas = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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
                    <img src="./assets/images/banner-circleleft.png" alt="" className="img-fluid" />
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
      {/* <div className="container mt-5">
        <div className="row">
          <div className="col-md-3 mb-4 d-flex">
            <div
              className="border p-4 d-flex flex-column align-items-start h-100"
              style={{
                width: "100%",
                borderRadius: "1rem",
                border: "2px solid #05060f",
                boxShadow: "5px 5px 0px #05060f",
                overflow: "hidden",
                backgroundColor: "#fff",
                transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "8px 8px 0px #05060f";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "5px 5px 0px #05060f";
              }}
            >
              <p
                className="card-title d-flex align-items-center fw-bold"
                style={{ fontSize: "16px" }}
              >
                <FontAwesomeIcon icon={faCoins} className="me-2 mr-1" style={{ fontSize: "15px" }} />
          Reducing Cost & Investment Concerns
              </p>
              <p
                className="small-desc text-muted"
                style={{ fontSize: "0.9rem", lineHeight: "1.5" }}
              >
          Automated migration and optimized pricing minimize costs.
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-4 d-flex">
            <div
              className="border p-4 d-flex flex-column align-items-start h-100"
              style={{
                width: "100%",
                borderRadius: "1rem",
                border: "2px solid #05060f",
                boxShadow: "5px 5px 0px #05060f",
                overflow: "hidden",
                backgroundColor: "#fff",
                transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "8px 8px 0px #05060f";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "5px 5px 0px #05060f";
              }}
            >
              <p
                className="card-title d-flex align-items-center fw-bold"
                style={{ fontSize: "16px" }}
              >
                <FontAwesomeIcon icon={faClock} className="me-2 mr-1" style={{ fontSize: "15px" }} />
          Minimizing Business Disruption & Downtime
              </p>
              <p
                className="small-desc text-muted"
                style={{ fontSize: "0.9rem", lineHeight: "1.5" }}
              >
          Zero downtime migration ensures seamless transitions.
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-4 d-flex">
            <div
              className="border p-4 d-flex flex-column align-items-start h-100"
              style={{
                width: "100%",
                borderRadius: "1rem",
                border: "2px solid #05060f",
                boxShadow: "5px 5px 0px #05060f",
                overflow: "hidden",
                backgroundColor: "#fff",
                transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "8px 8px 0px #05060f";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "5px 5px 0px #05060f";
              }}
            >
              <p
                className="card-title d-flex align-items-center fw-bold"
                style={{ fontSize: "16px" }}
              >
                <FontAwesomeIcon icon={faCogs} className="me-2 mr-1" style={{ fontSize: "15px" }} />
          Streamlining Integration Challenges
              </p>
              <p
                className="small-desc text-muted"
                style={{ fontSize: "0.9rem", lineHeight: "1.5" }}
              >
          Automated mapping and native connectors simplify integration.
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-4 d-flex">
            <div
              className="border p-4 d-flex flex-column align-items-start h-100"
              style={{
                width: "100%",
                borderRadius: "1rem",
                border: "2px solid #05060f",
                boxShadow: "5px 5px 0px #05060f",
                overflow: "hidden",
                backgroundColor: "#fff",
                transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "8px 8px 0px #05060f";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "5px 5px 0px #05060f";
              }}
            >
              <p
                className="card-title d-flex align-items-center fw-bold"
                style={{ fontSize: "16px" }}
              >
                <FontAwesomeIcon icon={faUsers} className="me-2 mr-1" style={{ fontSize: "15px" }} />
          Easing Employee Adoption
              </p>
              <p
                className="small-desc text-muted"
                style={{ fontSize: "0.9rem", lineHeight: "1.5" }}
              >
          Familiar UI, side-by-side validation, and built-in training ease adoption.
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-4 d-flex">
            <div
              className="border p-4 d-flex flex-column align-items-start h-100"
              style={{
                width: "100%",
                borderRadius: "1rem",
                border: "2px solid #05060f",
                boxShadow: "5px 5px 0px #05060f",
                overflow: "hidden",
                backgroundColor: "#fff",
                transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "8px 8px 0px #05060f";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "5px 5px 0px #05060f";
              }}
            >
              <p
                className="card-title d-flex align-items-center fw-bold"
                style={{ fontSize: "16px" }}
              >
                <FontAwesomeIcon icon={faChartLine} className="me-2 mr-1" style={{ fontSize: "15px" }} />
          Maximizing DOMO ROI
              </p>
              <p
                className="small-desc text-muted"
                style={{ fontSize: "0.9rem", lineHeight: "1.5" }}
              >
          AI-powered insights, speed optimization, and strong governance maximize value.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container mt-5" >
        <h2 className="text-center mb-4">Key Features of DOMAAS</h2>
        <div className="row justify-content-center">
          {/* Card 1 */}
          <div className="card">
            <FontAwesomeIcon icon={faCoins} className="feature-icon_card me-2 mr-1 card-title" />
            <p className="card-title">
            Reducing Cost & Investment Concerns
            </p>
            <p className="small-desc">
            Automated migration and optimized pricing minimize costs.
            </p>
          </div>
      
          {/* Card 2 */}
          <div className="card">
            <FontAwesomeIcon icon={faClock} className="feature-icon_card me-2 mr-1 card-title  " />
            <p className="card-title">
            Minimizing Business Disruption & Downtime
            </p>
            <p className="small-desc">
            Zero downtime migration ensures seamless transitions.
            </p>
          </div>
      
          {/* Card 3 */}
          <div className="card">
            <FontAwesomeIcon icon={faCogs} className="feature-icon_card me-2 mr-1 card-title" />
            <p className="card-title">
            Streamlining Integration Challenges
            </p>
            <p className="small-desc">
            utomated mapping and native connectors simplify integration.
            </p>
          </div>
      
          {/* Card 4 */}
          <div className="card">
            <FontAwesomeIcon icon={faUsers} className="feature-icon_card me-2 mr-1 card-title" />
            <p className="card-title">
            Easing Employee Adoption
            </p>
            <p className="small-desc">
            Familiar UI, side-by-side validation, and built-in training ease adoption.
            </p>
          </div>
      
          {/* Card 5 */}
          <div className="card">
            <FontAwesomeIcon icon={faChartLine} className="feature-icon_card me-2 mr-1 card-title" />
            <p className="card-title">
            Maximizing DOMO ROI
            </p>
            <p className="small-desc">
            AI-powered insights, speed optimization, and strong governance maximize value.
            </p>
          </div>
        </div>
      </div>


      {/* cards*/}
      <section className="gwc_domo-section mt-5">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "100px" }}>
            <h2 className="text-white">What's Included in DOMASS?</h2>
          </div>
          <div className="row">
            {/* Card 1: Automated BI Migration Insights */}
            <div className="col-lg-4 col-md-6 col-12 mb-5">
              <div className="feature-card">
                <div className="rounded_icon">
                  <SiInductiveautomation className="icon text-white" /> {/* Icon for Automated BI Migration Insights */}
                </div>
                <h2 className="feature-title">Automated BI Migration Insights</h2>
                <div className="feature-card-body">
                  <ul className="feature-list">
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Extracts key details from Power BI, Tableau, and other BI tools.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Documents datasets, reports, and relationships for smooth transition.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Eliminates manual effort with AI-powered insights.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Provides structured reports for quick migration reference.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: Comprehensive Dataset Insights */}
            <div className="col-lg-4 col-md-6 col-12 mb-5">
              <div className="feature-card">
                <div className="rounded_icon">
                  <MdOutlineDatasetLinked className="icon text-white" /> {/* Icon for Comprehensive Dataset Insights */}
                </div>
                <h2 className="feature-title">Comprehensive Dataset Insights</h2>
                <div className="feature-card-body">
                  <ul className="feature-list">
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Analyzes dataset structures, column details, and metadata.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Provides a clear breakdown of data sources and connections.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Automatically generates ER diagrams based on SQL queries.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Helps in understanding dataset relationships visually.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3: Accurate Dashboard Replication */}
            <div className="col-lg-4 col-md-6 col-12 mb-5">
              <div className="feature-card">
                <div className="rounded_icon">
                  <FaAccusoft className="icon" /> {/* Icon for Accurate Dashboard Replication */}
                </div>
                <h2 className="feature-title">Accurate Dashboard Replication</h2>
                <div className="feature-card-body">
                  <ul className="feature-list">
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Captures and documents key visual elements from dashboards.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Ensures all charts, tables, and filters are mapped accurately.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Extracts and presents all custom calculations used in dashboards.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Ensures a smooth transition of calculated fields.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 4: Minimized Downtime & Disruption */}
            <div className="col-lg-4 col-md-6 col-12 mb-5">
              <div className="feature-card">
                <div className="rounded_icon">
                  <RxCountdownTimer className="icon text-white" /> {/* Icon for Minimized Downtime & Disruption */}
                </div>
                <h2 className="feature-title">Minimized Downtime & Disruption</h2>
                <div className="feature-card-body">
                  <ul className="feature-list">
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Ensures smooth business operations while gathering insights.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Provides real-time tracking of documented details.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Securely extracts metadata without affecting live dashboards.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Verifies accuracy of extracted information before migration.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 5: Optimized Cost & Investment */}
            <div className="col-lg-4 col-md-6 col-12 mb-5">
              <div className="feature-card">
                <div className="rounded_icon">
                  <GrOptimize className="icon text-white" /> {/* Icon for Optimized Cost & Investment */}
                </div>
                <h2 className="feature-title">Optimized Cost & Investment</h2>
                <div className="feature-card-body">
                  <ul className="feature-list">
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Reduces expenses by automating documentation processes.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Minimizes reliance on manual reporting efforts.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Increases efficiency with structured migration insights.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Helps businesses make informed decisions before migrating.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 6: User-Friendly Adoption & Integration */}
            <div className="col-lg-4 col-md-6 col-12 mb-5">
              <div className="feature-card">
                <div className="rounded_icon">
                  <FaUserFriends className="icon text-white" /> {/* Icon for User-Friendly Adoption & Integration */}
                </div>
                <h2 className="feature-title">User-Friendly Adoption & Integration</h2>
                <div className="feature-card-body">
                  <ul className="feature-list">
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Retains existing dashboard structures for easy transition.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Side-by-side comparison ensures accurate documentation.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Provides structured insights for smooth user adoption.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Reduces learning curve for new users migrating to Domo.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Architecture */}
      <div className="container" style={{padding: "100px 0px"}}>
        <div className="col-12">
          <div className="col-lg-12 col-md-6 col-12 mb-3 text-center ">
            <h2 className="mb-4">DOMAAS - Architecture</h2>
            <p>
            DOMAAS connects directly to BI tools, extracting dashboard metadata and dataset structures with automation. It generates SQL ER diagrams and organizes insights into Domo's format for a streamlined, disruption-free migration.
            </p>
          </div>
          <div className="flow-chart-container">
            <img
              src="./assets/images/products/DOMAAS.drawio.svg"
              alt="Architecture Diagram"
              className="architecture-image"
            />
          </div>
        </div>
      </div>

      {/*Video container */}
      <section style={{ padding: "100px 0", background: "#7daccf" }}>
        <div className="col-12 mt-3">
          <div className='container' style={{ zIndex: 100 }}>
            <div className='col-12 text-center mb-5'>
              <h2 className="text-white">DOMAAS: Seamless Tableau Migration to Domo</h2>
              <p className='text-white mt-2'>
              Effortlessly migrate Tableau dashboards to Domo with automated dataset insights, SQL-based ER diagrams, and visual mappings. Minimize cost and complexity while ensuring a smooth transition.
              </p>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="bg-white rounded">
                  <div className="ratio ratio-16x9">
                    <video 
                      key="video"
                      className="rounded w-100"
                      controls
                      loop
                      autoPlay={true}
                    >
                      <source src="./assets/videos/DOMAAS_Tableau_Demo_Video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Maas;