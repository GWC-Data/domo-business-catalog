import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";
import Icon3 from "../../icons/Lead Time Analysis.png";

const FootfallAnalysis = () => {
    return (
        <div>
            <div className="container mt-5">
                <h4>Footfall and Density Analysis</h4>
                <p>Provides insights into customer traffic, seating efficiency, and location-based patterns to optimize operations and enhance the customer experience.</p>
            </div>
            <div className="row"></div>
            <div className="container">
                <ul className="cards">
                    <li className="card cards__item">
                        <div className="card__frame">
                            <div>
                                <img src={Icon1} alt="" width="100" />
                            </div>
                            <h6 className="card__title">Customer Footfall Analysis</h6>
                        </div>
                        <div className="card__overlay"></div>
                        <div className="card__content">
                            <ul className="list-unstyled mb-0">
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Monitor visitor numbers to identify peak times and traffic trends.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Plan staffing schedules and inventory management based on footfall patterns.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Enhance service delivery during busy periods to improve customer satisfaction.
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card cards__item">
                        <div className="card__frame">
                            <div>
                                <img src={Icon2} alt="" width="100" />
                            </div>
                            <h6 className="card__title">Table Turnover and Seating Density</h6>
                        </div>
                        <div className="card__overlay"></div>
                        <div className="card__content">
                            <ul className="list-unstyled mb-0">
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Evaluate table turnover rates to assess seating efficiency and space utilization.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Optimize seating arrangements to accommodate more customers without compromising comfort.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Improve turnover time to maximize revenue and customer throughput.
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card cards__item">
                        <div className="card__frame">
                            <div>
                                <img src={Icon3} alt="" width="100" />
                            </div>
                            <h6 className="card__title">Location-Based Traffic Patterns</h6>
                        </div>
                        <div className="card__overlay"></div>
                        <div className="card__content">
                            <ul className="list-unstyled mb-0">
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Analyze traffic variations across locations to identify popular dining times and areas.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Leverage insights for layout optimization and targeted marketing campaigns.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Use data to make strategic decisions about new locations or promotional activities.
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FootfallAnalysis;
