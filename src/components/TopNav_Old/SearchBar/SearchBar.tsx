import React, { useState } from "react";
import { Button, InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import TagBar from "../../topNav/searchbar/TagBar";

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState("Default");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // TODO: Handle change event
    }

    return (
        <div className="SearchBar">
            <TextField
            fullWidth 
            variant="standard"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <Search />
                        {/* TODO: Make adornment icon button at right side of search bar. position"end" doesn't seemt o be working */}
                        <Button />
                    </InputAdornment>
                )
            }}
            onChange={handleChange}
            value={searchValue}
            size="medium"
            />
            <TagBar tags={["test1", "test2","test3"]}/>
        </div>
    )
}

export default SearchBar;