import "./App.css";
import AOS from "aos";
import HomePage from "./page/home";
import { HashRouter, Route, Routes } from "react-router-dom";
import ServicePage from "./page/service";
import ProjectPage from "./page/project";
import ProjectDetailsPage from "./page/project_details";
import ProductPage from "./page/product";
import AppsPage from "./page/app";
import AppSubDashboard from "./page/app_subdashboard";
import AppDashboardDetailsPage from "./page/app_dashboard_details";
import InfoBeamAI from "./page/product/InfoBeamAI";
// import Register from "./page/register";
import Feedback from "./page/feedback";
import ProtectedRoute from "./router/ProtectedRoute";
import Domoverse from "./page/product/Domoverse";
import DomoDocx from "./page/product/DomoDocx";
import Maas from "./page/product/Maas";
import LuckyWheel from "./components/Items/LuckyWheel";
import CaseStudies from "./page/case_studies";

function App() {

  AOS.init();

  return (
    <HashRouter>
      <Routes>
        {/* <Route path="/register" element={<Register/>}/> */}
        <Route path="/feedback" element={<Feedback/>}/>

        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
          <Route path="/app" element={<AppsPage />} />
          <Route path="/app/:id" element={<AppSubDashboard />} />
          <Route path="/app/:id/sub-dashboard/:sub_project_id" element={<AppDashboardDetailsPage />} />
          <Route path="/infobeam-ai" element={<InfoBeamAI />}/>
          <Route path="/domoverse" element={<Domoverse />}/>
          <Route path="/domodocx" element={<DomoDocx />}/>
          <Route path="/maas" element={<Maas/>}/>
          <Route path="/luckywheel" element={<LuckyWheel/>}/>
          <Route path="/gwc/case-studies" element={<CaseStudies />}/>
        </Route>
        
      </Routes>
    </HashRouter>
  );
}

export default App;
