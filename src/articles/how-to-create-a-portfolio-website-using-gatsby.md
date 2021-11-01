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
    - project pages
- articles' list page
    - article pages

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