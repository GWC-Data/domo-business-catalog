import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";
import Icon3 from "../../icons/Lead Time Analysis.png";
import "../../style.css";

const ImprovingFeedback = () => {
  return (
    <div className="container mt-5">
      <div>
        <h4>Improving Feedback and Care Quality</h4>
        <p>Enhance patient experience and loyalty through data-driven insights into service quality.</p>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-3">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="icon">
                  <img src={Icon1} alt="" />
                </div>
                <h4>Net Promoter Score (NPS) Analysis</h4>
                <p>Measure patient loyalty and the likelihood of referrals.</p>
              </div>
              <div className="flip-card-back">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Improve NPS scores to enhance patient sentiment.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Increase referral rates through better care.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Address feedback to improve patient experience.
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
                <h4>Feedback Trend Analysis</h4>
                <p>Analyze feedback trends to identify areas of improvement.</p>
              </div>
              <div className="flip-card-back">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Address recurring complaints.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Enhance department-wise service quality.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Implement changes based on patient suggestions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-3 mx-auto">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="icon">
                  <img src={Icon3} alt="" />
                </div>
                <h4>Service Quality Metrics</h4>
                <p>Monitor overall patient satisfaction and service quality.</p>
              </div>
              <div className="flip-card-back">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Improve satisfaction scores.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Enhance timeliness and efficiency of services.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Ensure continuous improvement in patient care.
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

export default ImprovingFeedback;