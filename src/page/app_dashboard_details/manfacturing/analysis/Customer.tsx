import Icon1 from "../icons/Inventory Turnover Analysis.png";
import Icon2 from "../icons/Stock Level Analysis.png";
import Icon3 from "../icons/Lead Time Analysis.png";
import "../../cardstyle4.css";

const MaintenanceAnalysis = () => {
  return (
    <div>
      <div className="container mt-5">
        <h4>Customer Satisfaction Dashboard</h4>
        <p>Enhance customer experience and loyalty through data-driven insights into product performance.</p>
      </div>
      <div className="main-container">
        <div className="container1">
          <div className="card1">
            <div className="face face1">
              <div className="content">
                <img src={Icon1} />
              </div>
              <p className="heading">Delivery Performance Analysis</p>
            </div>
            <div className="face face2">
              <div className="content">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Track on-time delivery rate and delivery accuracy.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Monitor customer complaints related to delivery performance.
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
              <p className="heading">Product Quality Feedback</p>
            </div>
            <div className="face face2">
              <div className="content">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Analyze customer satisfaction scores and product return rates.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Address product defect complaints to enhance product quality.
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
              <p className="heading">Net Promoter Score (NPS) Analysis</p>
            </div>
            <div className="face face2">
              <div className="content">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Track NPS score to assess customer sentiment.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Improve customer retention and increase referral rate.
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