import React from "react"
import { Link } from "gatsby"
import catStLogo from "../../../assets/images/cat_st_logo.svg"
import "./Header.scss"

const Header = (props) => {
    const { setOpenSidebar } = props

    return (
        <header className="header header--main">
            <Link to="/">
                <img
                    className="logo"
                    width="181"
                    height="51"
                    src={catStLogo}
                    alt="CAT St. Logo"
                />
            </Link>
            <nav>
                <ul className="header__menu">
                    <li
                        className="header__menu__item medium-text"
                        onClick={() => setOpenSidebar(true)}
                    >
                        Cart
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export { Header }
