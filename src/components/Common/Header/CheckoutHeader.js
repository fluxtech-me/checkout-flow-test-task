import React from "react"
import catStLogo from "../../../assets/images/cat_st_logo.svg"
import { Link } from "gatsby"
import "./Header.scss"

const CheckoutHeader = () => {
    return (
        <header className="header header--checkout">
            <Link to="/">
                <img
                    className="logo"
                    width="181"
                    height="51"
                    src={catStLogo}
                    alt="CAT St. Logo"
                />
            </Link>
            <h1 className="heading-1">Checkout</h1>
        </header>
    )
}

export { CheckoutHeader }
