import { addingTwoNumbersApi } from "../services/DataService";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../App.css";

export default function AddingTwoNumbersComponent() {

  const [numRes, setnumRes] = useState("");
  const[inputNumOne, setInputNumOne] = useState("");
  const[inputNumTwo, setInputNumTwo] = useState("");

  const inputValOne = (e) => {
    setInputNumOne(e.target.value);
  }
  const inputValTwo = (e) => {
    setInputNumTwo(e.target.value);
  }


  const addFunc = async () => {

        const validNum = /^[0-9]+$/;

    if (inputNumOne.match(validNum) && inputNumTwo.match(validNum)) {
      setnumRes(await addingTwoNumbersApi(inputNumOne, inputNumTwo));
    } else {
      setnumRes("Not Valid");
    }
  };


  return (
    <>
      <Container fluid className="contStyle">
        <Row className="colStyles">
          <Col >
            <input className="inputStyle" placeholder="num 1" type="text" onChange={inputValOne} />
            <input type="text" placeholder="num 2" onChange={inputValTwo} />

            <Button
              onClick={addFunc}
              variant="dark"
              id="button-addon2"
            >
              Submit
            </Button>

            <p className="pTxt">{numRes}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

