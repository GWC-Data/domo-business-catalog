import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";
import "../../style.css";

const MovieEvent = () => {
  return (
    <div className="container mt-5">
      <div>
        <h4>Movie and Event Performance & Audience Engagement</h4>
        <p>Understand audience trends and evaluate event performance to optimize scheduling and engagement.</p>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-3">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="icon">
                  <img src={Icon1} alt="" />
                </div>
                <h4>Audience Trends & Preferences</h4>
                <p>Gain insights into the key expense drivers and optimize spending across operations.</p>
              </div>
              <div className="flip-card-back">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Track attendance rates by event type to identify popular and less popular events.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Analyze genre preferences by customer demographics to target content more effectively.
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
                <h4>Event Planning & Scheduling</h4>
                <p>Ensure that event offerings align with audience demand for maximum attendance and engagement.</p>
              </div>
              <div className="flip-card-back">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Plan events based on audience preferences, such as focusing on popular genres or themes.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Invest more in high-demand genres or experiences that consistently engage your audience.
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

export default MovieEvent;