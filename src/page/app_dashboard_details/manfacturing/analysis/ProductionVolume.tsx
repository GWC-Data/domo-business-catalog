import React, { useState } from "react";
import "../../style.css";

const ProductionVolume = () => {
    const [selected, setSelected] = useState(1);
    return (
        <div className="container mt-5">
            <div>
                <h4>Production Volume Dashbaord</h4>
                <p>Optimize production processes, reduce waste, and enhance output with real-time performance insights.</p>
            </div>
            <section className="domo_app-section" >
                <div className="container">
                    <div className="row" style={{ padding: "50px 0" }}>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-md-1 order-2">
                            <div className="domo_app_contentbox">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6" onClick={() => setSelected(1)} style={{ cursor: "pointer" }}>
                                        <div className={selected === 1 ? "domo_app-box box-mb active" : "domo_app-box box-mb"}>
                                            <figure className="domo_app-marketicon">
                                                <img src="./assets/images/service-marketicon.png" alt="" className="img-fluid" />
                                            </figure>
                                            <div className="font-weight-bold" style={{ fontSize: "1.3rem" }}>Production Volume Analysis</div>
                                        </div>
                                    </div>
                                    <div style={{ cursor: "pointer" }} className="col-lg-6 col-md-6 col-sm-6 col-6" onClick={() => setSelected(2)} >
                                        <div className="box-top">
                                            <div className={selected === 2 ? "domo_app-box box-mb active" : "domo_app-box box-mb"}>
                                                <figure className="domo_app-producticon">
                                                    <img src="./assets/images/service-producticon.png" alt="" className="img-fluid" />
                                                </figure>
                                                <div className="font-weight-bold" style={{ fontSize: "1.3rem" }}>Cycle Time Analysis</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6" onClick={() => setSelected(3)} style={{ cursor: "pointer" }}>
                                        <div className={selected === 3 ? "domo_app-box active" : "domo_app-box"}>
                                            <figure className="domo_app-designicon">
                                                <img src="./assets/images/service-designicon.png" alt="" className="img-fluid" />
                                            </figure>
                                            <div className="font-weight-bold" style={{ fontSize: "1.3rem" }}>Throughput Analysis</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-6" onClick={() => setSelected(4)} style={{ cursor: "pointer" }}>
                                        <div className="box-top">
                                            <div className={selected === 4 ? "domo_app-box active" : "domo_app-box"}>
                                                <figure className="domo_app-dataicon">
                                                    <img src="./assets/images/service-dataicon.png" alt="" className="img-fluid" />
                                                </figure>
                                                <div className="font-weight-bold" style={{ fontSize: "1.3rem" }}>Yield Analysis</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-md-2 order-1">
                            <div className="domo_app_content position-relative" data-aos="fade-right" style={{ paddingTop: "120px" }}>
                                {
                                    selected === 1 && (
                                        <React.Fragment>
                                            <h2>Production Volume Analysis</h2>
                                            <p>
                                                Track production trends and ensure targets are consistently met.
                                            </p>
                                            <ul className="list-unstyled mb-0">
                                                <li className="text text-size-18">
                                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027" }}></i>
                                                    Monitor daily production targets and actuals.
                                                </li>
                                                <li className="text text-size-18">
                                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027" }}></i>
                                                    Improve production rate per hour.
                                                </li>
                                                <li className="text text-size-18">
                                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027" }}></i>
                                                    Maximize output across shifts.
                                                </li>
                                            </ul>
                                        </React.Fragment>
                                    )
                                }
                                {
                                    selected === 2 && (
                                        <React.Fragment>
                                            <h2>Cycle Time Analysis</h2>
                                            <p>
                                                Identify delays and streamline production stages to minimize cycle times.
                                            </p>
                                            <ul className="list-unstyled mb-0">
                                                <li className="text text-size-18">
                                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027" }}></i>
                                                    Reduce average cycle time per product.
                                                </li>
                                                <li className="text text-size-18">
                                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027" }}></i>
                                                    Address stage-specific cycle time variances.
                                                </li>
                                                <li className="text text-size-18">
                                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027" }}></i>
                                                    Improve alignment with standard production benchmarks.
                                                </li>
                                            </ul>
                                        </React.Fragment>
                                    )
                                }
                                {
                                    selected === 3 && (
                                        <React.Fragment>
                                            <h2>Throughput Analysis</h2>
                                            <p>
                                                Uncover bottlenecks and maximize overall production efficiency.
                                            </p>
                                            <ul className="list-unstyled mb-0">
                                                <li className="text text-size-18">
                                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027" }}></i>
                                                    Increase Overall Equipment Effectiveness (OEE).
                                                </li>
                                                <li className="text text-size-18">
                                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027" }}></i>
                                                    Eliminate production bottlenecks.
                                                </li>
                                                <li className="text text-size-18">
                                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027" }}></i>
                                                    Enhance throughput rates across machines and lines.
                                                </li>
                                            </ul>
                                        </React.Fragment>
                                    )
                                }
                                {
                                    selected === 4 && (
                                        <React.Fragment>
                                            <h2>Yield Analysis</h2>
                                            <p>
                                                Improve product quality while minimizing rework and scrap rates.
                                            </p>
                                            <ul className="list-unstyled mb-0">
                                                <li className="text text-size-18">
                                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027" }}></i>
                                                    Boost First Pass Yield (FPY) percentages.
                                                </li>
                                                <li className="text text-size-18">
                                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027" }}></i>
                                                    Lower rework and scrap costs.
                                                </li>
                                                <li className="text text-size-18">
                                                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027" }}></i>
                                                    Monitor yield across production lines and shifts.
                                                </li>
                                            </ul>
                                        </React.Fragment>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductionVolume;