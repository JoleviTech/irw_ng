import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/home";
import About from "./pages/about";
import { JobsPreview } from "./pages/jobs/jobs";
// import { SalesJD } from "./pages/jobs";
// import { OperationJD } from "./pages/jobs";
import { Footer } from "./components/footer";
import { JobDescriptionRoute } from "./pages/jobs/JobDescriptionRoute";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<JobsPreview />} />
        <Route path="/jobs/:jobId" element={<JobDescriptionRoute />} />
        {/* <Route path="/sales" element={<SalesJD />} /> */}
        {/* <Route path="/operation" element={<OperationJD />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
