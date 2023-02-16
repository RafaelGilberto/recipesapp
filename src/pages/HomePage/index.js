import { api } from "../../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import fotoHomePage from "../../Components/Images/fotoHomePage.png";
import fotoCriarReceita from "../../Components/Images/cardCriarReceita.png";
import fotoFazendo from "../../Components/Images/cardFazendo.png";
import fotoFeito from "../../Components/Images/cardFeito.png";
import fotoNaoFeito from "../../Components/Images/cardNaoFeito.png";

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
      <Card.Img
        src={fotoHomePage}
        style={{ width: "100vw", height: "100vh", marginBottom: "80px" }}
      />
      <Container style={{}}>
        <Row style={{ margin: "20px" }}>
          <Col sm={3} style={{ padding: "0px" }}></Col>
          <Col
            sm={6}
            style={{
              padding: "0px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Card
              sm={6}
              style={{
                padding: "0px",
              }}
            >
              <Card.Img src={fotoCriarReceita} />
              {/* <Card.Body style={{ padding: "30px" }}> </Card.Body> */}
            </Card>
          </Col>
          <Col sm={3} style={{ padding: "0px" }}></Col>
        </Row>
        <Row style={{ margin: "20px" }}>
          <Col sm={3}></Col>
          <Col sm={6} className="cardCenter">
            <Link to="/criar">
              <button type="button" class="btn btn-primary btn-lg">
                Criar Receita
              </button>
            </Link>
          </Col>
          <Col sm={3} style={{ padding: "0px" }} className="cardCenter"></Col>
        </Row>
      </Container>
      <Container
        style={{
          alignItems: "center",
          display: "grid",
          justifyContent: "space-between",
          justifItems: "center",
          margin: "0px",
          padding: "0px",
        }}
      >
        <Row style={{ marginTop: "100px", width: "100vw" }}>
          <Col className="cardCenter">
            <Card style={{ width: "200px", height: "300px" }}>
              <Card.Img src={fotoNaoFeito} />
            </Card>
            <Link to={`/afazer`} style={{ margin: "50px" }}>
              <Button style={{ margin: "20px" }}>Nao Feito</Button>
            </Link>
          </Col>
          <Col className="cardCenter">
            <Card style={{ width: "200px", height: "300px" }}>
              <Card.Img src={fotoFeito} />
            </Card>
            <Link to={`/feito`} style={{ margin: "50px" }}>
              <Button style={{ margin: "20px" }}>Feito</Button>
            </Link>
          </Col>
          <Col className="cardCenter">
            <Card style={{ width: "200px", height: "300px" }}>
              <Card.Img src={fotoFazendo} />
            </Card>
            <Link to={`/fazendo`} style={{ margin: "50px" }}>
              <Button style={{ margin: "20px" }}>Fazendo</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
