import React, { useEffect } from "react";
import "./TopNav.css";
const TopNav = ({children}): JSX.Element => {
    return (
        <div className="top-bar-content">
            <div className="top-bar-container">
                place holder
            </div>
            {children}
        </div>
    )
}

export default TopNav;