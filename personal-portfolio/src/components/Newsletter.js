import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row className="d-flex align-items-center">
            <Col lg={12} md={6} xl={5} className="text-center">
            <h3 className="download-text">Download CV</h3>
            </Col>
            <Col md={6} xl={7} className="d-flex justify-content-md-end justify-content-center">
              <button className="vvd1" onClick={()=> window.open("https://drive.google.com/file/d/1Vh0hK_go38lom57dPtHuXl_KRboZR0wB/view?usp=sharing", "_blank")}><span>Download</span></button>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
