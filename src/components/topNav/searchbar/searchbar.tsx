import React, { useEffect, useState } from "react";
import { Autocomplete, Button, IconButton, InputAdornment, SxProps, TextField, getTooltipUtilityClass } from "@mui/material";
import { Search } from "@mui/icons-material";
import TagBar from "./TagBar";
import { SearchBox } from "./searchBarElements";
import { searchRecipeByKeyWord } from "../../../api/recipeApi";
import { IRecipeSnippet, ITags } from "../../../context/types";
import { useNavigate } from "react-router-dom";
import { getTopTags } from "../../../api/tagApi";

interface ISearchBarProps {
    testId?: string;
    custom_sx?: SxProps;
    tags?: string[];
}

const SearchBar = (props: ISearchBarProps) : JSX.Element => {
    const {testId, custom_sx, ...rest} = props;

    const [input, setInput] = useState<string>("");
    const [options, setOptions] = useState<IRecipeSnippet[]>();
    const [optionsLoading, setOptionsLoading] = useState<boolean>(false);
    const [tags, setTags] = useState<ITags[]>([]);

    const navigate = useNavigate();

    const fetchTopTags = async(): Promise<ITags[]> => {
        const topTags = await getTopTags(0);
        return topTags;
    }

    useEffect(() => {
        // Get top tags
        fetchTopTags().then(
            data => {
                setTags(data)
            }
        )
    }, []);

    const fetchData = async (keyWord: string): Promise<IRecipeSnippet[]> => {
        const results = await searchRecipeByKeyWord(keyWord);
        return results;
    }

    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): Promise<void> => {
        setInput(e.target.value);
        if (e.target.value.length < 1) {
            setOptions([]);
            return;
        }
        setOptionsLoading(true);
        const results = await fetchData(e.target.value);
        setOptions(results)
        setOptionsLoading(false);
    }

    const getOptionNames = (): string[] => {
        const optionNames = options? options.map((option) => option.name)
        : [];
        return optionNames;
    }

    const handleKeyDown = (e): void => {
        if (e && e.code == "Enter") {
            navigate(`/recipe/search/${input}`, { state: {options:options}})
            // TODO: Clear inputs on enter
        }
    }
    return (
        // TODO: Update to center tags with bar
        // TODO: Add boarder - labels are going off top of screen
        <SearchBox>
        <Autocomplete 
            data-testId = {testId}
            freeSolo={false}
            id={`${testId}_search`}
            // Options are the autocomplete chocies to show up
            options={getOptionNames()}
            loading={optionsLoading}
            forcePopupIcon={false}
            onKeyDown={handleKeyDown}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search Recipes..."
                    InputProps={{
                        ...params.InputProps,
                        type: 'search',
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton aria-label="search">
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    value={input}
                    onChange={handleInputChange}
                />
            )}
            sx={custom_sx}
            {...rest}
        />
        {(tags.length >=1) ? 
        <TagBar tags={["tests"]} />
        : null
        }
        </SearchBox>
    )
}

export default SearchBar;