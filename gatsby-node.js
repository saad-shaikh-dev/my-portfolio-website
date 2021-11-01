const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query Articles {
            allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/(articles)/"}}) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `)

    data.allMarkdownRemark.edges.forEach(edge => {
        const slug = edge.node.frontmatter.slug
        actions.createPage({
            path: "/my-articles/" + slug,
            component: path.resolve(`./src/templates/article.js`),
            context: { slug: slug }
        })
    })

}