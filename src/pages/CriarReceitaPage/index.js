import { useState } from "react";
import { api } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";

export function CriarReceita() {
  const [receita, setReceita] = useState({
    name: "",
    description: "",
    imageURL: "",
    preparation: "",
    ingredients: "",
    status: "not done",
    rating: "☆☆☆☆☆",
    calories: 0,
    price: 0,
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setReceita({
      ...receita,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmit(e) {
    try {
      e.preventDefault();

      const infosForAPI = { data: { ...receita } };
      const response = await api.post("/recipes", infosForAPI);
      console.log(response);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <>
        <Container>
          <Card className="my-5">
            <Card.Header>
              <h1>Criar receita</h1>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="input-nome-receita">Nome: </Form.Label>
                  <Form.Control
                    id="input-nome-receita"
                    name="name"
                    value={receita.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="input-receita-descricao">
                    Descrição:{" "}
                  </Form.Label>
                  <Form.Control
                    id="input-receita-descricao"
                    name="description"
                    value={receita.description}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="input-imagem-receita">
                    URL da imagem:{" "}
                  </Form.Label>
                  <Form.Control
                    id="input-imagem-receita"
                    name="imageURL"
                    value={receita.imageURL}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="input-receita-ingredientes">
                    Ingredientes:{" "}
                  </Form.Label>
                  <Form.Control
                    htmlFor="input-receita-ingredientes"
                    name="ingredients"
                    value={receita.ingredients}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="input-receita-preparo">
                    Modo de preparo:{" "}
                  </Form.Label>
                  <Form.Control
                    htmlFor="input-receita-preparo"
                    name="preparation"
                    value={receita.preparation}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Card.Footer>
                  <Row>
                    <Col></Col>
                    <Col className="d-flex justify-content-center">
                      <Button type="submit" variant="outline-success" size="lg">
                        Criar
                      </Button>
                    </Col>
                    <Col></Col>
                  </Row>
                </Card.Footer>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </>
    </div>
  );
}
