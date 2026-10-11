// import irwlogo from "../assets/irw-logo.jpg";
// import { Link } from "react-router-dom";

// export const Footer = () => {
//   return (
//     <>
//       <div class="container-fluid footerBg pt-5">
//         <div className="text-center">
//           <Link to="/" className="">
//             {" "}
//             <img
//               src={irwlogo}
//               className="img-fluid"
//               alt="irw"
//               width="100"
//               height="104"
//             />
//           </Link>
//         </div>
//         <footer class="pb-3 mb-2">
//           <ul class="nav justify-content-center ">
//             <li class="nav-item">
//               <Link to="/" class="nav-link px-2 footerParagraph">
//                 Home
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link to="/about" class="nav-link px-2 footerParagraph">
//                 About
//               </Link>
//             </li>
//             <li class="nav-item">
//               <Link to="/jobs" class="nav-link px-2 footerParagraph">
//                 Jobs
//               </Link>
//             </li>
//           </ul>
//         </footer>
//         <div className="">
//           <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mt-2">
//             <div className="mb-sm-0 mx-3">
//               <a
//                 href="mailto:support@irw.ng"
//                 className="text-decoration-none text-black"
//               >
//                 <p className="paragraphColor textShow">
//                   <i class="bi bi-envelope me-2"></i>
//                   support@irw.ng
//                 </p>
//               </a>
//             </div>

//             <div className="mb-sm-0 mx-3">
//               <a
//                 href="tel:2349065996599"
//                 className="text-decoration-none text-black"
//               >
//                 <p className="paragraphColor textShow">
//                   <i class="bi bi-telephone me-2"></i>+2349065996599
//                 </p>
//               </a>
//             </div>
//             <div className="mb-3 mx-3">
//               <a
//                 href="https://www.linkedin.com/company/irw-iranlowo"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-decoration-none"
//               >
//                 <i class="bi bi-linkedin mx-2 textShow LinkedIncolor"></i>
//               </a>
//               {/* <a href="" target="_blank" className="">
//                 <i class="bi bi-instagram mx-2 textShow IGcolor"></i>
//               </a>
//               <a href="" target="_blank" className="text-decoration-none">
//                 <i class="bi bi-twitter mx-2 textShow Twittercolor"></i>
//               </a> */}
//             </div>
//           </div>

//           <div className="d-flex justify-content-center">
//             {/* <a
//               href="#"
//               target="_blank"
//               className="text-decoration-none text-black"
//             > */}
//             <p className="">32 Ikosi Road, Ketu</p>
//             {/* </a> */}
//           </div>
//         </div>
//       </div>
//       <div
//         className="container-fluid footerTwoBgColor d-flex justify-content-center py-2"
//         // style={{ backgroundColor: "rgba(1, 255, 2, 0.1)" }}
//       >
//         {" "}
//         <p class="text-center text-black p-0 m-0 mx-2">&copy; 2025 IRW</p>
//       </div>
//     </>
//   );
// };


import { Link } from "react-router-dom";
import irwlogo from "../assets/irw-logo.jpg";
import { Mail, Phone } from "lucide-react";

const serviceLinks = [
  { label: "HR Services", to: "/services/hr-services" },
  { label: "Business Development", to: "/services/business-development" },
  {
    label: "Business Process Optimisation",
    to: "/services/business-process-optimisation",
  },
  { label: "Project Management", to: "/services/project-management" },
  { label: "Facilitation", to: "/services/facilitation" },
];

const companyLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0C000E] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-10 lg:py-14">
        <div>
          <Link to="/" aria-label="IRW home" className="inline-block no-underline">
            <img src={irwlogo} alt="IRW" className="h-auto w-20 object-contain" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            Practical support for the people, processes and projects that keep your business moving.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-2.5">
            {serviceLinks.map((item) => (
              <li key={item.to}>
                <Link className="text-sm text-white/65 no-underline transition-colors hover:text-[#00FF00]" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Company</h2>
          <ul className="mt-4 space-y-2.5">
            {companyLinks.map((item) => (
              <li key={item.to}>
                <Link className="text-sm text-white/65 no-underline transition-colors hover:text-[#00FF00]" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Get in touch</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Have a business need to discuss? Let’s start a conversation.
          </p>
          <div className="mt-4 space-y-3">
            <a href="mailto:support@irw.ng" className="flex items-center gap-2 text-sm text-white/75 no-underline transition-colors hover:text-[#00FF00]">
              <Mail size={15} /> support@irw.ng
            </a>
            <a href="tel:+2349065996599" className="flex items-center gap-2 text-sm text-white/75 no-underline transition-colors hover:text-[#00FF00]">
              <Phone size={15} /> +234 906 599 6599
            </a>
            <a href="https://www.linkedin.com/company/irw-iranlowo" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-white/75 no-underline transition-colors hover:text-[#00FF00]">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="15" 
                height="15" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="shrink-0"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg> 
              LinkedIn
            </a>
          </div>
          <p className="mt-4 text-sm text-white/55">32 Ikosi Road, Ketu, Lagos</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} IRW. All rights reserved.</p>
          {/* <p>People, processes and projects, handled.</p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;