import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";
import Icon3 from "../../icons/Lead Time Analysis.png";
import "../../style.css";

const EmployeePerformance = () => {
  return (
    <div className="container mt-5">
      <div>
        <h4>Employee Performance</h4>
        <p>Provides insights into workforce productivity, retention, and the impact of training initiatives, empowering businesses to enhance employee engagement and optimize performance.</p>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-3">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="icon">
                  <img src={Icon1} alt="" />
                </div>
                <h4>Employee Productivity Analysis  </h4>
                <p>Monitor individual and team performance based on efficiency, accuracy, and output.</p>
              </div>
              <div className="flip-card-back">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Identify top performers and areas for improvement to streamline operations.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Set actionable goals to boost productivity and meet business objectives.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-3">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="icon">
                  <img src={Icon2} alt="" />
                </div>
                <h4>Employee Turnover Rate Analysis</h4>
                <p>Assess employee attrition rates and uncover key drivers of turnover.</p>
              </div>
              <div className="flip-card-back">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Develop retention strategies to address underlying causes of staff departures.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Improve workplace culture and satisfaction to enhance employee loyalty.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-3">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="icon">
                  <img src={Icon3} alt="" />
                </div>
                <h4>Training and Development Impact</h4>
                <p>Evaluate the outcomes of training programs on skill enhancement and job performance.</p>
              </div>
              <div className="flip-card-back">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Identify gaps in knowledge and areas for further development.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Align training efforts with organizational goals to maximize ROI.
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

export default EmployeePerformance;