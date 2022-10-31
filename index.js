let shortUrl;
import axios from "axios";

function shortener(url) {
    // Checking if the url is valid or not
    function validURL(str) {
        const pattern = new RegExp(
            "^(https?:\\/\\/)?" + // protocol
                "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
                "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
                "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
                "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
                "(\\#[-a-z\\d_]*)?$",
            "i"
        ); // fragment locator
        return !!pattern.test(str);
    }

    const checkUrl = validURL(url);

    // If the url is valid then we will send a request to the server
    if (!checkUrl) return "Invalid URL";
    if (checkUrl) {
        axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`).then((res) => {
            shortUrl = res.data.result.full_short_link;
        });
    }

    return shortUrl;
}

module.exports = shortener;
