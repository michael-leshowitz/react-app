import React from "react";
import { Grid } from "@mui/material";
import { IRecipeSnippit } from "../../context/types";
import RecipeCard from "./recipeCard";

interface IRecipeCardGrid {
    RecipeSnippits: IRecipeSnippit[]
}

const RecipeCardGrid = (props: IRecipeCardGrid): JSX.Element => {
    const { RecipeSnippits } = props;
    const defaultColumns = 3;
    const columns = RecipeSnippits.length < defaultColumns ? RecipeSnippits.length : defaultColumns;
    const spacing = Math.floor(36/columns)
    return (
        <Grid container spacing={spacing} columns={columns}>
          {RecipeSnippits.map((recipe_snippit, index) => (            
            <Grid item xs={1} key={`recipe_grid_item${index}`}>
              <RecipeCard
                recipe_snippit={recipe_snippit}
              />
            </Grid>
          ))}
        </Grid>
    )
}

export default RecipeCardGrid;
