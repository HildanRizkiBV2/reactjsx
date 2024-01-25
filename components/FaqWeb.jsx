import Accordion from 'react-bootstrap/Accordion';
import { Row ,Container ,Col } from 'react-bootstrap';
import { faq } from '../src/data/index.js';

const FaqWeb = () => {
  return (
    <div>
      <div className="faq shadow-sm ">
        <Row>
          <Col className="text-center ">
            <h1>Pertanyaan yang sering ditanyakan</h1>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-3 pt-5">
           {faq.map((faq) =>{
             return(
          <Col className="">
        <Accordion >
          <Accordion.Item eventKey={faq.eventKey}>
            <Accordion.Header  > {faq.title}</Accordion.Header>
            <Accordion.Body>
            {faq.desc}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
          </Col>
               )
           })}
        </Row>
      </div>
    </div>
    )
}

export default FaqWeb