import { oddEvenApi } from "../services/DataService";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../App.css"

export default function OddOrEvenComponent() {

  const [numRes, setnumRes] = useState("");
  const[inputNumOne, setInputNumOne] = useState("");

  const inputValOne = (e) => {
    setInputNumOne(e.target.value);
  }

  const addFunc = async () => {

        const validNum = /^[0-9]+$/;

    if (inputNumOne.match(validNum)) {
      setnumRes(await oddEvenApi(inputNumOne));
    } else {
      setnumRes("Not Valid");
    }
  };


  return (
    <>
      <Container fluid className="contStyle">
        <Row>
          <Col>
          <input className="inputStyle" placeholder="Number" onKeyDown={(e) => {
              if(e.key === "Enter"){
                addFunc();
              }
            }} type="text" onChange={inputValOne} />

            <Button
              onClick={addFunc}
              variant="dark"
              id="button-addon2"
            >
              Button
            </Button>

            <p className="pTxt">{numRes}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}