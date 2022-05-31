import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container id="calc-box">
        <Row
          className="calc-btn"
          id="display"
          lg={12}
        >
          Display
        </Row>
        <Row>
          <Col className="calc-btn" id="" xs={4}>Clear</Col>
          <Col className="calc-btn" id="" xs={4}>()</Col>
          <Col className="calc-btn" id="" xs={4}>/</Col>
        </Row>
        <Row>
          <Col className="calc-btn" id="" xs={3}>7</Col>
          <Col className="calc-btn" id="" xs={3}>8</Col>
          <Col className="calc-btn" id="" xs={3}>9</Col>
          <Col className="calc-btn" id="" xs={3}>x</Col>
        </Row>
        <Row>
          <Col className="calc-btn" id="" xs={3}>4</Col>
          <Col className="calc-btn" id="" xs={3}>5</Col>
          <Col className="calc-btn" id="" xs={3}>6</Col>
          <Col className="calc-btn" id="" xs={3}>-</Col>
        </Row>
        <Row>
          <Col className="calc-btn" id="" xs={3}>1</Col>
          <Col className="calc-btn" id="" xs={3}>2</Col>
          <Col className="calc-btn" id="" xs={3}>3</Col>
          <Col className="calc-btn" id="" xs={3}>+</Col>
        </Row>
        <Row>
          <Col className="calc-btn" id="" xs={3}>+/-</Col>
          <Col className="calc-btn" id="" xs={3}>0</Col>
          <Col className="calc-btn" id="" xs={3}>.</Col>
          <Col className="calc-btn" id="" xs={3}>=</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
