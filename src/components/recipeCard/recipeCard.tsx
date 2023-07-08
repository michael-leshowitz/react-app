import React from "react";
import { Card, CardActionArea, CardContent, CardHeader, CardMedia,  SxProps, Box } from "@mui/material";
import { IRecipeSnippit } from "../../context/types";
import BurgerRating from "../rating/burgerRating";

interface IRecipeCardProps {
    custom_sx?: SxProps;
    recipe_snippit: IRecipeSnippit;
}

const RecipeCard = (props : IRecipeCardProps) => {
    const {custom_sx, recipe_snippit} = props;

    return (
        <Card sx={custom_sx? custom_sx : {maxWidth: 345}}>
            <CardActionArea>
                <CardHeader 
                    title={recipe_snippit.name}
                    // action= provides an actionable element in the header. Looks to be placed in the top right corner
                    // avatar = styled div in the top left corner. Can place avatar, but can place other things. (possibly rating?)
                    // classes = add another css class to the header. Accetps an object with key-value pairs
                    // component = Replace root element on header for another component. This component's default is a div.
                />
                { recipe_snippit.image ? (
                    // TODO: Add placeholder image to cards
                    <CardMedia 
                        component="img"
                        height="140"
                        image={recipe_snippit.image}

                    />
                    ) : null 
                }
                <CardContent>
                    {/* Place tag chiclets */}
                    <Box>
                        {recipe_snippit.description}
                    </Box>
                    {/* TODO: Position this to left justified */}
                    <BurgerRating readOnly={true} value={recipe_snippit.rating} precision={0.5} />                    
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default RecipeCard;