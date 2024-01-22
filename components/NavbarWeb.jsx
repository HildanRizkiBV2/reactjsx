import { Navbar ,Container ,Nav ,NavDropdown} from 'react-bootstrap';
import { navLinks } from '../src/data/index.js';
import { NavLink } from 'react-router-dom';
const NavbarWeb = () => {
  return(
    <>
    <div>
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home">Koclok <span>Course</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
          {navLinks.map((link) => {
            return(
              <div key={link.id} className="nav-link">
                <NavLink to={link.path}>{link.text}</NavLink>
              </div>
            )
          })}
          </Nav>
              <div className="text-center">
                <a className="btn btn-outline-danger">Join us Now</a>
              </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
    );
}
export default NavbarWeb