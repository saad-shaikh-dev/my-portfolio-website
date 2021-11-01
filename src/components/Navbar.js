import React from 'react'
import { Link } from "gatsby"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1><Link to="/">Saad Shaikh</Link></h1>
            <div className="navlinks" id="menu">
                <Link to="/">Home</Link>
                <Link to="/my-projects">My Projects</Link>
                <Link to="/my-articles">My Articles</Link>
            </div>
        </nav>
    )
}

export default Navbar
