import { api } from "../../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { DoneBar } from "../../Components/DoneBar";
import { DoBar } from "../../Components/DoBar";
import { DoingBar } from "../../Components/DoingBar";

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
      <DoBar />

      <Container>
        <Row>
          {recipes
            .filter(
              (receitaAtual) => receitaAtual.attributes.status === "not done"
            )
            .map((receitaAtual) => {
              return (
                <Col key={receitaAtual.id}>
                  <div>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img src={receitaAtual.attributes.imageURL} />
                      <Card.Body>
                        <Card.Title>
                          <Link to={`/receita/${receitaAtual.id}`}>
                            <strong>{receitaAtual.attributes.name}</strong>
                          </Link>
                        </Card.Title>
                        <Card.Text>
                          {receitaAtual.attributes.description}
                        </Card.Text>
                        <Button>Ler</Button>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
}
