import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { data } from "../../data/data";
import { useState } from "react";
const ProjectPage = () => {

  const [filteredData, setFilteredData] = useState(data);

  const industries = [...new Set(data.map((item) => item.industry))];
    
  const handleIndustryFilter = (industry: string) => {
    if (industry === "all" || !industry) {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.industry === industry));
    }
  };

  const [keywordValue, setKeywordValue] = useState("");
  const handleKeywordSearch = (keyword: string) => {
    setKeywordValue(keyword);
    if (!keyword) {
      setFilteredData(data);
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
    <>
      <div className="sub-banner sub-banner2">
        <figure className="sub-bannerleftlayer mb-0">
          <img src="./assets/images/sub-bannerleftlayer.png" alt="" className="img-fluid" />
        </figure>
        <Navbar activeNav="project" />
        <section className="banner-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="banner_content" data-aos="fade-up">
                  <figure className="project-rightcircle service-rightcircle mb-0">
                    <img src="./assets/images/service-rightcircle.png" alt="" className="img-fluid" />
                  </figure>
                  <h1 className="text-white">Our projects</h1>
                  <p>Roidunt eget semper nec ruam sed hendrerit morbi ac feliseao augue pellentesue morbi acer.</p>
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

      
      <section className="project-section projectpage-section">
        <figure className="offer-toplayer mb-0">
          <img src="./assets/images/offer-toplayer.png" alt="" className="img-fluid" />
        </figure>
        <div className="container">
    
          <div className="row">
            <div className="col-12">
              <div className="project_content" data-aos="fade-right">
                <h6>RECENT PROJECTS</h6>
                <h2>Our Latest Case Studies</h2>
                <p>Dursus mal suada faci lisis lorem ipsum dolarorit more ame ion consectetur elit vesti at bulum nec
                        odio aea the dumm recreo that dolocons.</p>
                <figure className="offer-circleimage mb-0">
                  <img src="./assets/images/offer-circleimage.png" alt="" className="img-fluid" />
                </figure>
              </div>
            </div>
            <div className="d-flex">
              <select 
                onChange={(event) => handleIndustryFilter(event.target.value)} 
                className="form-select mb-4 w-25 mr-2" 
                aria-placeholder="Industry Filter" 
                style={{zIndex: 100}} 
                aria-label="Default select example">
                <option selected value="all">All Industries</option>
                {
                  industries?.map((val, index) => (
                    <option value={val} key={index}>{val}</option>
                  ))
                }
              </select>
              <input className="form-control mb-4 w-75" placeholder="Keyword Search..." onChange={(event) => handleKeywordSearch(event.target.value)} value={keywordValue} style={{ zIndex: 100}} />
            </div>
          </div>
        
          <div className="project_wrapper">
            <div className="row" data-aos="fade-up">
              {
                filteredData?.map((val) => (
                  <Link to={`/project/${val.id}`} className="col-lg-4 col-md-4 col-sm-6 col-12" >
                    <div className="case-box overlay">
                      <div className="overlay-image">
                        {
                          val.image ? (
                            <img src={val.image} alt="" className="w-100 rounded" />
                          ) : (
                            <img src="\assets\images\case-image1.jpg" alt="" className="w-100 rounded" />
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
        <figure className="offer-bottomlayer mb-0">
          <img src="./assets/images/offer-bottomlayer.png" alt="" className="img-fluid" />
        </figure>
      </section>


      <section className="achievement-section">
        <figure className="service-rightlayer mb-0">
          <img src="./assets/images/service-leftlayer.png" alt="" className="img-fluid" />
        </figure>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="achievement_content" data-aos="fade-right">
                <figure className="offer-circleimage mb-0">
                  <img src="./assets/images/offer-circleimage.png" alt="" className="img-fluid" />
                </figure>
                <h6>Achievements</h6>
                <h2>Some Number of Our Achievements</h2>
                <p>Grursus mal suada faci lisis lorem ipsum dolarorit more
                        ion consectetur elit vesti at bulum nec odio aea the au ipsumm recreo that dolocons.</p>
                <a className="get_started text-white text-decoration-none" href="./about.html">Get Started
                  <figure className="mb-0"><img src="./assets/images/button-arrow.png" alt="" className="img-fluid" /></figure>
                </a>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="achievement_wrapper">
                <div className="achievement-box box1">
                  <figure className="icon achievement-icon">
                    <img src="./assets/images/achievement-clienticon.png" alt="" className="img-fluid" />
                  </figure> 
                  <div className="wrapper">
                    <h3>3,860</h3>
                    <p className="text-size-18 mb-0">Satisfied Clients</p>
                  </div>
                </div> 
                <div className="achievement-box box2">
                  <figure className="icon1 achievement-icon">
                    <img src="./assets/images/achievement-projecticon.png" alt="" className="img-fluid" />
                  </figure>
                  <div className="wrapper">
                    <h3>8,550</h3>
                    <p className="text-size-18 mb-0">Projects Completed</p>
                  </div>
                </div>
                <div className="achievement-box box3">
                  <figure className="icon achievement-icon">
                    <img src="./assets/images/achievement-teamicon.png" alt="" className="img-fluid" />
                  </figure> 
                  <div className="wrapper">
                    <div className="number">
                      <h3 className="value counter">90</h3>
                      <span className="plus">+</span>
                    </div>
                    <p className="text text-size-18 mb-0">Team Members</p>
                  </div>
                </div> 
                <div className="achievement-box box4">
                  <figure className="icon1 achievement-icon">
                    <img src="./assets/images/achievement-awardicon.png" alt="" className="img-fluid" />
                  </figure>
                  <div className="wrapper">
                    <div className="number">
                      <h3 className="value counter">180</h3>
                      <span className="plus">+</span>
                    </div>
                    <p className="text text-size-18 mb-0">Awards Win</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure className="service-leftlayer mb-0">
          <img src="./assets/images/service-rightlayer.png" alt="" className="img-fluid" />
        </figure>
      </section>
      <section className="blog-section">
        <figure className="offer-toplayer mb-0">
          <img src="./assets/images/offer-toplayer.png" alt="" className="img-fluid" />
        </figure>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blog_content" data-aos="fade-right">
                <h6>News and articles</h6>
                <h2>our latest blog posts</h2>
                <p>Grursus mal suada faci lisis lorem ipsum dolarorit more ame ion consectetur elit vesti at bulum nec
                        odio aea the dumm recreo that dolocons.</p>
                <figure className="offer-circleimage mb-0">
                  <img src="./assets/images/offer-circleimage.png" alt="" className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="blog_boxcontent">
                  <div className="upper_portion">
                    <figure className="mb-0"><img src="./assets/images/blog-image1.jpg" className="article_img" alt="" /></figure>
                    <div className="image_content">
                      <div className="content">
                        <h3 className="text-white counter">18</h3>
                        <span className="text-white">March</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower_portion_wrapper">
                    <div className="lower_portion">
                      <h4>Useful Tips From Experts In Service.</h4>
                      <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                      <a className="read_more text-decoration-none" href="./single-post.html">Read More
                        <figure className="arrow mb-0"><img src="./assets/images/blog-arrow.png" alt="" className="img-fluid" /></figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog_boxcontent">
                  <div className="upper_portion">
                    <figure className="mb-0"><img src="./assets/images/blog-image2.jpg" className="article_img" alt="" /></figure>
                    <div className="image_content">
                      <div className="content">
                        <h3 className="text-white counter">26</h3>
                        <span className="text-white">April</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower_portion_wrapper">
                    <div className="lower_portion">
                      <h4>How Will Service Be In The Future.</h4>
                      <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                      <a className="read_more text-decoration-none" href="./single-post.html">Read More
                        <figure className="arrow mb-0"><img src="./assets/images/blog-arrow.png" alt="" className="img-fluid" /></figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog_boxcontent mb-0">
                  <div className="upper_portion">
                    <figure className="mb-0"><img src="./assets/images/blog-image3.jpg" className="article_img" alt="" /></figure>
                    <div className="image_content">
                      <div className="content">
                        <h3 className="text-white counter">09</h3>
                        <span className="text-white">June</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower_portion_wrapper">
                    <div className="lower_portion">
                      <h4>How Service Can Ease Your Pain.</h4>
                      <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                      <a className="read_more text-decoration-none" href="./single-post.html">Read More
                        <figure className="arrow mb-0"><img src="./assets/images/blog-arrow.png" alt="" className="img-fluid" /></figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog_boxcontent">
                  <div className="upper_portion">
                    <figure className="mb-0"><img src="./assets/images/blog-image1.jpg" className="article_img" alt="" /></figure>
                    <div className="image_content">
                      <div className="content">
                        <h3 className="text-white counter">18</h3>
                        <span className="text-white">March</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower_portion_wrapper">
                    <div className="lower_portion">
                      <h4>Useful Tips From Experts In Service.</h4>
                      <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                      <a className="read_more text-decoration-none" href="./single-post.html">Read More
                        <figure className="arrow mb-0"><img src="./assets/images/blog-arrow.png" alt="" className="img-fluid" /></figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog_boxcontent">
                  <div className="upper_portion">
                    <figure className="mb-0"><img src="./assets/images/blog-image2.jpg" className="article_img" alt="" /></figure>
                    <div className="image_content">
                      <div className="content">
                        <h3 className="text-white counter">26</h3>
                        <span className="text-white">April</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower_portion_wrapper">
                    <div className="lower_portion">
                      <h4>How Will Service Be In The Future.</h4>
                      <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                      <a className="read_more text-decoration-none" href="./single-post.html">Read More
                        <figure className="arrow mb-0"><img src="./assets/images/blog-arrow.png" alt="" className="img-fluid" /></figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog_boxcontent mb-0">
                  <div className="upper_portion">
                    <figure className="mb-0"><img src="./assets/images/blog-image3.jpg" className="article_img" alt="" /></figure>
                    <div className="image_content">
                      <div className="content">
                        <h3 className="text-white counter">09</h3>
                        <span className="text-white">June</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower_portion_wrapper">
                    <div className="lower_portion">
                      <h4>How Service Can Ease Your Pain.</h4>
                      <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                      <a className="read_more text-decoration-none" href="./single-post.html">Read More
                        <figure className="arrow mb-0"><img src="./assets/images/blog-arrow.png" alt="" className="img-fluid" /></figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog_boxcontent">
                  <div className="upper_portion">
                    <figure className="mb-0"><img src="./assets/images/blog-image1.jpg" className="article_img" alt="" /></figure>
                    <div className="image_content">
                      <div className="content">
                        <h3 className="text-white counter">18</h3>
                        <span className="text-white">March</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower_portion_wrapper">
                    <div className="lower_portion">
                      <h4>Useful Tips From Experts In Service.</h4>
                      <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                      <a className="read_more text-decoration-none" href="./single-post.html">Read More
                        <figure className="arrow mb-0"><img src="./assets/images/blog-arrow.png" alt="" className="img-fluid" /></figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog_boxcontent">
                  <div className="upper_portion">
                    <figure className="mb-0"><img src="./assets/images/blog-image2.jpg" className="article_img" alt="" /></figure>
                    <div className="image_content">
                      <div className="content">
                        <h3 className="text-white counter">26</h3>
                        <span className="text-white">April</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower_portion_wrapper">
                    <div className="lower_portion">
                      <h4>How Will Service Be In The Future.</h4>
                      <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                      <a className="read_more text-decoration-none" href="./single-post.html">Read More
                        <figure className="arrow mb-0"><img src="./assets/images/blog-arrow.png" alt="" className="img-fluid" /></figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="blog_boxcontent mb-0">
                  <div className="upper_portion">
                    <figure className="mb-0"><img src="./assets/images/blog-image3.jpg" className="article_img" alt="" /></figure>
                    <div className="image_content">
                      <div className="content">
                        <h3 className="text-white counter">09</h3>
                        <span className="text-white">June</span>
                      </div>
                    </div>
                  </div>
                  <div className="lower_portion_wrapper">
                    <div className="lower_portion">
                      <h4>How Service Can Ease Your Pain.</h4>
                      <p className="text-size-18">Nostrum exercitationem aeullam 
                                    corporis suscipit labo riosam aliruiea
                                    molestiae non recusandae...</p>
                      <a className="read_more text-decoration-none" href="./single-post.html">Read More
                        <figure className="arrow mb-0"><img src="./assets/images/blog-arrow.png" alt="" className="img-fluid" /></figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure className="offer-bottomlayer mb-0">
          <img src="./assets/images/offer-bottomlayer.png" alt="" className="img-fluid" />
        </figure>
      </section>
      <Footer />
    </>
  );
};

export default ProjectPage;