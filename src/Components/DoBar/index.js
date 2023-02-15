import { Container, Row, Col } from "react-bootstrap";
import style from "./style.module.css";

export function DoBar() {
  return (
    <>
      <footer className={style.foot}>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <h2> À FAZER </h2>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
