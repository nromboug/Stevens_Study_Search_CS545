import "../App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Topbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Stevens Study Search</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {sessionStorage.getItem("token") ? (
            <Navbar.Text
              onClick={() => {
                sessionStorage.clear();
                window.location.reload();
              }}
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Sign out
            </Navbar.Text>
          ) : (
            <Navbar.Text>Not signed in!</Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;
