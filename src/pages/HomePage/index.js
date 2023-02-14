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
          <>
            <Link to={`/receita/${receitaAtual.id}`}>
              <strong key={receitaAtual.id}>
                {receitaAtual.attributes.name}
              </strong>
            </Link>

            <Link to="/editar">
              <button>Editar</button>
            </Link>
          </>
        );
      })}
    </>
  );
}
