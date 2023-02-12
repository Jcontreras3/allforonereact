import { askingQuestionsApi } from "../services/DataService";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../App.css";

export default function AskingQuestionsComponent() {
  const [askRes, setaskRes] = useState("");
  const [inputNameVal, setInputNameVal] = useState("");
  const [inputTimeVal, setInputTimeVal] = useState("");
  const [amOrPmVal, setAmOrPmVal] = useState("");

  const nameValue = (e) => {
    setInputNameVal(e.target.value);
  };

  const timeValue = (e) => {
    setInputTimeVal(e.target.value);
  };
  const amPmValue = (e) => {
    setAmOrPmVal(e.target.value);
  };
  const askingFunc = async () => {
    var validNum = /^[0-9]+$/;
    var valid = /^[A-Za-z]+$/;
    var validAmPm = /^[AMPamp]+$/;

    if (
      inputNameVal.match(valid) &&
      inputTimeVal.match(validNum) &&
      amOrPmVal.match(validAmPm)
    ) {
      setaskRes(
        await askingQuestionsApi(inputNameVal, inputTimeVal, amOrPmVal)
      );
    } else {
      setaskRes("Not Valid");
    }
  };

  return (
    <>
      <Container fluid className="contStyle">
        <Row>
          <Col>
          <input className="inputStyle" placeholder="Your name?" onKeyDown={(e) => {
              if(e.key === "Enter"){
                askingFunc();
              }
            }} type="text"  onChange={nameValue} />
            <input placeholder="Time you woke up" onKeyDown={(e) => {
              if(e.key === "Enter"){
                askingFunc();
              }
            }} type="text" onChange={timeValue} />
           <input placeholder="Am or Pm?" onKeyDown={(e) => {
              if(e.key === "Enter"){
                askingFunc();
              }
            }} type="text" onChange={amPmValue} />

            <Button
              onClick={askingFunc}
              variant="dark"
              id="button-addon2"
            >
              Button
            </Button>

            <p className="pTxt">{askRes}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
