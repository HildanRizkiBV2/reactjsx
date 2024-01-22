import { Row ,Container , Col} from 'react-bootstrap';
import HeroImage from '../assets/img/hero.png'
import Typewriter from 'typewriter-effect';
import cursor from 'typewriter-effect';

const HomePage = () => {

  return(
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
         <Row className="header-box d-flex align-items-center">
          <Col lg="6">
            <h1>I am <Typewriter options={{ strings:['Hildan', 'Developer','Front-end'],autoStart: true,loop: true,}}/>
            </h1>
            <h1 className="mb-2">belajar <span>cooding </span> di sini</h1>
            <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, quae sed perferendis recusandae obcaecati quos.</p>
            <button className="btn btn-outline-danger btn-lg rounded-1 me-2 ">Lihat Kelas</button>
            <button className="btn btn-outline-danger btn-lg rounded-1 me-2 ">Lihat promo</button>
          </Col>
          <Col lg="6" >
            <img src={HeroImage} alt="Banner" />
          </Col>
         </Row>
        </Container>
      </header>
    </div>
    );
}


export default HomePage