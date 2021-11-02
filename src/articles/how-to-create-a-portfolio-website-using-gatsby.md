---
title: How to create a portfolio website using Gatsby
date: 31.10.2021
slug: how-to-create-a-portfolio-website-using-gatsby
sourceCode: 
projectLink: https://saad-shaikh-portfolio.netlify.app/
---

In this article I'm going to show you how to use Gatsby to create a personal portfolio website.

This website will include a home page, a projects page and an blog articles page.

First, let's set up the structure of the website.
This is what my portfolio website page structure will look like:
- home page
- projects' list page
- articles' list page
    - article pages
- 404 page

Now let's get started.

---

### Create a project folder
First, you create a folder to store your projects. I will name it "my-portfolio-website".

### Install Gatsby and it's dependencies
Next, you create the Gatsby app within the folder along this the dependencies that we will be using for this project. These dependencies are:
- gatsby-plugin-google-analytics
- gatsby-plugin-manifest
- gatsby-plugin-react-helmet
- gatsby-plugin-robots-txt
- gatsby-plugin-sitemap
You can do this by navigating to the project folder in the command line and then entering the below command:
```
npm i gatsby-plugin-google-analytics gatsby-plugin-manifest gatsby-plugin-react-helmet gatsby-plugin-robots-txt gatsby-plugin-sitemap
```

### Update gatsby-config.js file
Now we need to add these dependencies in the gatsby-config.js file so that they actually work.

Add some information in the siteMetada section:
```
siteUrl: "[actual url of website]",
    title: "[name of the website]",
```
Add configure the plugins in the plugins section:
```
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "[add Google Analytics tracking ID here]",
      },
    },
    "gatsby-plugin-react-helmet",
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: '[website url]',
        sitemap: '[website-url]/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects-list`,
        path: `${__dirname}/src/projects-list/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles/`,
      },
    },
```
The last two plugin shown above will connect the project to the two databases we will create to store the projects and articles. I will name them "my-projects" and "articles" respectively.


### Create the database folders
This website will have 2 databases, one for the projects and one for the articles. So create two folder, one called "my-projects" and the other called "articles".

### Create the pages
After that, we will create all the pages in the website that viewers will interact with.
We have already created the website page structure, now lets expand it a little bit to show you the purpose of each page:
#### 1. Home page
This is the central page of the website. I will include some information about yourself and the logos of some of the technologies you know how to use.
#### 2. Projects' list page
This page includes a list of all the projects you have developed. It also includes some details about the tools used to create it, a picture of the project and a link to the actual project.
#### 3. Articles' list page
This page includes a list of all the articles you have written related to your field. It also includes some details about the tools used to create it, a picture of the project and a link to the actual project.
#### 4. Article pages
These are the dynamically generated pages for all the articles you publish. Each individual page will inlclude the actual article along with any relevant external links.
#### 5. A 404 Page
This is the page you will be redirected to if the link you entered in the website does not exist.

The home page, projects list page and articles list page will be in the "pages" folder which is in the "src" (short for "source") folder in the project while the template for the individual articles will be stored in a separate folder which we will call "templates" in the "src" folder.

In the "pages" folder, let's create the files "my-projects.js", "my-articles.js" and "404.js". The preixisting "index.js" file will be used as the home page.
Now, create a folder in "src" called "templates" and then create a file inside it called "articles.js".

Before we create the pages, we have to create a the layout component with the navbar and the css file to store all the styles.

You can find and copy the CSS code from here: [https://gitlab.com/saad.shaikh/my-portfolio-website/-/blob/master/src/all.css](https://gitlab.com/saad.shaikh/my-portfolio-website/-/blob/master/src/all.css).

In the "components" folder, create 2 files, "Layout.js" and "Navbar.js".

In Layout.js, enter the below code:
```
import React from "react"
import Navbar from "./Navbar"
import "../all.css"

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
```
Then create the Navbar.js file and add all the links to the pages:
```
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
```

Now we can start filling up these pages.

#### 1. index.js page:
Import the Helmet and Link plugins as well as the Layout.js component.
We will be importing the Layout.js component in all the pages to wrap it around the page content.
We will also use Helmet on each page to create their individual page titles.
```
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

```
#### 2. my-projects.js page:
Import the plugins Fragement and Link from React JS, Helmet from Gatsby, graphql for the database management and the Layout.js component.

Then, in the bottom, create a function to get the data from the "projects-list" folder.

Lastly, inside of "Return ()", create the inteface that will use the data and provide a list of all the projects. The syntax for this is exactly the same as regular React JS.
```
import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

const Projects = ({ data }) => {
  const projects = data.projects.nodes

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Projects - Saad Shaikh</title>
      </Helmet>
      <div className="list-page">
        <h2>My Portfolio</h2>
        <h3>Projects & websites that I have created.</h3>
        <div className="list">
          {projects.map(project => (
            <Fragment key={project.id}>
              <Link to={project.frontmatter.projectLink} target="_blank">
                <div className="list-card">
                  <h4>{project.frontmatter.title}</h4>
                  <img className="thumbnail" src={project.frontmatter.image} alt={project.frontmatter.title + " image"} />
                  <p className="tools">Tools: {project.frontmatter.stack}</p>
                  <p className="two-lines">{project.frontmatter.description}</p>
                </div>
              </Link>
            </Fragment>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(projects-list)/"  }},
      sort: { fields: frontmatter___title, order: ASC }
    ) {
      nodes {
        frontmatter {
          stack
          title
          image
          projectLink
          description
        }
        id
      }
    }
  }
`
```
#### 3. my-articles.js page:
Import the plugins Fragement and Link from React JS, Helmet from Gatsby, graphql for the database management and the Layout.js component.

Then, in the bottom, create a function to get the data from the "articles" folder.

And then, just like in the "my-projects.js" file, create the inteface inside of "Return ()" that will use the data and provide a list of all the articles.
```
import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

const Articles = ({ data }) => {
  console.log(data)
  const articles = data.articles.nodes

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Articles - Saad Shaikh</title>
      </Helmet>
      <div className="list-page">
        <h2>My Articles</h2>
        <div className="list">
          {articles.map(article => (
            <Fragment key={article.id}>
              <Link to={article.frontmatter.slug}>
                <div className="list-card">
                  <h4 className="two-lines">{article.frontmatter.title}</h4>
                  <p>Date: {article.frontmatter.date}</p>
                </div>
              </Link>
            </Fragment>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Articles

export const query = graphql`
  query ArticlesPage {
    articles: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(articles)/"  }},
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          date
          slug
          projectLink
        }
        id
      }
    }
  }
`
```
#### 4. 404.js page:
This is the simplest page. You only need to provide two lines of information and increase the font size via CSS.
```
import React from 'react'
import Layout from '../components/Layout'

const the404Page = () => {
  return (
    <Layout>
      <div className="four-o-four">
        <strong>404 error</strong>
        <p>Sorry, this page does not exist.</p>
      </div>
    </Layout>
  )
}

export default the404Page
```

### 
(to be completed..)
