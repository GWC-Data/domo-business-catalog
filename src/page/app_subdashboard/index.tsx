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

                <div>
                  {project.length > 0 && (
                    <section className="blog-posts">
                      <div className="">
                        <div className="row">
                          {
                            project.map((item: any, index: number) => (
                              <div className="col-xl-12 col-lg-12" key={index}>
                                <div id="blog" className="single-post01">
                                  <div className="post-item">
                                    <div className="post-item-wrap">
                                      <div className="container">
                                        <div className=" post-item-description">
                                          <h2 className="single-post-heading font_weight_600">{item.title}</h2>
                                          <div className="">{item.description}</div>
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

                <div className="project_wrapper">
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