import styled from "@emotion/styled";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { Rating, RatingProps } from "@mui/material";
import React from "react";

interface IIconRatingProps {
    icon:  any;
    emptyIcon: any;
    value?: number;
    precision?: number;
    filledColor?: string;
    hoverColor?: string;
}

interface IRatingColorProps {
    filledColor?: string;
    hoverColor?: string;
}

const StyledRating = styled(Rating)<{ $colorProps?: IRatingColorProps }>`
    & .MuiRating-iconFilled {
    // Just use the prop as normal
    ${(props) => props.$colorProps?.filledColor? `color: ${props.$colorProps.filledColor}` : 'color: #69D169'}
  }
  
  & .MuiRating-iconHover {
    // Just use the prop as normal
    ${(props) => props.$colorProps?.hoverColor? `color: ${props.$colorProps.hoverColor}` : 'color: #04CE04'}
  }
`;


const IconRating = (props : IIconRatingProps & RatingProps) : JSX.Element => {
    const {
        icon = <Favorite />,
        emptyIcon = <FavoriteBorderOutlined />,
        value,
        precision = 1,
        filledColor,
        hoverColor,
        ...rest
    } = props;
    return (
        <StyledRating
            {...rest}
            value={value}
            $colorProps={{filledColor: filledColor, hoverColor: hoverColor}}
            icon={icon}
            emptyIcon={emptyIcon}
            precision={precision}
        />
    )
}

export default IconRating;