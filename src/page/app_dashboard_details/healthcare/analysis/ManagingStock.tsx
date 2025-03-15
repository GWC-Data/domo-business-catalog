import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";
import Icon3 from "../../icons/Lead Time Analysis.png";
import "../../cardstyle4.css";

const ManagingStock = () => {
  return (
    <div>
      <div className="container mt-5">
        <h4>Managing Stock and Fulfillment Efficiency</h4>
        <p>Monitor and manage inventory levels to ensure the availability of essential medical supplies and minimize waste.</p>
      </div>
      <div className="main-container">
        <div className="container1">
          <div className="card1">
            <div className="face face1">
              <div className="content">
                <img src={Icon1} />
              </div>
              <p className="heading">Stock Level Analysis</p>
            </div>
            <div className="face face2">
              <div className="content">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Optimize safety stock levels.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Reduce overstock and stock-out scenarios.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Track stock levels by product category in real time.
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
              <p className="heading">Expiry Date Monitoring</p>
            </div>
            <div className="face face2">
              <div className="content">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Reduce expired stock.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Implement timely stock replenishment strategies.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Avoid shortages of critical supplies.
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
              <p className="heading">Supplier Performance Analysis</p>
            </div>
            <div className="face face2">
              <div className="content">
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Improve on-time delivery rates.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Enhance supplier quality scores.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Reduce supplier defect rates to improve product quality.
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

export default ManagingStock;