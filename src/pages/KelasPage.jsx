import { semuaKelas } from '../data/index.js';
import { Row ,Container ,Col } from 'react-bootstrap';

const KelasPage = () => {
  return(
    <div className="min-vh-100 w-100 kelas testi" >
    <Row>
        <Col>
        <div className="text-center">
          <h1 className="fw-bold">Semua kelas</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, delectus.</p>
        </div>
        </Col>
    </Row>
        
      <Row className="pb-5">
        {semuaKelas.map((kelas) => {
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
    </div>
    );
}


export default KelasPage