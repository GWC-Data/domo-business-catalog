import { useEffect } from "react";
import Navbar from "../../components/navbar";

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <div className="sub-banner sub-banner2">
        <figure className="sub-bannerleftlayer mb-0 position-absolute start-0 top-0">
          <img src="./assets/images/sub-bannerleftlayer.png" alt="" className="img-fluid" />
        </figure>
        
        <Navbar activeNav="project" />
        
        <section className="banner-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="banner_content text-center position-relative" data-aos="fade-up">
                  <figure className="project-rightcircle service-rightcircle mb-0 position-absolute end-0 top-0">
                    <img src="./assets/images/service-rightcircle.png" alt="" className="img-fluid" />
                  </figure>
                  <h1 className="text-white">Our Products</h1>
                  <p className="mx-auto" style={{ maxWidth: "800px" }}>
                    Discover our range of innovative products designed to meet your needs. 
                    Quality and performance are at the heart of everything we create.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <figure className="banner-circleright mb-0 position-absolute end-0 bottom-0">
          <img src="./assets/images/banner-circleright.png" className="img-fluid" alt="" />
        </figure>
        <figure className="sub-bannerrightlayer mb-0 position-absolute end-0 top-0">
          <img src="./assets/images/sub-bannerrightlayer.png" alt="" className="img-fluid" />
        </figure>
      </div>

      <div className="container mt-5">
        <div className="mb-4">
          <h4 className="mb-3">Next-Gen DOMO Products</h4>
          <p>Innovative DOMO products built to streamline processes and drive efficiency</p>
        </div>
        
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-3">
            <div className="product-card text-center h-100 shadow-lg rounded">
              <div className="d-flex align-items-center justify-content-center" style={{ height: "180px" }}>
                <img 
                  src="./assets/images/products/product6.png" 
                  alt="" 
                  className="img-fluid"
                  style={{ objectFit: "cover", maxHeight: "100%" }}
                />
              </div>
              <p className="px-3 mb-0">Migration Agent for Looker, Tableau, and Power BI to DOMO</p>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-3">
            <div className="product-card text-center h-100 shadow-lg rounded">
              <div className="d-flex align-items-center justify-content-center" style={{ height: "180px" }}>
                <img 
                  src="./assets/images/products/product2.jpg" 
                  alt="" 
                  className="img-fluid"
                  style={{ objectFit: "cover", maxHeight: "100%" }}
                />
              </div>
              <p className="px-3 mb-0">Governance and Optimization for DOMO</p>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-3">
            <div className="product-card text-center h-100 shadow-lg rounded">
              <div className="d-flex align-items-center justify-content-center" style={{ height: "180px" }}>
                <img 
                  src="./assets/images/products/product3.png" 
                  alt="" 
                  className="img-fluid"
                  style={{ objectFit: "cover", maxHeight: "100%" }}
                />
              </div>
              <p className="px-3 mb-0">Unlock Insights from Unstructured Files</p>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-3">
            <div className="product-card text-center h-100 shadow-lg rounded-4">
              <div className="d-flex align-items-center justify-content-center" style={{ height: "180px" }}>
                <img 
                  src="./assets/images/products/product4.jpg" 
                  alt="" 
                  className="img-fluid"
                  style={{ objectFit: "cover", maxHeight: "100%" }}
                />
              </div>
              <p className="px-3 mb-0">Comprehensive HR Management System</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;