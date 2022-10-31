# Url-shortener-package for Reactjs

A simple npm package to shorten your long urls to short url

#Installation

`npm i shortmyurl`

`yarn add shortmyurl`

`pnpm add shortmyurl`

```
#Usage 1


import shortener from "../node_modules/shortmyurl/";
async function shortenUrl() {
        const shortenedUrl = await shortener("https://www.fb.com");
    }



#Usage 2

import shortener from "../node_modules/shortmyurl/";

const shortenedUrl = shortener("https://www.fb.com").then((res) => {
       const shortenedUrl = res;
    });
```
