# url-shortener-package

A simple npm package to shorten your long urls to short url

#Installation

`npm i shortener`

`yarn add shortener`


#Usage

```
import shortener from "../node_modules/shortmyurl/";
const url = shortener("https://www.fb.com").then((res) => {
        console.log(res);
    });
    ```
