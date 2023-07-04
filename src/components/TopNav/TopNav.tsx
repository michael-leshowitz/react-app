import React, { useEffect } from "react";
import "./TopNav.css";
import SearchBar from "./SearchBar/SearchBar";
const TopNav = ({children}): JSX.Element => {
    return (
        <div className="top-bar-content">
            <div className="top-bar-container">
                <div className="search-bar-container">
                    <SearchBar />
                </div>
            </div>
            {children}
        </div>
    )
}

export default TopNav;