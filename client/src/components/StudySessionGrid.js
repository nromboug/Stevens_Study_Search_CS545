import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StudySessionCard from "./StudySessionCard";
function StudySessionGrid({
  groups,
  setShow,
  setShowDelete,
  setCourseText,
  setLocationText,
  setTimeText,
  setDateText,
  setPostId,
}) {
  return (
    <Container>
      <Row xs={1} md={3}>
        {groups &&
          groups.map((group) => {
            return (
              <Col>
                <StudySessionCard
                  group={group}
                  key={group.name + group.posterId}
                  setShow={setShow}
                  setShowDelete={setShowDelete}
                  setCourseText={setCourseText}
                  setLocationText={setLocationText}
                  setTimeText={setTimeText}
                  setDateText={setDateText}
                  setPostId={setPostId}
                />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}

export default StudySessionGrid;
