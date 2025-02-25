/* eslint-disable max-len */
 
/* eslint-disable @typescript-eslint/no-explicit-any */
import {Link, useParams } from "react-router-dom";
import { apps } from "../../data/apps";
import Navbar from "../../components/navbar";
import { useEffect } from "react";
import KpiScore from "./manfacturing/analysis/KpiScore";
import InventoryAnalysis from "./manfacturing/analysis/InventoryAnalysis";
import SupplyChain from "./manfacturing/analysis/SupplyChain";
import ScrapAndDefect from "./manfacturing/analysis/ScrapAndDefect";
import MaintenanceAnalysis from "./manfacturing/analysis/MaintenanceAnalysis";
import LaborAnalysis from "./manfacturing/analysis/LaborAnalysis";
import EnergyConsumption from "./manfacturing/analysis/EnergyConsumption";
import FinanceDashboard from "./manfacturing/analysis/FinanceDashboard";
import Customer from "./manfacturing/analysis/Customer";
import Acquisition from "./retail/analysis/Acquisition";
import Conversion from "./retail/analysis/Conversion";
import StockManagement from "./retail/analysis/StockManagement";
import Retention from "./retail/analysis/Retention";
import CustomerEngagement from "./retail/analysis/CustomerEngagement";
import StorePerformance from "./retail/analysis/StorePerformance";
import ProductPerformance from "./retail/analysis/ProductPerformance";
import Repurchase from "./retail/analysis/Repurchase";
import Market from "./retail/analysis/Market";
import ExecutiveView from "./retail/analysis/ExecutiveView";
import ProductionVolume from "./manfacturing/analysis/ProductionVolume";
import Employee from "./healthcare/analysis/Employee";
import Clinical from "./healthcare/analysis/Clinical";
import ManagingStock from "./healthcare/analysis/ManagingStock";
import DrivingRevenue from "./healthcare/analysis/DrivingRevenue";
import Insights from "./healthcare/analysis/Insights";
import Diagnostics from "./healthcare/analysis/Diagnostics";
import ReducingWaste from "./healthcare/analysis/ReducingWaste";
import FacilityEquipment from "./healthcare/analysis/FacilityEquipment";
import Streamlining from "./healthcare/analysis/Streamlining";
import OptimizingWorkflow from "./healthcare/analysis/OptimizingWorkflow";
import ImprovingFeedback from "./healthcare/analysis/ImprovingFeedback";
import TicketBooking from "./entertainment/analysis/TicketBooking";
import CrossSelling from "./entertainment/analysis/CrossSelling";
import CustomerSegmentaion from "./entertainment/analysis/CustomerSegmentation";
import ExpenseTracking from "./entertainment/analysis/ExpenseTracking";
import FeedbackAnalysis from "./entertainment/analysis/FeedbackAnalysis";
import GeographicDistribution from "./entertainment/analysis/GeographicDistribution";
import MarketingCampaign from "./entertainment/analysis/MarketingCampaign";
import MovieEvent from "./entertainment/analysis/MovieEvent";
import RevenueTrends from "./entertainment/analysis/RevenueTrends";
import TheaterUtilization from "./entertainment/analysis/TheaterUtilization";
import FinancialPerformance from "./fandb/analysis/FinancialPerformance";
import InventoryAnalysisFb from "./fandb/analysis/InventoryAnalysisFb";
import QualityAnalysis from "./fandb/analysis/QualityAnalysis";
import EmployeePerformance from "./fandb/analysis/EmployeePerformance";
import SalesAnalysis from "./fandb/analysis/SalesAnalysis";
import MarketingAnalysis from "./fandb/analysis/MarketingAnalysis";
import FootfallAnalysis from "./fandb/analysis/FootfallAnalysis";
import CustomerFeedback from "./fandb/analysis/CustomerFeedback";
import SafetyCompliance from "./manfacturing/analysis/SafetyCompliance";

const AppDashboardDetailsPage = () => {

  const { id, sub_project_id }:any = useParams();
  const project:any = apps?.filter((item) => item.id === parseInt(id));
  const subProject: any = project[0]?.subDashboard?.filter((item: any) => item.id === parseInt(sub_project_id));

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[]);

  const keywords = subProject?.map((item: any) => item.keywords.split(","));

  return (
    <div style={{overflow: "hidden"}}>
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
                <Link to={`/app/${project[0]?.id}`} className="text-white h5" style={{zIndex: 100}}>{project[0]?.title}</Link>
                <h1 className="text-white">{subProject[0]?.title}</h1>
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

      <Link to={`/app/${project[0]?.id}`} className="m-3 font-weight-bold text-white text-decoration-none" style={{ background: "#F37B64", padding: ".4rem 1rem", borderRadius: "5px", display: "inline-flex", alignItems: "center" }}>Go Back</Link>

      {subProject.length > 0 && (
        <section className="blog-posts" style={{paddingTop: "0px"}}>
          <div className="">
            <div className="row">
              {
                subProject.map((item: any) => (
                                
                  <div className="col-xl-12 col-lg-12" key={item.id}>
                    <div id="blog" className="single-post01">
                      <div className="post-item">
                        <div className="post-item-wrap">
                          

                          <div className="post-image mx-3">
                            {
                              item.embed ? (
                                <iframe src={item.embed} width="100%" height="1500"></iframe>
                              ) : (
                                <img alt="" src="/assets/images/post-featured.jpg" />
                              )
                            }
                                                    
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          {/*Manufacturing 360 */}
          {
            subProject[0]?.title === "KPI Score card analysis" && (
              <KpiScore />
            )
          }
          {
            subProject[0]?.title === "Inventory Management Analysis" && (
              <InventoryAnalysis />
            )
          }
          {
            subProject[0]?.title === "Supply chain and Forecasting Analysis" && (
              <SupplyChain />
            )
          }
          {
            subProject[0]?.title === "Scrap and Defect Analysis" && (
              <ScrapAndDefect />
            )
          }
          {
            subProject[0]?.title === "Maintenance Frequency and Downtime Analysis" && (
              <MaintenanceAnalysis />
            )
          }
          {
            subProject[0]?.title === "Labor Productivity and Employee Satisfaction analysis" && (
              <LaborAnalysis />
            )
          }
          {
            subProject[0]?.title === "Energy Consumption and Carbon footprint analysis" && (
              <EnergyConsumption />
            )
          }
          {
            subProject[0]?.title === "Finance Dashboard" && (
              <FinanceDashboard />
            )
          }
          {
            subProject[0]?.title === "Customer Satisfaction Dashboard" && (
              <Customer />
            )
          }
          {
            subProject[0]?.title === "Safety and Compliance Dashboard" && (
              <SafetyCompliance />
            )
          }
          {
            subProject[0]?.title === "Production Volume Dashbaord" && (
              <ProductionVolume />
            )
          }
          {/*Retail 360*/}
          {
            subProject[0]?.title === "Acquisition" && (
              <Acquisition />
            )
          }
          {
            subProject[0]?.title === "Conversion" && (
              <Conversion />
            )
          }
          {
            subProject[0]?.title === "Stock Management" && (
              <StockManagement />
            )
          }
          {
            subProject[0]?.title === "Retention" && (
              <Retention />
            )
          }
          {
            subProject[0]?.title === "Customer Engagement" && (
              <CustomerEngagement />
            )
          }
          {
            subProject[0]?.title === "Store Performance" && (
              <StorePerformance />
            )
          }
          {
            subProject[0]?.title === "Product Performance" && (
              <ProductPerformance />
            )
          }
          {
            subProject[0]?.title === "Repurchase" && (
              <Repurchase />
            )
          }
          {
            subProject[0]?.title === "Market Intelligence" && (
              <Market />
            )
          }
          {
            subProject[0]?.title === "Executive View" && (
              <ExecutiveView />
            )
          }
          {/*Healthcare 360*/}
          {
            subProject[0]?.title === "Optimizing Workflow and Resource Utilization" && (
              <OptimizingWorkflow />
            )
          }
          {
            subProject[0]?.title === "Improving Employee and Patient Efficiency" && (
              <Employee />
            )
          }
          {
            subProject[0]?.title === "Evaluating Clinical and Quality Metrics" && (
              <Clinical />
            )
          }
          {
            subProject[0]?.title === "Managing Stock and Fulfillment Efficiency" && (
              <ManagingStock />
            )
          }
          {
            subProject[0]?.title === "Driving Revenue and Cost Optimization" && (
              <DrivingRevenue />
            )
          }
          {
            subProject[0]?.title === "Insights on Medicine, Revenue, and Suppliers" && (
              <Insights />
            )
          }
          {
            subProject[0]?.title === "Diagnostics and Historical Patient Data" && (
              <Diagnostics />
            )
          }
          {
            subProject[0]?.title === "Reducing Waste and Maximizing Savings" && (
              <ReducingWaste />
            )
          }
          {
            subProject[0]?.title === "Facility and Equipment Performance Insights" && (
              <FacilityEquipment />
            )
          }
          {
            subProject[0]?.title === "Streamlining Claims and Reimbursements" && (
              <Streamlining />
            )
          }
          {
            subProject[0]?.title === "Improving Feedback and Care Quality" && (
              <ImprovingFeedback />
            )
          }
          {/*Entertainment 360 */}
          {
            subProject[0]?.title === "Ticket Booking Trends & Performance Analysis" && (
              <TicketBooking />
            )
          }
          {
            subProject[0]?.title === "Cross-Selling and Upselling Performance Insights" && (
              <CrossSelling />
            )
          }
          {
            subProject[0]?.title === "Customer Segmentation & Behavior Insights" && (
              <CustomerSegmentaion />
            )
          }
          {
            subProject[0]?.title === "Detailed Expense Tracking & Cost Management" && (
              <ExpenseTracking />
            )
          }
          {
            subProject[0]?.title === "Customer Feedback & Sentiment Analysis" && (
              <FeedbackAnalysis />
            )
          }
          {
            subProject[0]?.title === "Geographic Distribution & Regional Insights" && (
              <GeographicDistribution />
            )
          }
          {
            subProject[0]?.title === "Marketing Campaign Performance & Effectiveness" && (
              <MarketingCampaign />
            )
          }
          {
            subProject[0]?.title === "Movie and Event Performance & Audience Engagement" && (
              <MovieEvent />
            )
          }
          {
            subProject[0]?.title === "Revenue Trends & Profitability Insights" && (
              <RevenueTrends />
            )
          }
          {
            subProject[0]?.title === "Theater Utilization & Seating Efficiency Analysis" && (
              <TheaterUtilization />
            )
          }
          {/*F&B 360*/}
          {
            subProject[0]?.title === "Financial Performance" && (
              <FinancialPerformance />
            )
          }
          {
            subProject[0]?.title === "Inventory Analysis" && (
              <InventoryAnalysisFb/>
            )
          }
          {
            subProject[0]?.title === "Quality Analysis" && (
              <QualityAnalysis/>
            )
          }
          {
            subProject[0]?.title === "Employee Performance" && (
              <EmployeePerformance/>
            )
          }
          {
            subProject[0]?.title === "Sales Analysis" && (
              <SalesAnalysis/>
            )
          }
          {
            subProject[0]?.title === "Marketing Analysis" && (
              <MarketingAnalysis/>
            )
          }
          {
            subProject[0]?.title === "Footfall and Density Analysis" && (
              <FootfallAnalysis/>
            )
          }
          {
            subProject[0]?.title === "Customer Feedback" && (
              <CustomerFeedback/>
            )
          }
          
          <div className="container d-flex flex-wrap mt-5">
            {
              keywords[0].map((item: any, index: number) => (
                <div key={index} className="mr-3 my-2 rounded px-3 text-sm py-1 text-left border text-capitalize" style={{ fontSize: "14px"}}>{item}</div>
              ))
            }
          </div>
        </section>
      )}
         
    </div>
  );
};

export default AppDashboardDetailsPage;