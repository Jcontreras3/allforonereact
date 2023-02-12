import { greaterLessApi } from "../services/DataService";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../App.css";

export default function GreaterThanOrLessThanComponent() {
  const [gRes, setgRes] = useState("");
  const [greatNumOne, setGreatNumOne] = useState("");
  const [greatNumTwo, setGreatNumTwo] = useState("");

    const GreatNumOOne = (e) =>{
        setGreatNumOne(e.target.value)
    }
    const GreatNumTTwo = (e) =>{
        setGreatNumTwo(e.target.value)
    }


  const greatLessFunc = async () => {

    const validNum = /^[0-9]+$/;

    if (greatNumOne.match(validNum) && greatNumTwo.match(validNum)) {
        setgRes(await greaterLessApi(greatNumOne, greatNumTwo));
    } else {
        setgRes("Not Valid");
    }
  };
  return (
    <>
      <Container fluid className="contStyle">
        <Row>
          <Col>
            <input className="inputStyle" placeholder="Number One"  type="text" onChange={GreatNumOOne} />
            <input placeholder="Number Two"  type="text" onChange={GreatNumTTwo} />

            <Button
              onClick={greatLessFunc}
              variant="dark"
              id="button-addon2"
            >
              Button
            </Button>

            <p className="pTxt">{gRes}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}