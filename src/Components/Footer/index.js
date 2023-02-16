import { Container, Row, Col } from "react-bootstrap";
import style from "./style.module.css";

export function Footter() {
  return (
    <>
      <footer
        className={style.foot}
        style={{
          backgroundColor: "darkslateblue",
          width: "100vw",
          padding: "0px",
        }}
      >
        <Row style={{ padding: "0px", width: "100vw" }}>
          <Col>
            <h2> Recipes App </h2>
          </Col>
        </Row>
      </footer>
    </>
  );
}
