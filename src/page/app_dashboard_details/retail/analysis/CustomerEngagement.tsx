import { useEffect } from "react";
import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";
import Icon3 from "../../icons/Lead Time Analysis.png";
import "../../style.css";

const CustomerEngagement = () => {

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
        <h4>Customer Engagement</h4>
        <p>Captures and maintains customer interest to drive interaction with the brand.</p>
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
                      <h4>Customer Journey</h4>
                      <p className="text-size-18">
                      Analyze customer interactions across touchpoints to optimize engagement strategies.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3"}}></i>
                          Visualize the customer journey from awareness to purchase.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3"}}></i>
                          Identify drop-off points and optimize user experiences.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3"}}></i>
                          Track engagement across channels and devices.
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
                      <h4>Email Campaign Performance</h4>
                      <p className="text-size-18">
                      Measure the effectiveness of email marketing efforts.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3"}}></i>
                          Track open rates, click-through rates, and conversion rates.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3"}}></i>
                          Monitor campaign ROI and segment performance.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3"}}></i>
                          Optimize subject lines and email content for higher engagement.
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
                      <h4>Website Engagement</h4>
                      <p className="text-size-18">Gain insights into user behavior on your e-commerce platform.</p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3"}}></i>
                          Measure session duration and click paths.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3"}}></i>
                          Identify high-performing landing pages.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "#7a3ca3"}}></i>
                          Track conversion rates by traffic source.
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

export default CustomerEngagement;