import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CriarReceita } from "./pages/CriarReceitaPage";
import { ReceitaPage } from "./pages/ReceitaPage";
import { EditarPage } from "./pages/EditarPage";
import { NavbarRecipes } from "./Components/Navbar/index";
import { Footter } from "./Components/Footer";
import { FeitoPage } from "./pages/FeitoPage";
import { NaoFeito } from "./pages/NaoFeito";
import { FazendoPage } from "./pages/FazendoPage";

function App() {
  return (
    <>
      <NavbarRecipes />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/criar" element={<CriarReceita />} />
        <Route path="/editar/:receitaId" element={<EditarPage />} />
        <Route path="/receita/:receitaId" element={<ReceitaPage />} />
        <Route path="/feito" element={<FeitoPage />} />
        <Route path="/afazer" element={<NaoFeito />} />
        <Route path="/fazendo" element={<FazendoPage />} />
      </Routes>
      <Footter />
    </>
  );
}

export default App;
