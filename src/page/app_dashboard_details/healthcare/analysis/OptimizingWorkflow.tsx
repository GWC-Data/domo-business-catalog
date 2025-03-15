import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";
import Icon3 from "../../icons/Lead Time Analysis.png";
import "../../cardstyle4.css";

const OptimizingWorkflow = () => {
  return (
    <div>
      <div className="container mt-5">
        <h4>Optimizing Workflow and Resource Utilization</h4>
        <p>Analyze and optimize hospital operations to enhance efficiency, reduce costs, and improve patient care.</p>
      </div>
      <div className="main-container">
        <div className="container1">
          <div className="card1">
            <div className="face face1">
              <div className="content">
                <img src={Icon1} />
              </div>
              <p className="heading">Bed Utilization Analysis</p>
            </div>
            <div className="face face2">
              <div className="content">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Improve bed turnover rates.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Reduce patient wait times for admissions.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Enhance overall patient flow management.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card1">
            <div className="face face1">
              <div className="content">
                <img src={Icon2} />
              </div>
              <p className="heading">Emergency Response Analysis</p>
            </div>
            <div className="face face2">
              <div className="content">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Shorten response times to critical incidents.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Improve emergency resource allocation.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Enhance patient outcomes during emergencies.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card1">
            <div className="face face1">
              <div className="content">
                <img src={Icon3} />
              </div>
              <p className="heading">Departmental Efficiency Analysis</p>
            </div>
            <div className="face face2">
              <div className="content">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Identify underperforming departments.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Allocate resources to high-demand areas.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Monitor efficiency metrics in real-time.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizingWorkflow;