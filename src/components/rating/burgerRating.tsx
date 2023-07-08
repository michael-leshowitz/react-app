import React from "react";
import IconRating from "./iconRating";
import { LunchDining, LunchDiningOutlined } from "@mui/icons-material";
import { RatingProps } from "@mui/material";

interface IBurgerRating {
    value?: number;
    precision?: number;
}

const BurgerRating = (props: IBurgerRating & RatingProps) : JSX.Element => {
    const {
        value,
        precision = 1,
        ...rest
    } = props;
    return (
        <IconRating
            icon={<LunchDining />}
            emptyIcon={<LunchDiningOutlined />}
            value={value}
            precision={precision}
            filledColor={'#69D169'}
            hoverColor={'#04CE04'}
            {...rest}
        />
    )
}
// LunchDining
export default BurgerRating;