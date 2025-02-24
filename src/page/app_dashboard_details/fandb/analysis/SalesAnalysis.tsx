import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";
import Icon3 from "../../icons/Lead Time Analysis.png";
import "../../cardstyle4.css";

const SalesAnalysis = () => {
    return (
        <div>
            <div className="container mt-5">
                <h4>Sales Analysis</h4>
                <p>Provides comprehensive insights into sales performance, enabling businesses to refine pricing, promotions, and strategies for sustainable revenue growth.</p>
            </div>
            <div className="main-container">
            <div className="container1">
                <div className="card1">
                    <div className="face face1">
                        <div className="content">
                            <img src={Icon1} />
                        </div>
                        <p className="heading">Sales Trend Analysis</p>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <ul className="list-unstyled mb-0">
                                <li className="text text-size-18">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Analyze sales patterns over time to uncover seasonal peaks, trends, and dips.
                                </li>
                                <li className="text text-size-18">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Plan marketing campaigns and inventory strategies to align with sales cycles.
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
                        <p className="heading">Event Performance Evaluation</p>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <ul className="list-unstyled mb-0">
                                <li className="text text-size-18">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Identify top-rated events and replicate their success.
                                </li>
                                <li className="text text-size-18">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Use positive customer feedback to enhance marketing efforts for high-performing events.
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
                        <p className="heading">Sales by Channel Analysis</p>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <ul className="list-unstyled mb-0">
                                <li className="text text-size-18">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Break down revenue contributions from channels like dine-in, online, and delivery.
                                </li>
                                <li className="text text-size-18">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Identify high-performing channels to focus marketing and resources effectively.
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

export default SalesAnalysis;