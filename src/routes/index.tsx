import { Grid } from "@mui/material";
import RecipeCard from "../components/recipeCard/recipeCard";
import { IRecipeSnippit } from "../context/types";

// TODO: Change this to an api call
const getTopRecipes = (): IRecipeSnippit[] => {
  const recipe_snippits = [1, 2, 3, 4, 5, 6].map((mock) => {
    return (
      {
          name: `Test-cipe ${mock}`,
          description: "This is how I describe it",
          rating: mock - 1,
          tags: [],  
      }
    )
  })  as IRecipeSnippit[];
  return recipe_snippits;
}
export default function Index() {
  const topSixRecipies = getTopRecipes();
    return ( 
        <Grid container spacing={12} columns={3}>
          {topSixRecipies.map((recipe_snippit) => (
            <Grid item xs={1}>
              <RecipeCard
              recipe_snippit={recipe_snippit}
              />
            </Grid>
          ))}
        </Grid>        
    );
  }