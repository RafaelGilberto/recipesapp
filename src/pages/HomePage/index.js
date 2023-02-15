import { api } from "../../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

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
      <Row>
        <Col sm={6}></Col>
        <Col sm={5}>
          <Link to="/criar">
            <button>Criar Receita</button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: "38em" }}>
            <Card.Body>IMAGEM</Card.Body>
          </Card>
          <Link to={`/afazer`}>
            <Button>Nao Feito</Button>
          </Link>
        </Col>
        <Col>
          <Card style={{ width: "38em" }}>
            <Card.Body>IMAGEM</Card.Body>
          </Card>
          <Link to={`/feito`}>
            <Button>Feito</Button>
          </Link>
        </Col>
        <Col>
          <Card style={{ width: "38em" }}>
            <Card.Body>IMAGEM</Card.Body>
          </Card>
          <Link to={`/fazendo`}>
            <Button>Fazendo</Button>
          </Link>
        </Col>
      </Row>
    </>
  );
}
