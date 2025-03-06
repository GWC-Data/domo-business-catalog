import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import DOMODOCXCONTENT from "./domodocxOverview/DomoDocxContent";

const DomoDocx = () => {
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
            <h5 className="text-center mt-4">Key Features of Domo Docx</h5>
     {/* Circular Content Section */}
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        {/* Circle 1 */}
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
          <div className="circle-container first">
            <h5>Seamless Document Generation</h5>
            <p>
              Instantly compiles visuals from Domo dashboards into structured reports, eliminating manual effort.
            </p>
          </div>
        </div>

        {/* Circle 2 */}
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
          <div className="circle-container second">
            <h5>Historical Document Storage</h5>
            <p>
              Saves past reports in Domo AppDB, enabling users to access and track previous documentation.
            </p>
          </div>
        </div>

        {/* Circle 3 */}
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
          <div className="circle-container third">
            <h5>Real-Time Data Capture</h5>
            <p>
              Ensures reports always reflect the latest dashboard visuals for up-to-date documentation.
            </p>
          </div>
        </div>

        {/* Circle 4 */}
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
          <div className="circle-container four">
            <h5>Easy Accessibility</h5>
            <p>
              Open to all users without restrictions, allowing effortless document creation and retrieval.
            </p>
          </div>
        </div>

        {/* Circle 5 */}
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
          <div className="circle-container five">
            <h5>Consistent & Structured Reports</h5>
            <p>
              Maintains uniform formatting for clear, professional documentation every time.
            </p>
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
       <div className="col-12 mt-5">
            <div className='col-lg-12 col-md-6 col-12 mb-3 text-center'>
              <h4>DOMO DOCX - Architecture Overview</h4>
              <p>DOMO DOCX is designed to streamline access to internal data through AI-powered chat interactions. The architecture consists of multiple interconnected modules to efficiently manage files, process user prompts, and generate AI-based responses.</p>
            </div>
            <div className="flow-chart-container">
              <h4 className='mb-1 text-center'>Architecture Diagram</h4>
              <img
                src="./assets/images/products/DOMO_Doc_Generator_drawio.svg"
                alt="Architecture Diagram"
                className="architecture-image"
              />
            </div>
          </div>
    </div>
    </div>
  );
};

export default DomoDocx;
