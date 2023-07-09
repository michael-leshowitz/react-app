import React from "react";
import { IRecipeSnippit } from "../context/types";
import axios from "axios";

export const getTopRecipesInRange = async (lowerBound: number, upperBound: number): Promise<IRecipeSnippit[]> => {
    const config = {
        method: 'GET',
        url: `http://localhost:3002/recipe/most-popular?lowerBoundString=${lowerBound}&upperBoundString=${upperBound}`,
    };
    // .request(config)
    const recipes = await axios
        .get<IRecipeSnippit[]>(`http://localhost:3002/recipe/most-popular?lowerBoundString=${lowerBound}&upperBoundString=${upperBound}`)
        .then((response) => response.data);
    // turn recipes into recipe snippits
    const recipeSnippits = recipes.map((recipe) => {
        return ({
            name: recipe.name,
            description: "Placeholder",
            rating: 1,
            tags: [],
        });
    })
    return recipeSnippits;
}