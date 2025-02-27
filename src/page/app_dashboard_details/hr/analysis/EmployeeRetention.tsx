/* eslint-disable max-len */
import { useEffect } from "react";
import '../../../home/home.css'
import '../../style.css'

const EmployeeRetention = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <div className="container-fluid mt-5">
            <div >
                <h4>Employee Retention and Exit Analysis</h4>
                <p>Focuses on building long-term relationships with employees to reduce turnover and foster loyalty.</p>
            </div>
            <section className="gwc_domo-section">
                <figure className="gwc_domo-dotimage mb-0">
                    <img src="./assets/images/gwc_domo-dotimage.png" alt="" className="img-fluid" />
                </figure>
                <div className="col-12 mt-3">
                    <div className="col-12 mb-3">
                        <h4 className="text-white">Employee Retention Dashboard</h4>
                        <p className="text-white">Track turnover rates and the factors influencing retention to reduce attrition.</p>
                    </div>
                    <div className="row">
                        <ul className="list-unstyled mb-0 p-5">
                            <li className="text-white text-size-18 ">
                                <i className="fa-solid fa-circle-check mr-2 text-white"></i>
                                Analyze turnover by department, location, and tenure.
                            </li>
                            <li className="text-white text-size-18">
                                <i className="fa-solid fa-circle-check mr-2 text-white"></i>
                                Identify retention risk factors and intervene early.
                            </li>
                            <li className="text-white text-size-18">
                                <i className="fa-solid fa-circle-check mr-2 text-white"></i>
                                Implement strategies to retain high-value employees.
                            </li>
                        </ul>
                    </div>
                </div>
                <figure className="gwc_domo-rightlayer mb-0">
                    <img src="./assets/images/service-rightlayer.png" alt="" className="img-fluid" />
                </figure>
            </section>
        </div>
    );
};

export default EmployeeRetention;