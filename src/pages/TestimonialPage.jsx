import { testimonial } from '../data/index.js';
import { Row ,Container ,Col } from 'react-bootstrap';


const TestimonialPage = () => {
  return(
    <div className="min-vh-100 w-100 pt-5 testimoni">
      <Row className="text-center">
        <Col>
          <h1>Semua Testimoni</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </Col>
      </Row>
      <Row className="">
          {testimonial.map((testi) => {
            return(
        <Col key={testi.id}>
        <div className="w-100 testi-desc rounded">
          <p>{testi.desc}</p>
        </div>
        <div className="people d-flex justify-content-center ">
          <img src={testi.image} className="" alt="" />
        <div className="testi-data  mt-4">
          <h5>{testi.name}</h5>
          <p>{testi.skill}</p>
        </div>
        </div>
        </Col>
            )
          })}
      </Row>
    </div>
    );
}


export default TestimonialPage