import React from "react";
import { IRecipeSnippet } from "../context/types";
import { useLocation } from "react-router-dom";
import RecipeCardGrid from "../components/recipeCard/recipeCardGrid";

interface IRecipeSearchResultProps {
    options?: IRecipeSnippet[]
}

export const action = async({request, params}) => {
    const formData = await request.formData();
}

export const loader = async({parms}) => {
}

const RecipeSearchResults = (proper: IRecipeSearchResultProps) => {
    const { state } = useLocation();
    const { options } = state;
    return (
        <div>
            {options.length?
                <RecipeCardGrid RecipeSnippets={options} />
                : "No results"
            }
        </div>
    )
}

export default RecipeSearchResults;