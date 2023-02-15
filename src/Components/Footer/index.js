import { indigo } from "@mui/material/colors";
import { Container, Row, Col } from "react-bootstrap";
import style from "./style.module.css";

export function Footter() {
  return (
    <>
      <footer className={style.foot}>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <h2> Recipes App </h2>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
