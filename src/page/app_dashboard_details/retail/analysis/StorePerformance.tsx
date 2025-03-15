import { useEffect } from "react";
import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";
import Icon3 from "../../icons/Lead Time Analysis.png";
import Icon4 from "../../icons/Supplier Performance Analysis.png";
import "../../style.css";

const StorePerformance = () => {

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
    <div className="container mt-5">
      <div>
        <h4>Store Performance</h4>
        <p>Tracks and optimizes individual store performance, including sales, foot traffic, and operations.</p>
      </div>
      <section className="design_two">
        <div className="container">
          <div className="row">
            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="blog_boxcontent">
                  <div className="lower_portion_wrapper">
                    <div className="icon">
                      <img src={Icon1} alt="" />
                    </div>
                    <div className="lower_portion">
                      <h4>Store Sales Performance</h4>
                      <p className="text-size-18">
                                                Track sales performance across locations to identify top-performing stores.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3" }}></i>
                                                    Monitor sales trends by region and store.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3" }}></i>
                                                    Identify low-performing stores for targeted improvements.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3" }}></i>
                                                    Measure revenue per square foot.
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
                      <h4>Foot Traffic Analysis</h4>
                      <p className="text-size-18">
                                            Analyze store footfall to optimize layouts and marketing efforts.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3" }}></i>
                                                    Monitor daily and seasonal traffic trends.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3" }}></i>
                                                    Track conversion rates from foot traffic to sales.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3" }}></i>
                                                    Optimize staffing and promotional strategies.
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
                      <h4>Store Operations</h4>
                      <p className="text-size-18">Ensure operational efficiency across all retail locations.</p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3" }}></i>
                                                    Monitor operational costs and performance.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3" }}></i>
                                                    Optimize scheduling and resource allocation.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3" }}></i>
                                                    Identify areas for cost reduction and efficiency improvements.
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
                      <h4>Visual Merchandising</h4>
                      <p className="text-size-18">
                                            Evaluate the effectiveness of in-store displays and layouts.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3" }}></i>
                                                    Track sales uplift from merchandising efforts.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3" }}></i>
                                                    Measure the impact of seasonal displays.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3" }}></i>
                                                    Optimize store layouts for better customer experience.
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
                      <h4>Customer Service</h4>
                      <p className="text-size-18">
                                            Enhance in-store customer service with data-driven insights.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3" }}></i>
                                                    Monitor response times and satisfaction levels.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3" }}></i>
                                                    Track resolution rates for customer complaints.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3" }}></i>
                                                    Identify training opportunities for store staff.
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
  );
};

export default StorePerformance;