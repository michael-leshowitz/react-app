import React from "react";
import { Grid } from "@mui/material";
import { IRecipeSnippet } from "../../context/types";
import RecipeCard from "./recipeCard";

interface IRecipeCardGrid {
    RecipeSnippets: IRecipeSnippet[]
}

const RecipeCardGrid = (props: IRecipeCardGrid): JSX.Element => {
    const { RecipeSnippets } = props;
    const defaultColumns = 3;
    const columns = RecipeSnippets.length < defaultColumns ? RecipeSnippets.length : defaultColumns;
    const spacing = Math.floor(36/columns)
    return (
        <Grid container spacing={spacing} columns={columns}>
          {RecipeSnippets.map((recipeSnippet, index) => (            
            <Grid item xs={1} key={`recipe_grid_item${index}`}>
              <RecipeCard
                recipeSnippet={recipeSnippet}
              />
            </Grid>
          ))}
        </Grid>
    )
}

export default RecipeCardGrid;
