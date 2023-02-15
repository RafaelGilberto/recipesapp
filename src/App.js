import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CriarReceita } from "./pages/CriarReceitaPage";
// import { EditarPage } from "./pages/EditarPage";
import { ReceitaPage } from "./pages/ReceitaPage";
import { EditarPage } from "./pages/EditarPage/index";

import { NavbarRecipes } from "./Components/Navbar/index";

function App() {
  return (
    <>
      <NavbarRecipes />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/criar" element={<CriarReceita />} />
        {/*
        <Route path="/editar/:receitaId" element={<EditarPage />} />
        */}
        <Route path="/receita/:receitaId" element={<ReceitaPage />} />
      </Routes>
    </>
  );
}

export default App;
