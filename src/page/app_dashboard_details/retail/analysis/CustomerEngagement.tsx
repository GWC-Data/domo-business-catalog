import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";
import Icon3 from "../../icons/Lead Time Analysis.png";

const CustomerEngagement = () => {
    return (
        <div>
            <div className="container mt-5">
                <h4>Customer Engagement</h4>
                <p>Captures and maintains customer interest to drive interaction with the brand.</p>
            </div>
            <div className="row"></div>
            <div className="container">
                <ul className="cards">
                    <li className="card cards__item">
                        <div className="card__frame">
                            <div>
                                <img src={Icon1} alt="" width="100" />
                            </div>
                            <h6 className="card__title">Customer Journey</h6>
                            <p className="text-white">Analyze customer interactions across touchpoints to optimize engagement strategies.</p>
                        </div>
                        <div className="card__overlay"></div>
                        <div className="card__content">
                            <ul className="list-unstyled mb-0">
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Visualize the customer journey from awareness to purchase.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Identify drop-off points and optimize user experiences.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Track engagement across channels and devices.
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card cards__item">
                        <div className="card__frame">
                            <div>
                                <img src={Icon2} alt="" width="100" />
                            </div>
                            <h6 className="card__title">Email Campaign Performance</h6>
                            <p className="text-white">Measure the effectiveness of email marketing efforts.</p>
                        </div>
                        <div className="card__overlay"></div>
                        <div className="card__content">
                            <ul className="list-unstyled mb-0">
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Track open rates, click-through rates, and conversion rates.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Monitor campaign ROI and segment performance.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Optimize subject lines and email content for higher engagement.
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card cards__item">
                        <div className="card__frame">
                            <div>
                                <img src={Icon3} alt="" width="100" />
                            </div>
                            <h6 className="card__title">Website Engagement</h6>
                            <p className="text-white">Gain insights into user behavior on your e-commerce platform.</p>
                        </div>
                        <div className="card__overlay"></div>
                        <div className="card__content">
                            <ul className="list-unstyled mb-0">
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Measure session duration and click paths.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Identify high-performing landing pages.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Track conversion rates by traffic source.
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CustomerEngagement
