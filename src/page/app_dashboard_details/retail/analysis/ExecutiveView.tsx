import { useEffect } from "react";
import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";
import Icon3 from "../../icons/Lead Time Analysis.png";
import "../../style.css";

const ExecutiveView = () => {

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
        <h4>Executive View</h4>
        <p>Provides high-level insights to senior executives on key business metrics and strategic initiatives.</p>
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
                      <h4>Executive Summary</h4>
                      <p className="text-size-18">
                      Provide a high-level view of overall performance for strategic decision-making.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3"}}></i>
                          Summarize KPIs across departments.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3"}}></i>
                          Highlight risks and opportunities at a glance.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3"}}></i>
                          Enable informed decisions with actionable insights.
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
                      <h4>Financial Performance</h4>
                      <p className="text-size-18">
                      Monitor the financial health of your retail business.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3"}}></i>
                          Track revenue, profits, and expenses.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3"}}></i>
                          Monitor cost-to-revenue ratios by channel.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3"}}></i>
                          Identify areas for improving profitability.
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
                      <h4>Strategic Initiatives</h4>
                      <p className="text-size-18">Track the progress and success of strategic projects.</p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3"}}></i>
                          Monitor KPIs tied to strategic goals.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3"}}></i>
                          Measure ROI of major initiatives.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3"}}></i>
                          Align resources and efforts with company objectives.
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

export default ExecutiveView;