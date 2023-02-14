import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/api";

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
        </>
      )}
    </div>
  );
}
