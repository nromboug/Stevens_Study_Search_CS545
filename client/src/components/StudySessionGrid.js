import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StudySessionCard from "./StudySessionCard";
const axios = require('axios');
function StudySessionGrid() {
    
  return (
    <Container>
      <Row xs={1} md={3}>
        <Col>
          <StudySessionCard location=""></StudySessionCard>
        </Col>
        <Col>
          <StudySessionCard></StudySessionCard>
        </Col>
        <Col>
          <StudySessionCard></StudySessionCard>
        </Col>
      </Row>
      <Row xs={1} md={3}>
        <Col>
          <StudySessionCard></StudySessionCard>
        </Col>
        <Col>
          <StudySessionCard></StudySessionCard>
        </Col>
        <Col>
          <StudySessionCard></StudySessionCard>
        </Col>
      </Row>
      <Row xs={1} md={3}>
        <Col>
          <StudySessionCard></StudySessionCard>
        </Col>
        <Col>
          <StudySessionCard></StudySessionCard>
        </Col>
        <Col>
          <StudySessionCard></StudySessionCard>
        </Col>
      </Row>
    </Container>
  );
}

export default StudySessionGrid;
