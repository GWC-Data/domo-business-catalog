/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState, useEffect } from 'react';
import './rytail.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const Rytail: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [showButton, setShowButton] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    if (videoRef.current) {
      videoRef.current.onended = () => setShowButton(true);
      videoRef.current.onwaiting = () => setIsLoading(true);
      videoRef.current.onplaying = () => setIsLoading(false);
      videoRef.current.oncanplay = () => setIsLoading(false);
      videoRef.current.onerror = () => setIsLoading(false);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setShowButton(false);
    } else {
      videoRef.current.pause();
      setShowButton(true);
    }
  };

  const toggleFullscreen = () => {
    if (!videoContainerRef.current) return;

    if (!document.fullscreenElement) {
      if (videoContainerRef.current.requestFullscreen) {
        videoContainerRef.current.requestFullscreen();
      } else if ((videoContainerRef.current as any).webkitRequestFullscreen) {
        (videoContainerRef.current as any).webkitRequestFullscreen();
      } else if ((videoContainerRef.current as any).msRequestFullscreen) {
        (videoContainerRef.current as any).msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      } else if ((document as any).msExitFullscreen) {
        (document as any).msExitFullscreen();
      }
    }
  };

  return (
    <>
      <div className="sub-banner sub-banner4">
        <figure className="sub-bannerleftlayer mb-0">
          <img src="./assets/images/sub-bannerleftlayer.png" alt="" className="img-fluid" />
        </figure>
        <Navbar activeNav="rytail" />
        <section className="banner-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="banner_content" data-aos="fade-up">
                  <figure className="service-rightcircle mb-0">
                    <img src="./assets/images/banner-circleleft.png" alt="" className="img-fluid" />
                  </figure>
                  <h4 className="h-title">Rytail</h4>
                  <p>AI-powered retail intelligence that puts the right product in the right place at the right time—automatically.</p>
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

      <section className="features-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 mb-md-5">
            Why Choose <span className="highlight">Rytail</span>?
          </h2>

          <div className="row justify-content-center g-4 g-md-5">
            <div className="col-12 col-sm-6 col-lg-4 mb-4 mb-sm-0">
              <div className="feature-box p-3 p-md-4 h-100 d-flex flex-column">
                <div className="feature-icon mb-3">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
                <h5 className="mb-3">Real-Time Demand Insights</h5>
                <p className="mb-0">
                  Gain instant visibility into customer demand to make smarter stocking decisions.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4 mb-4 mb-sm-0">
              <div className="feature-box p-3 p-md-4 h-100 d-flex flex-column">
                <div className="feature-icon mb-3">
                  <i className="bi bi-cpu"></i>
                </div>
                <h5 className="mb-3">Automated Replenishment</h5>
                <p className="mb-0">
                  Let AI manage your inventory automatically—no more manual guesswork.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4 mb-4 mb-sm-0">
              <div className="feature-box p-3 p-md-4 h-100 d-flex flex-column">
                <div className="feature-icon mb-3">
                  <i className="bi bi-layers"></i>
                </div>
                <h5 className="mb-3">Aligned Strategies</h5>
                <p className="mb-0">
                  Sync inventory, pricing, and marketing across channels seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works py-5">
        <div className="container">
          <h2 className="text text-center mb-4 mb-md-5">
            How <span className="highlight">Rytail</span> Works
          </h2>

          <div className="row align-items-center mb-4 mb-md-5">
            <div className="col-12 col-md-6 text-center mb-3 mb-md-0">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/demand-planning-illustration-download-in-svg-png-gif-file-formats--successful-strategy-motivation-achieving-goals-product-pack-business-illustrations-6104166.png"
                alt="Analyze Demand"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-6">
              <h4 className="step-title">Step 1: Analyze Demand</h4>
              <p style={{ textAlign: 'justify' }}>
                Rytail analyzes your sales, customer traffic, and behavior data in real-time to identify demand signals across all channels. By spotting patterns and trends, it helps anticipate customer needs, optimize inventory, and make data-driven decisions that enhance efficiency and profitability. This insight enables your business to respond quickly and precisely to market changes.
              </p>
            </div>
          </div>

          <div className="row align-items-center flex-md-row-reverse mb-4 mb-md-5">
            <div className="col-12 col-md-6 text-center mb-3 mb-md-0">
              <img
                src="https://images.ctfassets.net/3viuren4us1n/6lhxecFnlMLvWRqLXSDbPM/b42665b151de405aba266341d490eaad/guide_contact_center_automation_3.jpg"
                alt="Automate Allocation"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-6">
              <h4 className="step-title">Step 2: Automate Allocation</h4>
              <p style={{ textAlign: 'justify' }}>
                AI auto-distributes inventory to the right store, right shelf, at the right time—without human guesswork or spreadsheets. This automation reduces errors, optimizes stock levels, and ensures that products are always available where demand is highest, improving overall operational efficiency and customer satisfaction.
              </p>
            </div>
          </div>

          <div className="row align-items-center mb-4 mb-md-5">
            <div className="col-12 col-md-6 text-center mb-3 mb-md-0">
              <img
                src="https://www.smartwarehousing.com/hubfs/deadstock101.jpg"
                alt="Smart Replenishment"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-6">
              <h4 className="step-title">Step 3: Smart Replenishment</h4>
              <p style={{ textAlign: 'justify' }}>
                Predictive algorithms accurately forecast product demand and replenish stock automatically, helping to minimize overstocks and avoid missed sales opportunities. This ensures your inventory stays balanced and your customers always find what they need.
              </p>
            </div>
          </div>

          <div className="row align-items-center flex-md-row-reverse mb-4 mb-md-5">
            <div className="col-12 col-md-6 text-center mb-3 mb-md-0">
              <img
                src="https://images-www.contentful.com/jtqsy5pye0zd/KRz0B9vhOHZSVugeKLfHe/83d9ee392acf144f692bc7916ee9b46d/Drive_higher_conversion_rates_2x.png?fm=webp&w=3840&q=100"
                alt="Drive Conversions"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-6">
              <h4 className="step-title">Step 4: Drive Conversions</h4>
              <p style={{ textAlign: 'justify' }}>
                Rytail seamlessly syncs your pricing, promotions, and product availability across all channels to boost basket size and minimize customer drop-offs. Whether online or offline, this integrated approach maximizes sales opportunities and improves overall customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="video-section py-5">
        <div className="container text-center">
          <h2 className="video-title">
            See Rytail in Action
          </h2>

          <div className="video-container" ref={videoContainerRef}>
            {isLoading && (
              <div className="video-loader">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            
            <video
              ref={videoRef}
              width="100%"
              height="100%"
              className="video-element"
              src="./assets/videos/UI video.mp4"
              onClick={handlePlayPause}
            />

            {showButton && !isLoading && (
              <button
                id="playPauseBtn"
                className="play-button"
                aria-label="Play/Pause Video"
                onClick={handlePlayPause}
              >
                {videoRef.current?.paused ? '▶' : '❚❚'}
              </button>
            )}

            {!isLoading && (
              <button
                id="fullscreenBtn"
                className="fullscreen-button"
                aria-label="Toggle Fullscreen"
                onClick={toggleFullscreen}
              >
                {isFullscreen ? '✕' : '⛶'}
              </button>
            )}
          </div>

          <p className="video-description">
            See how Rytail can transform your workflow in just 2 minutes
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Rytail;