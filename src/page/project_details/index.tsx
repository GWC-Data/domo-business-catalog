/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import Navbar from "../../components/navbar";
import { useEffect } from "react";

const ProjectDetailsPage = () => {

  const { id }:any = useParams();
  
  const project:any = projects?.filter((item) => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[]);

  const keywords = project?.map((item: any) => item.keywords.split(","));
  

  return (
    <div style={{overflow: "hidden"}}>
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

      <Link to="/project" className="btn  m-3 font-weight-bold text-white" style={{ background: "#99ccee", border: "1px solid #99ccee"}}>Go Back</Link>

      {project.length > 0 && (
        <section className="blog-posts" style={{paddingTop: "0px"}}>
          <div className="">
            <div className="row">
              {
                project.map((item: any, index: number) => (
                              
                  <div className="col-xl-12 col-lg-12" key={index}>
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
                              <div className="">{item.description}</div>
                            </div>
                            <div className="d-flex flex-wrap">
                              {
                                keywords[0].map((item: any, index: number) => (
                                  <div key={index} className="mr-3 my-2 rounded px-3 text-sm py-1 text-left border text-capitalize" style={{ fontSize: "14px"}}>{item}</div>
                                ))
                              }
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

export default ProjectDetailsPage;