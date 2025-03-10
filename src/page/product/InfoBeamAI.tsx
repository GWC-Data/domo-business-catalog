/* eslint-disable max-len */
import Navbar from "../../components/navbar";
import "./infobeam.css";
import VideoTabs from "./VideoTabs";
import "../home/home.css";
import { useEffect } from "react";
import "../../components/Items/Card.css";
import { RiShieldKeyholeLine, RiFolderOpenLine, RiChatSmileLine, RiDatabaseLine, RiCodeLine, RiCpuLine } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faDatabase,
  faUser, faFolder, faMagic } from "@fortawesome/free-solid-svg-icons";


const InfoBeamAI = () => {
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
                  <h1 className="text-white">InfoBeam AI</h1>
                  <p className="mx-auto">
                    Transform your files into intelligent insights! Upload documents, videos, audio, or images and chat with AI for instant responses. Experience seamless automation and AI-powered efficiency today!
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

      {/* Circular Content Section */}
      {/* <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-3 mb-4 d-flex">
            <div
              className="border p-4 d-flex flex-column align-items-start h-100"
              style={{
                width: "100%",
                borderRadius: "1rem",
                border: "2px solid #05060f",
                boxShadow: "5px 5px 0px #05060f",
                overflow: "hidden",
                backgroundColor: "#fff",
                transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "8px 8px 0px #05060f";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "5px 5px 0px #05060f";
              }}
            >
              <p className="card-title d-flex align-items-center fw-bold" style={{ fontSize: "16px"  }}>
                <FontAwesomeIcon icon={faUser} className="me-2 mr-1" style={{ fontSize: "15px" }} />
                User
              </p>
              <p className="small-desc text-muted" style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
                Users can interact with the chatbot via text or voice messages. Admins have full access to upload, update, and manage files, while regular users can only interact with the AI.
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-4 d-flex">
            <div
              className="border p-4 d-flex flex-column align-items-start h-100"
              style={{
                width: "100%",
                borderRadius: "1rem",
                border: "2px solid #05060f",
                boxShadow: "5px 5px 0px #05060f",
                overflow: "hidden",
                backgroundColor: "#fff",
                transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "8px 8px 0px #05060f";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "5px 5px 0px #05060f";
              }}
            >
              <p className="card-title d-flex align-items-center fw-bold" style={{ fontSize: "16px" }}>
                <FontAwesomeIcon icon={faFolder} className="me-2 mr-1" style={{ fontSize: "15px"  }}/>
                File Manager
              </p>
              <p className="small-desc text-muted" style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
                Handles file uploads and management, allowing only admins to perform CRUD operations. Ensures that each PDF file is under 1MB to maintain system efficiency and quick AI responses.
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-4 d-flex">
            <div
              className="border p-4 d-flex flex-column align-items-start h-100"
              style={{
                width: "100%",
                borderRadius: "1rem",
                border: "2px solid #05060f",
                boxShadow: "5px 5px 0px #05060f",
                overflow: "hidden",
                backgroundColor: "#fff",
                transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "8px 8px 0px #05060f";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "5px 5px 0px #05060f";
              }}
            >
              <p className="card-title d-flex align-items-center fw-bold" style={{ fontSize: "16px" }}>
                <FontAwesomeIcon icon={faDatabase} className="me-2 mr-1" style={{ fontSize: "15px"  }}/>
                Domo AppDB
              </p>
              <p className="small-desc text-muted" style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
                Stores uploaded file metadata such as file URI and mimetype. Acts as a data repository, enabling quick retrieval of file content for AI processing.
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-4 d-flex">
            <div
              className="border p-4 d-flex flex-column align-items-start h-100"
              style={{
                width: "100%",
                borderRadius: "1rem",
                border: "2px solid #05060f",
                boxShadow: "5px 5px 0px #05060f",
                overflow: "hidden",
                backgroundColor: "#fff",
                transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "8px 8px 0px #05060f";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "5px 5px 0px #05060f";
              }}
            >
              <p className="card-title d-flex align-items-center fw-bold" style={{ fontSize: "16px" }}>
                <FontAwesomeIcon icon={faMagic} className="me-2 mr-1" style={{ fontSize: "15px"  }}/>
                Multimodal AI
              </p>
              <p className="small-desc text-muted" style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
                Processes user queries and extracts relevant information from the stored files.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container mt-5" >
        <h2 className="text-center mb-4">Key Features of InfoBeam AI</h2>
        <div className="row justify-content-center">
          <div className="card">
            <FontAwesomeIcon icon={faUser} className="feature-icon_card me-2 mr-1 card-title" />
            <p className="card-title">
            User
            </p>
            <p className="small-desc">
            Users can interact with the chatbot via text or voice messages. Admins have full access to upload, update, and manage files, while regular users can only interact with the AI.
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faFolder} className="feature-icon_card me-2 mr-1 card-title  " />
            <p className="card-title">
            File Manager
            </p>
            <p className="small-desc">
            Handles file uploads and management, allowing only admins to perform CRUD operations. Ensures that each PDF file is under 1MB to maintain system efficiency and quick AI responses.
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faDatabase} className="feature-icon_card me-2 mr-1 card-title" />
            <p className="card-title">
            Domo AppDB
            </p>
            <p className="small-desc">
            Stores uploaded file metadata such as file URI and mimetype. Acts as a data repository, enabling quick retrieval of file content for AI processing.
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faMagic} className="feature-icon_card me-2 mr-1 card-title" />
            <p className="card-title">
            Multimodal AI
            </p>
            <p className="small-desc">
            Processes user queries and extracts relevant information from the stored files.
            </p>
          </div>
        </div>
      </div>


      {/* cards*/}
      <section className="gwc_domo-section mt-5">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "100px" }}>
            <h2 className="text-white mb-3">What's Included in InfoBeam AI?</h2>
            <p className="text-white">InfoBeam AI is an intelligent chatbot solution designed to help organizations streamline information retrieval from custom-uploaded files. It includes the following key features</p>
          </div>
          <div className="row">
            {/* Card 1: Authentication & Security */}
            <div className="col-lg-4 col-md-6 col-12 mb-5">
              <div className="feature-card">
                <div className="rounded_icon">
                  <RiShieldKeyholeLine className="icon text-white" /> {/* Icon for Authentication & Security */}
                </div>
                <h2 className="feature-title">Authentication & Security</h2>
                <div className="feature-card-body">
                  <ul className="feature-list">
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Role-Based Access Control: Admins can upload, manage, and delete files; Users can chat with AI but cannot modify files.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Secure login system with encrypted authentication.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Restricted access ensures only authorized users modify content.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: File Management */}
            <div className="col-lg-4 col-md-6 col-12 mb-5">
              <div className="feature-card">
                <div className="rounded_icon">
                  <RiFolderOpenLine className="icon text-white" /> {/* Icon for File Management */}
                </div>
                <h2 className="feature-title">File Management</h2>
                <div className="feature-card-body">
                  <ul className="feature-list">
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Admins can upload, update, and delete files.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            AI references uploaded files to generate responses.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Supported file types: PDF, Video, Audio, Image.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Maximum file size: 2MB per file.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3: AI-Powered Chatbot */}
            <div className="col-lg-4 col-md-6 col-12 mb-5">
              <div className="feature-card">
                <div className="rounded_icon">
                  <RiChatSmileLine className="icon text-white" /> {/* Icon for AI-Powered Chatbot */}
                </div>
                <h2 className="feature-title">AI-Powered Chatbot</h2>
                <div className="feature-card-body">
                  <ul className="feature-list">
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Text Chat: Type queries based on uploaded files.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Voice Chat: Ask questions using speech-to-text.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Text-to-Speech: AI reads responses aloud.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            AI fetches answers only from uploaded files.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 4: Domo AppDB */}
            <div className="col-lg-4 col-md-6 col-12 mb-5">
              <div className="feature-card">
                <div className="rounded_icon">
                  <RiDatabaseLine className="icon text-white" /> {/* Icon for Domo AppDB */}
                </div>
                <h2 className="feature-title">Domo AppDB</h2>
                <div className="feature-card-body">
                  <ul className="feature-list">
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Stores uploaded files, URIs, and MIME types.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Ensures fast retrieval for chatbot interactions.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Helps AI fetch the right file content for questions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 5: API Integration */}
            <div className="col-lg-4 col-md-6 col-12 mb-5">
              <div className="feature-card">
                <div className="rounded_icon">
                  <RiCodeLine className="icon text-white" /> {/* Icon for API Integration */}
                </div>
                <h2 className="feature-title">API Integration</h2>
                <div className="feature-card-body">
                  <ul className="feature-list">
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Handles File Uploads from frontend to Gemini AI.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Stores file metadata in Domo AppDB.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Ensures real-time AI access to document data.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 6: Real-Time AI Processing */}
            <div className="col-lg-4 col-md-6 col-12 mb-5">
              <div className="feature-card">
                <div className="rounded_icon">
                  <RiCpuLine className="icon text-white" /> {/* Icon for Real-Time AI Processing */}
                </div>
                <h2 className="feature-title">Real-Time AI Processing</h2>
                <div className="feature-card-body">
                  <ul className="feature-list">
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            AI processes user questions in real-time.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Generates responses instantly from content.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faAngleRight} className="feature-icon1" />{" "}
            Ensures quick AI retrieval of information.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Flowchart Diagram*/}
      <div className="container" style={{padding: "100px 0px"}}>
        <div className="col-12">
          <div className="col-lg-12 col-md-6 col-12 mb-3 text-center ">
            <h2 className="mb-4">InfoBeam AI - Architecture</h2>
            <p>
              InfoBeam AI is designed to streamline access to internal data through AI-powered chat interactions. The architecture consists of multiple interconnected modules to efficiently manage files, process user prompts, and generate AI-based responses.
            </p>
          </div>
          <div className="flow-chart-container">
            <img
              src="./assets/images/products/infobeamAI.drawio.svg"
              alt="Architecture Diagram"
              className="architecture-image"
            />
          </div>
        </div>
      </div>

      {/*Video container */}
      <section style={{ padding: "100px 0", background: "#7daccf" }}>
        <div className="col-12 mt-3">
          <VideoTabs />
        </div>
      </section>

    </div>
  );
};

export default InfoBeamAI;