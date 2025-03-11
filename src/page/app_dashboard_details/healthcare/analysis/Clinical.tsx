import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";
import Icon3 from "../../icons/Lead Time Analysis.png";
import "../../style.css";

const Clinical = () => {
  return (
    <div className="container mt-5">
      <div>
        <h4>Evaluating Clinical and Quality Metrics</h4>
        <p>Evaluate physician performance to ensure high-quality care and identify areas for professional development.</p>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-3">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="icon">
                  <img src={Icon1} alt="" />
                </div>
                <h4>Patient Consultation Analysis</h4>
                <p>Track patient consultations per physician to optimize scheduling.</p>
              </div>
              <div className="flip-card-back">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Improve patient consultation rates.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Balance workloads among physicians.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Reduce wait times for patient appointments.
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
                <h4>Treatment Outcome Analysis</h4>
                <p>Monitor treatment success rates to ensure quality care.</p>
              </div>
              <div className="flip-card-back">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Increase positive patient outcomes.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Address gaps in treatment efficacy.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Identify training opportunities for physicians.
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
                <h4>Patient Feedback Analysis</h4>
                <p>Analyze feedback to enhance physician performance.</p>
              </div>
              <div className="flip-card-back">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Improve patient satisfaction scores.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Address recurring complaints effectively.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Recognize and reward top-performing physicians.
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

export default Clinical;