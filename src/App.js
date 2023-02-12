import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import SayHelloComponent from "./components/SayHelloComponent";
import AddingTwoNumbersComponent from "./components/AddingTwoNumbersComponent";
import AskingQuesionsComponent from "./components/AskingQuestionsComponent";
import GreaterThanOrLessThanComponent from "./components/GreaterThanOrLessThanComponent";
import MadLibComponent from "./components/MadLibComponent";
import OddOrEvenComponent from "./components/OddOrEvenComponent";
import ReverseItComponent from "./components/ReverseItComponent";
import StudentDirectoryComponent from "./components/StudentDirectory";
import ResturantPickerComponent from "./components/ResturantPickerComponent"; 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container fluid>
          <Row className="rowBg">
            <Col>
              <Button as={Link} to="SayHello" variant="dark">
                Say Hello
              </Button>
            </Col>
            <Col>
              <Button as={Link} to="AddingTwo" variant="dark">
                Adding Two Numbers
              </Button>
            </Col>

            <Col>
              <Button as={Link} to="AskingQ" variant="dark">
                AskingQuestions
              </Button>
            </Col>
            <Col>
              <Button as={Link} to="GreatLess" variant="dark">
                Greater Than or Less Than
              </Button>
            </Col>
            
            <Col>
              <Button as={Link} to="StudentDirectory" variant="dark">
                StudentDirectory
              </Button>
            </Col>
            <Col>
              <Button as={Link} to="ResturantPicker" variant="dark">
                Resturant Picker
              </Button>
            </Col>
          </Row>
          <Row className="rowStyle">
            <Col>
              <Button as={Link} to="MadLibs" variant="dark">
                MadLibs
              </Button>
            </Col>
            <Col>
              <Button as={Link} to="OddEven" variant="dark">
                Odd or Even
              </Button>
            </Col>
            <Col>
              <Button as={Link} to="ReverseIt" variant="dark">
                Reverse It
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Routes>
        <Route path="SayHello" element={<SayHelloComponent />} />
        <Route path="AddingTwo" element={<AddingTwoNumbersComponent />} />
        <Route path="AskingQ" element={<AskingQuesionsComponent />} />
        <Route path="GreatLess" element={<GreaterThanOrLessThanComponent />} />
        <Route path="MadLibs" element={<MadLibComponent />} />
        <Route path="OddEven" element={<OddOrEvenComponent />} />
        <Route path="ReverseIt" element={<ReverseItComponent />} />
        <Route path="StudentDirectory" element={<StudentDirectoryComponent />} />
        <Route path="ResturantPicker" element={<ResturantPickerComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
