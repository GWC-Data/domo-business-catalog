import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";
import "../../style.css";

const TheaterUtilization = () => {
  return (
    <div className="container mt-5">
      <div>
        <h4>Theater Utilization & Seating Efficiency Analysis</h4>
        <p>Optimize venue capacity and enhance audience experiences through efficient theatre management.</p>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-3">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="icon">
                  <img src={Icon1} alt="" />
                </div>
                <h4>Venue Occupancy Analysis</h4>
                <p>Maximize theatre capacity by analyzing occupancy trends to improve scheduling and pricing strategies.</p>
              </div>
              <div className="flip-card-back">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Track occupancy rates across different venues to identify underutilized spaces.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Analyze peak and off-peak times to better align events with audience demand.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Identify trends in seat fill rates to optimize venue use and maximize revenue.
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
                <h4>Event Scheduling Optimization</h4>
                <p>Enhance theatre utilization by strategically planning event schedules and venue operations.</p>
              </div>
              <div className="flip-card-back">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Implement back-to-back scheduling to ensure higher occupancy rates.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Adjust event times to target peak audience availability.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Optimize the allocation of theatres based on event size and popularity.
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
                  <img src={Icon2}/>
                </div>
                <h4>Event Scheduling Optimization</h4>
                <p>Enhance theatre utilization by strategically planning event schedules and venue operations.</p>
              </div>
              <div className="flip-card-back">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Implement back-to-back scheduling to ensure higher occupancy rates.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Adjust event times to target peak audience availability.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000"}}></i>
                    Optimize the allocation of theatres based on event size and popularity.
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

export default TheaterUtilization;