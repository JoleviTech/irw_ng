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

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
