import RecipeCard from "../components/recipeCard/recipeCard";

export default function Index() {
    return (
      <p id="zero-state">
        This is a demo for React Router.
        <br />
        Check out{" "}
        <a href="https://reactrouter.com">
          the docs at reactrouter.com
        </a>
        {/* TODO: Create a grid of 6 Recipe cards for this page */}
        <RecipeCard
          recipe_snippit={{
            name: "Test-cipe",
            description: "This is how I describe it",
            rating: 5,
            tags: [],
          }}
        />
        .
      </p>
    );
  }