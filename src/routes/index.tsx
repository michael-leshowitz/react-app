import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import RecipeCard from "../components/recipeCard/recipeCard";
import { IRecipeSnippit } from "../context/types";
import { getTopRecipesInRange } from "../api/recipeApi";
import RecipeCardGrid from "../components/recipeCard/recipeCardGrid";

export default function Index() {
  const [recipeSnippits, setRecipeSnippits] = useState<IRecipeSnippit[]>([]);

  const getTopRecipes = async(): Promise<IRecipeSnippit[]> => {
    // const recipe_snippits = [1,2,3].map((mock) => {
    //   return (
    //     {
    //         name: `Test-cipe ${mock}`,
    //         description: "This is how I describe it",
    //         rating: mock - 1,
    //         tags: [],  
    //     }
    //   )
    // })  as IRecipeSnippit[];
    console.log("starting api request")
    const recipe_snippits = await getTopRecipesInRange(0,1);
    console.log(recipe_snippits);
    console.log("finished request")
    // add a pad...
    recipe_snippits.push(
          {
            name: `Test-cipe ${2}`,
            description: "This is how I describe it",
            rating: 2 - 1,
            tags: [],  
        }
    );
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
          null
          :<RecipeCardGrid RecipeSnippits={recipeSnippits} />
        )
    );
  }