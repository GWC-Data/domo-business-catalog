import bg from '../icons/bg1.png';
import bg2 from '../icons/bg2.png';
import bg3 from '../icons/bg3.png';
import './cardstyle5.css';

const Customer = () => {
    return (
        <div className='container'>
            <div className="container mt-5">
                <h4>Customer Satisfaction Dashboard</h4>
                <p>Enhance customer experience and loyalty through data-driven insights into product performance.</p>
            </div>
            <div className='customer-container'>
                <div className='customer-card' style={{ backgroundImage:`url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className='info'>
                        <div className='card-heading'>
                            <h4 className='title'>Delivery Performance Analysis</h4>
                            <p className='customer-desc'>Ensure timely and accurate deliveries to improve customer satisfaction.</p>
                        </div>
                        <ul className="list-unstyled mb-0 p-3">
                            <li className="text text-size-18 text-white">
                                <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                Analyze maintenance frequency by equipment type.
                            </li>
                            <li className="text text-size-18 text-white">
                                <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                Improve preventive vs. corrective maintenance ratio.
                            </li>
                            <li className="text text-size-18 text-white">
                                <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                Reduce maintenance cost per hour through better planning.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='customer-card' style={{ backgroundImage:`url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className='info'>
                        <div className='card-heading'>
                            <h4 className='title'>Product Quality Feedback</h4>
                            <p className='customer-desc'>Gather customer feedback to drive product quality improvements.</p>
                        </div>
                        <ul className="list-unstyled mb-0 p-3">
                            <li className="text text-size-18 text-white">
                                <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                Analyze customer satisfaction scores and product return rates.
                            </li>
                            <li className="text text-size-18 text-white">
                                <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                Address product defect complaints to enhance product quality.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='customer-card' style={{ backgroundImage:`url(${bg3})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className='info'>
                        <div className='card-heading'>
                            <h4 className='title'>Net Promoter Score (NPS) Analysis</h4>
                            <p className='customer-desc'>Measure customer loyalty and the likelihood of referrals to gauge overall satisfaction.</p>
                        </div>
                        <ul className="list-unstyled mb-0 p-3">
                            <li className="text text-size-18 text-white">
                                <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                Track NPS score to assess customer sentiment.
                            </li>
                            <li className="text text-size-18 text-white">
                                <i className="fa-solid fa-circle-check mr-2" style={{ color: "#ffffff" }}></i>
                                Improve customer retention and increase referral rate.
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customer
