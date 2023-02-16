import { api } from "../../utils/api";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function FeitoPage() {
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
    <Container>
      <Row>
        {recipes
          .filter((receitaAtual) => receitaAtual.attributes.status === "done")
          .map((receitaAtual) => {
            return (
              <Col
                key={receitaAtual.id}
                className="d-flex justify-content-center"
              >
                <div>
                  <Card style={{ width: "18rem", margin: "1rem" }}>
                    <Card.Img src={receitaAtual.attributes.imageURL} />
                    <Card.Body>
                      <Card.Title>
                        <strong>{receitaAtual.attributes.name}</strong>
                      </Card.Title>
                      <Card.Text>
                        {receitaAtual.attributes.description}
                      </Card.Text>
                      <Link to={`/receita/${receitaAtual.id}`}>
                        <Button>Ler</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}
