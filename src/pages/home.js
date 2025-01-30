import { NewNavbar } from "../components/navbar";
import { LandingPageHero } from "../components/hero";
import jolevi from "../assets/home/jolevi.png";
import freshchow from "../assets/home/freshchow.png";
import seda from "../assets/home/seda.png";
import recruitment from "../assets/home/recruitment.png";
import project from "../assets/home/project.png"
import businessdev from "../assets/home/businessdev.png"
import hr from "../assets/home/hr.png"
import sales from "../assets/home/sales.png"

const LandingPage = () => {
  return (
    <>
      <NewNavbar />
      <LandingPageHero />
      <WhatWeDoCard />
      <Partners/>
    </>
  );
};

export const WhatWeDoCard = () => {
  return (
    <div className="container-fluid px-lg-5 py-5 WhatWeDoBg">
      {" "}
      <h3 className="text-center">
        <b>WHAT WE DO</b>
      </h3>
      <div className="text-center">
        {" "}
        <p className="d-lg-inline-block col-lg-7">
        We at IRW are helpmate to your business and because we believe in the uniqueness of every individual and business, we tailor our solutions to suit your needs and aspirations. 
        </p>
      </div>
      <div className="row justify-content-evenly mt-5 mx-lg-4 mx-sm-3">
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
          <div className="mb-5 py-4 WhatWeDoCard px-2">
            <div className="ms-3">
             
              <img src={recruitment} className="img-fluid" style={{ width: '100px', height: 'auto' }} />

            </div>
            <div className="card-body">
              <h4 className="card-title ms-3 mt-3">Recruitment</h4>
              <p className="card-text ms-3 mt-3">
              Our recruitment service ensures you hire the best talent tailored to your business needs. From job description creation to candidate shortlisting, we manage the entire hiring process. We conduct initial interviews and coordinate final selections, ensuring you onboard the right fit for your organization efficiently and effectively. 
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
          <div className="mb-5 py-4 WhatWeDoCard px-2">
            <div className="ms-3">
            <img src={project} className="img-fluid" style={{ width: '100px', height: 'auto' }} />

            </div>
            <div className="card-body">
              <h4 className="card-title ms-3 mt-3">Project Management</h4>
              <p className="card-text ms-3 mt-3">
              We handle projects with precision, from planning to execution. Our expertise ensures projects are delivered on time, within scope, and on budget. By streamlining processes and mitigating risks, we help you achieve your goals seamlessly.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
          <div className="mb-5 py-4 WhatWeDoCard px-2">
            <div className="ms-3">
            <img src={businessdev} className="img-fluid" style={{ width: '100px', height: 'auto' }} />

            </div>
            <div className="card-body">
              <h4 className="card-title ms-3 mt-3">Business Development </h4>
              <p className="card-text ms-3 mt-3">
              Our business development services identify growth opportunities, improve market positioning, and enhance customer acquisition strategies. We develop tailored solutions to expand your reach and drive profitability.  
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
          <div className="mb-5 py-4 WhatWeDoCard px-2">
            <div className="ms-3">
            <img src={hr} className="img-fluid" style={{ width: '100px', height: 'auto' }} />

            </div>
            <div className="card-body">
              <h4 className="card-title ms-3 mt-3"> Human Resource Services</h4>
              <p className="card-text ms-3 mt-3">
              We offer comprehensive HR services, including compliance, onboarding, employee training, performance evaluations, and team-building activities. Our goal is to foster a productive and engaged workforce.  
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
          <div className="mb-5 py-4 WhatWeDoCard px-2">
            <div className="ms-3">
            <img src={sales} className="img-fluid" style={{ width: '100px', height: 'auto' }} />

            </div>
            <div className="card-body">
              <h4 className="card-title ms-3 mt-3">Sales Support</h4>
              <p className="card-text ms-3 mt-3">
              Our sales support services help you achieve revenue targets. We provide training, set clear KPIs, and optimize sales processes to ensure efficiency and growth in your sales operations.
 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        {/* <WorkWithUsBtnn /> */}
      </div>
    </div>
  );
};

const Partners = () => {
  return (
    <>
      <div className="container-fluid px-5 pt-5 pb-3 mt-5 PartnersBg">
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

export default LandingPage;