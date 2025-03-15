import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";
import Icon3 from "../../icons/Lead Time Analysis.png";
import "../../cardstyle4.css";

const Compensation = () => {
  return (
    <div>
      <div className="container mt-5">
        <h4>Compensation and Career Growth Tracker</h4>
        <p>Ensures that compensation strategies align with industry standards and employee expectations.</p>
      </div>
      <div className="main-container">
        <div className="container1">
          <div className="card1">
            <div className="face face1">
              <div className="content">
                <img src={Icon1} />
              </div>
              <p className="heading">Compensation and Benefits Dashboard</p>
            </div>
            <div className="face face2">
              <div className="content">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Track salary ranges, bonuses, and benefits by role and location.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Compare compensation packages with industry benchmarks.
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
              <p className="heading text-center">Compensation Benchmarking Dashboard</p>
            </div>
            <div className="face face2">
              <div className="content">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Analyze salary benchmarks by role and location.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Track compensation adjustments and market trends.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Align compensation strategies with employee expectations.
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
              <p className="heading">Succession Planning Dashboard</p>
            </div>
            <div className="face face2">
              <div className="content">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Identify critical roles and potential successors.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Measure readiness and develop targeted development plans.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Track leadership development program effectiveness.
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

export default Compensation;