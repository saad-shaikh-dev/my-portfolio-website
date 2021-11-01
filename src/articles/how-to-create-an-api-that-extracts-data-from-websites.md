---
title: How to create an API that extracts data from websites
date: 22.10.2021
slug: how-to-create-an-api-that-extracts-data-from-websites
sourceCode: https://gitlab.com/saad.shaikh/renewable-energy-news-api
projectLink: https://renewable-energy-news-api.herokuapp.com/
---

Hi, I am an aspiring we developer and I am going to show you how to create an API that aggregates data from various websites.

I will be using Node JS with the extensions axios, cheerio and express as well as nodemon for the development phase.

So here goes..

First, you make sure you have NodeJS installed. In order to do this, open a terminal and type the following command:

```
sudo apt install nodejs
```

This command, checks if node is already installed. If it is, then it will tell you so, otherwise it will install it.

After that, you create a folder with the name of you API application. Mine is called “renewable-energy-news-api” in my desktop.

Then you navigate to the folder from the terminal using the command “cd [folder-address]”. Since mine is in the desktop I typed “cd Desktop/renewable-energy-news-api”.

Once you are in the newly created folder, you need to start installing some things. First, I suggest you open the project folder in your IDE of choice so you can see what’s happening.

The first thing you install is the package.json file. This file contains all the relevant information about the project. You can also use this file to create some command line shortcuts which are called scripts.

To install package.json, type “npm init” in the command line. As you may have noticed, I’m using the command line a lot. This is because it gets things done much faster. Anyway, once you have typed “npm init” and hit enter, you will be asked to fill up the details about the project. You can fill it up the way you want to. The only important part to fill is the “entry point”. Here you have to specify the name of the main file where all of your code will be and where all the other files will point to. Since this file does not exits yet, you can name it anything you want. I plan using the default name index.js, so I just hit enter the let the package.json file get created.

Now, we need to install some extensions. The extension we are going to install are axios, cheerio, express and nodemon. Axios is used to fetch data from a source, cheerio manipulates data structures, express connects nodejs to a server and nodemon automatically refreshes the application in the local server whenever we make any change to the back end code without needing to close and restart the server.

The syntax to install extensions from the command line is “npm install [extension-name]” or the shorter version “npm i [extension-name]”. You can also install multiple extensions simultaneously by leaving a space between each extension name. So I typed “npm i axios cheerio express nodemon” and hit enter, and voila, all the extensions were installed.

Now, let’s create a script to start the application locally so that we can see what it looks like before it is deployed. For that, you write the below code in the scripts property of the package.json file:

```
"start": "nodemon index.js"
```

Alrighty, so let’s get to the meat of this project then. Now, we finally create the index.js file I was talking about before. Once you have created it, we can start coding.

In the index.js file, the first thing we do is import the extension we have installed and give it a local name. The syntax for that is “const [extension-local-name] = require(“[extension-name]”). Let’s type in the below code in the file:

```
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
```

Next, you want to add the port to which the app will be deployed to. There will be two ports. One for local hosting (I will be using 5006) and one for the actual deployment. So you add:

```
const port = process.env.PORT || 5006;
```

Now, you need to create a list of sources from where to get the news about renewable energy. For that, create an object called “newsSources” containing the details about these various news organizations:

```
const newsSources = [
    {
        name: "telegraph",
        domain: "https://www.telegraph.co.uk",
        url: "https://www.telegraph.co.uk/renewable-energy/",
    },
    {
        name: "the-guardian",
        domain: "https://www.theguardian.com",
        url: "https://www.theguardian.com/environment/renewableenergy",
    },
    {
        name: "the-times",
        domain: "https://www.thetimes.co.uk",
        url: "https://www.thetimes.co.uk/search?source=search-page&q=renewable",
    },
    {
        name: "al-jazeera",
        domain: "https://www.aljazeera.com",
        url: "https://www.aljazeera.com/search/renewable"
    },
    {
        name: "recharge-news",
        domain: "https://www.rechargenews.com",
        url: "https://www.rechargenews.com/"
    },
    {
        name: "renewables-now",
        domain: "https://renewablesnow.com/news",
        url: "https://renewablesnow.com/"
    },
    {
        name: "science-daily",
        domain: "https://www.sciencedaily.com",
        url: "https://www.sciencedaily.com/search/?keyword=renewable#gsc.tab=0&gsc.q=renewable&gsc.page=1"
    },
    {
        name: "renewable-energy-magazine",
        domain: "https://www.renewableenergymagazine.com",
        url: "https://www.renewableenergymagazine.com/search?cx=partner-pub-7794467828055047%3A8692188386&cof=FORID%3A9&ie=UTF-8&q=renewable"
    },
    {
        name: "world-energy-news",
        domain: "https://www.worldenergynews.com",
        url: "https://www.worldenergynews.com/news/search?search=renewable"
    }
];
```

After that, you create a blank array to which will then store an object that holds all the latest renewable energy related news that has been extracted from the news sources listed in the “newsSources” object. I will call it “news”:

```
const news = [];
```

Now, you will use express to connect to the server and create pages in the app. The default syntax to use express is “express()” but it is better to create a shorter version of the syntax for local use for faster coding. I will call the shortened form of “express()” as “app”:

```
const app = express();
```

There will be three page types in the app,:

- The home page — this page gives a brief description about the application.
- The news page — this page contains all the news about renewable energy from the various news sources.
- The news pages from individual sources — these pages will contain renewable energy related news from the individual sources.

We will create each page using a get request in express and then displaying the contents of the page in json format.

First, let’s create the home page. Mine will be a simple page that briefly describes the purpose of the site and provides a link to the news page. Obviously, you use the address “/” for this page. As you can see below, the link I entered is to the actual deployed app. However, since It does not exist yet for you, you can use the link “http://localhost:5006/news” instead.

```
app.get("/", (action, reaction) => {
    reaction.json(`Hi, my name is Saad Shaikh and this is the climate change news API. Go to the link 'https://climate-change-feed-api.herokuapp.com/news' to get your news updates`);
});
```

Next, you need to create the news page. This is the most important page in the application. I will use the address “/news” for this page but you can name it whatever you want. First, you create a get request with the address “/news” (or anything else that you prefer). Then, you use the Javascript map function on the “newsSources” object to map through the verious news organisations and name each individual one “newsSource” (in case you can’t see it, it does not have an “s”). After that, you will use axios to connect to the urls in those news sources. These are the steps for using axios:

- Use the “get” request in axios to extract the website url of the individual news source from the “url” property in the object.
- Use the “then” function to use the cheerio extension to extract all the links containing the word “renewable” and using its text and links to be added to the “news” array. You will also need to add a function to add the domain name to any of the links that just start with “/”.
- Use the “catch” function to log any errors.

Lastly, you convert the now filled up “news” array of object into JSON.

```
app.get("/news", (action, reaction) => {
    newsSources.map(newsSource =>
        axios
            .get(newsSource.url)
            .then(response => {
                const html = response.data;
                const $ = cheerio.load(html);
                $('a:contains("renewable")', html).each(function () {
                    const title = $(this).text();
                    const url = $(this).attr("href");
                    const link = () => url.startsWith("/") ? newsSource.domain + url : url
                    news.push({ title, url: link(), source: newsSource.name });
                });
            })
            .catch(err => console.log(err))
    );
    reaction.json(news);
});
```

The last page request that is left to create now are the news pages from individual news sources. It is similar to the previous express request but you will also need to create separate Ids for each page and use the “params” function to get the data only from the individual sources.

```
app.get("/news/:newsSourceId", (req, res) => {
    const newsSourceId = req.params.newsSourceId;
    const newsSourceAddress = newsSources.filter(
        newsSource => newsSource.name == newsSourceId
    )[0].url;
    axios
        .get(newsSourceAddress)
        .then(response => {
            const html = response.data;
            const $ = cheerio.load(html);
            const specificArticles = [];
            $('a:contains("renewable")', html).each(function () {
                const title = $(this).text();
                const url = $(this).attr("href");
                /*   const link = () => url.startsWith("/") ? newsSourceAddress.domain + url : url */
                specificArticles.push({ title, url, source: newsSourceId });
            });
            res.json(specificArticles)

        })
        .catch(err => console.log(err));
});
```

Yay! you’ve created all the pages.

Finally, the last piece of code you need to write is an express function to listen to all the above code and connect it to the actual ports that were shown in the beginning. This is how you do it:

```
app.listen(port, () => console.log(`server running on port ${port}`));
```

Now let’s test if everything is working properly. Just type “npm start” in the terminal in your IDE (remember the script we had created?) and you application will open in “http://localhost:5006/”. Go through the app to see if everything functions as intended. If it does, then we’re done.

And that’s it. You have created an API that gets news related to renewable energy from various sources. Congratulations :).

Now you are free to deploy your application to the hosting provider of your choice. I will write another article in the future on how to deploy applications to various hosting providers.

Till then, take care.