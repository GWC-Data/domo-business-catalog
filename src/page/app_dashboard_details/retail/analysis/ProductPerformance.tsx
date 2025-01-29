import React, { useState } from "react";
import "./Retailstyle.css";

const ProductPerformance = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="container mt-5">
      <div>
        <h4>Product Performance</h4>
        <p>Monitors the performance of products in terms of sales, returns, and customer satisfaction.</p>
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
                      <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>Best-Selling Products</div>
                    </div>   
                  </div>
                  <div style={{ cursor:"pointer"}} className="col-lg-6 col-md-6 col-sm-6 col-6" onClick={() => setSelected(2)} >
                    <div className="box-top">
                      <div className={selected === 2 ? "domo_app-box box-mb active" : "domo_app-box box-mb"}>
                        <figure className="domo_app-producticon">
                          <img src="./assets/images/service-producticon.png" alt="" className="img-fluid" />
                        </figure>
                        <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>Average Order Value</div>
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
                      <div className="font-weight-bold" style={{fontSize: "1.3rem"}}>Product Return Rates</div>
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
                      <h2>Best-Selling Products</h2>
                      <p>
                      Identify top-performing products to focus on revenue-driving inventory.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Monitor sales volume by product.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Identify seasonal trends in product performance.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Allocate resources to high-performing product lines.
                        </li>
                      </ul>
                    </React.Fragment>
                  )
                }
                {
                  selected === 2 && (
                    <React.Fragment>
                      <h2>Average Order Value</h2>
                      <p>
                      Track average order value (AOV) and implement strategies to increase it.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Analyze AOV by segment and channel.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Measure the impact of discounts and promotions on AOV.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Identify opportunities for upselling and cross-selling.
                        </li>
                      </ul>
                    </React.Fragment>
                  )
                }
                {
                  selected === 3 && (
                    <React.Fragment>
                      <h2>Product Return Rates</h2>
                      <p>
                      Minimize returns to reduce costs and improve customer satisfaction.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Track return rates by product and reason.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Analyze patterns to address common issues.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                          Improve product quality and descriptions to lower returns.
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

export default ProductPerformance;