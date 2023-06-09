import React from 'react';
import {
Nav,
NavLink,
// Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './navbarElements';
import SearchBar from './searchbar/searchbar';

const Navbar = () => {
    return (
        <Nav>
            <SearchBar testId='top_nav_search_bar' custom_sx={{ width: 0.75}}/>
        </Nav>
    );
};

export default Navbar;
