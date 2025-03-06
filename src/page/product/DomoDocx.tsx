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
      {/* Circular Content Section */}
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          {/* Circle 1 */}
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
            <div className="circle-container first">
              <h5>SnowGO Overview</h5>
              <p>
                SnowGO is a tool for managing Snowflake environments, giving you clear visibility,
                control, cost-saving options, and security compliance. It connects Snowflake with
                Domo to provide instant insights and easy-to-use dashboards for better decisions.
              </p>
            </div>
          </div>

          {/* Circle 2 */}
          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
            <div className="circle-container second">
              <h5>Databricks Governance Overview</h5>
              <p>
                The Databricks Governance Dashboard provides a centralized view of governance and
                operational metrics, enabling teams to monitor usage, optimize performance, enforce
                security, and ensure compliance. With seamless integration into Domo, it delivers
                actionable insights through intuitive dashboards and apps for smarter
                decision-making. Just enter your Databricks credentials and API tokens to unlock
                instant governance insights.
              </p>
            </div>
          </div>

          {/* Circle 3 */}
          <div className="col-xl-4 col-lg-6 col-sm-12 d-flex justify-content-center mb-4">
            <div className="circle-container third">
              <h5>Domo Governor Summary</h5>
              <p>
                Domo Governor is a powerful platform designed to enhance Domo instance management
                through centralized governance, automation, and actionable insights. It helps
                organizations streamline operations, optimize resources, and maintain intelligent
                oversight.
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
      </div>
    </div>
  );
};

export default DomoDocx;
