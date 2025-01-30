import { NewNavbar } from "../components/navbar";
import irwlogo from "../assets/irw-logo.png";
import { Link } from "react-router";
import { JobsPreviewHero } from "../components/hero";
import work from "../assets/jobs/work.png";
import location from "../assets/jobs/location.png";

export const JobsPreview= () => {
  return (
    <>
    <NewNavbar/>
    <JobsPreviewHero/>
    <AllJobs/>
    {/* <JobDescription/> */}
    </>
  );
};
export const AllJobs = () => {
  return (
    <div className="container-fluid px-lg-5 py-5 WhatWeDoBg">
      {" "}
      <h3 className="text-center">
        <b>JOB OPENINGS</b>
      </h3>
      <div className="row justify-content-evenly mt-5 mx-lg-4 mx-sm-3">
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch">
          <div className="mb-5 py-4 JobsCard px-2 px-4">
            {/* <div className="ms-3">
             
              <img src={irwlogo} className="img-fluid" style={{ width: '100px', height: 'auto' }} />

            </div> */}
             {/* <button
            className="RemoteBtn ms-2"
            style={{ fontSize: "0.8rem" }}
          > */}
           
            <p style={{ fontSize: "0.8rem"}}>Posted: 30 Jan, 2025</p>
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
              style={{ width: "18px", height: "auto", marginLeft: "5px", marginRight: "12px" }}
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
              style={{ width: "15px", height: "auto", marginLeft: "10px", marginRight: "12px" }}
            />
            <div>Lekki Ikate</div>
          </button>
        </div>
        <p className="mt-4">As a Sales Officer your primary responsibility will be to boost sales and achieve revenue targets by identifying and engaging new customers...</p>
        
        {/* <button
            className="RemoteBtn ms-2 text-center"
            style={{ fontSize: "0.8rem" }}
          >
           View Details
          </button> */}
          <div className="text-center">
            <Link to="/job-description"><button className="MainBtn mt-3" style={{ fontSize: "1rem" }}>
    View Details
  </button></Link>
  
</div>

            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};



export const JobDescription = () => {
  return (
    <> 
    <div className="container pt-5 pb-5 px-5">
      <div>
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-md-start mb-3 mb-md-0">
            {/* <Link to="/">
              <img src={irwlogo} alt="" width={90} height={110} className="" />
            </Link> */}
          </div>

          <div className="col-12 col-md-6 text-md-end">
            <p style={{fontSize: "1.5rem"}}>
              <a href="https://bit.ly/IRWSales" className="text-decoration-underline" style={{color: "#033F2D"}} target="_blank">
                Apply Now
              </a>
            </p>
          </div>
        </div>

        <h3 className="mt-4">Sales Officer</h3>

        <div className="d-flex flex-wrap mt-2 mb-2">
          {/* <button
            className="RemoteBtn mt-2 d-flex align-items-center"
            style={{ fontSize: "1rem", marginRight: "10px" }}
          >
            <img
              src={work}
              className="img-fluid"
              style={{ width: "18px", height: "auto", marginLeft: "5px", marginRight: "12px" }}
            />
            <div>Full-time</div>
          </button>

          <button
            className="RemoteBtn mt-2 d-flex align-items-center"
            style={{ fontSize: "1rem" }}
          >
            <img
              src={location}
              className="img-fluid"
              style={{ width: "15px", height: "auto", marginLeft: "10px", marginRight: "12px" }}
            />
            <div>Lekki Ikate
            </div>
          </button> */}
            <button
            className="RemoteBtn mt-2 d-flex align-items-center"
            style={{ fontSize: "0.9rem", marginRight: "10px" }}
          >
            <img
              src={work}
              className="img-fluid"
              style={{ width: "18px", height: "auto", marginLeft: "5px", marginRight: "12px" }}
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
              style={{ width: "15px", height: "auto", marginLeft: "10px", marginRight: "12px" }}
            />
            <div>Lekki Ikate</div>
          </button>
        </div>

        <p className="" style={{ fontSize: "0.8rem" }}>
          Deadline: March 1st, 2025
        </p>
        <p>
        As a Sales Officer your primary responsibility will be to boost sales and achieve revenue targets by identifying and engaging new customers. You will build and maintain strong relationships with clients, ensuring they receive excellent service and enjoy our fresh, high-quality juices. Additionally, you will conduct market research to understand customer preferences, analyze competitor activities, and provide insights to support strategic growth. Your success in this role will rely on collaboration with the team and a proactive approach to driving sales in a competitive market.

        </p>
      </div>

      <h5 className="mt-4">
        <b>Responsibilities</b>
      </h5>
     
      <ul>
      <ul>
  <li>Develop and execute effective sales strategies to achieve company sales targets and objectives.</li>
  <li>Identify and pursue new sales opportunities across various sectors within the agricultural industry.</li>
  <li>Build and maintain strong relationships with existing customers to ensure continued business and satisfaction.</li>
  <li>Conduct market research to understand customer needs, industry trends, and competitor activities.</li>
  <li>Present and promote the company’s products and services to potential clients, highlighting their value and benefits.</li>
  <li>Create and deliver sales proposals, quotations, and contracts to prospective clients.</li>
  <li>Conduct regular follow-ups with clients to close deals and achieve sales quotas.</li>
  <li>Ensure accurate and up-to-date records of all sales activities, customer interactions, and transactions.</li>
  <li>Attend industry events, conferences, and trade shows to generate leads and expand the client base.</li>
  <li>Collaborate with the marketing team to develop sales materials and promotional campaigns.</li>
  <li>Monitor client satisfaction and resolve any concerns to maintain strong relationships.</li>
  <li>Provide feedback on customer preferences, challenges, and demands to inform product development and service improvements.</li>
  <li>Ensure compliance with all company sales policies, procedures, and guidelines.</li>
  <li>Report regularly on sales performance, key metrics, and pipeline activities to the sales management team.</li>
  <li>Work closely with the customer support and operations teams to ensure smooth delivery of products and services to clients.</li>
</ul>

      </ul>

      <h5 className="careerSubHeader">
        <b>Requirements</b>
      </h5>
      <ul>
      <ul>
  <li>Minimum 1 year of sales experience in the FMCG sector.</li>
  <li>Minimum of SSCE.</li>
  <li>Proven ability to meet and exceed sales targets and develop lasting customer relationships.</li>
  <li>Strong communication, negotiation, and interpersonal skills.</li>
  <li>Ability to identify and understand customer needs and provide appropriate solutions.</li>
  <li>Solid understanding of market research and sales strategies.</li>
  <li>Ability to work independently, manage time effectively, and meet deadlines.</li>
  <li>Strong organizational and administrative skills, with attention to detail.</li>
</ul>
      </ul>
       <p className="p-0 m-0">If Interested, apply{" "}<a href="https://bit.ly/IRWSales" target="_blank">here</a></p>
    <p className="p-0 m-0">Only shortlisted candidates would be contacted.</p>
    </div>
  
    </>
  );
};


// export const JobDescription = () => {
//   return (
//     <div className="container pt-5 pb-5 px-5">
//       {" "}
     
//       <div className="">
//         <div className="d-flex justify-content-between">
//           <div>   <Link to="/">
//           <img src={irwlogo} alt="" width={90} height={110} className="" />
//         </Link></div>
          
        
//           <div> <p className="">
//           <a
//             href="#"
//             className=""
//             target="_blank"
//           >
//             {" "}
//            Apply Now
//           </a>
//         </p></div>
       
        
//         </div>
     
//         <h3 className="mt-4">Digital Marketer</h3>
        
//                   <div className="d-flex mt-2 mb-2" > 
            
//             <button className="RemoteBtn mt-2 d-flex align-items-center" style={{ fontSize: "1rem", marginRight: "10px" }}>
// <img src={work} className="img-fluid" style={{ width: '18px', height: 'auto', marginLeft: '5px',  marginRight: '12px' }} />
// <div>Full-time</div>
// </button>

            
//               <button className="RemoteBtn mt-2 d-flex align-items-center" style={{ fontSize: "1rem", marginLeft: "10px" }}>
//               <img src={location} className="img-fluid"style={{ width: '15px', height: 'auto', marginLeft: '10px',  marginRight: '12px' }} />
//               <div>Remote</div>
//               </button>
//             </div>
       
//         <p className="" style={{fontSize: "0.8rem"}}>Deadline: March 1st, 2025</p>
//         <p className="" >
//                   Are you passionate about creating compelling digital campaigns? We’re on the lookout for a strategic and creative Mid-Level Digital Marketer to join our dynamic team.
//                   </p>
//         {/* <p className="">
//           <a
//             href="#"
//             className="textLinkColor careerCTAfontSize"
//             target="_blank"
//           >
//             {" "}
//             Join the team
//           </a>
//         </p> */}
//       </div>
    
//       <h5 className="mt-4"><b>Job Roles and Responsibilities</b></h5>
//       <p className="">Core responsibilities include:</p>
//       <ul>
//         <li className="jd-list-items">
//         Creating compelling digital campaigns and driving brand growth? We’re on the lookout for a creative Mid-Level Digital Marketer.
//         </li>
//         <li className="jd-list-items">
//         Creating compelling digital campaigns and driving brand growth? We’re on the lookout for a creative Mid-Level Digital Marketer.
//         </li>
//         <li className="jd-list-items">
//         Creating compelling digital campaigns and driving brand growth? We’re on the lookout for a creative Mid-Level Digital Marketer.
//         </li>
//         <li className="jd-list-items">
//         Creating compelling digital campaigns and driving brand growth? We’re on the lookout for a creative Mid-Level Digital Marketer.
//         </li>
//         <li className="jd-list-items">
//         Creating compelling digital campaigns and driving brand growth? We’re on the lookout for a creative Mid-Level Digital Marketer.
//         </li>
        
//       </ul>
//       <h5 className="careerSubHeader"><b>Competencies and Skills Required</b></h5>
//       <ul>
//         <li className="jd-list-items">
//           Bachelor’s degree in mass communication or related skills.
//         </li>
//         <li className="jd-list-items">
//           0- 2 years’ experience in a similar role.
//         </li>
//         <li className="jd-list-items">Strong attention to detail.</li>
//         <li className="jd-list-items">
//           Excellent written and verbal communication skills.
//         </li>
//       </ul>
//       <div className="mb-4">
//         {" "}
//         {/* <JointheTeamBtn /> */}
//       </div>
//     </div>
//   );
// };
