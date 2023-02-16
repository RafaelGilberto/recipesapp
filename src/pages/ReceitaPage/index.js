import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

export function ReceitaPage() {
  const params = useParams();
  const [receita, setReceita] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchReceita() {
      try {
        const response = await api.get(`/recipes/${params.receitaId}`);
        console.log(response);
        setReceita(response.data.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchReceita();
  }, []);
  const navigate = useNavigate();
  async function handleDelete() {
    try {
      const response = await api.delete(`/recipes/${params.receitaId}`);
      console.log(response);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  async function statusDone() {
    try {
      await api.put(`/recipes/${params.receitaId}`, {
        data: { status: "done" },
      });
    } catch (err) {
      console.log(err);
    }
  }
  async function statusNotDone() {
    try {
      await api.put(`/recipes/${params.receitaId}`, {
        data: { status: "not done" },
      });
    } catch (err) {
      console.log(err);
    }
  }
  async function statusDoing() {
    try {
      await api.put(`/recipes/${params.receitaId}`, {
        data: { status: "doing" },
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      {!isLoading && (
        <>
          <Container className="my-4 d-flex justify-content-center">
            <Card style={{ width: "38em" }}>
              <Card.Body>
                <Row>
                  <Col sm={7}>
                    <h1>
                      <strong>{receita.attributes.name}</strong>
                    </h1>
                  </Col>
                  <Col sm={2}>
                    <Link to={`/editar/${params.receitaId}`}>
                      <Button>Editar</Button>
                    </Link>
                  </Col>
                  <Col>
                    <Button onClick={handleDelete}>Deletar</Button>
                  </Col>
                </Row>

                <Card.Img
                  src={receita.attributes.imageURL}
                  alt={`${receita.attributes.name} imagem`}
                />
                <strong>Descrição</strong>
                <p>{receita.attributes.description}</p>
                <strong>Ingredientes</strong>
                <p>{receita.attributes.ingredients}</p>
                <strong>Modo de preparo</strong>
                <p>{receita.attributes.preparation}</p>

                <Row>
                  <Col sm={3}>
                    <Button onClick={statusDoing}>Fazendo</Button>
                  </Col>
                  <Col sm={3}>
                    <Button onClick={statusDone}>Feito</Button>
                  </Col>
                  <Col sm={3}>
                    <Button onClick={statusNotDone}>Não Feito</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
        </>
      )}
    </div>
  );
}
