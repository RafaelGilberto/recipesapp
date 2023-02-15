import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../utils/api";

export function EditarPage() {
  const navigate = useNavigate();
  const params = useParams();

  const [receita, setReceita] = useState({
    name: "",
    description: "",
    imageURL: "",
    preparation: "",
    ingredients: "",
    status: "",
    rating: "☆☆☆☆☆",
    calories: 0,
    price: 0,
  });

  console.log(receita);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await api.get(`/recipes/${params.receitaId}`);
        console.log(response);
        setReceita(response.data.data.attributes);
      } catch (err) {
        console.log(err);
      }
    }
    fetchRecipe();
  }, []);

  function handleChange(e) {
    console.log(e.target);

    setReceita({ ...receita, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();

      const infosForAPI = { data: { ...receita } };

      await api.put(`/recipes/${params.receitaId}`, infosForAPI);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>Editar o prato</h1>

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

        <button>Editar</button>
      </form>
    </>
  );
}
