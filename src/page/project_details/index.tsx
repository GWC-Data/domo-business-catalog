/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useParams } from "react-router-dom";
import { data } from "../../data/data";
import Navbar from "../../components/navbar";
import { useEffect } from "react";

const ProjectDetailsPage = () => {

  const { id }:any = useParams();
  
  const project:any = data?.filter((item) => item.id === parseInt(id));

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
                <div className="row" data-aos="fade-up">
                  {
                    project[0]?.subDashboard?.map((val: any) => (
                      <Link to={`/project/${id}/sub-project/${val.id}`} className="col-lg-4 col-md-4 col-sm-6 col-12" >
                        <div className="case-box overlay">
                          <div className="overlay-image">
                            <img src={val.image} alt="" className="w-100 rounded" />
                          </div>
                          <div className="content">
                            <span className="text-white">Development</span>
                            <h5 className="text-white">{val.title}</h5>
                          </div>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </div>
            </div>
            <figure className="offer-bottomlayer mb-0">
              <img src="./assets/images/offer-bottomlayer.png" alt="" className="img-fluid" />
            </figure>
          </section>
        ) : (
          <>
            {project.length > 0 && (
              <section className="blog-posts">
                <div className="">
                  <div className="row">
                    {
                      project.map((item: any) => (
                                
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
                                    <div className="post-meta">
                                      <span className="post-meta-category color01"><a href=""><i className="fa fa-tag"></i>Lifestyle, Magazine</a></span>
                                    </div>
                                    <div className="">{item.description}</div>
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
          </>
        )
      }
    </div>
  );
};

export default ProjectDetailsPage;