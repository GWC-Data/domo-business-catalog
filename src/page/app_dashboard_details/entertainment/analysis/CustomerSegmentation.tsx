import { useEffect } from "react";
import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";
import Icon3 from "../../icons/Lead Time Analysis.png";
import "../../style.css";

const CustomerSegmentaion = () => {

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
        <h4>Customer Segmentation & Behavior Insights</h4>
        <p>Understand customer groups to optimize engagement, personalization, and revenue growth.</p>
      </div>
      <section className="design_two">
        <div className="container">
          <div className="row">
            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="blog_boxcontent">
                  <div className="lower_portion_wrapper w-auto h-auto">
                    <div className="icon">
                      <img src={Icon1} alt="" />
                    </div>
                    <div className="lower_portion">
                      <h4>Segmentation & Profiling Analysis</h4>
                      <p className="text-size-18">
                      Segment customers based on spending habits, demographics, and preferences to tailor marketing efforts.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-15">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Identify high-value customers by segmenting based on spending behavior.
                        </li>
                        <li className="text text-size-15">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Analyze customer profiles to detect emerging segments for personalized engagement.
                        </li>
                        <li className="text text-size-15">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Use segmentation data to refine marketing and sales strategies.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog_boxcontent">
                  <div className="lower_portion_wrapper w-auto h-auto">
                    <div className="icon">
                      <img src={Icon2} alt="" />
                    </div>
                    <div className="lower_portion mb-0">
                      <h4>Personalized Engagement Analysis</h4>
                      <p className="text-size-18">
                      Craft targeted campaigns for each customer segment to drive engagement and loyalty.
                      </p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-10">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Deliver personalized event recommendations and product offers based on customer preferences.
                        </li>
                        <li className="text text-size-10">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Monitor the effectiveness of tailored campaigns to increase conversion rates.
                        </li>
                        <li className="text text-size-10">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Create exclusive promotions for high-value segments to enhance loyalty.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog_boxcontent">
                  <div className="lower_portion_wrapper w-auto h-auto">
                    <div className="icon">
                      <img src={Icon3} alt="" />
                    </div>
                    <div className="lower_portion">
                      <h4>Retention & Loyalty Analysis</h4>
                      <p className="text-size-18">Measure the impact of personalized engagement strategies on customer retention.</p>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Track retention rates for different customer segments over time.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Monitor customer lifetime value (CLTV) to determine the effectiveness of engagement.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Identify opportunities to improve loyalty through special offers and rewards.
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

export default CustomerSegmentaion;