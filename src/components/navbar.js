// import { NavLink } from "react-router-dom";
// import irwlogo from "../assets/irw-logo.jpg";

// export const NewNavbar = () => {
//   const navActive = ({ isActive }) => {
//     return {
//       color: isActive ? "#01FF02" : "#000000",
//     };
//   };
//   return (
//     <div className="navbar navbar-expand-lg navbar-light bg-white py-0 justify-content-center">
//       <div className="container ">
//         {/* <a className="navbar-brand" href="/">
//           <img
//             src={irwlogo}
//             alt=""
//             className="d-inline-block align-text-top"
//             style={{ maxWidth: "6rem", maxHeight: "6rem" }}
//           />
//         </a> */}

//         <a className="navbar-brand" href="/">
//           <img
//             src={irwlogo}
//             alt=""
//             className="d-inline-block align-text-top"
//             style={{ maxWidth: "6rem", height: "auto" }}
//           />
//         </a>

//         <div
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </div>

//         <div
//           className="collapse navbar-collapse justify-content-center"
//           id="navbarNav"
//         >
//           <div className="navbar-nav NavUL py-2 d-flex">
//             <li className="nav-item mx-3 d-flex justify-content-center">
//               <NavLink
//                 style={navActive}
//                 to="/"
//                 className="nav-link navText"
//                 aria-current="page"
//               >
//                 <div className="Navitemmobile Navitemlarge ">Home</div>{" "}
//               </NavLink>
//             </li>

//             <li className="nav-item mx-3 d-flex justify-content-center">
//               <NavLink
//                 style={navActive}
//                 to="/about"
//                 className="nav-link navText"
//               >
//                 <div className="Navitemmobile Navitemlarge">About</div>
//               </NavLink>
//             </li>

//             <li className="nav-item mx-3 d-flex justify-content-center">
//               <NavLink
//                 style={navActive}
//                 to="/jobs"
//                 className="nav-link navText"
//               >
//                 <div className="Navitemmobile Navitemlarge">Jobs</div>
//               </NavLink>
//             </li>
//           </div>{" "}
//         </div>
//       </div>
//     </div>
//   );
// };


import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import irwlogo from "../assets/irw-logo.jpg";

const services = [
  { label: "HR Services", to: "/services/hr-services" },
  { label: "Business Development", to: "/services/business-development" },
  {
    label: "Business Process Optimisation",
    to: "/services/business-process-optimisation",
  },
  { label: "Project Management", to: "/services/project-management" },
  { label: "Facilitation", to: "/services/facilitation" },
];

const linkClass = ({ isActive }) =>
  `text-sm no-underline transition-colors hover:text-[#0C000E] ${
    isActive ? "font-semibold text-[#0C000E]" : "text-[#0C000E]/75"
  }`;

export const NewNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  const closeMenus = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setDesktopServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#0C000E]/10 bg-white">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between px-5 lg:px-10">
        <Link to="/" onClick={closeMenus} aria-label="IRW home" className="shrink-0 no-underline">
          <img src={irwlogo} alt="IRW" className="h-auto w-20 object-contain" />
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-[#0C000E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C000E] md:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          <NavLink to="/new-home" end className={linkClass}>Home</NavLink>

          {/* Desktop Services Dropdown Wrapper */}
          <div
            className="relative py-2"
            onMouseEnter={() => setDesktopServicesOpen(true)}
            onMouseLeave={() => setDesktopServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setDesktopServicesOpen((prev) => !prev)}
              className="inline-flex items-center gap-1 text-sm text-[#0C000E]/75 transition-colors hover:text-[#0C000E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00FF00]"
              aria-haspopup="true"
              aria-expanded={desktopServicesOpen}
            >
              Services <ChevronDown size={14} className={`transition-transform duration-200 ${desktopServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute left-0 top-full z-50 w-72 rounded-xl border border-[#0C000E]/10 bg-white p-2 shadow-lg transition-all duration-200 ${
                desktopServicesOpen
                  ? "visible opacity-100 translate-y-0"
                  : "invisible opacity-0 translate-y-1 pointer-events-none"
              }`}
            >
              {services.map((service) => (
                <NavLink
                  key={service.to}
                  to={service.to}
                  onClick={closeMenus}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2.5 text-sm no-underline transition-colors hover:bg-[#F8F9FA] hover:text-[#0C000E] ${
                      isActive ? "font-semibold text-[#0C000E]" : "text-[#0C000E]/80"
                    }`
                  }
                >
                  {service.label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/new-about" className={linkClass}>About Us</NavLink>
          <NavLink to="/careers" className={linkClass}>Careers</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact Us</NavLink>
        </nav>

        <Link
          to="/contact"
          className="hidden items-center rounded-full bg-[#0C000E] px-5 py-2.5 text-sm font-semibold text-white no-underline transition-all hover:bg-[#251B27] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C000E] md:inline-flex"
        >
          Work With Us
        </Link>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav className="border-t border-[#0C000E]/10 bg-white px-5 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            <NavLink to="/" end onClick={closeMenus} className="rounded-lg px-3 py-3 text-sm text-[#0C000E] no-underline hover:bg-[#F8F9FA]">Home</NavLink>
            
            <button
              type="button"
              onClick={() => setMobileServicesOpen((open) => !open)}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-left text-sm text-[#0C000E] hover:bg-[#F8F9FA]"
              aria-expanded={mobileServicesOpen}
            >
              Services <ChevronDown size={15} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {mobileServicesOpen && (
              <div className="ml-3 flex flex-col border-l border-[#0C000E]/20 pl-3">
                {services.map((service) => (
                  <NavLink key={service.to} to={service.to} onClick={closeMenus} className="rounded-lg px-3 py-2.5 text-sm text-[#0C000E]/75 no-underline hover:bg-[#F8F9FA] hover:text-[#0C000E]">
                    {service.label}
                  </NavLink>
                ))}
              </div>
            )}

            <NavLink to="/about-us" onClick={closeMenus} className="rounded-lg px-3 py-3 text-sm text-[#0C000E] no-underline hover:bg-[#F8F9FA]">About Us</NavLink>
            <NavLink to="/careers" onClick={closeMenus} className="rounded-lg px-3 py-3 text-sm text-[#0C000E] no-underline hover:bg-[#F8F9FA]">Careers</NavLink>
            <NavLink to="/contact" onClick={closeMenus} className="rounded-lg px-3 py-3 text-sm text-[#0C000E] no-underline hover:bg-[#F8F9FA]">Contact Us</NavLink>
            
            <Link to="/contact" onClick={closeMenus} className="mt-2 inline-flex items-center justify-center rounded-full bg-[#0C000E] px-5 py-3 text-sm font-semibold text-white no-underline hover:bg-[#251B27]">
              Work With Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default NewNavbar;