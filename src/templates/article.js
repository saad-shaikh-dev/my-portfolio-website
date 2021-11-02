import React from 'react'
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

const Article = ({ data }) => {
  const post = data.markdownRemark
  const date = post.frontmatter.date

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.frontmatter.title} - Saad Shaikh</title>
      </Helmet>
      <div className="article-page">
        <h2 className="center-text">{post.frontmatter.title}</h2>
        <p className="small bold">Date: {date.substr(8, 2)}.{date.substr(5, 2)}.{date.substr(0, 4)}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div className="text-left">
          {post.frontmatter.sourceCode && <p>Source code: <a className="link" href={post.frontmatter.sourceCode} target="_blank" rel="noreferrer">{post.frontmatter.sourceCode}</a></p>}
          {post.frontmatter.projectLink && <p>Project link: <a className="link" href={post.frontmatter.projectLink} target="_blank" rel="noreferrer">{post.frontmatter.projectLink}</a></p>}
        </div>
      </div>
    </Layout>
  )
}

export default Article

export const query = graphql`
  query ArticlePage ($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        sourceCode
        projectLink
      }
    }
  }
`