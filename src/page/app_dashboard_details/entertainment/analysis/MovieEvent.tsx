import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";

const MovieEvent = () => {
    return (
        <div>
            <div className="container mt-5">
                <h4>Movie and Event Performance & Audience Engagement</h4>
                <p>Understand audience trends and evaluate event performance to optimize scheduling and engagement.</p>
            </div>
            <div className="row"></div>
            <div className="container">
                <ul className="cards">
                    <li className="card cards__item">
                        <div className="card__frame">
                            <div>
                                <img src={Icon1} alt="" width="100" />
                            </div>
                            <h6 className="card__title">Audience Trends & Preferences</h6>
                            <p className="text-white">Gain insights into the preferences and behavior of your audience to ensure relevant event offerings.</p>
                        </div>
                        <div className="card__overlay"></div>
                        <div className="card__content">
                            <ul className="list-unstyled mb-0">
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Track attendance rates by event type to identify popular and less popular events.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Analyze genre preferences by customer demographics to target content more effectively.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Measure engagement metrics such as applause levels, reviews, and post-event feedback to assess audience satisfaction and interest.
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="card cards__item">
                        <div className="card__frame">
                            <div>
                                <img src={Icon2} alt="" width="100" />
                            </div>
                            <h6 className="card__title">Event Planning & Scheduling</h6>
                            <p className="text-white">Ensure that event offerings align with audience demand for maximum attendance and engagement.</p>
                        </div>
                        <div className="card__overlay"></div>
                        <div className="card__content">
                            <ul className="list-unstyled mb-0">
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Plan events based on audience preferences, such as focusing on popular genres or themes.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Invest more in high-demand genres or experiences that consistently engage your audience.
                                </li>
                                <li className="text text-size-18 text-white">
                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                    Optimize event schedules to accommodate peak interest times and improve attendance rates.
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MovieEvent;
