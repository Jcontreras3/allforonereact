import { madLibApi } from "../services/DataService";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../App.css";

export default function MadLibComponent() {
  const [madLibRes, setMadLibRes] = useState("");
  const [adjVal1, setAdjVal1] = useState("");
  const [creatureVal, setCreatureVal] = useState("");
  const [heSheVal, setHeSheVal] = useState("");
  const [eventVal, setEventVal] = useState("");
  const [locationVal, setLocationVal] = useState("");
  const [foodVal, setFoodVal] = useState("");
  const [nounVal, setNounVal] = useState("");
  const [colorVal, setColorVal] = useState("");
  const [adjVal2, setAdjVal2] = useState("");
  const [adverbVal, setAdverbVal] = useState("");
  

  const adjValue = (e) => {
    setAdjVal1(e.target.value);
  };

  const creatureValue = (e) => {
    setCreatureVal(e.target.value);
  };
  const heSheValue = (e) => {
    setHeSheVal(e.target.value);
  };
  const eventValue = (e) => {
    setEventVal(e.target.value);
  };
  const locationValue = (e) => {
    setLocationVal(e.target.value);
  };
  const foodValue = (e) => {
    setFoodVal(e.target.value);
  };
  const nounValue = (e) => {
    setNounVal(e.target.value);
  };
  const colorValue = (e) => {
    setColorVal(e.target.value);
  };
  const adjTwoValue = (e) => {
    setAdjVal2(e.target.value);
  };
  const adverbValue = (e) => {
    setAdverbVal(e.target.value);
  };
  const madLibFunc = async () => {
    var valid = /^[A-Za-z]+$/;

    if (
      adjVal1.match(valid) &&
      creatureVal.match(valid)&&
      heSheVal.match(valid)&&
      eventVal.match(valid)&&
      locationVal.match(valid)&&
      foodVal.match(valid)&&
      nounVal.match(valid)&&
      colorVal.match(valid)&&
      adjVal2.match(valid)&&
      adverbVal.match(valid)
    ) {
      setMadLibRes(
        await madLibApi(adjVal1, creatureVal, heSheVal, eventVal, locationVal, foodVal, nounVal, colorVal, adjVal2, adverbVal)
      );
    } else {
      setMadLibRes("Not Valid");
    }
  };

  return (
    <>
      <Container fluid className="contStyle">
        <Row>
          <Col>
            <input className="inputStyle" placeholder="Adjective" onChange={adjValue} type="text" />
            <input placeholder="Creature" onChange={creatureValue} type="text" />
            <input placeholder="He or She" onChange={heSheValue} type="text" />
            <input placeholder="Event" onChange={eventValue} type="text" />
            <input placeholder="Location" onChange={locationValue} type="text" />
            <input placeholder="Food" onChange={foodValue} type="text" />
            <input placeholder="Noun" onChange={nounValue} type="text" />
            <input placeholder="Color" onChange={colorValue} type="text" />
            <input placeholder="Adjective 2" onChange={adjTwoValue} type="text" />
            <input placeholder="Adverb" onChange={adverbValue} type="text" />

            <Button
              onClick={madLibFunc}
              variant="dark"
              id="button-addon2"
            >
              Button
            </Button>

            <p className="pTxt">{madLibRes}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}