import { useState } from "react";

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
    <div className='container' style={{ zIndex: 100 }}>
      <div className='col-12 text-center mb-3'>
        <h2 className="text-white">Unlock AI-Powered Insights in Seconds</h2>
        <p className='text-white mt-5'>
          This video walks you through the effortless process of uploading files and engaging with InfoBeam AI. 
          Whether it's PDFs, videos, audio, or images, watch how InfoBeam AI transforms your content into meaningful conversations—saving you time and boosting productivity!
        </p>
      </div>
      <div className="row">
        {/* Left side tabs */}
        <div className="col-lg-3 col-md-4 mb-4">
          <div className="d-flex flex-column gap-3">
            {tabs.map((tab, index) => (
              <div 
                key={index}
                className={`cursor-pointer p-3 rounded mb-2 ${
                  activeTab === index ? "active-tab" : "bg-white"
                }`}
                onClick={() => setActiveTab(index)}
                style={{ transition: "all 0.3s ease" }}
              >
                <h5 className={activeTab === index ? "text-white mb-0 tab-title" : "text-black mb-0 tab-title"}>
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
                autoPlay={true}
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