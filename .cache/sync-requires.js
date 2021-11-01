
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/saad/Desktop/my-projects/my-portfolio-website/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/saad/Desktop/my-projects/my-portfolio-website/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/saad/Desktop/my-projects/my-portfolio-website/src/pages/index.js")),
  "component---src-pages-my-articles-js": preferDefault(require("/home/saad/Desktop/my-projects/my-portfolio-website/src/pages/my-articles.js")),
  "component---src-pages-my-projects-js": preferDefault(require("/home/saad/Desktop/my-projects/my-portfolio-website/src/pages/my-projects.js")),
  "component---src-templates-article-js": preferDefault(require("/home/saad/Desktop/my-projects/my-portfolio-website/src/templates/article.js"))
}

