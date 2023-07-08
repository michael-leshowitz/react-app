import React, { useState } from "react";
import { Login, PersonAddAlt, MenuBook, DinnerDining, SoupKitchen } from "@mui/icons-material";
import { Menu, MenuItem, Sidebar, } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";

const SideBar = () : JSX.Element => {
    const [user, setUser] = useState<number>();

    return (
        <Sidebar style={{ height: "100vh" }}>
            
                {(user)? (
                    <Menu>
                        <MenuItem icon={<Avatar sx={{width: 24, height: 24, bgcolor: "black"}}>U</Avatar>}>
                            Profile
                        </MenuItem>
                        <MenuItem icon={<SoupKitchen/>}>
                            Create Recipe 
                        </MenuItem>
                        <MenuItem icon={<MenuBook />}>
                            My Recipes    
                        </MenuItem>
                        <MenuItem icon={<DinnerDining />}>
                            Favorite Recipes
                        </MenuItem>
                    </Menu>
                ) : (
                    <Menu>
                        <MenuItem icon={<Login />} onClick={() => {setUser(5)}}>
                            Log In        
                        </MenuItem>
                        <MenuItem icon={<PersonAddAlt />} component={<Link to={`/contacts/1`}/>}>
                            Sign Up       
                        </MenuItem>
                    </Menu>
                )
            }
            
        </Sidebar>
    )
}

export default SideBar;