import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import App from "./../../App";

export function NavbarRecipes() {
  return (
    <>
      <Navbar style={{ backgroundColor: "darkslateblue", width: "100vw" }}>
        <Navbar.Brand href="/" style={{ color: "white", paddingLeft: "20px" }}>
          Recipes App
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/" style={{ color: "white" }}>
            Home
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
