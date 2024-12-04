import { Nav, Navbar } from "react-bootstrap";
import { ZoomIn } from "react-bootstrap-icons";
import { Bell } from "react-bootstrap-icons";
import { PersonCircle } from "react-bootstrap-icons";
import logo from "../assets/media/logo.png";
import { NavLink } from "react-router-dom";

function TopBar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="pt-3">
      <img src={logo} alt="LOGO" style={{ width: "8%" }} />

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <NavLink to="/" className="fw-bold nav-link">
            Home
          </NavLink>
          <NavLink to="/TvShows" className="fw-bold nav-link">
            TV Shows
          </NavLink>
          <NavLink to="/movies" className="fw-bold nav-link">
            Movies
          </NavLink>
          <NavLink to="/RecAdd" className="fw-bold nav-link">
            Recently Added
          </NavLink>
          <NavLink to="/List" className="fw-bold nav-link">
            My List
          </NavLink>
        </Nav>
        <Nav className="d-flex ms-auto">
          <NavLink className="fw-bold nav-link">
            <ZoomIn />
          </NavLink>
          <NavLink className="fw-bold nav-link">KIDS</NavLink>
          <NavLink className="fw-bold nav-link">
            <Bell />
          </NavLink>
          <NavLink className="fw-bold nav-link">
            <PersonCircle />
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default TopBar;
