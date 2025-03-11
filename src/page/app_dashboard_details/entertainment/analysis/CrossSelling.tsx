import { useEffect } from "react";
import Icon1 from "../../icons/Inventory Turnover Analysis.png";
import Icon2 from "../../icons/Stock Level Analysis.png";
import Icon3 from "../../icons/Lead Time Analysis.png";
import "../../style.css";

const CrossSelling = () => {

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
        <h4>Cross-Selling and Upselling Performance Insights</h4>
        <p>Identify and capitalize on opportunities to increase revenue per customer through upselling and cross-selling.</p>
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
                      <h4>Upselling Opportunities</h4>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-15">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Track conversion rates for upsold items like snacks, premium seating, or merchandise to assess effectiveness.
                        </li>
                        <li className="text text-size-15">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Introduce combo deals (e.g., ticket + snacks or merchandise bundles) to increase overall transaction value.
                        </li>
                        <li className="text text-size-15">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Recommend premium options or VIP experiences during checkout to boost average customer spend.
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
                    <div className="lower_portion mb-0">
                      <h4>Cross-Selling Opportunities</h4>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-10">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Focus on cross-selling event bundles (e.g., ticket + parking or food/drink vouchers).
                        </li>
                        <li className="text text-size-10">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Leverage customer data to suggest relevant add-ons based on previous purchases or preferences.
                        </li>
                        <li className="text text-size-10">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Implement personalized offers based on customer segmentation to increase uptake of cross-sell products.
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
                      <img src={Icon3} alt="" />
                    </div>
                    <div className="lower_portion">
                      <h4>Customer Satisfaction Through Personalization</h4>
                      <ul className="list-unstyled mb-0">
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Offer personalized recommendations based on customer preferences and behavior to improve the relevancy of upsell/cross-sell offers.
                        </li>
                        <li className="text text-size-18">
                          <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                          Create exclusive packages or bundles that increase perceived value and drive greater customer satisfaction.
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

export default CrossSelling;