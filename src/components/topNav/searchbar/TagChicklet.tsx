import { Chip } from "@mui/material";
import React from "react";

interface ITagChicklet {
    // TODO: Update to an object
    tag: string
}

const TagChicklet = (props: ITagChicklet): JSX.Element => {
    const { tag } = props;
    const handleClick = (): void => {
    }
    return (
        <Chip
            label={`${tag}`}
            clickable
            onClick={handleClick}
        />
    )
}

export default TagChicklet;