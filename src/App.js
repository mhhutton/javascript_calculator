import './App.css';

import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [display, setDisplay] = useState(0);

  const handleDisplay = (input) => {

  }
  return (
    <div className="App">
      <Container id="calc-box">
        <Row
          className="calc-btn"
          id="display"
          lg={12}
        >
          {display}
        </Row>
        <Row>
          <Col
            className="calc-btn" id="clear"
            xs={4}
            onClick={() => {setDisplay(0)}}
          >
            Clear
          </Col>
          <Col
            className="calc-btn"
            id="parens"
            xs={4}
          >
            ( )
          </Col>
          <Col
            className="calc-btn"
            id="divide"
            xs={4}
          >
            /
          </Col>
        </Row>
        <Row>
          <Col className="calc-btn" id="seven" xs={3}>7</Col>
          <Col className="calc-btn" id="eight" xs={3}>8</Col>
          <Col className="calc-btn" id="nine" xs={3}>9</Col>
          <Col className="calc-btn" id="multiply" xs={3}>x</Col>
        </Row>
        <Row>
          <Col className="calc-btn" id="four" xs={3}>4</Col>
          <Col className="calc-btn" id="five" xs={3}>5</Col>
          <Col className="calc-btn" id="six" xs={3}>6</Col>
          <Col className="calc-btn" id="subtract" xs={3}>-</Col>
        </Row>
        <Row>
          <Col className="calc-btn" id="one" xs={3}>1</Col>
          <Col className="calc-btn" id="two" xs={3}>2</Col>
          <Col className="calc-btn" id="three" xs={3}>3</Col>
          <Col className="calc-btn" id="add" xs={3}>+</Col>
        </Row>
        <Row>
          <Col className="calc-btn" id="pos-neg" xs={3}>+/-</Col>
          <Col className="calc-btn" id="zero" xs={3}>0</Col>
          <Col className="calc-btn" id="decimal" xs={3}>.</Col>
          <Col className="calc-btn" id="equals" xs={3}>=</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
