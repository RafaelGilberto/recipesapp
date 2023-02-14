import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";
import { Link } from "react-router-dom";

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

  return (
    <div>
      {!isLoading && (
        <>
          <p>{receita.attributes.name}</p>
          <p>{receita.attributes.description}</p>
          <img
            src={receita.attributes.imageURL}
            alt={`${receita.attributes.name} imagem`}
          />
          <p>{receita.attributes.ingredients}</p>
          <p>{receita.attributes.preparation}</p>
          <Link to={`/editar/${params.receitaId}`}>
            <button>Editar</button>
          </Link>
        </>
      )}
    </div>
  );
}
