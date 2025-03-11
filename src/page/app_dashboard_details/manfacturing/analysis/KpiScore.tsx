import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";
import Icon3 from "../../icons/Lead Time Analysis.png";
import "../../cardstyle4.css";

const KpiScore = () => {
    return (
        <div>
            <div className="container mt-5">
                <h4>KPI Score card analysis</h4>
                <p>Analyze and optimize your supply chain to drive efficiency, reduce costs, and improve customer satisfaction.</p>
            </div>
            <div className="main-container">
                <div className="container1">
                    <div className="card1">
                        <div className="face face1">
                            <div className="content">
                                <img src={Icon1} />
                            </div>
                            <p className="heading">Operational Efficiency</p>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <ul className="list-unstyled mb-0">
                                    <li className="text text-size-18">
                                        <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Improve perfect order fulfillment rates.
                                    </li>
                                    <li className="text text-size-18">
                                        <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Shorten customer order cycle times.
                                    </li>
                                    <li className="text text-size-18">
                                        <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Enhance supply chain responsiveness and agility.
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
                            <p className="heading">Inventory Management</p>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <ul className="list-unstyled mb-0">
                                    <li className="text text-size-18">
                                        <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Optimize stock levels to balance supply and demand.
                                    </li>
                                    <li className="text text-size-18">
                                        <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Reduce lead times and improve replenishment strategies.
                                    </li>
                                    <li className="text text-size-18">
                                        <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Minimize return rates and stock-outs.
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
                            <p className="heading">Warehouse Management</p>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <ul className="list-unstyled mb-0">
                                    <li className="text text-size-18">
                                        <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Reduce holding and operational costs.
                                    </li>
                                    <li className="text text-size-18">
                                        <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Minimize stock-out scenarios.
                                    </li>
                                    <li className="text text-size-18">
                                        <i className="fa-solid fa-circle-check mr-2" style={{ color: "#000000" }}></i>
                                        Achieve greater accuracy in inventory tracking.
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

export default KpiScore;