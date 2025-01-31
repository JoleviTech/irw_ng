import { NewNavbar } from "../components/navbar";
import { AboutPageHero } from "../components/hero";
import vision from "../assets/about/vision.png";
import mission from "../assets/about/mission.png";
import professionalism from "../assets/about/professionalism.png";
import integrity from "../assets/about/integrity.png";
import discipline from "../assets/about/discipline.png";
import peoplecentered from "../assets/about/peoplecentered.png";
import loyalty from "../assets/about/loyalty.png";
import knowledge from "../assets/about/knowledge.png";
import excellence from "../assets/about/excellence.png";
import jolevi from "../assets/home/jolevi.png";
import freshchow from "../assets/home/freshchow.png";
import seda from "../assets/home/seda.png";

const About = () => {
  return (
    <>
      <NewNavbar />
      <AboutPageHero />
      <VisionAndMission />
      <CoreValues />
      <Partners />
    </>
  );
};

const VisionAndMission = () => {
  return (
    <>
      <div className="container-fluid px-5 pt-5 pb-3 mt-3">
        {" "}
        <h3 className="text-center" style={{ color: "#06bb06" }}>
          <b>VISION & MISSION</b>
        </h3>
        <div className="row justify-content-center text-center mt-5">
          <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
            <div className="px-3 mb-5 py-4 visionCard">
              <div className="text-center">
                <img
                  src={vision}
                  className="img-fluid"
                  style={{ width: "100px", height: "auto" }}
                />
              </div>
              <div className="card-body">
                <h4 className="card-title mt-3">Vision</h4>
                <p className="card-text">
                  Changing the world one business at a time
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch">
            {" "}
            <div className="px-3 mb-5 py-4 visionCard">
              <div className="text-center">
                <img
                  src={mission}
                  className="img-fluid"
                  style={{ width: "100px", height: "auto" }}
                />
              </div>
              <div className="card-body">
                <h4 className="card-title mt-3">Mission</h4>
                <p className="card-text">
                  To improve living standards by helping people build lasting
                  businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const CoreValues = () => {
  return (
    <>
      <div className="container-fluid px-5 pt-5 pb-3 mt-5 WhatWeDoBg">
        <h3 className="text-center" style={{ color: "#06bb06" }}>
          <b>CORE VALUES</b>
        </h3>
        <div className="row justify-content-center text-center mt-4">
          <div className="col-lg-3 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img
                  src={professionalism}
                  className="img-fluid"
                  style={{ width: "100px", height: "auto" }}
                />
                <h5 className="mt-2">
                  <b>Professionalism</b>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img
                  src={integrity}
                  className="img-fluid"
                  style={{ width: "100px", height: "auto" }}
                />
                <h5 className="mt-2">
                  <b>Integrity</b>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img
                  src={discipline}
                  className="img-fluid"
                  style={{ width: "100px", height: "auto" }}
                />
                <h5 className="mt-2">
                  <b>Discipline</b>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img
                  src={peoplecentered}
                  className="img-fluid"
                  style={{ width: "100px", height: "auto" }}
                />
                <h5 className="mt-2">
                  <b>People-centered Organization</b>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img
                  src={loyalty}
                  className="img-fluid"
                  style={{ width: "100px", height: "auto" }}
                />
                <h5 className="mt-2">
                  <b>Loyalty</b>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img
                  src={knowledge}
                  className="img-fluid"
                  style={{ width: "100px", height: "auto" }}
                />
                <h5 className="mt-2">
                  <b>Knowledge</b>
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img
                  src={excellence}
                  className="img-fluid"
                  style={{ width: "100px", height: "auto" }}
                />
                <h5 className="mt-2">
                  <b>Excellence</b>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Partners = () => {
  return (
    <>
      <div
        className="container-fluid px-5 pt-5 pb-3 mt-5 PartnersBg"
        style={{ color: "#06bb06" }}
      >
        <h3 className="text-center">
          <b>PARTNERS</b>
        </h3>
        <div className="row justify-content-center text-center mt-4">
          <div className="col-lg-2 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img src={jolevi} className="h-100" />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img src={freshchow} className="h-100" />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img src={seda} className="h-100" />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img src={seda} className="h-100" />
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-center justify-content-center">
            <div className="px-4 mb-5 py-2 w-100 h-100 d-flex align-items-center justify-content-center">
              <div className="text-center">
                <img src={seda} className="h-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
