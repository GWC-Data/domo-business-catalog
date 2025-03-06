 
import React, { useState } from "react";
import "../../style.css";

const Acquisition = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="container mt-5">
      <div>
        <h4>Acquisition</h4>
        <p>Focuses on attracting potential customers through various marketing and online channels.</p>
      </div>
      <section className="domo_app-section" >
        <div className="container">
          <div className="row" style={{ padding:"50px 0"}}>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-md-1 order-2">
              <div className="domo_app_contentbox">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6" onClick={() => setSelected(1)} style={{ cursor:"pointer"}}>
                    <div className={selected === 1 ? "domo_app-box box-mb active" : "domo_app-box box-mb"}>
                      <figure className="domo_app-marketicon">
                        <img src="./assets/images/service-marketicon.png" alt="" className="img-fluid" />
                      </figure> 
                      <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>Marketing Channels Performance</div>
                    </div>   
                  </div>
                  <div style={{ cursor:"pointer"}} className="col-lg-6 col-md-6 col-sm-6 col-6" onClick={() => setSelected(2)} >
                    <div className="box-top">
                      <div className={selected === 2 ? "domo_app-box box-mb active" : "domo_app-box box-mb"}>
                        <figure className="domo_app-producticon">
                          <img src="./assets/images/service-producticon.png" alt="" className="img-fluid" />
                        </figure>
                        <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>Social Media Engagement</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6" onClick={() => setSelected(3)} style={{ cursor:"pointer"}}>
                    <div className={selected === 3 ? "domo_app-box active" : "domo_app-box"}>
                      <figure className="domo_app-designicon">
                        <img src="./assets/images/service-designicon.png" alt="" className="img-fluid" />
                      </figure>
                      <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>Website Traffic Analysis</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-md-2 order-1">
              <div className="domo_app_content position-relative" data-aos="fade-right" style={{paddingTop: "120px" }}>
                {
                  selected === 1 && (
                    <React.Fragment>
                      <h2>Marketing Channels Performance</h2>
                      <p>
                      Analyze the effectiveness of marketing channels to optimize spend and reach the right audience.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Evaluate channel ROI for campaigns.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Track customer acquisition costs across channels.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Identify high-performing and underperforming channels.
                        </li>
                      </ul>
                    </React.Fragment>
                  )
                }
                {
                  selected === 2 && (
                    <React.Fragment>
                      <h2>Social Media Engagement </h2>
                      <p>
                      Measure engagement across platforms to refine social media strategies.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Monitor likes, shares, and comments by campaign.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Track follower growth and audience reach.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Analyze the impact of social media efforts on conversions.
                        </li>
                      </ul>
                    </React.Fragment>
                  )
                }
                {
                  selected === 3 && (
                    <React.Fragment>
                      <h2>Website Traffic Analysis</h2>
                      <p>
                      Understand how customers interact with your website to improve online performance.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Track sessions, bounce rate, and time on site.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Identify high-traffic pages and customer pathways.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Monitor traffic sources (organic, paid, referral, etc.).
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

export default Acquisition;