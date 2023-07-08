import React from "react";
import TagChicklet from "./TagChicklet";
import { ClassNames } from "@emotion/react";

interface ITagBar {
    tags: string[];
    updateDependency?: () => void;
}

const TagBar = (props: ITagBar): JSX.Element => {
    const { 
        tags,
        updateDependency = () => {}
    } = props;
    return (
        <div className="TagBar">
            {
                tags.map((tag) => {
                        return (
                            <TagChicklet tag={tag} />
                        )
                    }
                )
            }
        </div>
    )
}

export default TagBar;