import irwlogo from "../assets/irw-logo.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div class="container-fluid footerBg pt-5">
        <div className="text-center">
          <Link to="/" className="">
            {" "}
            <img
              src={irwlogo}
              className="img-fluid"
              alt="irw"
              width="100"
              height="104"
            />
          </Link>
        </div>
        <footer class="pb-3 mb-2">
          <ul class="nav justify-content-center ">
            
            <li class="nav-item">
              <Link to="/" class="nav-link px-2 footerParagraph">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link px-2 footerParagraph">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/jobs" class="nav-link px-2 footerParagraph">
                Jobs
              </Link>
            </li>
           
          </ul>
        </footer>
        <div className="">
          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mt-2">
           
            <div className="mb-sm-0 mx-3">
              <a
                href="mailto:titio@irw.ng"
                className="text-decoration-none text-black"
              >
                <p className="paragraphColor textShow">
                  <i class="bi bi-envelope me-2"></i>
                  info@irw.ng
                </p>
              </a>
            </div>
           
            <div className="mb-sm-0 mx-3">
              <a
                href="tel:2349065996599"
                className="text-decoration-none text-black"
              >
                <p className="paragraphColor textShow">
                  <i class="bi bi-telephone me-2"></i>+2349065996599
                </p>
              </a>
            </div>
            <div className="mb-3 mx-3">
              <a
                href="https://www.linkedin.com/company/irw-iranlowo"
                target="_blank"
                className="text-decoration-none"
              >
                <i class="bi bi-linkedin mx-2 textShow LinkedIncolor"></i>
              </a>
              <a
                href=""
                target="_blank"
                className=""
              >
                <i class="bi bi-instagram mx-2 textShow IGcolor"></i>
              </a>
              <a
                href=""
                target="_blank"
                className="text-decoration-none"
              >
                <i class="bi bi-twitter mx-2 textShow Twittercolor"></i>
              </a>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <a
              href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7"
              target="_blank"
              className="text-decoration-none text-black"
            >
              <p className="">41 CMD Road, Magodo/Secretariat, Lagos</p>
            </a>
          </div>
        </div>
      </div>
      <div
        className="container-fluid footerTwoBgColor d-flex justify-content-center py-2"
        // style={{ backgroundColor: "rgba(1, 255, 2, 0.1)" }}
      >
        {" "}
        <p class="text-center text-black p-0 m-0 mx-2">&copy; 2025 IRW</p>
       
      </div>
    </>
  );
};
