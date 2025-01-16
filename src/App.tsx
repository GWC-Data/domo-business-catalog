import "./App.css";
import AOS from "aos";
import HomePage from "./page/home";
import { HashRouter, Route, Routes } from "react-router-dom";
import ServicePage from "./page/service";
import ProjectPage from "./page/project";
import ProjectDetailsPage from "./page/project_details";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProductPage from "./page/product";
import AppsPage from "./page/app";
import AppSubDashboard from "./page/app_subdashboard";
import AppDashboardDetailsPage from "./page/app_dashboard_details";
function App() {
  AOS.init();

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
          <Route path="/app" element={<AppsPage />} />
          <Route path="/app/:id" element={<AppSubDashboard />} />
          <Route path="/app/:id/sub-dashboard/:sub_project_id" element={<AppDashboardDetailsPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}
export default App;
