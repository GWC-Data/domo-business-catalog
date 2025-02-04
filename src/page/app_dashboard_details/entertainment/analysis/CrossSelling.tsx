import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";
import Icon3 from "../../icons/Lead Time Analysis.png";

const CrossSelling = () => {
    return (
        <div>
            <div className="container mt-5">
                <h4>Cross-Selling and Upselling Performance Insights</h4>
                <p>Identify and capitalize on opportunities to increase revenue per customer through upselling and cross-selling.</p>
            </div>
            <div className="row"></div>
            <div className="container">
                <ul className="cards">
                    <li className="card cards__item">
                        <div className="card__frame">
                            <div>
                                <img src={Icon1} alt="" width="100" />
                            </div>
                            <h6 className="card__title">Upselling Opportunities</h6>
                            <p className="text-white">Maximize revenue by promoting higher-value products or services during the purchase process.</p>
                        </div>
                        <div className="card__overlay"></div>
                        <div className="card__content">
                            <ul className="list-unstyled mb-0">
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Track conversion rates for upsold items like snacks, premium seating, or merchandise to assess effectiveness.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Introduce combo deals (e.g., ticket + snacks or merchandise bundles) to increase overall transaction value.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Recommend premium options or VIP experiences during checkout to boost average customer spend.
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card cards__item">
                        <div className="card__frame">
                            <div>
                                <img src={Icon2} alt="" width="100" />
                            </div>
                            <h6 className="card__title">Cross-Selling Opportunities</h6>
                            <p className="text-white">Increase revenue through complementary offerings that enhance the customer experience.</p>
                        </div>
                        <div className="card__overlay"></div>
                        <div className="card__content">
                            <ul className="list-unstyled mb-0">
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Focus on cross-selling event bundles (e.g., ticket + parking or food/drink vouchers).
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Leverage customer data to suggest relevant add-ons based on previous purchases or preferences.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Implement personalized offers based on customer segmentation to increase uptake of cross-sell products.
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card cards__item">
                        <div className="card__frame">
                            <div>
                                <img src={Icon3} alt="" width="100" />
                            </div>
                            <h6 className="card__title">Customer Satisfaction Through Personalization</h6>
                            <p className="text-white">Enhance the customer experience with tailored offerings that provide additional value.</p>
                        </div>
                        <div className="card__overlay"></div>
                        <div className="card__content">
                            <ul className="list-unstyled mb-0">
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Offer personalized recommendations based on customer preferences and behavior to improve the relevancy of upsell/cross-sell offers.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Create exclusive packages or bundles that increase perceived value and drive greater customer satisfaction.
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CrossSelling;
