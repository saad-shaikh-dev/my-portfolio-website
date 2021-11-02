import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

const Home = () => {

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Saad Shaikh</title>
        <meta name="description" content="Free Web tutorials" />
      </Helmet>
      <div className="home">
        <div className="home-header">
          <h2>Frontend & Backend web developer</h2>
          <p>Hello and welcome to my website.</p>
          <p>I am a web developer specialising in React JS, Gatsby, PostgreSQL and ASP.NET Core.</p>
          <p>Feel free to check out my portfolio.</p>
          <br />
          <Link className="button-link" to="/my-projects">My Portfolio</Link>
        </div>
        <div className="home-header-images">
          <img className="home-header-image" src="/gatsby-logo.png" alt="Gatsby logo" />
          <img className="home-header-image" src="/javascript-logo.png" alt="Javascript logo" />
          <img className="home-header-image" src="/postgres-logo.png" alt="Postgres logo" />
          <img className="home-header-image" src="/react-logo.png" alt="React JS logo" />
          <img className="home-header-image" src="/asp.net-core-logo.png" alt="ASP.NET Core logo" />
        </div>
      </div>
    </Layout>
  )
}

export default Home;
