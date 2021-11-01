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