/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const Rytail: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showButton, setShowButton] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    // window.scrollTo(0, 0); // Uncomment to scroll to top on page load

    if (videoRef.current) {
      videoRef.current.onended = () => setShowButton(true);
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setShowButton(false); // Hide button when playing
    } else {
      videoRef.current.pause();
      setShowButton(true); // Show button when paused
    }
  };

const videoContainerStyle: React.CSSProperties = {
  position: 'relative',
  maxWidth: '800px',
  margin: '0 auto',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 8px 32px rgba(106, 13, 173, 0.15)',
  aspectRatio: '16/9', // Consistent ratio
  transform: 'translateZ(0)', 
};

const videoElementStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
transform: 'scale(1.02)', // ~2% zoom (more subtle)

  transformOrigin: 'center', // Ensures even zoom from center
};


  const playButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(106, 13, 173, 0.9)',
    border: 'none',
    borderRadius: '50%',
    width: isMobile ? '40px' : '50px',
    height: isMobile ? '40px' : '50px',
    color: 'white',
    fontSize: isMobile ? '1.2rem' : '1.5rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
    zIndex: 10,
    userSelect: 'none',
    lineHeight: 1,
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

      <section className="features-section py-5" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <h2 className="text-center mb-4 mb-md-5">
            Why Choose <span style={{ color: '#6a0dad' }}>Rytail</span>?
          </h2>

          <div className="row justify-content-center g-4 g-md-5">
            {/* Feature 1: Demand Insights */}
            <div className="col-12 col-sm-6 col-lg-4 mb-4 mb-sm-0">
              <div
                className="feature-box p-3 p-md-4 h-100 d-flex flex-column"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  background: 'white',
                  height: '100%',
                }}
              >
                <div
                  className="mb-3"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'rgba(106, 13, 173, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <i className="bi bi-graph-up-arrow" style={{ color: '#6a0dad', fontSize: '1.2rem' }}></i>
                </div>
                <h5 className="mb-3" style={{ fontWeight: 600, color: '#2c1a5a', fontSize: '1.1rem' }}>
                  Real-Time Demand Insights
                </h5>
                <p className="mb-0" style={{ color: '#333', fontSize: '0.9rem' }}>
                  Gain instant visibility into customer demand to make smarter stocking decisions.
                </p>
              </div>
            </div>

            {/* Feature 2: AI Replenishment */}
            <div className="col-12 col-sm-6 col-lg-4 mb-4 mb-sm-0">
              <div
                className="feature-box p-3 p-md-4 h-100 d-flex flex-column"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  background: 'white',
                  height: '100%',
                }}
              >
                <div
                  className="mb-3"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'rgba(106, 13, 173, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <i className="bi bi-cpu" style={{ color: '#6a0dad', fontSize: '1.2rem' }}></i>
                </div>
                <h5 className="mb-3" style={{ fontWeight: 600, color: '#2c1a5a', fontSize: '1.1rem' }}>
                  Automated Replenishment
                </h5>
                <p className="mb-0" style={{ color: '#333', fontSize: '0.9rem' }}>
                  Let AI manage your inventory automatically—no more manual guesswork.
                </p>
              </div>
            </div>

            {/* Feature 3: Aligned Strategies */}
            <div className="col-12 col-sm-6 col-lg-4 mb-4 mb-sm-0">
              <div
                className="feature-box p-3 p-md-4 h-100 d-flex flex-column"
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  background: 'white',
                  height: '100%',
                }}
              >
                <div
                  className="mb-3"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'rgba(106, 13, 173, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <i className="bi bi-layers" style={{ color: '#6a0dad', fontSize: '1.2rem' }}></i>
                </div>
                <h5 className="mb-3" style={{ fontWeight: 600, color: '#2c1a5a', fontSize: '1.1rem' }}>
                  Aligned Strategies
                </h5>
                <p className="mb-0" style={{ color: '#333', fontSize: '0.9rem' }}>
                  Sync inventory, pricing, and marketing across channels seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works py-5" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <h2 className="text text-center mb-4 mb-md-5">
            How <span style={{ color: '#6a0dad' }}>Rytail</span> Works
          </h2>

          {/* Step 1 */}
          <div className="row align-items-center mb-4 mb-md-5">
            <div className="col-12 col-md-6 text-center mb-3 mb-md-0">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/demand-planning-illustration-download-in-svg-png-gif-file-formats--successful-strategy-motivation-achieving-goals-product-pack-business-illustrations-6104166.png"
                alt="Analyze Demand"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-6">
              <h4 style={{ color: '#6a0dad' }}>Step 1: Analyze Demand</h4>
              <p style={{ textAlign: 'justify' }}>
                Rytail analyzes your sales, customer traffic, and behavior data in real-time to identify demand signals across all channels. By spotting patterns and trends, it helps anticipate customer needs, optimize inventory, and make data-driven decisions that enhance efficiency and profitability. This insight enables your business to respond quickly and precisely to market changes.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="row align-items-center flex-md-row-reverse mb-4 mb-md-5">
            <div className="col-12 col-md-6 text-center mb-3 mb-md-0">
              <img
                src="https://images.ctfassets.net/3viuren4us1n/6lhxecFnlMLvWRqLXSDbPM/b42665b151de405aba266341d490eaad/guide_contact_center_automation_3.jpg"
                alt="Automate Allocation"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-6">
              <h4 style={{ color: '#6a0dad' }}>Step 2: Automate Allocation</h4>
              <p style={{ textAlign: 'justify' }}>
                AI auto-distributes inventory to the right store, right shelf, at the right time—without human guesswork or spreadsheets. This automation reduces errors, optimizes stock levels, and ensures that products are always available where demand is highest, improving overall operational efficiency and customer satisfaction.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="row align-items-center mb-4 mb-md-5">
            <div className="col-12 col-md-6 text-center mb-3 mb-md-0">
              <img
                src="https://www.smartwarehousing.com/hubfs/deadstock101.jpg"
                alt="Smart Replenishment"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-6">
              <h4 style={{ color: '#6a0dad' }}>Step 3: Smart Replenishment</h4>
              <p style={{ textAlign: 'justify' }}>
                Predictive algorithms accurately forecast product demand and replenish stock automatically, helping to minimize overstocks and avoid missed sales opportunities. This ensures your inventory stays balanced and your customers always find what they need.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="row align-items-center flex-md-row-reverse mb-4 mb-md-5">
            <div className="col-12 col-md-6 text-center mb-3 mb-md-0">
              <img
                src="https://images-www.contentful.com/jtqsy5pye0zd/KRz0B9vhOHZSVugeKLfHe/83d9ee392acf144f692bc7916ee9b46d/Drive_higher_conversion_rates_2x.png?fm=webp&w=3840&q=100"
                alt="Drive Conversions"
                className="img-fluid"
              />
            </div>
            <div className="col-12 col-md-6">
              <h4 style={{ color: '#6a0dad' }}>Step 4: Drive Conversions</h4>
              <p style={{ textAlign: 'justify' }}>
                Rytail seamlessly syncs your pricing, promotions, and product availability across all channels to boost basket size and minimize customer drop-offs. Whether online or offline, this integrated approach maximizes sales opportunities and improves overall customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="video-section py-5" style={{ backgroundColor: '#f8f9fa', paddingTop: '20px' }}>
        <div className="container text-center">
          <h2
            style={{
              color: '#6a0dad',
              marginBottom: '2rem',
              fontSize: '2.25rem',
              fontWeight: 700,
              letterSpacing: '-0.5px',
            }}
          >
            See Rytail in Action
          </h2>

          <div style={videoContainerStyle}>
            <video
              ref={videoRef}
              width="100%"
              height="100%"
              style={videoElementStyle}
              src="./assets/videos/UI video.mp4"
              // autoPlay // Uncomment to enable auto-play (may require muted attribute)
              // muted // Uncomment if using autoPlay for browser compatibility
              onClick={handlePlayPause}
            />

            {showButton && (
              <button
                id="playPauseBtn"
                style={playButtonStyle}
                aria-label="Play/Pause Video"
                onClick={handlePlayPause}
              >
                {videoRef.current?.paused ? '▶' : '❚❚'}
              </button>
            )}
          </div>

          <p
            style={{
              marginTop: '1.5rem',
              color: '#6c757d',
              fontSize: '1.1rem',
            }}
          >
            See how Rytail can transform your workflow in just 2 minutes
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Rytail;