/* eslint-disable max-len */
import "../infobeam.css";
import "../../home/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faFileAlt,
  faUsers,
  faChartLine,
  faDatabase,
  faUnlockAlt,
  faStream,
} from "@fortawesome/free-solid-svg-icons";
import "./DomoDocxCard.css";

const DomoGoverner = () => {
  return (
    < >
      <div className=" gwc_domo-section">
        <div className="row">
          {/* cards*/}
          <section className="container">
            <figure className="gwc_domo-dotimage mb-0">
              <img src="./assets/images/gwc_domo-dotimage.png" alt="" className="img-fluid" />
            </figure>
            <div className="col-12 mt-3 ">
              <div className="col-12 text-center mb-3 ">
                <h4 className="text-white">What's Included in DOMO DOCX?</h4>
                <p className="text-white">
                  Domo Docx is a documentation tool that captures visuals from dashboards, compiles
                  them into structured reports, and stores historical Document for easy access. It
                  simplifies documentation, ensuring consistency and quick retrieval of past
                  reports.
                </p>
              </div>
              <div className="row " style={{marginTop:"60px"}}>
                {/* Card 1: Effortless Documentation */}
                <div className="col-lg-4 col-md-6 col-12 mb-5 ">
                  <div className="feature-card">
                    <div className="rounded_icon">
                      <FontAwesomeIcon icon={faFileAlt} className="title-icon me-2" />
                    </div>
                      <h5 className="feature-title">
                         Effortless
                        Documentation
                      </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Visual-Based Report Generation.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> Captures
                          images of dashboard visuals into reports.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Eliminates the need for manual documentation.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> Updated
                          Versions Dashboard Capture.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> Ensures
                          reports reflect the latest visuals.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 2: Unrestricted Access & Storage */}
                <div className="col-lg-4 col-md-6 col-12 mb-5">
                  <div className="feature-card">
                  <div className="rounded_icon">
                  <FontAwesomeIcon icon={faUnlockAlt} className="title-icon me-2" />
                  </div>
                      <h5 className="feature-title">
                        Unrestricted Access & Storage
                      </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> Open
                          Access for All Users.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> No
                          role-based restrictions—any user can create reports.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Simplifies documentation across teams.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> Stores
                          past reports in Domo AppDB.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 3: Simplified Report Structuring */}
                <div className="col-lg-4 col-md-6 col-12 mb-5">
                  <div className="feature-card">
                  <div className="rounded_icon">
                  <FontAwesomeIcon icon={faStream} className="title-icon me-2" />

                  </div>
                      <h5 className="feature-title">
                      Simplified Report Structuring
                      </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Organized & Consistent Documentation.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> Uniform
                          formatting for clarity.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> Ensures
                          structured documentation.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 4: Enhanced Workflow & Collaboration */}
                <div className="col-lg-4 col-md-6 col-12 mb-5">
                  <div className="feature-card">
                  <div className="rounded_icon">
                  <FontAwesomeIcon icon={faUsers} className="title-icon me-2" /> 

                  </div>
                    <div className="feature-card-header">
                      <h5 className="feature-title">
                         Enhanced
                        Workflow & Collaboration
                      </h5>
                    </div>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> Easy
                          Report Sharing.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> Improves
                          accessibility and collaboration.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Efficient Workflow Management.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 5: Reliable Data Storage & Compliance */}
                <div className="col-lg-4 col-md-6 col-12 mb-5">
                  <div className="feature-card">
                  <div className="rounded_icon">
                  <FontAwesomeIcon icon={faDatabase} className="title-icon me-2" /> 
                  </div>
                      <h5 className="feature-title">
                        Reliable
                        Data Storage & Compliance
                      </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> Secure
                          Document History.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> Retains
                          records of generated reports.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> Ensures
                          a standard reporting format.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 6: Seamless Integration with Domo */}
                <div className="col-lg-4 col-md-6 col-12 mb-5">
                  <div className="feature-card">
                  <div className="rounded_icon">
                  <FontAwesomeIcon icon={faChartLine} className="title-icon me-2" /> 
                  </div>
                      <h5 className="feature-title">
                        Seamless
                        Integration with Domo
                      </h5>
                    <div className="feature-card-body">
                      <ul className="feature-list">
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
                          Dashboard Compatibility.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> Works
                          with all Domo dashboards.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" /> Supports
                          various business use cases.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <figure className="gwc_domo-rightlayer mb-0">
              <img src="./assets/images/service-rightlayer.png" alt="" className="img-fluid" />
            </figure> */}
          </section>
        </div>
      </div>
    </>
  );
};

export default DomoGoverner;
