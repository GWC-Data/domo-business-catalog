import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
// import LuckyWheel from "../../components/Items/LuckyWheel";

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
        
        <Navbar activeNav="product" />
        
        <section className="banner-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="banner_content text-center position-relative" data-aos="fade-up">
                  <figure className="project-rightcircle service-rightcircle mb-0 position-absolute end-0 top-0">
                    <img src="./assets/images/banner-circleleft.png" alt="" className="img-fluid" />
                  </figure>
                  <h4 className="h-title">Our Products</h4>
                  <p className="mx-auto">
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
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-3 ">
            <Link to="/domoverse" className="text-decoration-none">
              <div className="product-card text-center h-100 border rounded">
                <div className="d-flex align-items-center justify-content-center my-3">
                  <h2>Domoverse</h2>
                </div>
                <p className="mb-0">Unlock Insights from Unstructured Files</p>
              </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-3 ">
            <Link to="/domodocx" className="text-decoration-none">
              <div className="product-card text-center h-100 border rounded">
                <div className="d-flex align-items-center justify-content-center my-3">
                  <h2>DOMODocx</h2>
                </div>
                <p className="mb-0">Unlock Insights from Unstructured Files</p>
              </div>
            </Link>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-3 ">
            <Link to="/maas" className="text-decoration-none">
              <div className="product-card text-center h-100 border rounded">
                <div className="d-flex align-items-center justify-content-center my-3" >
                  <h2>DOMAAS</h2>
                </div>
                <p className=" mb-0">Unlock Insights from Unstructured Files</p>
              </div>
            </Link>
          </div>


          <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-3 my-3">
            <Link to="/infobeam-ai" className="text-decoration-none">
              <div className="product-card text-center h-100 border rounded">
                <div className="d-flex align-items-center justify-content-center my-3">
                  <h2>INFOBEAM AI</h2>
                </div>
                <p className="mb-0">Unlock Insights from Unstructured Files</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <LuckyWheel/>
      </div> */}

      <Footer />
    </div>
  );
};

export default ProductPage;