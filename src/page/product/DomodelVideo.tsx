import { useState, useEffect } from "react";
import "./mass.css";

type VideoInfo = {
    title: string;
    src: string;
};

type VideoDataType = {
    [key in "looker" | "tableau" | "powerbi"]: VideoInfo;
};

const DomodelVideo = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [activeTab, setActiveTab] = useState<keyof VideoDataType>("looker");


  const videoData: VideoDataType = {
    looker: {
      title: "Looker Migration Video",
      src: "../assets/videos/Upload File.mp4"
    },
    tableau: {
      title: "Tableau Migration Video",
      src: "../assets/videos/Upload File.mp4",
    },
    powerbi: {
      title: "Power BI Migration Video",
      src: "./assets/videos/Chat with AI.mp4",
    },
  };


  const tabs: Array<keyof VideoDataType> = ["looker", "tableau", "powerbi"];

  const handleTabClick = (tab: keyof VideoDataType) => {
    console.log("Clicked tab:", tab);
    setActiveTab(tab);
  };

  useEffect(() => {
    console.log("Updated activeTab:", activeTab);
  }, [activeTab]);

  return (
    <div>
      {/* Tab Navigation */}
      <div className="tabs-nav text-center mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
            style={{
              backgroundColor: activeTab === tab ? "#7a3ca3" : "#f0f0f0",
              color: activeTab === tab ? "white" : "black",
              cursor: "pointer",
              padding: "10px 20px",
              margin: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontWeight:"bold",
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Video Content */}
      <div className="video-content w-100">
        <div className="container-fluid p-0">
          <div className="row g-0 justify-content-center">
            <div className="col-12">
              <div className="video-wrapper">
                <h5 className="text-center mb-3 text-white">{videoData[activeTab]?.title}</h5>
                {videoData[activeTab] ? (
                  <video
                    key={activeTab}
                    controls
                    className="w-100"
                    src={videoData[activeTab].src}
                  >
                                        Your browser does not support the video tag.
                  </video>
                ) : (
                  <p className="text-center">No video available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomodelVideo;
