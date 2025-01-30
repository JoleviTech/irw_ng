import * as React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/home";
import About from "./pages/about";
import { JobsPreview } from "./pages/jobs";
import { JobDescription } from "./pages/jobs";
import { Footer } from "./components/footer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<JobsPreview />} />
        <Route path="/job-description" element={<JobDescription />} />
      </Routes>
     <Footer />
    </BrowserRouter>
  );
}

export default App;
