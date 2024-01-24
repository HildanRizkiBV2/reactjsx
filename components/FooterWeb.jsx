import { Link } from 'react-router-dom'
import { Row ,Container ,Nav ,Col } from 'react-bootstrap';
import { navLinks } from '../src/data/index.js';
import { NavLink } from 'react-router-dom';

const FooterWeb = () => {
  return(
    <div className="footer mb-3">
      <Container>
        <Row>
          <Col>
            <h5 className="pt-5 fw-bold">Koclok <span>Course</span></h5>
            <p className="disc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil quo dolorum voluptatibus praesentium vitae fugit deserunt est quaerat harum tempora.</p>
            <div className="no">
              <Link className="text-decoration-none">
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
          <Col className="d-flex flex-column menu gap-1">
            <h5 className="pt-5 ">Menu</h5>
            <Link to="/reactjsx/">Home</Link>
            <Link to="/reactjsx/kelas">Kelas</Link>
            <Link to="/reactjsx/testimonial">testimonial</Link>
            <Link to="/reactjsx/faq">faq</Link>
            <Link to="/reactjsx/syarken">syarat & ketentuan</Link>
          </Col>
        </Row>
      </Container>
    </div>
    )
}

export default FooterWeb