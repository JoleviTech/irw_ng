import { NewNavbar } from "../components/navbar";
import irwlogo from "../assets/irw-logo.jpg";
import { Link } from "react-router";
import { JobsPreviewHero } from "../components/hero";
import work from "../assets/jobs/work.png";
import location from "../assets/jobs/location.png";

export const JobsPreview = () => {
  return (
    <>
      <NewNavbar />
      <JobsPreviewHero />
      <AllJobs />
      {/* <JobDescription/> */}
    </>
  );
};
export const AllJobs = () => {
  return (
    <div className="container-fluid px-lg-5 py-5 WhatWeDoBg">
      {" "}
      <h3 className="text-center" style={{ color: "#06bb06" }}>
        <b>JOB OPENINGS</b>
      </h3>
      <div className="row justify-content-center mt-5 mx-lg-4 mx-sm-3">
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
          <div className="mb-5 py-4 JobsCard px-2 px-4">
            <p style={{ fontSize: "0.8rem" }}>Posted: 30 Jan, 2025</p>
            {/* </button> */}
            <div className="card-body">
              <h3 className="card-title mt-4">Sales Officer</h3>
              <div className="d-flex flex-wrap mt-2 mb-2">
                <button
                  className="RemoteBtn mt-2 d-flex align-items-center"
                  style={{ fontSize: "0.9rem", marginRight: "10px" }}
                >
                  <img
                    src={work}
                    className="img-fluid"
                    style={{
                      width: "18px",
                      height: "auto",
                      marginLeft: "5px",
                      marginRight: "12px",
                    }}
                  />
                  <div>Full-time</div>
                </button>

                <button
                  className="RemoteBtn mt-2 d-flex align-items-center"
                  style={{ fontSize: "0.9rem" }}
                >
                  <img
                    src={location}
                    className="img-fluid"
                    style={{
                      width: "15px",
                      height: "auto",
                      marginLeft: "10px",
                      marginRight: "12px",
                    }}
                  />
                  <div>Lekki Ikate</div>
                </button>
              </div>
              <p className="mt-4">
                As a Sales Officer your primary responsibility will be to boost
                sales and achieve revenue targets by identifying and engaging
                new customers...
              </p>
              <div className="text-center">
                <Link to="/sales">
                  <button className="MainBtn mt-3" style={{ fontSize: "1rem" }}>
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
          <div className="mb-5 py-4 JobsCard px-2 px-4">
            <p style={{ fontSize: "0.8rem" }}>Posted: 30 Jan, 2025</p>
            {/* </button> */}
            <div className="card-body">
              <h3 className="card-title mt-4">Operation Officer</h3>
              <div className="d-flex flex-wrap mt-2 mb-2">
                <button
                  className="RemoteBtn mt-2 d-flex align-items-center"
                  style={{ fontSize: "0.9rem", marginRight: "10px" }}
                >
                  <img
                    src={work}
                    className="img-fluid"
                    style={{
                      width: "18px",
                      height: "auto",
                      marginLeft: "5px",
                      marginRight: "12px",
                    }}
                  />
                  <div>Full-time</div>
                </button>

                <button
                  className="RemoteBtn mt-2 d-flex align-items-center"
                  style={{ fontSize: "0.9rem" }}
                >
                  <img
                    src={location}
                    className="img-fluid"
                    style={{
                      width: "15px",
                      height: "auto",
                      marginLeft: "10px",
                      marginRight: "12px",
                    }}
                  />
                  <div>Lekki Ikate</div>
                </button>
              </div>
              <p className="mt-4">
                As an Operations Officer, your primary responsibility will be to
                oversee the daily operations of the business, ensuring efficient
                production, distribution, and customer satisfaction...
              </p>
              <div className="text-center">
                <Link to="/operation">
                  <button className="MainBtn mt-3" style={{ fontSize: "1rem" }}>
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SalesJD = () => {
  return (
    <>
      <div className="container pt-5 pb-5">
        <div>
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-md-start mb-3 mb-md-0">
              {/* <Link to="/">
              <img src={irwlogo} alt="" width={90} height={110} className="" />
            </Link> */}
            </div>

            <div className="col-12 col-md-6 text-md-end">
              <p style={{ fontSize: "1.5rem" }}>
                <a
                  href="https://forms.gle/BLKFLBUGXgCGTZ577"
                  className="text-decoration-underline"
                  style={{ color: "#033F2D" }}
                  target="_blank"
                >
                  Apply Now
                </a>
              </p>
            </div>
          </div>

          <h3 className="mt-4">Sales Officer</h3>

          <div className="d-flex flex-wrap mt-2 mb-2">
            <button
              className="RemoteBtn mt-2 d-flex align-items-center"
              style={{ fontSize: "0.9rem", marginRight: "10px" }}
            >
              <img
                src={work}
                className="img-fluid"
                style={{
                  width: "18px",
                  height: "auto",
                  marginLeft: "5px",
                  marginRight: "12px",
                }}
              />
              <div>Full-time</div>
            </button>

            <button
              className="RemoteBtn mt-2 d-flex align-items-center"
              style={{ fontSize: "0.9rem" }}
            >
              <img
                src={location}
                className="img-fluid"
                style={{
                  width: "15px",
                  height: "auto",
                  marginLeft: "10px",
                  marginRight: "12px",
                }}
              />
              <div>Lekki Ikate</div>
            </button>
          </div>

          <p className="" style={{ fontSize: "0.8rem" }}>
            Deadline: March 1st, 2025
          </p>
          <p>
            As a Sales Officer your primary responsibility will be to boost
            sales and achieve revenue targets by identifying and engaging new
            customers. You will build and maintain strong relationships with
            clients, ensuring they receive excellent service and enjoy our
            fresh, high-quality juices. Additionally, you will conduct market
            research to understand customer preferences, analyze competitor
            activities, and provide insights to support strategic growth. Your
            success in this role will rely on collaboration with the team and a
            proactive approach to driving sales in a competitive market.
          </p>
        </div>

        <h5 className="mt-4">
          <b>Responsibilities</b>
        </h5>

        <ul>
          <li>
            Develop and execute effective sales strategies to achieve company
            sales targets and objectives.
          </li>
          <li>
            Identify and pursue new sales opportunities across various sectors
            within the agricultural industry.
          </li>
          <li>
            Build and maintain strong relationships with existing customers to
            ensure continued business and satisfaction.
          </li>
          <li>
            Conduct market research to understand customer needs, industry
            trends, and competitor activities.
          </li>
          <li>
            Present and promote the company’s products and services to potential
            clients, highlighting their value and benefits.
          </li>
          <li>
            Create and deliver sales proposals, quotations, and contracts to
            prospective clients.
          </li>
          <li>
            Conduct regular follow-ups with clients to close deals and achieve
            sales quotas.
          </li>
          <li>
            Ensure accurate and up-to-date records of all sales activities,
            customer interactions, and transactions.
          </li>
          <li>
            Attend industry events, conferences, and trade shows to generate
            leads and expand the client base.
          </li>
          <li>
            Collaborate with the marketing team to develop sales materials and
            promotional campaigns.
          </li>
          <li>
            Monitor client satisfaction and resolve any concerns to maintain
            strong relationships.
          </li>
          <li>
            Provide feedback on customer preferences, challenges, and demands to
            inform product development and service improvements.
          </li>
          <li>
            Ensure compliance with all company sales policies, procedures, and
            guidelines.
          </li>
          <li>
            Report regularly on sales performance, key metrics, and pipeline
            activities to the sales management team.
          </li>
          <li>
            Work closely with the customer support and operations teams to
            ensure smooth delivery of products and services to clients.
          </li>
        </ul>

        <h5 className="careerSubHeader">
          <b>Requirements</b>
        </h5>

        <ul>
          <li>Minimum 1 year of sales experience in the FMCG sector.</li>
          <li>Minimum of SSCE.</li>
          <li>
            Proven ability to meet and exceed sales targets and develop lasting
            customer relationships.
          </li>
          <li>Strong communication, negotiation, and interpersonal skills.</li>
          <li>
            Ability to identify and understand customer needs and provide
            appropriate solutions.
          </li>
          <li>Solid understanding of market research and sales strategies.</li>
          <li>
            Ability to work independently, manage time effectively, and meet
            deadlines.
          </li>
          <li>
            Strong organizational and administrative skills, with attention to
            detail.
          </li>
        </ul>

        <p className="p-0 m-0">
          If Interested, apply{" "}
          <a href="https://forms.gle/BLKFLBUGXgCGTZ577" target="_blank">
            here
          </a>
        </p>
        <p className="p-0 m-0">
          Only shortlisted candidates would be contacted.
        </p>
      </div>
    </>
  );
};
export const OperationJD = () => {
  return (
    <>
      <div className="container pt-5 pb-5">
        <div>
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-md-start mb-3 mb-md-0">
              {/* <Link to="/">
              <img src={irwlogo} alt="" width={90} height={110} className="" />
            </Link> */}
            </div>

            <div className="col-12 col-md-6 text-md-end">
              <p style={{ fontSize: "1.5rem" }}>
                <a
                  href="https://forms.gle/v6rvpc2p7Kv4VM3V6"
                  className="text-decoration-underline"
                  style={{ color: "#033F2D" }}
                  target="_blank"
                >
                  Apply Now
                </a>
              </p>
            </div>
          </div>

          <h3 className="mt-4">Operations Officer</h3>

          <div className="d-flex flex-wrap mt-2 mb-2">
            <button
              className="RemoteBtn mt-2 d-flex align-items-center"
              style={{ fontSize: "0.9rem", marginRight: "10px" }}
            >
              <img
                src={work}
                className="img-fluid"
                style={{
                  width: "18px",
                  height: "auto",
                  marginLeft: "5px",
                  marginRight: "12px",
                }}
              />
              <div>Full-time</div>
            </button>

            <button
              className="RemoteBtn mt-2 d-flex align-items-center"
              style={{ fontSize: "0.9rem" }}
            >
              <img
                src={location}
                className="img-fluid"
                style={{
                  width: "15px",
                  height: "auto",
                  marginLeft: "10px",
                  marginRight: "12px",
                }}
              />
              <div>Lekki Ikate</div>
            </button>
          </div>

          <p className="" style={{ fontSize: "0.8rem" }}>
            Deadline: March 1st, 2025
          </p>
          <p>
            As an Operations Officer, your primary responsibility will be to
            oversee the daily operations of the business, ensuring efficient
            production, distribution, and customer satisfaction. You will
            collaborate with cross-functional teams to maintain product quality,
            streamline processes, and drive operational excellence. Your role is
            crucial in supporting business growth while upholding high standards
            of service and operational efficiency.
          </p>
        </div>

        <h5 className="mt-4">
          <b>Responsibilities</b>
        </h5>

        <ul>
          <li>
            Coordinate and manage daily production schedules to ensure timely
            delivery of fresh, high-quality drinks.
          </li>
          <li>
            Oversee inventory levels of raw materials and finished products,
            ensuring adequate supply to meet customer demands.
          </li>
          <li>
            Monitor and ensure compliance with food safety, quality, and
            operational standards.
          </li>
          <li>
            Collaborate with sales, marketing, and logistics teams to align
            operations with business objectives.
          </li>
          <li>
            Identify and implement process improvements to enhance operational
            efficiency and reduce costs.
          </li>
          <li>
            Maintain accurate records of production activities, inventory, and
            deliveries.
          </li>
          <li>
            Resolve operational issues and address customer concerns in a timely
            manner.
          </li>
          <li>
            Conduct regular inspections of equipment and facilities to ensure
            optimal performance and compliance.
          </li>
          <li>
            Train and supervise team members to maintain a high standard of
            performance and accountability.
          </li>
          <li>
            Prepare and present operational reports to management, highlighting
            key metrics and areas for improvement.
          </li>
          <li>Handle customer requests.</li>
        </ul>

        <h5 className="careerSubHeader">
          <b>Requirements</b>
        </h5>
        <ul>
          <li>
            Minimum of 1-2 years’ experience in operations, preferably in the
            FMCG or food and beverage industry.
          </li>
          <li>Strong organizational and time management skills.</li>
          <li>Proficiency in inventory management and operational tools.</li>
          <li>Excellent problem-solving and decision-making abilities.</li>
          <li>Knowledge of food safety regulations and quality standards.</li>
          <li>Strong communication and interpersonal skills.</li>
          <li>
            Ability to work in a fast-paced environment and meet deadlines.
          </li>
          <li>
            Proven ability to manage teams and improve operational workflows.
          </li>
        </ul>

        <p className="p-0 m-0">
          If Interested, apply{" "}
          <a
            href="https://forms.gle/v6rvpc2p7Kv4VM3V6"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </p>
        <p className="p-0 m-0">
          Only shortlisted candidates would be contacted.
        </p>
      </div>
    </>
  );
};
