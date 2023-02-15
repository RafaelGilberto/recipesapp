import { useState } from "react";
import { api } from "../../utils/api";
import { useNavigate } from "react-router-dom";

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
      await api.post("/recipes", infosForAPI);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <>
        <h1>Criar uma nova receita</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="input-nome-receita">Nome: </label>
          <input
            id="input-nome-receita"
            name="name"
            value={receita.name}
            onChange={handleChange}
          />
          <label htmlFor="input-receita-descricao">Descrição: </label>
          <input
            id="input-receita-descricao"
            name="description"
            value={receita.description}
            onChange={handleChange}
          />
          <label htmlFor="input-imagem-receita">URL da imagem: </label>
          <input
            id="input-imagem-receita"
            name="imageURL"
            value={receita.imageURL}
            onChange={handleChange}
          />
          <label htmlFor="input-receita-ingredientes">Ingredientes: </label>
          <input
            htmlFor="input-receita-ingredientes"
            name="ingredients"
            value={receita.ingredients}
            onChange={handleChange}
          />
          <label htmlFor="input-receita-preparo">Modo de preparo: </label>
          <input
            htmlFor="input-receita-preparo"
            name="preparation"
            value={receita.preparation}
            onChange={handleChange}
          />

          <button>Criar</button>
        </form>
      </>
    </div>
  );
}
