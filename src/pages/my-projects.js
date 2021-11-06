import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"

const Projects = ({ data }) => {
  console.log(data)
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
                <div className="list-card text-left">
                  <h4>{project.frontmatter.title}</h4>
                  <img className="thumbnail" src={project.frontmatter.image} alt={project.frontmatter.title + " image"} />
                  <p><strong>Tools:</strong> <em>{project.frontmatter.stack}</em></p>
                  <p className="two-lines"><strong>Code:</strong> <span className="link">{project.frontmatter.sourceCode}</span></p>
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
          sourceCode
        }
        id
      }
    }
  }
`