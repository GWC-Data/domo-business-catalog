/* eslint-disable max-len */
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { apps } from "../../data/apps";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
const AppsPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[]);

  const [filteredData, setFilteredData] = useState(apps);
  
  const industries = [...new Set(apps.map((item) => item.industry))];
      
  const handleIndustryFilter = (industry: string) => {
    if (industry === "all" || !industry) {
      setFilteredData(apps);
    } else {
      setFilteredData(apps.filter((item) => item.industry === industry));
    }
  };
  
  const [keywordValue, setKeywordValue] = useState("");
  const handleKeywordSearch = (keyword: string) => {
    setKeywordValue(keyword);
    if (!keyword) {
      setFilteredData(apps);
      return;
    }
    const keywordSearch = filteredData.filter((item) =>
      Object.values(item.keywords.split(","))
        .join(" ")
        .toLowerCase()
        .includes(keyword.toLowerCase())
    );
    setFilteredData(keywordSearch);
  };

  return (
    <div>
      <div className="sub-banner sub-banner2">
        <figure className="sub-bannerleftlayer mb-0">
          <img src="./assets/images/sub-bannerleftlayer.png" alt="" className="img-fluid" />
        </figure>
        <Navbar activeNav="app" />
        <section className="banner-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="banner_content" data-aos="fade-up">
                  <figure className="project-rightcircle service-rightcircle mb-0">
                    <img src="./assets/images/banner-circleleft.png" alt="" className="img-fluid" />
                  </figure>
                  <h4 className="h-title">360°APPS</h4>
                  <p>Insights That Move Your Industry Forward</p>
                </div>
              </div>
            </div>
          </div>    
        </section>
        <figure className="banner-circleright mb-0">
          <img src="./assets/images/banner-circleright.png" className="img-fluid" alt="" />
        </figure>
        <figure className="sub-bannerrightlayer mb-0">
          <img src="./assets/images/sub-bannerrightlayer.png" alt="" className="img-fluid" />
        </figure>
      </div>

      <section className="offer-section">
        <figure className="offer-toplayer mb-0">
          <img src="./assets/images/offer-toplayer.png" alt="" className="img-fluid" />
        </figure>
        <div className="container">
          <div>
            <p>
            360 Apps provide a comprehensive, 360-degree view of your business, leveraging the power of Domo’s analytics to unlock actionable insights tailored for various industries. From retail to manufacturing, healthcare to logistics, these apps are designed to seamlessly integrate data from multiple sources, delivering real-time analytics that drive smarter decisions and measurable outcomes.
            </p>
            <p>
            In today’s data-driven world, siloed information can hinder business growth. 360 Apps bridge this gap by offering end-to-end visibility, helping businesses not only understand what is happening but also why it is happening and what steps to take next.
            </p>
          </div>
          

          <div className="row position-relative mt-4">
            <figure className="offer-circleimage mb-0">
              <img src="./assets/images/offer-circleimage.png" alt="" className="img-fluid" />
            </figure>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 article_padding">
              <h5 className="text-center mb-3">Why 360 Analytics?</h5>
              <p>
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                    <strong>Comprehensive Insights: </strong> Gain a complete 360° view of your business data for better decision-making.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                    <strong>Real-Time Monitoring: </strong> Stay updated with live analytics that empower proactive actions.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                    <strong>Industry-Specific Customization: </strong> Tailored analytics solutions for every industry to address unique challenges.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                    <strong>Unified Data Ecosystem: </strong> Seamlessly integrate data from multiple sources into a single platform.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                    <strong>Enhanced Collaboration: </strong> Enable teams to access and share insights, driving strategic alignment.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                    <strong>Future-Ready Decisions: </strong> Leverage predictive and prescriptive analytics to stay ahead in the competitive landscape.
                  </li>
                </ul>
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 article_padding">
              <h5 className="text-center mb-3">Business Outcomes</h5>
              <p>
                <ul className="list-unstyled mb-0">
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                    <strong>Improved Efficiency: </strong>
                    Optimize operations with actionable insights and reduce bottlenecks.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                    <strong>Revenue Growth: </strong>
                    Unlock opportunities by identifying high-performing areas and growth potential.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                    <strong>Cost Reduction: </strong>
                    Detect inefficiencies, reduce wastage, and maximize resource utilization.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                    <strong>Customer Satisfaction:</strong>
                    Deliver personalized experiences by understanding customer behaviors and needs.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                    <strong>Scalability: </strong>
                    Enable sustainable growth by adapting analytics to your evolving business demands.
                  </li>
                  <li className="text text-size-18">
                    <i className="fa-solid fa-circle-check mr-2" style={{ color: "7a3ca3"}}></i>
                    <strong>Data-Driven Culture: </strong>
                    Empower teams to make informed decisions backed by accurate data.
                  </li>
                </ul>
              </p>
            </div>
            <p>
              Whether you’re optimizing supply chains, monitoring financial performance, or tracking customer engagement, 360 Apps ensure you have the insights you need to stay ahead in your industry.
            </p>
          </div>
        </div>
        {/* <figure className="offer-bottomlayer mb-0">
          <img src="./assets/images/offer-bottomlayer.png" alt="" className="img-fluid" />
        </figure> */}
      </section>

      <section className="project-section projectpage-section" style={{ padding: "0px"}}>
        {/* <figure className="offer-toplayer mb-0">
          <img src="./assets/images/offer-toplayer.png" alt="" className="img-fluid" />
        </figure> */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="project_content" data-aos="fade-right">
                <h2>360 Apps</h2>
                <figure className="offer-circleimage mb-0">
                  <img src="./assets/images/offer-circleimage.png" alt="" className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <select 
              onChange={(event) => handleIndustryFilter(event.target.value)} 
              className="form-control mb-4 w-25 mr-2" 
              aria-placeholder="Industry Filter" 
              style={{zIndex: 100}} 
              aria-label="Default select example">
              <option value="all">All Industries</option>
              {
                industries?.map((val, index) => (
                  <option value={val} key={index}>{val}</option>
                ))
              }
            </select>
            <input className="form-control mb-4  w-75" placeholder="Keyword Search..." onChange={(event) => handleKeywordSearch(event.target.value)} value={keywordValue} style={{ zIndex: 100}} />
          </div>
              
          <div className="project_wrapper">
            <div className="row" data-aos="fade-up">
              {
                filteredData?.map((val, index) => (
                  <Link to={`/app/${val.id}`} className="col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
                    <div className="case-box overlay">
                      <div className="overlay-image">
                        {
                          val.image ? (
                            <img src={val.image} alt="" className="w-100 rounded" />
                          ) : (
                            <img src="/assets/images/case-image1.jpg" alt="" className="w-100 rounded" />
                          )
                        }
                      </div>
                      <div className="content">
                        <span className="text-white">{val.industry}</span>
                        <h5 className="text-white">{val.title}</h5>
                      </div>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
        
      </section>

      <Footer />
    </div>
  );
};

export default AppsPage;