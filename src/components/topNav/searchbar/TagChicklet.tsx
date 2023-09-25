import { Chip } from "@mui/material";
import React from "react";

interface ITagChicklet {
    // TODO: Update to an object
    tag: string
    key: string
}

const TagChicklet = (props: ITagChicklet): JSX.Element => {
    const { tag, key } = props;
    const handleClick = (): void => {
    }
    return (
        <Chip
            label={`${tag}`}
            clickable
            onClick={handleClick}
            key={key}
        />
    )
}

export default TagChicklet;