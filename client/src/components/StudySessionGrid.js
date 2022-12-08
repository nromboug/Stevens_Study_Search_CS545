import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StudySessionCard from "./StudySessionCard";
function StudySessionGrid({ groups }) {
  return (
    <Container>
      <Row xs={1} md={3}>
        {groups &&
          groups.map((group) => {
            return (
              <Col>
                <StudySessionCard group={group} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}

export default StudySessionGrid;
