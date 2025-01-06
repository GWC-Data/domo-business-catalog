/* eslint-disable @typescript-eslint/no-explicit-any */
import {useParams } from "react-router-dom";
import { data } from "../../data/data";
import Navbar from "../../components/navbar";
import { useEffect } from "react";

const SubProjectDetailsPage = () => {

  const { id, sub_project_id }:any = useParams();
  const project:any = data?.filter((item) => item.id === parseInt(id));
  const subProject: any = project[0]?.subDashboard?.filter((item: any) => item.id === parseInt(sub_project_id));

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[]);

  return (
    <div>
      <div className="sub-banner">
        <figure className="sub-bannerleftlayer mb-0">
          <img src="../assetsimages/sub-bannerleftlayer.png" alt="" className="img-fluid" />
        </figure>
        <Navbar activeNav="project" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
              <div className="banner_content" data-aos="fade-up">
                <figure className="service-rightcircle mb-0">
                  <img src="../assetsimages/service-rightcircle.png" alt="" className="img-fluid" />
                </figure>
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


      {subProject.length > 0 && (
        <section className="blog-posts">
          <div className="">
            <div className="row">
              {
                subProject.map((item: any) => (
                                
                  <div className="col-xl-12 col-lg-12">
                    <div id="blog" className="single-post01">
                      <div className="post-item">
                        <div className="post-item-wrap">
                          <div className="post-image mx-3" data-aos="fade-up">
                            {
                              item.embed ? (
                                <iframe src={item.embed} width="100%" height="1500" frameBorder={"0"}></iframe>
                              ) : (
                                <img alt="" src="/assets/images/post-featured.jpg" />
                              )
                            }
                                                    
                          </div>
                          <div className="container">
                            <div className=" post-item-description">
                              <h2 className="single-post-heading font_weight_600">{item.title}</h2>
                              <div>{item.description}</div>
                            </div>
                            <div className="post-tags">
                              <a href="#">Life</a>
                              <a href="#">Sport</a>
                              <a href="#">Tech</a>
                              <a href="#">Travel</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      )}
         
    </div>
  );
};

export default SubProjectDetailsPage;