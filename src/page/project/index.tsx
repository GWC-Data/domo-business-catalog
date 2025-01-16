import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { projects } from "../../data/projects";
import { useEffect, useState } from "react";
const ProjectPage = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[]);

  const [filteredData, setFilteredData] = useState(projects);

  const industries = [...new Set(projects.map((item) => item.industry))];
    
  const handleIndustryFilter = (industry: string) => {
    if (industry === "all" || !industry) {
      setFilteredData(projects);
    } else {
      setFilteredData(projects.filter((item) => item.industry === industry));
    }
  };

  const [keywordValue, setKeywordValue] = useState("");
  const handleKeywordSearch = (keyword: string) => {
    setKeywordValue(keyword);
    if (!keyword) {
      setFilteredData(projects);
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
            
          </div>
          <div className="d-flex">
            <select 
              onChange={(event) => handleIndustryFilter(event.target.value)} 
              className="form-control mb-4 w-25 mr-2" 
              aria-placeholder="Industry Filter" 
              style={{zIndex: 100}} 
              aria-label="Default select example">
              <option value="all">All Industries</option>
              {
                industries?.map((val, index) => (
                  <option value={val} key={index}>{val}</option>
                ))
              }
            </select>
            <input className="form-control mb-4  w-75" placeholder="Keyword Search..." onChange={(event) => handleKeywordSearch(event.target.value)} value={keywordValue} style={{ zIndex: 100}} />
          </div>
        
          <div className="project_wrapper">
            <div className="row" data-aos="fade-up">
              {
                filteredData?.map((val, index) => (
                  <Link to={`/project/${val.id}`} className="col-lg-4 col-md-4 col-sm-6 col-12" key={index}>
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
      <Footer />
    </>
  );
};

export default ProjectPage;