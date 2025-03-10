/* eslint-disable max-len */

import Navbar from "../../components/navbar";
import { SiInductiveautomation } from "react-icons/si"; // For Automated BI Migration Insights
import { MdOutlineDatasetLinked } from "react-icons/md"; // For Comprehensive Dataset Insights
import { FaAccusoft } from "react-icons/fa"; // For Accurate Dashboard Replication
import { RxCountdownTimer } from "react-icons/rx"; // For Minimized Downtime & Disruption
import { GrOptimize } from "react-icons/gr"; // For Optimized Cost & Investment
import { FaUserFriends } from "react-icons/fa"; // For User-Friendly Adoption & Integration
import {
  faCoins,
  faClock,
  faCogs,
  faUsers,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
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
      <div className="container mt-5">
        <div className="row">
           {/* Card 1: Reducing Cost & Investment Concerns */}
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

    {/* Card 2: Minimizing Business Disruption & Downtime */}
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

    {/* Card 3: Streamlining Integration Challenges */}
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

    {/* Card 4: Easing Employee Adoption */}
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

    {/* Card 5: Maximizing DOMO ROI */}
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
      </div>


      {/* cards*/}
      <section className="gwc_domo-section">
        <div className="container mt-3">
          <div className="text-center mb-3">
            <h2 className="text-white mb-5">What's Included in DOMASS?</h2>
          </div>
          <div className="row">
  {/* Card 1: Automated BI Migration Insights */}
  <div className="col-lg-4 col-md-6 col-12 mb-5">
    <div className="feature-card">
      <div className="rounded_icon">
        <SiInductiveautomation className="icon" /> {/* Icon for Automated BI Migration Insights */}
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
        <MdOutlineDatasetLinked className="icon" /> {/* Icon for Comprehensive Dataset Insights */}
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
        <RxCountdownTimer className="icon" /> {/* Icon for Minimized Downtime & Disruption */}
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
        <GrOptimize className="icon" /> {/* Icon for Optimized Cost & Investment */}
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
        <FaUserFriends className="icon" /> {/* Icon for User-Friendly Adoption & Integration */}
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
      <div className="container mt-5">
        <div className="flow-chart-container">
          <h2 className='mb-1 text-center'>Architecture Diagram</h2>
          <p>DOMAAS connects directly to BI tools, extracting dashboard metadata and dataset structures with automation. It generates SQL ER diagrams and organizes insights into Domo's format for a streamlined, disruption-free migration.</p>
          <img
            src="./assets/images/products/DOMAAS.drawio.svg"
            alt="Architecture Diagram"
            className="architecture-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Maas;