/* eslint-disable max-len */
import { Link, useParams } from "react-router-dom";
import { apps } from "../../data/apps";
import Navbar from "../../components/navbar";
import { useEffect } from "react";
import Footer from "../../components/footer";

interface Feature {
  title: string;
  description: string;
}

interface IndustryContent {
  description: string;
  mainImage: string;
  businessImage: string;
  keyFeatures: Feature[];
  businessOutcomes: Feature[];
}

interface IndustryContentMap {
  [key: string]: IndustryContent;
}

interface SubDashboard {
  id: number;
  title: string;
  industry: string;
  image?: string;
}

interface Project {
  id: number;
  title: string;
  subDashboard: SubDashboard[];
}

const industryContent: IndustryContentMap = {
  "Manufacturing 360°": {
    description: "Manufacturing360 is a comprehensive, data-driven analytics solution designed specifically for the manufacturing industry. It provides actionable insights into all key areas of operations, helping organizations optimize performance, reduce costs, and achieve sustainable growth. With dashboards tailored for every aspect of manufacturing, Manufacturing360 empowers teams to make smarter decisions and stay competitive in a dynamic market.",
    mainImage: "./assets/images/apps/manufacturing1.jpg",
    businessImage: "./assets/images/apps/business.jpg",
    keyFeatures: [
      {
        title: "Holistic Visibility",
        description: "Get a 360° view of the entire manufacturing process—from supply chain to production, inventory, and quality management."
      },
      {
        title: "Proactive Monitoring",
        description: "Identify issues and opportunities in real-time to minimize downtime and maximize productivity."
      },
      {
        title: "Industry-Specific Insights",
        description: "Tailored dashboards and KPIs for the unique challenges of manufacturing."
      },
      {
        title: "Enhanced Collaboration",
        description: "Align cross-functional teams with centralized data and shared insights."
      },
      {
        title: "Sustainability & Innovation",
        description: "Drive green initiatives and innovation with energy and waste management dashboards."
      },
      {
        title: "Future-Ready Analytics",
        description: "Leverage predictive and prescriptive analytics to adapt to evolving demands."
      }
    ],
    businessOutcomes: [
      {
        title: "Increased Operational Efficiency",
        description: "Optimize workflows and reduce production downtime."
      },
      {
        title: "Cost Reduction",
        description: "Identify inefficiencies and minimize expenses."
      },
      {
        title: "Revenue Growth",
        description: "Align production and inventory strategies to market demands."
      },
      {
        title: "Customer Satisfaction",
        description: "Deliver high-quality products and on-time deliveries."
      },
      {
        title: "Sustainability",
        description: "Reduce environmental impact and meet regulatory standards."
      },
      {
        title: "Informed Decision-Making",
        description: "Provide decision-makers with accurate, actionable data."
      }
    ]
  },
  "Retail 360°": {
    description: "Retail360 is a comprehensive, data-driven analytics solution designed specifically for the retail industry. It provides actionable insights into key retail operations, helping organizations optimize sales, improve customer experience, and drive sustainable growth. With tailored dashboards for every stage of the retail lifecycle, Retail360 empowers teams to make data-backed decisions and remain competitive in the fast-paced retail landscape.",
    mainImage: "./assets/images/apps/retail.jpg",
    businessImage: "./assets/images/apps/retail_outcome.jpg",
    keyFeatures: [
      {
        title: "Holistic Visibility",
        description: "Get a 360° view of your retail business—from marketing to sales, inventory, and customer retention."
      },
      {
        title: "Proactive Monitoring",
        description: "Identify opportunities and challenges in real-time to maximize profitability."
      },
      {
        title: "Retail-Specific Insights",
        description: "Dashboards and KPIs tailored for retail-specific challenges."
      },
      {
        title: "Enhanced Collaboration",
        description: "Centralize data and insights to align teams across locations and departments."
      },
      {
        title: "Customer-Centric Approach",
        description: "Optimize the customer journey with data-driven strategies."
      },
      {
        title: "Future-Ready Analytics",
        description: "Use predictive and prescriptive analytics to stay ahead of market trends"
      }
    ],
    businessOutcomes: [
      {
        title: "Increased Sales",
        description: "Maximize revenue with insights into customer behavior and product performance."
      },
      {
        title: "Improved Customer Satisfaction",
        description: "Enhance the shopping experience and increase customer loyalty."
      },
      {
        title: "Inventory Optimization",
        description: "Balance supply and demand to reduce stockouts and excess inventory."
      },
      {
        title: "Cost Efficiency",
        description: "Identify inefficiencies and streamline operations."
      },
      {
        title: "Data-Driven Decisions",
        description: "Empower decision-makers with actionable data for better outcomes."
      }
    ]
  },
  "Food Beverage 360°": {
    description: "F&B 360 is a comprehensive, data driven analytics solution specifically tailored for the food and beverage industry. It provides actionable insights into all aspects of operations, enabling businesses to optimize performance, enhance customer experiences, and drive revenue growth. With dashboards designed for every facet of the industry, F&B 360 empowers decisionmakers to stay competitive in a dynamic market.",
    mainImage: "./assets/images/apps/foot_beverage.jpg",
    businessImage: "./assets/images/apps/food_outcomes.jpg",
    keyFeatures: [
      {
        title: "Holistic Insights",
        description: "Gain a 360degree view of financial health, inventory, customer behavior, and operational efficiency."
      },
      {
        title: "Proactive Strategies",
        description: "Anticipate market trends and optimize marketing and menu offerings."
      },
      {
        title: "Enhanced Customer Engagement",
        description: "Build meaningful connections with your patrons through personalized experiences."
      },
      {
        title: "Revenue Maximization",
        description: "Discover opportunities for cost optimization and increased sales."
      },
      {
        title: "Future Ready Decisions",
        description: "Leverage predictive analytics to stay ahead of industry trends."
      }
    ],
    businessOutcomes: [
      {
        title: "Customer Satisfaction and Loyalty",
        description: "Improved customer satisfaction and loyalty through better service quality and engagement."
      },
      {
        title: "Revenue Growth",
        description: "Increased revenue by optimizing menu pricing and cross selling opportunities."
      },
      {
        title: "Cost Efficiency",
        description: "Reduced operational costs through efficient inventory and resource management."
      },
      {
        title: "Marketing Effectiveness",
        description: "Enhanced marketing ROI through targeted campaigns."
      },
      {
        title: "Employee Performance",
        description: "Improved employee performance and retention through focused training and productivity tracking."
      }
    ]
  },
  "Healthcare 360°": {
    description: "Healthcare 360 is a comprehensive, data-driven analytics solution designed specifically for the healthcare industry. It provides actionable insights into all key areas of operations, helping organizations optimize performance, improve patient outcomes, and achieve sustainable growth. With dashboards tailored for every aspect of healthcare, Healthcare 360 empowers teams to make smarter decisions and stay competitive in a dynamic market.",
    mainImage: "./assets/images/apps/healthcare.jpg",
    businessImage: "./assets/images/apps/health_care_outcomes.jpg",
    keyFeatures: [
      {
        title: "Holistic Visibility",
        description: "Get a 360° view of the entire healthcare process—from patient care to inventory, workforce, and financial management."
      },
      {
        title: "Proactive Monitoring",
        description: "Identify issues and opportunities in real-time to minimize risks and maximize efficiency."
      },
      {
        title: "Industry-Specific Insights",
        description: "Tailored dashboards and KPIs for the unique challenges of healthcare."
      },
      {
        title: "Enhanced Collaboration",
        description: "Align cross-functional teams with centralized data and shared insights."
      },
      {
        title: "Compliance & Innovation",
        description: "Drive compliance with regulations and innovation with patient care and resource management dashboards."
      },
      {
        title: "Future-Ready Analytics",
        description: "Leverage predictive and prescriptive analytics to adapt to evolving demands."
      }
    ],
    businessOutcomes: [
      {
        title: "Improved Patient Outcomes",
        description: "Enhance care quality through data-driven insights."
      },
      {
        title: "Cost Reduction",
        description: "Identify inefficiencies and minimize expenses."
      },
      {
        title: "Operational Efficiency",
        description: "Optimize workflows and reduce administrative overhead."
      },
      {
        title: "Patient Satisfaction",
        description: "Deliver high-quality care and ensure timely services."
      },
      {
        title: "Compliance",
        description: "Meet healthcare regulatory standards and improve reporting."
      },
      {
        title: "Informed Decision-Making",
        description: "Provide decision-makers with accurate, actionable data."
      }
    ]
  },
  "Entertainment 360°": {
    description: "Entertainment 360 is a cutting-edge analytics solution tailored to empower decision-makers in the entertainment industry with actionable insights. Built on the principles of data-driven decision-making, Entertainment 360 helps businesses optimize operations, elevate customer experiences, and unlock new revenue opportunities. Covering everything from bookings and marketing to customer feedback and profitability, Entertainment 360 provides a holistic view of your business operations, enabling smarter, future-ready strategies.",
    mainImage: "./assets/images/apps/entertainment.jpg",
    businessImage: "./assets/images/apps/entertainment_business.jpg",
    keyFeatures: [
      {
        title: "All-in-One Insights",
        description: "Access a complete view of your business—operations, customer behavior, and revenue trends—all in one place."
      },
      {
        title: "Stay Ahead of the Curve",
        description: "Predict market trends and fine-tune event planning and marketing strategies for maximum impact."
      },
      {
        title: "Engage Like Never Before",
        description: "Deliver personalized, meaningful experiences that keep your audience coming back for more."
      },
      {
        title: "Unlock Revenue Potential",
        description: "Spot new ways to cross-sell, upsell, and reduce costs to achieve higher profitability."
      }
    ],
    businessOutcomes: [
      {
        title: "Elevated Customer Loyalty",
        description: "Boost satisfaction and retention with tailored strategies that resonate with your audience."
      },
      {
        title: "Revenue Growth",
        description: "Maximize earnings by fine-tuning pricing, cross-selling, and upselling opportunities."
      },
      {
        title: "Smart Cost Management",
        description: "Reduce expenses through optimized resource allocation and in-depth expense analysis."
      },
      {
        title: "Optimized Marketing ROI",
        description: "Focus on high-performing campaigns to achieve better returns on marketing investments."
      }
    ]
  }
};

const AppSubDashboard = () => {
  const { id } = useParams<{ id: string }>();
  const project = apps?.filter((item: Project) => item.id === parseInt(id || ""))[0];
  const content = project?.title ? industryContent[project.title as keyof typeof industryContent] : null;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (!id || !project) {
    return null;
  }

  return (
    <div>
      <div>
        <div className="sub-banner">
          <Navbar activeNav="app" />
          <div className="container">
            <div className="banner_content py-5" data-aos="fade-up">
              <h1 className="text-white">{project.title}</h1>
            </div>
          </div>
        </div>

        {project.subDashboard.length > 0 && (
          <section className="project-section projectpage-section">
            {/* <figure className="offer-toplayer mb-0">
              <img src="./assets/images/offer-toplayer.png" alt="" className="img-fluid" />
            </figure> */}
            <div className="container">
              <div className="project_wrapper">
                {content && (
                  <section className="mb-5">
                    <div style={{ background: "linear-gradient(90deg, rgba(122,60,163,1) 0%, rgba(153,204,238,1) 100%)", padding: "20px", borderRadius: "10px"}}>
                      <h5 className="text-light">What is {project?.title}?</h5>
                      <p className="text-light">{content.description}</p>
                    </div>
                    <div className="row position-relative mt-5">
                      <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                        <img src={content.mainImage} alt={`Why ${project?.title}?`} className="img-fluid rounded" />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 article_padding">
                        <h5 className="text-center mb-2">Why {project?.title}?</h5>
                        <ul className="list-unstyled mb-0">
                          {content.keyFeatures.map((feature, index) => (
                            <li key={index} className="text text-size-18 mb-1">
                              <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027" }}></i>
                              <strong>{feature.title}: </strong>
                              {feature.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="row position-relative mt-5">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 article_padding">
                        <h5 className="text-center mb-3">Business Outcomes</h5>
                        <ul className="list-unstyled mb-0">
                          {content.businessOutcomes.map((outcome, index) => (
                            <li key={index} className="text text-size-18 mb-1">
                              <i className="fa-solid fa-circle-check mr-2" style={{ color: "#F67027" }}></i>
                              <strong>{outcome.title}: </strong>
                              {outcome.description}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src={content.businessImage} alt={`${project?.title} Business Outcomes`} className="img-fluid rounded" />
                      </div>
                    </div>
                  </section>
                )}
                
                <div className="row" data-aos="fade-up">
                  {project.subDashboard.map((val) => (
                    <Link 
                      key={val.id} 
                      to={`/app/${id}/sub-dashboard/${val.id}`} 
                      className="col-lg-4 col-md-4 col-sm-6 col-12"
                    >
                      <div className="case-box overlay">
                        <div className="overlay-image">
                          {val.image ? (
                            <img src={val.image} alt="" className="w-100 rounded" />
                          ) : (
                            <img src="/assets/images/case-image1.jpg" alt="" className="w-100 rounded" />
                          )}
                        </div>
                        <div className="content">
                          <span className="text-white">{val.industry}</span>
                          <h5 className="text-white">{val.title}</h5>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AppSubDashboard;