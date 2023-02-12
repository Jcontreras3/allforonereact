import { sayHelloApi } from "../services/DataService";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../App.css";

export default function SayHelloComponent() {
  const [inputTxt, setinputTxt] = useState("");
  const [helloRes, setHelloRes] = useState("");

  const helloInputVal = (e) =>{
    setHelloRes(e.target.value);
  }

  const InputFunc = async () => {
    const valid = /^[A-Za-z ]+$/;
    if (helloRes.match(valid)) {
      setinputTxt(await sayHelloApi(helloRes));
    } else {
      setinputTxt("Enter in valid Response");
    }
  };


  return (
    <>
      <Container fluid className="contStyle">
        <Row>
          <Col>
            <input className="inputStyle" placeholder="Type in Name" onKeyDown={(e) => {
              if(e.key === "Enter"){
                InputFunc();
              }
            }} type="text" onChange={helloInputVal} />

            <Button
              onClick={InputFunc}
              variant="dark"
              id="button-addon2"
            >
              Button
            </Button>

            <p className="pTxt">{inputTxt}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
