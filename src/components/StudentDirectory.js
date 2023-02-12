import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { eMailApi, firstNameApi, lastNameApi, slackNameApi } from "../services/DataService";
import "../App.css";
export default function StudentDirectoryComponent() {
  const [firstNameInput, setFirstnameInput] = useState("");
  const [firstRes, setFirstRes] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [lastRes, setLastRes] = useState("");
  const [slackNameInput, setSlackNameInput] = useState("");
  const [slackRes, setSlackRes] = useState("");
  const [eMailInput, setEMailInput] = useState("");
  const [eMailRes, setEMailRes] = useState("");


  const inputFirstName = (e) => {
    setFirstnameInput(e.target.value);
  };

  const FirstNameFunc = async () => {
    const valid = /^[A-Za-z]+$/;
    if (firstNameInput.match(valid)) {
      setFirstRes(await firstNameApi(firstNameInput));
    } else {
      setFirstRes("Enter in valid name");
    }
  };

  const inputLastName = (e) => {
    setLastNameInput(e.target.value);
  };

  const LastNameFunc = async () => {
    const valid = /^[A-Za-z]+$/;
    if (lastNameInput.match(valid)) {
      setLastRes(await lastNameApi(lastNameInput));
    } else {
      setLastRes("Enter in valid name");
    }
  };
  const inputSlackName = (e) => {
    setSlackNameInput(e.target.value);
  };

  const SlackNameFunc = async () => {
    const valid = /^[A-Za-z]+$/;
    if (slackNameInput.match(valid)) {
      setSlackRes(await slackNameApi(slackNameInput));
    } else {
      setSlackRes("Enter in valid name");
    }
  };


  const inputeMail = (e) => {
    setEMailInput(e.target.value);
  };

  const eMailFunc = async () => {
    const valid = /^[A-Za-z]+$/;
    if (eMailInput.match(valid)) {
      setEMailRes(await eMailApi(eMailInput));
    } else {
      setEMailRes("Enter in valid name");
    }
  };

  return (
    <>
      <Container fluid className="contStyle">
        <Row>
          <Col>
            <input className="inputStyle" placeholder="First Name" type="text" onChange={inputFirstName} />
            <input type="text" placeholder="Last Name" onChange={inputLastName} />
            <input type="text" placeholder="Slack Name" onChange={inputSlackName} />
            <input type="text" placeholder="Email" onChange={inputeMail} />

            <Button
              onClick={() => {
                FirstNameFunc();
                LastNameFunc();
                SlackNameFunc();
                eMailFunc();
              }}
              variant="dark"
              id="button-addon2"
            >
              Button
            </Button>

            <p className="pTxt">{firstRes}</p>
            <p className="pTxt">{lastRes}</p>
            <p className="pTxt">{slackRes}</p>
            <p className="pTxt">{eMailRes}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
