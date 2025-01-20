/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useParams } from "react-router-dom";
import { apps } from "../../data/apps";
import Navbar from "../../components/navbar";
import { useEffect } from "react";
import Footer from "../../components/footer";

const AppSubDashboard = () => {

  const { id }:any = useParams();
  
  const project:any = apps?.filter((item) => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[]);

  return (
    <div>
      <div>
        <div className="sub-banner">
          <figure className="sub-bannerleftlayer mb-0">
            <img src="../assetsimages/sub-bannerleftlayer.png" alt="" className="img-fluid" />
          </figure>
          <Navbar activeNav="app" />
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                <div className="banner_content" data-aos="fade-up">
                  <figure className="service-rightcircle mb-0">
                    <img src="../assetsimages/service-rightcircle.png" alt="" className="img-fluid" />
                  </figure>
                  <h1 className="text-white">{project[0]?.title}</h1>
                </div>
              </div>
            </div>
          </div>    
          <figure className="banner-circleright mb-0">
            <img src="../assetsimages/banner-circleright.png" className="img-fluid" alt="" />
          </figure>
          <figure className="sub-bannerrightlayer mb-0">
            <img src="../assetsimages/sub-bannerrightlayer.png" alt="" className="img-fluid" />
          </figure>
        </div>
        

        {
          project[0]?.subDashboard.length > 0 ? (
            <section className="project-section projectpage-section">
              <figure className="offer-toplayer mb-0">
                <img src="./assets/images/offer-toplayer.png" alt="" className="img-fluid" />
              </figure>
              <div className="container">
                <div className="project_wrapper">
                  {/* {
                    project[0]?.title === "Manufacturing 360°" && ( */}
                  <section className="mb-5">
                    <div>
                      <h5>What is Manufacturing360?</h5>
                      <p>Manufacturing360 is a comprehensive, data-driven analytics solution designed specifically for the manufacturing industry. It provides actionable insights into all key areas of operations, helping organizations optimize performance, reduce costs, and achieve sustainable growth. With dashboards tailored for every aspect of manufacturing, Manufacturing360 empowers teams to make smarter decisions and stay competitive in a dynamic market.</p>
                    </div>
                    <div className="row position-relative mt-4">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 article_padding">
                        <h5 className="text-center mb-3">Why Manufacturing 360?</h5>
                        <p>
                          <ul className="list-unstyled mb-0">
                            <li className="text text-size-18">
                              <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                              <strong>Holistic Visibility: </strong> Get a 360° view of the entire manufacturing process—from supply chain to production, inventory, and quality management.
                            </li>
                            <li className="text text-size-18">
                              <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                              <strong>Proactive Monitoring: </strong> SIdentify issues and opportunities in real-time to minimize downtime and maximize productivity.
                            </li>
                            <li className="text text-size-18">
                              <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                              <strong>Industry-Specific Insights: </strong> Tailored dashboards and KPIs for the unique challenges of manufacturing.
                            </li>
                            <li className="text text-size-18">
                              <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                              <strong>Enhanced Collaboration: </strong> Align cross-functional teams with centralized data and shared insights.
                            </li>
                            <li className="text text-size-18">
                              <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                              <strong>Sustainability & Innovation: </strong> Drive green initiatives and innovation with energy and waste management dashboards.
                            </li>
                            <li className="text text-size-18">
                              <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                              <strong>Future-Ready Analytics: </strong> Leverage predictive and prescriptive analytics to adapt to evolving demands.
                            </li>
                          </ul>
                        </p>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 article_padding">
                        <h5 className="text-center mb-3">Business Outcomes</h5>
                        <p>
                          <ul className="list-unstyled mb-0">
                            <li className="text text-size-18">
                              <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                              <strong>Increased Operational Efficiency: </strong>
                                  Optimize workflows and reduce production downtime.
                            </li>
                            <li className="text text-size-18">
                              <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                              <strong>Cost Reduction: </strong>
                                  Identify inefficiencies and minimize expenses.
                            </li>
                            <li className="text text-size-18">
                              <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                              <strong>Revenue Growth: </strong>
                                  Align production and inventory strategies to market demands.
                            </li>
                            <li className="text text-size-18">
                              <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                              <strong>Customer Satisfaction: </strong>
                                  Deliver high-quality products and on-time deliveries.
                            </li>
                            <li className="text text-size-18">
                              <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                              <strong>Sustainability:: </strong>
                                  Reduce environmental impact and meet regulatory standards.
                            </li>
                            <li className="text text-size-18">
                              <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027"}}></i>
                              <strong>Informed Decision-Making: </strong>
                                  Provide decision-makers with accurate, actionable data.
                            </li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </section>
                  {/* ) */}
                  {/* } */}
        
                  <div className="row" data-aos="fade-up">
                    {
                      project[0]?.subDashboard?.map((val: any) => (
                        <Link to={`/app/${id}/sub-dashboard/${val.id}`} className="col-lg-4 col-md-4 col-sm-6 col-12" >
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
              {/* <figure className="offer-bottomlayer mb-0">
                <img src="./assets/images/offer-bottomlayer.png" alt="" className="img-fluid" />
              </figure> */}
            </section>
          ) : null
        }
      </div>
      <Footer />
    </div>
  );
};

export default AppSubDashboard;