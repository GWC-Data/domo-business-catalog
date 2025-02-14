import { useState } from 'react';

const VideoTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Upload File",
      video: "./assets/videos/Upload File.mp4"
    },
    {
      title: "Chat With AI",
      video: "./assets/videos/Chat with AI.mp4"
    }
  ];

  return (
    <div className="col-12 mt-5">
      <h4 className="mb-4">Videos</h4>
      <div className="row">
        {/* Left side tabs */}
        <div className="col-lg-3 col-md-12 mb-4">
          <div className="d-flex flex-column gap-3">
            {tabs.map((tab, index) => (
              <div 
                key={index}
                className={`cursor-pointer p-4 rounded ${
                  activeTab === index 
                    ? 'bg-light border-start border-4 border-primary' 
                    : 'bg-white border-start border-4 border-transparent'
                }`}
                onClick={() => setActiveTab(index)}
                style={{ transition: 'all 0.3s ease' }}
              >
                <h5 className={activeTab === index ? 'text-success mb-0' : 'text-dark mb-0'}>
                  {tab.title}
                </h5>
              </div>
            ))}
          </div>
        </div>

        {/* Right side video */}
        <div className="col-lg-9 col-md-12">
          <div className="bg-white rounded">
            <div className="ratio ratio-16x9">
              <video 
                key={activeTab}
                className="rounded w-100"
                controls
                autoPlay={false}
              >
                <source src={tabs[activeTab].video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTabs;