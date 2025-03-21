/* eslint-disable max-len */
import Navbar from "../../components/navbar";
import DOMODOCXCONTENT from "./domodocxOverview/DomoDocxContent";
import "../../components/Items/Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExport,
  faDatabase,
  faSyncAlt,
  faUniversalAccess,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const DomoDocx = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
    
  return (
    <div className="">
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
                  <h1 className="h-title ">DOMODocx</h1>
                  <p className="mx-auto">
                    Domo Docx is a smart documentation tool that turns dashboards into
                    well-structured reports. It captures visuals, creates meaningful descriptions,
                    and compiles everything into a polished document. This makes reporting
                    effortless, saving time while ensuring clear and organized documentation.
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
      <div  >

        <h5 className="text-center mt-4">Key Features of Domo Docx</h5>
        {/* Circular Content Section */}
        <div className="container mt-5" >
          <div className="row justify-content-center">
            {/* Card 1 */}
            <div className="card">
              <FontAwesomeIcon icon={faFileExport} className="feature-icon_card me-2 mr-1 card-title" />
              <p className="card-title">
              Seamless Document Generation
              </p>
              <p className="small-desc">
              Instantly compiles visuals from Domo dashboards into structured reports, eliminating
              manual effort.
              </p>
            </div>

            {/* Card 2 */}
            <div className="card">
              <FontAwesomeIcon icon={faDatabase} className="feature-icon_card me-2 mr-1 card-title  " />
              <p className="card-title">
              Historical Document Storage
              </p>
              <p className="small-desc">
              Saves past reports in Domo AppDB, enabling users to access and track previous
              documentation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="card">
              <FontAwesomeIcon icon={faSyncAlt} className="feature-icon_card me-2 mr-1 card-title" />
              <p className="card-title">
              Real-Time Data Capture
              </p>
              <p className="small-desc">
              Ensures reports always reflect the latest dashboard visuals for up-to-date
              documentation.
              </p>
            </div>

            {/* Card 4 */}
            <div className="card">
              <FontAwesomeIcon icon={faUniversalAccess} className="feature-icon_card me-2 mr-1 card-title" />
              <p className="card-title">
              Easy Accessibility
              </p>
              <p className="small-desc">
              Open to all users without restrictions, allowing effortless document creation and
              retrieval.
              </p>
            </div>

            {/* Card 5 */}
            <div className="card">
              <FontAwesomeIcon icon={faTable} className="feature-icon_card me-2 mr-1 card-title" />
              <p className="card-title">
              Consistent & Structured Reports
              </p>
              <p className="small-desc">
              Maintains uniform formatting for clear, professional documentation every time.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Tabs Section */}
      <div className="tabs-container mt-4">
        <div className="tab-content mt-3 text-center">
          <DOMODOCXCONTENT />
        </div>
      </div>

      {/*Flowchart Diagram*/}
      <div className="container">
        <div className="col-12 mt-5  ">
          <div className="col-lg-12 col-md-6 col-12 mb-3 text-center ">
            <h4>DOMO DOCX - Architecture Overview</h4>
            <p>
            DOMO DOCX is designed to streamline access to internal data through AI-powered chat
            interactions. The architecture consists of multiple interconnected modules to
            efficiently manage files, process user prompts, and generate AI-based responses.
            </p>
          </div>
          <div className="flow-chart-container">
            <h4 className="mb-1 text-center">Architecture Diagram</h4>
            <img
              src="./assets/images/products/DOMO_Doc_Generator_drawio.svg"
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
              <h2 className="text-white">DomoDocx - Effortless Smart Documentation</h2>
              <p className='text-white mt-2'>
                Experience the power of DomoDocx, the smart documentation tool that transforms dashboards into well-structured reports. Watch the demo to see how it captures visuals, generates meaningful descriptions, and compiles everything into a polished document—making reporting seamless and efficient.
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
                      muted={true}
                    >
                      <source src="./assets/videos/Domo_Docx_Demo_Video.mp4" type="video/mp4" />
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

export default DomoDocx;
