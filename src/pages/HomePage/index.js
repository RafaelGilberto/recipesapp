import { api } from "../../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      <Link to="/criar">
        <button>Criar Receita</button>
      </Link>
      {recipes.map((receitaAtual) => {
        return (
          <div key={receitaAtual.id}>
            <Link to={`/receita/${receitaAtual.id}`}>
              <strong>{receitaAtual.attributes.name}</strong>
            </Link>
            <span> </span>
          </div>
        );
      })}
    </>
  );
}
