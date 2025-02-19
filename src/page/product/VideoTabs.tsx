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
    <div>
      <h4 className="mb-4 text-white text-center">Videos</h4>
      <div className="row">
        {/* Left side tabs */}
        <div className="col-lg-3 col-md-4 mb-4">
          <div className="d-flex flex-column gap-3">
            {tabs.map((tab, index) => (
              <div 
                key={index}
                className={`cursor-pointer p-3 rounded mb-2 ${
                  activeTab === index 
                    ? 'bg-white' 
                    : 'active-tab'
                }`}
                onClick={() => setActiveTab(index)}
                style={{ transition: 'all 0.3s ease' }}
              >
                <h5 className={activeTab === index ? 'text-success mb-0 tab-title' : 'text-dark mb-0 tab-title'}>
                  {tab.title}
                </h5>
              </div>
            ))}
          </div>
        </div>

        {/* Right side video */}
        <div className="col-lg-9 col-md-8">
          <div className="bg-white rounded">
            <div className="ratio ratio-16x9">
              <video 
                key={activeTab}
                className="rounded w-100"
                controls
                loop
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