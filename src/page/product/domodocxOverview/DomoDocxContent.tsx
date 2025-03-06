/* eslint-disable max-len */
import "../infobeam.css";
import "../../home/home.css";

const DomoGoverner = () => {
  return (
    <div>
      <div className="container-fluid mt-5 mb-3">
        <div className="row">
          {/* cards*/}
          <section className="gwc_domo-section">
            <figure className="gwc_domo-dotimage mb-0">
              <img src="./assets/images/gwc_domo-dotimage.png" alt="" className="img-fluid" />
            </figure>
            <div className="col-12 mt-3">
              <div className="col-12 text-center mb-3">
                <h4 className="text-white">What's Included in DOMO DOCX?</h4>
                <p className="text-white">
                  Domo Docx is a documentation tool that captures visuals from dashboards, compiles
                  them into structured reports, and stores historical Document for easy access. It
                  simplifies documentation, ensuring consistency and quick retrieval of past
                  reports.
                </p>
              </div>
              <div className="row">
                {/* Card 1: Effortless Documentation */}
                <div className="col-lg-4 col-md-6 col-12 mb-3  ">
                  <div className=" h-100 p-3 bg-white">
                    <h5 className="card-title mb-3">Effortless Documentation</h5>
                    <div className="card-body p-0">
                      <ul className="feature-list">
                        <li className="mb-2">Visual-Based Report Generation.</li>
                        <li className="mb-2">
                          Captures images of dashboard visuals and compiles them into
                          well-structured reports.
                        </li>
                        <li className="mb-2">
                          Captures images of dashboard visuals and compiles them into
                          well-structured reports.
                        </li>
                        <li className="mb-2">Eliminates the need for manual documentation.</li>
                        <li className="mb-2">Updated Versions Dashboard Capture.</li>
                        <li className="mb-2">Ensures reports reflect the latest dashboard visuals.</li>
                        <li className="mb-2">Keeps documentation updated with current data.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 2: Unrestricted Access & Storage */}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="bg-white h-100 p-3">
                    <h5 className="card-title mb-3">Unrestricted Access & Storage</h5>
                    <div className="card-body p-0">
                      <ul className="feature-list">
                        <li className="mb-2">Open Access for All Users.</li>
                        <li className="mb-2">
                          No role-based restrictions—any user can create and access reports.
                        </li>
                        <li className="mb-2">Simplifies the documentation process across teams.</li>
                        <li className="mb-2">Historical Data Storage</li>
                        <li className="mb-2">Stores past reports in Domo AppDB for future reference.</li>
                        <li className="mb-2">Allows easy tracking of previous documents.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 3: Simplified Report Structuring*/}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className=" bg-white h-100 p-3">
                    <h5 className="card-title mb-3">Simplified Report Structuring</h5>
                    <div className="card-body p-0">
                      <ul className="feature-list">
                        <li className="mb-2">Organized & Consistent Documentation</li>
                        <li className="mb-2">Maintains uniform formatting for clear and professional reports.</li>
                        <li className="mb-2">Ensures structured documentation without complexity.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 4: Enhanced Workflow & Collaboration*/}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="bg-white h-100 p-3">
                    <h5 className="card-title mb-3">Enhanced Workflow & Collaboration</h5>
                    <div className="card-body p-0">
                      <ul className="feature-list">
                        <li className="mb-2">Easy Report Sharing.</li>
                        <li className="mb-2">Enables users to retrieve and share reports effortlessly.</li>
                        <li className="mb-2">Improves accessibility and collaboration within teams.</li>
                        <li className="mb-2">Efficient Workflow Management</li>
                        <li className="mb-2">Reduces manual effort in creating reports.</li>
                        <li className="mb-2">Speeds up report generation for quick decision-making.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 5: Reliable Data Storage & Compliance*/}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="bg-white h-100 p-3">
                    <h5 className="card-title mb-3">Reliable Data Storage & Compliance</h5>
                    <div className="card-body p-0">
                      <ul className="feature-list">
                        <li className="mb-2">Secure Document History.</li>
                        <li className="mb-2">Retains records of generated reports for easy audit trails.</li>
                        <li className="mb-2">Helps in maintaining a reference log of previous documentation.</li>
                        <li className="mb-2">Consistent & Well-Structured Reporting.</li>
                        <li className="mb-2">
                          Ensures reports maintain a standard format for better readability.
                        </li>
                        <li className="mb-2">Reduces inconsistencies in document structuring.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 6: Seamless Integration with Domo*/}
                <div className="col-lg-4 col-md-6 col-12 mb-3">
                  <div className="bg-white h-100 p-3">
                    <h5 className="card-title mb-3">Seamless Integration with Domo</h5>
                    <div className="card-body p-0">
                      <ul className="feature-list">
                        <li className="mb-2">Dashboard Compatibility.</li>
                        <li className="mb-2">Works effortlessly with all Domo dashboards.</li>
                        <li className="mb-2">
                          Extracts and compiles relevant visuals for effective documentation.
                        </li>
                        <li className="mb-2">Scalable & Customizable.</li>
                        <li className="mb-2">Adapts to different reporting needs.</li>
                        <li className="mb-2">Supports flexibility for various business use cases.</li>
                      </ul>
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
      </div>
    </div>
  );
};

export default DomoGoverner;