import { resturantApi } from "../services/DataService";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../App.css";

export default function ResturantPickerComponent() {
  const [resturantRes, setResturantRes] = useState("");

  const resturantClick = async() => {
    const resturantRes = await resturantApi()
    setResturantRes(resturantRes)
}



  return (
    <>
      <Container fluid className="contStyle">
        <Row>
          <Col>

            <Button
            className="inputStyle"
              onClick={resturantClick}
              variant="dark"
              id="button-addon2"
            >
              Button
            </Button>

            <p className="pTxt">{resturantRes}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}