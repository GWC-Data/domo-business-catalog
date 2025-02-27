import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";

const EmployeeSentiment = () => {
    return (
        <div>
            <div className="container mt-5">
                <h4>Employee Sentiment & Engagement</h4>
                <p>Provides insights into employee-related data to inform decision-making and strategic planning.</p>
            </div>
            <div className="row">
            <div className="container">
                <ul className="cards">
                    <li className="card cards__item">
                        <div className="card__frame">
                            <div>
                                <img src={Icon1} alt="" width="100" />
                            </div>
                            <h6 className="card__title">Diversity and Inclusion Dashboard</h6>
                        </div>
                        <div className="card__overlay"></div>
                        <div className="card__content">
                            <ul className="list-unstyled mb-0">
                                <p className="text-white">Track diversity initiatives and measure progress towards inclusion goals.</p>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Monitor workforce diversity by gender, race, and other factors.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Identify gaps in diversity and inclusion efforts.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Measure the impact of diversity programs on employee performance.
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card cards__item">
                        <div className="card__frame">
                            <div>
                                <img src={Icon2} alt="" width="100" />
                            </div>
                            <h6 className="card__title">Employee Satisfaction Dashboard</h6>
                        </div>
                        <div className="card__overlay"></div>
                        <div className="card__content">
                            <ul className="list-unstyled mb-0">
                                <p className="text-white">Gauge overall employee satisfaction and identify areas for improvement.</p>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Track satisfaction scores from surveys and feedback.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Identify factors driving or hindering satisfaction.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Implement initiatives to enhance employee satisfaction.
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default EmployeeSentiment;
