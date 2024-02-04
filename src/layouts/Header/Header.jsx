import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import { ReactComponent as Search } from "../../assets/images/icons/search.svg"

import { ReactComponent as Logo } from "../../assets/images/icons/logo.svg"

function Header() {
    return (
        <header className="header">
            <div className="main-container">
                <div className="header-inner">
                    <Link className="header-logo" to="/">
                        <Logo width="16" height="27.5" />
                        <div className="header-logo-title">BUILD</div>
                    </Link>
                    <nav className="header-nav">
                        <Link className="nav-item" to="/about">
                            About us
                        </Link>
                        <Link className="nav-item" to="/projects">
                            Projects
                        </Link>
                        <Link className="nav-item" to="/services">
                            Services
                        </Link>
                        <Link className="nav-item" to="/agents">
                            Agents
                        </Link>
                        <Link className="nav-item" to="/listings">
                            Listings
                        </Link>
                        <button className="nav-item search">
                            <Search />
                        </button>
                    </nav>
                    <Link className="header-service">Other services</Link>
                    <button className="header-contact-us">Contact Us</button>
                </div>
            </div>
        </header>
    )
}

export default Header
