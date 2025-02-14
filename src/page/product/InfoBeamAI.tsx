import Navbar from '../../components/navbar';
import './infobeam.css'
import VideoTabs from './VideoTabs';

const InfoBeamAI = () => {
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

            <div className="container-fluid px-4 mt-5">
                <div className="row">
                    {/*Architecture Image */}
                    <div className="col-12">
                        <div className="architecture-image-container">
                            <img
                                src="./assets/images/products/Architecture_01.png"
                                alt="Architecture Diagram"
                                className="architecture-image"
                            />
                        </div>
                    </div>

                    {/* cards*/}
                    <div className="col-12 mt-5">
                        <h4 className="mb-4">What's Included in InfoBeam AI?</h4>
                        <div className="row">
                            {/* Card 1: Authentication & Security */}
                            <div className="col-lg-4 col-md-6 col-12 mb-3">
                                <div className="product-card red h-100 ">
                                    <h5 className="card-title">Authentication & Security</h5>
                                    <div className="card-content">
                                        <div className="feature-block">
                                            <p className="feature-title">Role-Based Access Control:</p>
                                            <ul className="feature-list">
                                                <li>Admins: Upload, manage, and delete files</li>
                                                <li>Users: Chat with AI but cannot modify files</li>
                                            </ul>
                                        </div>
                                        <div className="feature-block">
                                            <p className="feature-title">Security Features:</p>
                                            <ul className="feature-list">
                                                <li>Secure login system with encrypted authentication</li>
                                                <li>Restricted access ensures only authorized users modify content</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: File Management */}
                            <div className="col-lg-4 col-md-6 col-12 mb-3">
                                <div className="product-card red h-100">
                                    <h5 className="card-title">File Management</h5>
                                    <div className="card-content">
                                        <div className="feature-block">
                                            <p className="feature-title">Manage AI Knowledge Base</p>
                                            <ul className="feature-list">
                                                <li>Admins can upload, update, and delete files</li>
                                                <li>AI references uploaded files to generate responses</li>
                                            </ul>
                                        </div>
                                        <div className="feature-block">
                                            <p className="feature-title">Supported File Types & Restrictions</p>
                                            <ul className="feature-list">
                                                <li>PDF, Video, Audio, Image formats accepted</li>
                                                <li>Maximum file size: 2MB per file</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: AI-Powered Chatbot */}
                            <div className="col-lg-4 col-md-6 col-12 mb-3">
                                <div className="product-card red h-100">
                                    <h5 className="card-title">AI-Powered Chatbot</h5>
                                    <div className="card-content">
                                        <div className="feature-block">
                                            <p className="feature-title">Interactive Chat System</p>
                                            <ul className="feature-list">
                                                <li>Text Chat: Type queries based on uploaded files</li>
                                                <li>Voice Chat: Ask questions using speech-to-text</li>
                                                <li>Text-to-Speech: AI reads responses aloud</li>
                                            </ul>
                                        </div>
                                        <div className="feature-block">
                                            <p className="feature-title">Context-Aware Responses</p>
                                            <ul className="feature-list">
                                                <li>AI fetches answers only from uploaded files</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4: Domo AppDB */}
                            <div className="col-lg-4 col-md-6 col-12 mb-3">
                                <div className="product-card red h-100">
                                    <h5 className="card-title">Domo AppDB</h5>
                                    <div className="card-content">
                                        <div className="feature-block">
                                            <p className="feature-title">Secure & Scalable Storage</p>
                                            <ul className="feature-list">
                                                <li>Stores uploaded files, URIs, and MIME types</li>
                                                <li>Ensures fast retrieval for chatbot interactions</li>
                                            </ul>
                                        </div>
                                        <div className="feature-block">
                                            <p className="feature-title">Optimized Data Flow</p>
                                            <ul className="feature-list">
                                                <li>Helps AI fetch the right file content for questions</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 5: API Integration */}
                            <div className="col-lg-4 col-md-6 col-12 mb-3">
                                <div className="product-card red h-100">
                                    <h5 className="card-title">API Integration</h5>
                                    <div className="card-content">
                                        <div className="feature-block">
                                            <p className="feature-title">Seamless Backend Connectivity</p>
                                            <ul className="feature-list">
                                                <li>Handles File Uploads from frontend to Gemini AI</li>
                                                <li>Stores file metadata in Domo AppDB</li>
                                            </ul>
                                        </div>
                                        <div className="feature-block">
                                            <p className="feature-title">Optimized Performance</p>
                                            <ul className="feature-list">
                                                <li>Ensures real-time AI access to document data</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 6: Real-Time AI Processing */}
                            <div className="col-lg-4 col-md-6 col-12 mb-3">
                                <div className="product-card red h-100">
                                    <h5 className="card-title">Real-Time AI Processing</h5>
                                    <div className="card-content">
                                        <div className="feature-block">
                                            <p className="feature-title">Instant Query Handling</p>
                                            <ul className="feature-list">
                                                <li>AI processes user questions in real-time</li>
                                                <li>Generates responses instantly from content</li>
                                            </ul>
                                        </div>
                                        <div className="feature-block">
                                            <p className="feature-title">Optimized for Speed</p>
                                            <ul className="feature-list">
                                                <li>Ensures quick AI retrieval of information</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Flowchart Diagram*/}
                    <div className="col-12 mt-5">
                        <div className='col-lg-6 col-md-6 col-12 mb-3'>
                            <h4>InfoBeam AI - Architecture Overview</h4>
                            <p>InfoBeam AI is designed to streamline access to internal data through AI-powered chat interactions. The architecture consists of multiple interconnected modules to efficiently manage files, process user prompts, and generate AI-based responses.</p>
                        </div>
                        <div className="architecture-image-container">
                            <h4 className='mb-1 text-center'>Architecture Diagram</h4>
                            <img
                                src="./assets/images/products/infobeamAI.drawio.svg"
                                alt="Architecture Diagram"
                                className="architecture-image"
                            />
                        </div>
                    </div>

                    {/*Video container */}
                    <div>
                        <VideoTabs />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoBeamAI;