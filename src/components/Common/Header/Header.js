import React from "react";
import catStLogo from "../../../assets/images/cat_st_logo.svg";
import "./Header.scss";

const Header = () => {
    return (
        <header>
            <a href="/">
                <img width="181" height="51" src={catStLogo} alt="CAT St. Logo"/>
            </a>
        </header>
    )
};

export {Header};
