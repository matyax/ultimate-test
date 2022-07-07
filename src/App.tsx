import { Col, Container, Row } from "react-bootstrap";
import Wizard from "components/Wizard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Wizard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
