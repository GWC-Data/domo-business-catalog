import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";
import Icon3 from "../../icons/Lead Time Analysis.png";
import "../../cardstyle4.css";

const Acquisition = () => {
    return (
        <div>
            <div className="container mt-5">
                <h4>Acquisition</h4>
                <p>Focuses on attracting potential customers through various marketing and online channels.</p>
            </div>
            <div className="main-container">
                <div className="container1">
                    <div className="card1">
                        <div className="face face1">
                            <div className="content">
                                <img src={Icon1} />
                            </div>
                            <p className="heading">Marketing Channels Performance</p>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <ul className="list-unstyled mb-0">
                                    <li className="text text-size-18">
                                        <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Evaluate channel ROI for campaigns.
                                    </li>
                                    <li className="text text-size-18">
                                        <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Track customer acquisition costs across channels.
                                    </li>
                                    <li className="text text-size-18">
                                        <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Identify high-performing and underperforming channels.
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
                            <p className="heading">Social Media Engagement</p>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <ul className="list-unstyled mb-0">
                                    <li className="text text-size-18">
                                        <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Monitor likes, shares, and comments by campaign.
                                    </li>
                                    <li className="text text-size-18">
                                        <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Track follower growth and audience reach.
                                    </li>
                                    <li className="text text-size-18">
                                        <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Analyze the impact of social media efforts on conversions.
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
                            <p className="heading">Website Traffic Analysis</p>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <ul className="list-unstyled mb-0">
                                    <li className="text text-size-18">
                                        <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Track sessions, bounce rate, and time on site.
                                    </li>
                                    <li className="text text-size-18">
                                        <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Identify high-traffic pages and customer pathways.
                                    </li>
                                    <li className="text text-size-18">
                                        <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Monitor traffic sources (organic, paid, referral, etc.).
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

export default Acquisition;