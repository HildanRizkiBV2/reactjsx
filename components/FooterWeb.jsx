import { Link } from 'react-router-dom'
import { Row ,Container ,Nav ,Col } from 'react-bootstrap';
import { navLinks } from '../src/data/index.js';
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const FooterWeb = () => {
  return(
    <div className="footer mb-3">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h5 className="pt-5 fw-bold">Koclok <span>Course</span></h5>
            <p className="disc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quo dolorum voluptatibus praesentium vitae fugit deserunt est quaerat harum tempora.</p>
            <div className="no">
              <Link to="https://wa.me/+6283156968995?text=bang%20saya%20mau%20bertanya" className="text-decoration-none">
                <i className="fa-brands fa-whatsapp "></i>
                <p className="m-0">+62 831-5696-8995</p>
              </Link>
            </div>
            <div className="email">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">hildanrizki16@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col menu gap-1">
            <h5 className="pt-5 ">Menu</h5>
            <Link to="/reactjsx/">Home</Link>
            <Link to="/reactjsx/kelas">Kelas</Link>
            <Link to="/reactjsx/testimonial">testimonial</Link>
            <Link to="/reactjsx/faq">faq</Link>
            <Link to="/reactjsx/syarken">syarat & ketentuan</Link>
           </Col>
          <Col lg="4">
          <h5 className="pt-5">Info menarik maseh</h5>
          <div className="info">
            <input type="text" placeholder="cari di sini"></input>
            <button className="btn btn-danger">Submit</button>
          </div>
          <div className="sosmed  ">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-github"></i>
          </div>
          </Col>
        </Row>
      </Container>
      <p className="d-flex justify-content-center p-3 mt-5" > © copyright koclok course 2024</p>
    </div>
    )
}

export default FooterWeb