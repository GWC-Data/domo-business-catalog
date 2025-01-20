import { useEffect } from "react";
import "./style.css";
import Icon1 from "./icons/Inventory Turnover Analysis.png";
import Icon2 from "./icons/Stock Level Analysis.png";
import Icon3 from "./icons/Lead Time Analysis.png";
import Icon4 from "./icons/Supplier Performance Analysis.png";

const InventoryAnalysis = () => {

  useEffect(() => {
    // Initialize owl carousel
    const initCarousel = () => {
      const $ = window.jQuery;
      if ($ && $.fn.owlCarousel) {
        $(".owl-carousel").owlCarousel({
          loop: true,
          margin: 15,
          nav: false,
          responsive: {
            0: {
              items: 1
            },
            576: {
              items: 1
            },
            768: {
              items: 2
            },
            992: {
              items: 2
            }
          },
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true
        });
      }
    };
  
    initCarousel();
  
    // If not successful, try again after a short delay
    const timer = setTimeout(() => {
      initCarousel();
    }, 500);
  
    // Cleanup function
    return () => {
      clearTimeout(timer);
      const $ = window.jQuery;
      if ($ && $.fn.owlCarousel) {
        $(".owl-carousel").owlCarousel("destroy");
      }
    };
  }, []);

  return (
    <div>
      <div className="container">
        <section className="design_two">
          <div className="container">
            <h5>KPIs</h5>
            <p>Balance inventory levels to meet demand, reduce costs, and enhance operational efficiency.</p>
            <div className="row">
              <div className="owl-carousel owl-theme">
                <div className="item">
                  <div className="blog_boxcontent">
                    <div className="lower_portion_wrapper">
                      <div className="icon">
                        <img src={Icon1} alt="" />
                      </div>
                      <div className="lower_portion">
                        <h4>Inventory Turnover Analysis</h4>
                        <p className="text-size-18">
                          Monitor inventory movement to optimize stock utilization and reduce carrying costs.
                        </p>
                        <ul className="list-unstyled mb-0">
                          <li className="text text-size-18">
                            <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                            Improve inventory turnover ratio.
                          </li>
                          <li className="text text-size-18">
                            <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                            Minimize days sales of inventory (DSI).
                          </li>
                          <li className="text text-size-18">
                            <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                            Lower inventory carrying costs.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="blog_boxcontent">
                    <div className="lower_portion_wrapper">
                      <div className="icon">
                        <img src={Icon2} alt="" />
                      </div>
                      <div className="lower_portion">
                        <h4>Stock Level Analysis</h4>
                        <p className="text-size-18">
                          Ensure accurate stock levels to avoid disruptions and maintain customer satisfaction.
                        </p>
                        <ul className="list-unstyled mb-0">
                          <li className="text text-size-18">
                            <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                            Optimize safety stock levels.
                          </li>
                          <li className="text text-size-18">
                            <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                            Reduce overstock and stock-out scenarios.
                          </li>
                          <li className="text text-size-18">
                            <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                            Track stock levels by product category in real time.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="blog_boxcontent mb-0">
                    <div className="lower_portion_wrapper">
                      <div className="icon">
                        <img src={Icon3} alt="" />
                      </div>
                      <div className="lower_portion">
                        <h4>Lead Time Analysis</h4>
                        <p className="text-size-18">Analyze and improve lead times to enhance supply chain efficiency.</p>
                        <ul className="list-unstyled mb-0">
                          <li className="text text-size-18">
                            <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                            Reduce supplier lead times and variability.
                          </li>
                          <li className="text text-size-18">
                            <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                            Streamline procurement cycles by material or product.
                          </li>
                          <li className="text text-size-18">
                            <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                            Minimize delays in production due to supply gaps.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="blog_boxcontent">
                    <div className="lower_portion_wrapper">
                      <div className="icon">
                        <img src={Icon4} alt="" />
                      </div>
                      <div className="lower_portion">
                        <h4>Supplier Performance Analysis</h4>
                        <p className="text-size-18">
                          Evaluate supplier reliability to strengthen procurement strategies.
                        </p>
                        <ul className="list-unstyled mb-0">
                          <li className="text text-size-18">
                            <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                            Improve on-time delivery rates.
                          </li>
                          <li className="text text-size-18">
                            <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                            Enhance supplier quality scores.
                          </li>
                          <li className="text text-size-18">
                            <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                            Reduce supplier defect rates to improve product quality.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InventoryAnalysis;