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

  function statusDone() {
    receita.attributes.status = "done";
  }
  function statusNotDone() {
    receita.attributes.status = "not done";
  }
  function statusDoing() {
    receita.attributes.status = "doing";
  }
  return (
    <div>
      {!isLoading && (
        <>
          <Container>
            <Card style={{ width: "38em" }}>
              <Card.Body>
                <Row>
                  <Col>
                    <p>
                      <strong>{receita.attributes.name}</strong>
                    </p>
                  </Col>
                  <Col>
                    <Link to={`/editar/${params.receitaId}`}>
                      <Button>Editar</Button>
                    </Link>
                  </Col>
                  <Col>
                    <Button onClick={handleDelete}>Deletar</Button>
                  </Col>
                </Row>
                <strong>Descrição</strong>
                <p>{receita.attributes.description}</p>
                <Card.Img
                  src={receita.attributes.imageURL}
                  alt={`${receita.attributes.name} imagem`}
                />
                <strong>Ingredientes</strong>
                <p>{receita.attributes.ingredients}</p>
                <strong>Modo de preparo</strong>
                <p>{receita.attributes.preparation}</p>

                <Row>
                  <Col>
                    <Button onClick={statusDoing}>Fazendo</Button>
                  </Col>
                  <Col>
                    <Button onClick={statusDone}>Feito</Button>
                  </Col>
                  <Col>
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
