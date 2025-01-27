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