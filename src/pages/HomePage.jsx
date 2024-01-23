import { Row ,Container , Col} from 'react-bootstrap';
import HeroImage from '../assets/img/hero.png'
import Typewriter from 'typewriter-effect';
import cursor from 'typewriter-effect';
import { kelasTerbaru } from '../data/index.js';

const HomePage = () => {

  return(
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
         <Row className="header-box d-flex align-items-center">
          <Col lg="6">
            <h1>I am <Typewriter options={{ strings:['Hildan', 'Developer','Front-end'],autoStart: true,loop: true,}}/>
            </h1>
            <h1 className="title mb-2">belajar <span>Jump Shoot </span> di sini</h1>
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
      <div className="kelas d-flex min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold" >Kelas terbaru</h1>
              <p className="text-center" >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
          {kelasTerbaru.map((kelas) => {
            return(
            <Col key={kelas.id}>
              <img src={kelas.image} alt="unsplash.com" className="w-100 mb-5 rounded-top" />
              <div className="star mb-2 px-3">
                <i className={kelas.star1}></i>
                <i className={kelas.star2}></i>
                <i className={kelas.star3}></i>
                <i className={kelas.star4}></i>
                <i className={kelas.star5}></i>
              </div>
                <h5 className="px-3 mb-5">{kelas.title}</h5>
              <div className="ket d-flex justify-content-between align-items-center pb-3 px-3" >
                <p className="fw-bold m-0 text-primary" >{kelas.price}</p>
                <button className="btn btn-danger rounded-1" >{kelas.buy}</button>
              </div>
            </Col>
              )
          })}
          </Row>
        </Container>
      </div>
    </div>
    );
}


export default HomePage