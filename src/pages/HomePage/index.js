import { api } from "../../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { padding } from "@mui/system";

export function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await api.get("/recipes");
        setRecipes(response.data.data);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchRecipes();
  }, []);

  return (
    <>
      <Container>
        <Row style={{ width: "100vw", height: "75vh", marginBottom: "80px" }}>
          <Col sm={12}></Col>
        </Row>
        <Row style={{ margin: "20px" }}>
          <Col sm={3} style={{ padding: "0px" }}></Col>
          <Col sm={6} style={{ padding: "0px" }}>
            <Card
              style={{
                padding: "0px",
                width: "492px",
                height: "352px",
              }}
            >
              <Card.Body style={{ padding: "30px" }}>IMAGEM</Card.Body>
            </Card>
          </Col>
          <Col sm={3} style={{ padding: "0px" }}></Col>
        </Row>
        <Row style={{ margin: "20px" }}>
          <Col sm={3}></Col>
          <Col
            sm={6}
            style={{
              margin: "0px",
              padding: "0px",
              display: "grid",
              justifyContent: "space-around",
            }}
          >
            <Link to="/criar">
              <button type="button" class="btn btn-primary btn-lg">
                Criar Receita
              </button>
            </Link>
          </Col>
          <Col sm={3} style={{ padding: "0px" }}></Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ marginTop: "100px", width: "100vw" }}>
          <Col>
            <Card style={{ width: "200px", height: "300px" }}>
              <Card.Body>IMAGEM</Card.Body>
            </Card>
            <Link to={`/afazer`}>
              <Button style={{ margin: "20px" }}>Nao Feito</Button>
            </Link>
          </Col>
          <Col>
            <Card style={{ width: "200px", height: "300px" }}>
              <Card.Body>IMAGEM</Card.Body>
            </Card>
            <Link to={`/feito`}>
              <Button style={{ margin: "20px" }}>Feito</Button>
            </Link>
          </Col>
          <Col>
            <Card style={{ width: "200px", height: "300px" }}>
              <Card.Body>IMAGEM</Card.Body>
            </Card>
            <Link to={`/fazendo`}>
              <Button style={{ margin: "20px" }}>Fazendo</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
