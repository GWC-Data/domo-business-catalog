import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";
import Icon3 from "../../icons/Lead Time Analysis.png";
import "../../cardstyle4.css";

const MarketingCampaign = () => {
    return (
        <div>
            <div className="container mt-5">
                <h4>Marketing Campaign Performance & Effectiveness</h4>
                <p>Assess and refine marketing campaigns to boost engagement, optimize spending, and enhance conversions.</p>
            </div>
            <div className="main-container">
            <div className="container1">
                <div className="card1">
                    <div className="face face1">
                        <div className="content">
                            <img src={Icon1} />
                        </div>
                        <p className="heading">Campaign Effectiveness & ROI</p>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <ul className="list-unstyled mb-0">
                                <li className="text text-size-18">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Track the return on investment (ROI) for each campaign to prioritize high-performing channels.
                                </li>
                                <li className="text text-size-18">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Focus resources on marketing tactics that yield the best results in terms of conversions and engagement.
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
                        <p className="heading">Customer Acquisition & Retargeting</p>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <ul className="list-unstyled mb-0">
                                <li className="text text-size-18">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Analyze customer acquisition cost (CAC) to ensure cost-effective acquisition channels.
                                </li>
                                <li className="text text-size-18">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Retarget customers who abandoned bookings to increase conversion rates and reduce lost opportunities.
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
                        <p className="heading">Engagement & Conversion Boost</p>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <ul className="list-unstyled mb-0">
                                <li className="text text-size-18">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Measure engagement rates across various platforms (email, social media, etc.) to identify key areas for growth.
                                </li>
                                <li className="text text-size-18">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                    Use insights from engagement metrics to improve campaign content and timing.
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

export default MarketingCampaign;