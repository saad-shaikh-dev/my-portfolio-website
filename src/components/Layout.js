import React from "react"
import Navbar from "./Navbar"
import "../styles/all.css"

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <div className="main">{children}</div>
            <br />
            <footer className="footer">
                <p>I'm available for hire. You can contact me at <a className="link" href="mailto:saad.shaikh.dev@protonmail.com">saad.shaikh.dev@protonmail.com</a>.</p>
                <p>
                    This website was made by Saad Shaikh - Copyright 2021 Saad
                    Shaikh
                </p>
            </footer>
        </div>
    )
}

export default Layout
