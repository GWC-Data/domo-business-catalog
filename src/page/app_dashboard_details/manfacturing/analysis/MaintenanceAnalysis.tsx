import Icon1 from "../icons/Inventory Turnover Analysis.png";
import Icon2 from "../icons/Stock Level Analysis.png";
import Icon3 from "../icons/Lead Time Analysis.png";
import "../../cardstyle4.css";

const MaintenanceAnalysis = () => {
  return (
    <div>
      <div className="container mt-5">
        <h4>Maintenance Frequency and Downtime Analysis</h4>
        <p>Enhance equipment reliability and reduce downtime with data-driven maintenance insights.</p>
      </div>
      <div className="main-container">
        <div className="container1">
          <div className="card1">
            <div className="face face1">
              <div className="content">
                <img src={Icon1} />
              </div>
              <p className="heading">Maintenance Frequency Analysis</p>
            </div>
            <div className="face face2">
              <div className="content">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Analyze maintenance frequency by equipment type.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Improve preventive vs. corrective maintenance ratio.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Reduce maintenance cost per hour through better planning.
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
              <p className="heading">Downtime Analysis</p>
            </div>
            <div className="face face2">
              <div className="content">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Reduce downtime duration and its impact on production.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Increase mean time between failures (MTBF).
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Optimize equipment utilization and minimize idle time.
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
              <p className="heading">Predictive Maintenance Analysis</p>
            </div>
            <div className="face face2">
              <div className="content">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Improve predictive maintenance accuracy.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Achieve significant reductions in unplanned downtime.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Realize cost savings through proactive maintenance strategies.
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

export default MaintenanceAnalysis;