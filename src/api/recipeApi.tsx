import React from "react";
import { IRecipeSearchResult, IRecipeSnippet } from "../context/types";
import axios from "axios";

const DOMAIN_ENDPOINT = import.meta.env.VITE_DOMAIN_SERVICE_END_POINT;

// TODO: Move "localhost..." to configurable value
export const getTopRecipesInRange = async (lowerBound: number, upperBound: number): Promise<IRecipeSnippet[]> => {
    const config = {
        method: 'GET',
        url: `${DOMAIN_ENDPOINT}/recipe/most-popular?lowerBoundString=${lowerBound}&upperBoundString=${upperBound}`,
    };
    // .request(config)
    const recipes = await axios
        .get<IRecipeSnippet[]>(`${DOMAIN_ENDPOINT}/recipe/most-popular?lowerBoundString=${lowerBound}&upperBoundString=${upperBound}`)
        .then((response) => response.data);
    // turn recipes into recipe snippets
    // TODO: Remove and return domain object snippets
    const recipeSnippets = recipes.map((recipe) => {
        return ({
            name: recipe.name,
            description: "Placeholder",
            rating: 1,
            tags: [],
        });
    })
    return recipeSnippets;
}

export const searchRecipeByKeyWord = async (keyWord: string, tags: string[] = []): Promise<IRecipeSearchResult[]> => {
    const recipes = await axios.get<IRecipeSnippet[]>(`${DOMAIN_ENDPOINT}/recipe/query-by?searchText=${keyWord}`)
        .then((response) => response.data);
    const recipeSnippets = recipes.map((recipe) => {
        return {
            name: recipe.name,
            description: recipe.description,
            rating: recipe.rating,
            tags: recipe.tags,
        }
    });
    return recipeSnippets;
}