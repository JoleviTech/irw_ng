import { NavLink } from "react-router-dom";
import irwlogo from "../assets/irw-logo.png";

export const NewNavbar = () => {
  const navActive = ({ isActive }) => {
    return {

      color: isActive ? "#01FF02" : "#000000",
    };
  };
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-white py-0 justify-content-center">
      <div className="container ">
        <a className="navbar-brand" href="/">
          <img
            src={irwlogo}
            alt=""
            className="d-inline-block align-text-top"
            style={{ maxWidth: "6rem", maxHeight: "6rem" }}
          />
        </a>
      
        <div
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </div>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <div className="navbar-nav NavUL py-2 d-flex">
            <li className="nav-item mx-3 d-flex justify-content-center">
              <NavLink
                style={navActive}
                to="/"
                className="nav-link navText"
               
                aria-current="page"
              >
                <div className="Navitemmobile Navitemlarge ">
                  <b>Home</b>
                </div>{" "}
              </NavLink>
            </li>

            <li className="nav-item mx-3 d-flex justify-content-center">
              <NavLink
                style={navActive}
                to="/about"
             
                className="nav-link navText"
              >
                <div className="Navitemmobile Navitemlarge">
                  <b>About</b>
                </div>
              </NavLink>
            </li>

  

            <li className="nav-item mx-3 d-flex justify-content-center">
              <NavLink
                style={navActive}
                to="/jobs"
              
                className="nav-link navText"
              >
                <div className="Navitemmobile Navitemlarge">
                  <b>Jobs</b>
                </div>
              </NavLink>
            </li>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

