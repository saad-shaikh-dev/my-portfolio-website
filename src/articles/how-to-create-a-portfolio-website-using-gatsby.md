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
Add configure the plugins in the plugins section"
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
```
There is more to be added to the plugins section but we will add it later so it will be easier for you to understand the function of those two plugins.

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

Before we create the pages, we'll create a css file to store all the styles:
You can find and copy the CSS code from here: 

Now we can start filling up these pages.

#### 1. index.js page:
