/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import Navbar from "../../components/navbar";
import { IoBarChartSharp } from "react-icons/io5";
import { RiApps2AiFill } from "react-icons/ri";
import { FaFileMedicalAlt } from "react-icons/fa";
import { ImEmbed2 } from "react-icons/im";
import { BsDatabaseFillUp } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";
import Footer from "../../components/footer";

declare global {
  interface Window {
    jQuery: any;
    $: any;
  }
}

const ServicePage = () => {
  const blogPosts = [
    {
      title: "DOMO BI Implementation",
      excerpt: "Delivering seamless implementation of DOMO for real-time data insights.",
      image: "./assets/images/services/domo_bi.jpg",
      logo: <IoBarChartSharp />,
      link: "./single-post.html",
    },
    {
      title: "DOMO App Development",
      excerpt: "Creating custom apps tailored to your unique business needs.",
      image: "./assets/images/services/app_development.jpg",
      logo: <RiApps2AiFill />,
      link: "./single-post.html",
    },
    {
      title: "Migration to DOMO",
      excerpt: "Ensuring smooth transitions to DOMO with minimal disruptions.",
      image: "./assets/images/services/migration.jpg",
      logo: <FaFileMedicalAlt />,
      link: "./single-post.html",
    },
    {
      title: "DOMO Everywhere",
      excerpt: "Empowering workflows with integrated and actionable analytics.",
      image: "./assets/images/services/embed.jpg",
      logo: <ImEmbed2 />,
      link: "./single-post.html",
    },
    {
      title: "Data Science & AI",
      excerpt: "Unlocking advanced insights with predictive analytics and AI solutions.",
      image: "./assets/images/services/data_science.jpg",
      logo: <BsDatabaseFillUp />,
      link: "./single-post.html",
    },
    {
      title: "Governanace & Managed Services",
      excerpt: "Managing and securing your DOMO environment for peak performance.",
      image: "./assets/images/services/governance.jpg",
      logo: <MdVerifiedUser />,
      link: "./single-post.html",
    }
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[]);

  useEffect(() => {
    // Initialize owl carousel
    const initCarousel = () => {
      const $ = window.jQuery;
      if ($ && $.fn.owlCarousel) {
        $(".owl-carousel").owlCarousel({
          loop: true,
          margin: 15,
          nav: false,
          responsive: {
            0: {
              items: 1
            },
            768: {
              items: 2
            },
            1024: {
              items: 3
            }
          },
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true
        });
      }
    };

    initCarousel();

    // If not successful, try again after a short delay
    const timer = setTimeout(() => {
      initCarousel();
    }, 500);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      const $ = window.jQuery;
      if ($ && $.fn.owlCarousel) {
        $(".owl-carousel").owlCarousel("destroy");
      }
    };
  }, []);

  return (
    <>
      <div className="sub-banner sub-banner4">
        <figure className="sub-bannerleftlayer mb-0">
          <img src="./assets/images/sub-bannerleftlayer.png" alt="" className="img-fluid" />
        </figure>
        <Navbar activeNav="service" />
        <section className="banner-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="banner_content" data-aos="fade-up">
                  <figure className="service-rightcircle mb-0">
                    <img src="./assets/images/banner-circleleft.png" alt="" className="img-fluid" />
                  </figure>
                  {/* <h1 className="text-white"></h1> */}
                  <h4 className="h-title">Our Solutions</h4>
                  <p>Transforming data into actionable insights with tailored DOMO solutions to drive business success.</p>
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
      <section className="blog-section">
        <figure className="offer-toplayer mb-0">
          <img src="./assets/images/offer-toplayer.png" alt="" className="img-fluid" />
        </figure>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blog_content" data-aos="fade-right">
                <figure className="offer-circleimage mb-0">
                  <img src="./assets/images/offer-circleimage.png" alt="" className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="owl-carousel owl-theme" style={{ height: "400px" }}>
              {blogPosts.map((post, index) => (
                <div className="item" key={index}>
                  <div className="blog_boxcontent">
                    <div className="upper_portion">
                      <figure className="mb-0">
                        <img src={post.image} className="article_img" alt={post.title} style={{ height: "200px", objectFit: "cover" }}/>
                      </figure>
                      <div className="image_content">
                        <div className="content">
                          <h3 className="text-white fs-5 d-flex justify-content-center align-items-center" style={{height:"50px"}}>
                            {post.logo}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="lower_portion_wrapper" style={{ height: "250px" }}>
                      <div className="lower_portion">
                        <h4>{post.title}</h4>
                        <p className="text-size-18">{post.excerpt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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

export default ServicePage;