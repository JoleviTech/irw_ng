import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/home";
import About from "./pages/about";
import { JobsPreview } from "./pages/jobs/jobs";
// import { SalesJD } from "./pages/jobs";
// import { OperationJD } from "./pages/jobs";
import NewNavbar from "./components/navbar";
import { Footer } from "./components/footer";
import { JobDescriptionRoute } from "./pages/jobs/JobDescriptionRoute";
import ScrollToTop from "./components/ScrollToTop";

//New pages 

import IRWHomepage from "./pages/new-home";
import AboutUs from "./pages/new-about";
import Careers from "./pages/new-career";
import JobDetail from "./pages/jobs/new-job-description";
import Contact from "./pages/new-contact";
import HRServices from "./pages/services/hr-services";
import BusinessDevelopment from "./pages/services/business-development";
import BusinessProcessOptimisation from "./pages/services/business-process-optimisation";
import ProjectManagement from "./pages/services/project-management";
import Facilitation from "./pages/services/facilitation";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <NewNavbar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<JobsPreview />} />
        <Route path="/jobs/:jobId" element={<JobDescriptionRoute />} />
        {/* <Route path="/sales" element={<SalesJD />} /> */}
        {/* <Route path="/operation" element={<OperationJD />} /> */}
        <Route path="/new-home" element={<IRWHomepage />} />
        <Route path="/new-about" element={<AboutUs />} />
        <Route path="/new-careers" element={<Careers />} />
        <Route path="/new-jobs/:slug" element={<JobDetail />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services/hr-services" element={<HRServices/>} />
        <Route path="/services/business-development" element={<BusinessDevelopment/>} />
        <Route path="/services/business-process-optimisation" element={<BusinessProcessOptimisation/>} />
        <Route path="/services/project-management" element={<ProjectManagement/>} />
        <Route path="/services/facilitation" element={<Facilitation/>} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
