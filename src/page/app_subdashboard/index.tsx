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
    mainImage: "./assets/images/apps/manufacturing.jpg",
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
    description: "Retail360 is an advanced analytics platform tailored for retail businesses. It delivers real-time insights into sales, inventory, customer behavior, and store operations, enabling retailers to optimize their operations and enhance customer experience across all channels.",
    mainImage: "./assets/images/apps/retail.jpg",
    businessImage: "./assets/images/apps/retail_outcome.jpg",
    keyFeatures: [
      {
        title: "Omnichannel Analytics",
        description: "Track and analyze customer interactions across all sales channels."
      },
      {
        title: "Inventory Intelligence",
        description: "Optimize stock levels and reduce carrying costs with smart inventory management."
      },
      {
        title: "Customer Insights",
        description: "Understand shopping patterns and preferences to personalize experiences."
      },
      {
        title: "Store Performance",
        description: "Monitor and improve individual store metrics and overall chain performance."
      },
      {
        title: "Promotional Impact",
        description: "Measure and optimize marketing campaign effectiveness."
      },
      {
        title: "Demand Forecasting",
        description: "Predict future demand patterns using AI-powered analytics."
      }
    ],
    businessOutcomes: [
      {
        title: "Enhanced Customer Experience",
        description: "Deliver personalized shopping experiences across all channels."
      },
      {
        title: "Optimized Inventory",
        description: "Reduce stockouts and overstock situations."
      },
      {
        title: "Increased Sales",
        description: "Drive revenue through data-driven merchandising decisions."
      },
      {
        title: "Operational Efficiency",
        description: "Streamline store operations and reduce costs."
      },
      {
        title: "Marketing ROI",
        description: "Improve promotional effectiveness and marketing spend."
      },
      {
        title: "Competitive Advantage",
        description: "Stay ahead with predictive insights and trends analysis."
      }
    ]
  },
  "Food Beverage 360°": {
    description: "Food & Beverage360 is a specialized analytics solution for the F&B industry. It provides comprehensive insights into production, quality control, supply chain, and customer preferences, helping businesses maintain quality while optimizing operations.",
    mainImage: "./assets/images/apps/foot_beverage.jpg",
    businessImage: "./assets/images/apps/food_outcomes.jpg",
    keyFeatures: [
      {
        title: "Quality Control",
        description: "Monitor and maintain product quality throughout the production process."
      },
      {
        title: "Supply Chain Visibility",
        description: "Track ingredients from source to final product with complete traceability."
      },
      {
        title: "Production Optimization",
        description: "Maximize yield and minimize waste in production processes."
      },
      {
        title: "Compliance Management",
        description: "Ensure adherence to food safety regulations and standards."
      },
      {
        title: "Recipe Management",
        description: "Optimize recipes for cost and quality balance."
      },
      {
        title: "Demand Planning",
        description: "Forecast demand accurately to optimize production schedules."
      }
    ],
    businessOutcomes: [
      {
        title: "Quality Assurance",
        description: "Maintain consistent product quality and safety."
      },
      {
        title: "Cost Control",
        description: "Optimize ingredient usage and reduce waste."
      },
      {
        title: "Regulatory Compliance",
        description: "Meet all food safety and regulatory requirements."
      },
      {
        title: "Supply Chain Efficiency",
        description: "Improve supplier management and inventory control."
      },
      {
        title: "Product Innovation",
        description: "Accelerate new product development and market introduction."
      },
      {
        title: "Customer Satisfaction",
        description: "Consistently meet customer expectations for quality and taste."
      }
    ]
  },
  "Healthcare 360°": {
    description: "Healthcare360 is a comprehensive analytics platform designed for healthcare providers and organizations. It enables data-driven decision-making in patient care, operations, and resource management while ensuring compliance with healthcare regulations.",
    mainImage: "./assets/images/apps/healthcare.jpg",
    businessImage: "./assets/images/apps/health_care_outcomes.jpg",
    keyFeatures: [
      {
        title: "Patient Analytics",
        description: "Track patient outcomes and optimize care pathways."
      },
      {
        title: "Resource Management",
        description: "Optimize staff scheduling and resource allocation."
      },
      {
        title: "Clinical Operations",
        description: "Improve efficiency in clinical procedures and workflows."
      },
      {
        title: "Compliance Monitoring",
        description: "Ensure adherence to healthcare regulations and standards."
      },
      {
        title: "Quality Metrics",
        description: "Monitor and improve quality of care indicators."
      },
      {
        title: "Predictive Analytics",
        description: "Forecast patient needs and resource requirements."
      }
    ],
    businessOutcomes: [
      {
        title: "Improved Patient Care",
        description: "Enhance patient outcomes through data-driven decisions."
      },
      {
        title: "Operational Efficiency",
        description: "Optimize resource utilization and reduce costs."
      },
      {
        title: "Regulatory Compliance",
        description: "Maintain compliance with healthcare regulations."
      },
      {
        title: "Resource Optimization",
        description: "Better staff and equipment utilization."
      },
      {
        title: "Quality Improvements",
        description: "Enhanced quality of care and patient satisfaction."
      },
      {
        title: "Risk Management",
        description: "Proactive identification and mitigation of risks."
      }
    ]
  },
  "Entertainment 360°": {
    description: "Entertainment360 is an innovative analytics solution for the entertainment industry. It provides insights into audience behavior, content performance, and operational efficiency, helping organizations optimize their entertainment offerings and maximize engagement.",
    mainImage: "./assets/images/apps/entertainment.jpg",
    businessImage: "./assets/images/apps/entertainment_business.jpg",
    keyFeatures: [
      {
        title: "Audience Analytics",
        description: "Understand viewer preferences and engagement patterns."
      },
      {
        title: "Content Performance",
        description: "Track and analyze content success metrics."
      },
      {
        title: "Revenue Analytics",
        description: "Optimize pricing and revenue streams."
      },
      {
        title: "Platform Analytics",
        description: "Monitor performance across different distribution platforms."
      },
      {
        title: "Engagement Metrics",
        description: "Track user interaction and satisfaction levels."
      },
      {
        title: "Trend Analysis",
        description: "Identify emerging trends and audience preferences."
      }
    ],
    businessOutcomes: [
      {
        title: "Audience Growth",
        description: "Increase viewer base and engagement."
      },
      {
        title: "Content Optimization",
        description: "Improve content strategy and performance."
      },
      {
        title: "Revenue Maximization",
        description: "Optimize monetization strategies."
      },
      {
        title: "Platform Performance",
        description: "Enhance delivery across all platforms."
      },
      {
        title: "User Satisfaction",
        description: "Improve overall audience experience."
      },
      {
        title: "Market Position",
        description: "Strengthen competitive advantage in the market."
      }
    ]
  }
};

const AppSubDashboard = () => {
  const { id } = useParams<{ id: string }>();
  const project = apps?.filter((item: Project) => item.id === parseInt(id || ''))[0];
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
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                <div className="banner_content" data-aos="fade-up">
                  <h1 className="text-white">{project.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {project.subDashboard.length > 0 && (
          <section className="project-section projectpage-section">
            <figure className="offer-toplayer mb-0">
                <img src="./assets/images/offer-toplayer.png" alt="" className="img-fluid" />
              </figure>
            <div className="container">
              <div className="project_wrapper">
                {content && (
                  <section className="mb-5">
                     <div style={{ background: 'linear-gradient(to right, #f08832, #ee7a1a, #f3a361)', padding: "20px" }}>
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