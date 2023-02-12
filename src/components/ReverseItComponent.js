import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { reverseItApi } from "../services/DataService";
import "../App.css";
export default function ReverseItComponent(){
    const [revStr, setRevStr] = useState("");
    const [reverseRes, setReverseRes] = useState("");
    const inputReverse = (e) =>{
        setRevStr(e.target.value);
    }

    const reverseFunc = async () => {
        const valid = /^[A-Za-z]+$/;

        if(revStr.match(valid)){
            setReverseRes(await reverseItApi(revStr));
        }
        else
        {
            setReverseRes("not valid");
        }
    };


    return (
        <>
          <Container fluid className="contStyle">
            <Row>
              <Col>
              <input placeholder="Enter in text" className="inputStyle" onKeyDown={(e) => {
              if(e.key === "Enter"){
                reverseFunc();
              }
            }} type="text" onChange={inputReverse} />
    
                <Button
                  onClick={reverseFunc}
                  variant="dark"
                  id="button-addon2"
                >
                  Button
                </Button>
    
                <p className="pTxt">{reverseRes}</p>
              </Col>
            </Row>
          </Container>
        </>
      );

}