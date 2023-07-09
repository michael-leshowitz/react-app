import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import RecipeCard from "../components/recipeCard/recipeCard";
import { IRecipeSnippet } from "../context/types";
import { getTopRecipesInRange } from "../api/recipeApi";
import RecipeCardGrid from "../components/recipeCard/recipeCardGrid";

export default function Index() {
  const [recipeSnippets, setRecipeSnippets] = useState<IRecipeSnippet[]>([]);

  const getTopRecipes = async(): Promise<IRecipeSnippet[]> => {
    const recipeSnippets = await getTopRecipesInRange(0,1);
    return recipeSnippets;
  }

  useEffect(() => {
    getTopRecipes().then(
      data => {
        setRecipeSnippets(data)
      }
    )
  },[]);
  
    return ( 
        (!recipeSnippets.length?
          // TODO: Consider some loading indicator
          null
          :<RecipeCardGrid RecipeSnippets={recipeSnippets} />
        )
    );
  }