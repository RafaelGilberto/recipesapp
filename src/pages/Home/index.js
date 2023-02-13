import { api } from "../../utils/api";
import { useState, useEffect } from "react";

export function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await api.get("/recipes");
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchRecipes();
  }, []);

  return <h1>Home</h1>;
}
