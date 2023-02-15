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
      <Link to="/criar">
        <button>Criar Receita</button>
      </Link>
      <Container>
        <Row>
          {recipes.map((receitaAtual) => {
            return (
              <Col>
                <div key={receitaAtual.id}>
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
