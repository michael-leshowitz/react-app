import React from "react";
import { Autocomplete, SxProps, TextField } from "@mui/material";
import TagBar from "./TagBar";
import { SearchBox } from "./searchBarElements";

interface ISearchBarProps {
    testId?: string;
    custom_sx?: SxProps;
    tags?: string[];
}

const SearchBar = (props: ISearchBarProps) : JSX.Element => {
    const {testId, custom_sx, ...rest} = props;
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