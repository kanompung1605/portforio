import  React from "react";
import {Navbar} from "react-bootstrap";
//Function Components
const Header = ()=>{
    return(
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home"></a>
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>


    )
};

export default Header;
