import React, { useState } from "react";
import { Autocomplete, SxProps, TextField } from "@mui/material";
import TagBar from "./TagBar";
import { SearchBox } from "./searchBarElements";
import { searchRecipeByKeyWord } from "../../../api/recipeApi";
import { IRecipeSnippet } from "../../../context/types";

interface ISearchBarProps {
    testId?: string;
    custom_sx?: SxProps;
    tags?: string[];
}

const SearchBar = (props: ISearchBarProps) : JSX.Element => {
    const {testId, custom_sx, ...rest} = props;

    const [input, setInput] = useState<string>("");

    const fetchData = async (keyWord: string): Promise<IRecipeSnippet[]> => {
        const results = await searchRecipeByKeyWord(keyWord);
        console.log(results);
        return results;
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput(e.target.value);
        const results = fetchData(e.target.value);
    }
    return (
        // TODO: Update to center tags with bar
        <SearchBox>
        <Autocomplete 
            data-testId = {testId}
            freeSolo={false}
            id={`${testId}_search`}
            // Options are the autocomplete chocies to show up
            options={[]}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search Recipes..."
                    InputProps={{
                        ...params.InputProps,
                        type: 'search'
                    }}
                    value={input}
                    onChange={handleInputChange}
                />
            )}
            sx={custom_sx}
            {...rest}
        />
        <TagBar tags={["tests"]} />
        </SearchBox>
    )
}

export default SearchBar;