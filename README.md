# Url-shortener-package

A simple npm package to shorten your long urls to short url for nodejs
Fetch function used in this library is currently in experiemental.so you have to run in experimental mode to make the library works fine.

#Installation

`npm i urlshorty`

`yarn add urlshorty`

`pnpm add urlshorty`

```
#Usage 1


const url = require("urlshorty");
async function shortenUrl() {
        const shortenedUrl = await shortener("https://www.fb.com");
    }



#Usage 2

const url = require("urlshorty");
const shortenedUrl = shortener("https://www.fb.com").then((res) => {
       const shortenedUrl = res;
    });
```

#How to run

```
node --experimental-fetch packagename.js
```
