import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";
import Icon3 from "../../icons/Lead Time Analysis.png";
import "../../cardstyle4.css";

const Retention = () => {
    return (
        <div>
            <div className="container mt-5">
                <h4>Retention</h4>
                <p>Encourages repeat purchases and builds customer loyalty to increase lifetime value.</p>
            </div>
            <div className="main-container">
            <div className="container1">
                <div className="card1">
                    <div className="face face1">
                        <div className="content">
                            <img src={Icon1} />
                        </div>
                        <p className="heading">Customer Retention</p>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <ul className="list-unstyled mb-0">
                                <li className="text text-size-18">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Track churn rates and retention by segment.
                                </li>
                                <li className="text text-size-18">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Identify factors driving customer loyalty.
                                </li>
                                <li className="text text-size-18">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Implement targeted strategies to reduce churn.
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
                        <p className="heading">Loyalty Program Performance</p>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <ul className="list-unstyled mb-0">
                                <li className="text text-size-18">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Track participation rates and reward redemptions.
                                </li>
                                <li className="text text-size-18">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Measure the contribution of loyalty members to revenue.
                                </li>
                                <li className="text text-size-18">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Optimize rewards for maximum engagement.
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
                        <p className="heading">Customer Feedback</p>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <ul className="list-unstyled mb-0">
                                <li className="text text-size-18">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Track satisfaction scores and review trends.
                                </li>
                                <li className="text text-size-18">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Address key areas for improvement.
                                </li>
                                <li className="text text-size-18">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Monitor feedback by channel and location.
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

export default Retention;