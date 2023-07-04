import React, { useState } from "react";
import { Button, InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState("Default");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // TODO: Handle change event
    }

    return (
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
    )
}

export default SearchBar;