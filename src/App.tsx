import "./App.css";
import AOS from "aos";
import HomePage from "./page/home";
import { HashRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./page/about";
import ServicePage from "./page/service";
import ProjectPage from "./page/project";
import ContactPage from "./page/contact";
import ProjectDetailsPage from "./page/project_details";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SubProjectDetailsPage from "./page/sub_project-details";
function App() {
  AOS.init();

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
          <Route path="/project/:id/sub-project/:sub_project_id" element={<SubProjectDetailsPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}
export default App;
