import './App.css';

import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [display, setDisplay] = useState('0');

  const handleDisplay = (calcInput) => {
    //IF display is equal to 0 then input may be able to replace 0
    if (display === '0') {
      //IF calcInput is only numbers 1-9 and period then calcInput will replace 0
      if (calcInput.match(/([1-9.])/)) {
        const myprom = new Promise(() => {
          setDisplay(calcInput);
        })
        myprom.then(()=> {})

      }
    }
    //IF input is not equal to zero then input will add onto display
    else if (display !== '0') {
      setDisplay(display + calcInput);
      //console.log(display)
    }
  }
  const handleBackspace = () => {
    if (display !== '0') {
      if (display.length > 1) {
        setDisplay(display.slice(0, display.length-1));
      } else if (display.length === 1) {
          setDisplay('0');
      }
    }
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
            xs={3}
            onClick={() => {setDisplay('0')}}
          >
            Clear
          </Col>
          <Col
            className="calc-btn" id="clear"
            xs={3}
            onClick={() => { handleBackspace() }}
          >
            Back
          </Col>
          <Col
            className="calc-btn"
            id="parens"
            xs={3}
          >
            ( )
          </Col>
          <Col
            className="calc-btn"
            id="divide"
            xs={3}
          >
            /
          </Col>
        </Row>
        <Row>
          <Col
            className="calc-btn"
            id="seven"
            xs={3}
            value="7"
            onClick={() => {handleDisplay('7')}}
          >
            7
        </Col>
          <Col className="calc-btn" id="eight" xs={3}>8</Col>
          <Col className="calc-btn" id="nine" xs={3}>9</Col>
          <Col
            className="calc-btn"
            id="multiply"
            xs={3}
            onClick={() => {handleDisplay('x')}}
          >
            x
          </Col>
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
          <Col
            className="calc-btn"
            id="three"
            xs={3}
            onClick={() => {handleDisplay('3')}}
          >
              3
          </Col>
          <Col className="calc-btn" id="add" xs={3}>+</Col>
        </Row>
        <Row>
          <Col className="calc-btn" id="pos-neg" xs={3}>+/-</Col>
          <Col
            className="calc-btn"
            id="zero"
            xs={3}
            onClick={() => {handleDisplay('0')}}
          >
            0
          </Col>
          <Col
            className="calc-btn"
            id="decimal"
            xs={3}
            onClick={() => {handleDisplay('.')}}
          >
            .
          </Col>
          <Col className="calc-btn" id="equals" xs={3}>=</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
