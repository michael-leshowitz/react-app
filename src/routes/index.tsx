import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import RecipeCard from "../components/recipeCard/recipeCard";
import { IRecipeSnippit } from "../context/types";
import { getTopRecipesInRange } from "../api/recipeApi";
import RecipeCardGrid from "../components/recipeCard/recipeCardGrid";

export default function Index() {
  const [recipeSnippits, setRecipeSnippits] = useState<IRecipeSnippit[]>([]);

  const getTopRecipes = async(): Promise<IRecipeSnippit[]> => {
    const recipe_snippits = await getTopRecipesInRange(0,1);
    return recipe_snippits;
  }

  useEffect(() => {
    getTopRecipes().then(
      data => {
        setRecipeSnippits(data)
      }
    )
  },[]);
  
    return ( 
        (!recipeSnippits.length?
          // TODO: Consider some loading indicator
          null
          :<RecipeCardGrid RecipeSnippits={recipeSnippits} />
        )
    );
  }