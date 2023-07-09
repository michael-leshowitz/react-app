import React from "react";
import { Card, CardActionArea, CardContent, CardHeader, CardMedia,  SxProps, Box } from "@mui/material";
import { IRecipeSnippet } from "../../context/types";
import BurgerRating from "../rating/burgerRating";
import PlaceHolder from "../../assets/PlaceHolderImage.png";

interface IRecipeCardProps {
    custom_sx?: SxProps;
    recipeSnippet: IRecipeSnippet;
}

const RecipeCard = (props : IRecipeCardProps) => {
    const {custom_sx, recipeSnippet} = props;
    return (
        <Card sx={custom_sx? custom_sx : {maxWidth: 345}}>
            <CardActionArea>
                <CardHeader 
                    title={recipeSnippet.name}
                    // action= provides an actionable element in the header. Looks to be placed in the top right corner
                    // avatar = styled div in the top left corner. Can place avatar, but can place other things. (possibly rating?)
                    // classes = add another css class to the header. Accetps an object with key-value pairs
                    // component = Replace root element on header for another component. This component's default is a div.
                />
                <CardMedia 
                    component="img"
                    height="140"
                    image={recipeSnippet.image ? recipeSnippet.image : PlaceHolder}
                    // Need to configure the S3 image to render the image
                />                
                <CardContent>
                    {/* Place tag chiclets */}
                    {/* TODO: Update description box to static spacing */}
                    <Box>
                        {recipeSnippet.description}
                    </Box>
                    {/* TODO: Position this to left justified */}
                    <BurgerRating readOnly={true} value={recipeSnippet.rating} precision={0.5} />                    
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default RecipeCard;