﻿# url-shortener-package

A simple npm package to shorten your long urls to short url

#Installation

`npm i shortener`

`yarn add shortener`

````
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





````
