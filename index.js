import React, { useState } from "react";
import "./Shortner.css";
import axios from "axios";
import { AiOutlineCopy, AiOutlineStop } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Helmet, HelmetProvider } from "react-helmet-async";

const helmetContext = {};

function Shortner() {
    const [url, setUrl] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    // const [tempUrl, settempUrl] = useState("");
    const [copied, setCopied] = useState(false);

    // Checking If It's A Url
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

    // shortner api
    const shortItApi = (url) => {
        setLoading(true);
        axios
            .get(`https://api.shrtco.de/v2/shorten?url=${url}`)
            .then((result) => {
                setCopied(false);
                setError(false);

                const data = result.data.result.full_short_link;
                setResult(data);
                setLoading(false);
            })
            .catch((error) => {
                // console.error("something went wrong");
                setError(true);
                setLoading(false);
                console.clear();
            });
    };

    // api calling
    const shortIt = () => {
        url !== "" ? shortItApi(url) : setError(true);
        // url !== "" && validURL(url) ? shortItApi(url) : setError(true);
        setUrl("");
    };

    // Copy Handler

    const linkCopy = () => {
        const text = result;
        const element = document.createElement("textarea");
        document.body.appendChild(element);
        element.value = text;
        element.select();
        document.execCommand("copy");
        document.body.removeChild(element);
        setCopied(true);
        // copyText();
    };

    // rendering
    return (
        <div className="row ">
            <HelmetProvider context={helmetContext}>
                <Helmet>
                    <title>Url Shortener</title>
                    <meta name="description" content="Fastest Url Shortener" />
                    <meta
                        name="keywords"
                        content="url, short, longurl, urltrim, urlshortener, longurltoshorturl, makeurlsmall"
                    />
                </Helmet>
                <div className="container">
                    <div className="col-12 col-8 searchBox">
                        {/* added form for "Enter" key press */}
                        <form
                            action=""
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        >
                            <div className="title">
                                <h1 className="h1Field">Url Shortener</h1>
                            </div>
                            <div>
                                {/* <input
                                value={url}
                                className="txtField"
                                placeholder="Enter the url here"
                                type="text"
                                onChange={(e) => setUrl(e.target.value)}
                            /> */}

                                <InputGroup size="lg">
                                    <InputGroup.Text id="inputGroup-sizing-lg">URL</InputGroup.Text>
                                    <Form.Control
                                        aria-label="Large"
                                        aria-describedby="inputGroup-sizing-sm"
                                        value={url}
                                        className="txtField"
                                        placeholder="Paste url here"
                                        type="text"
                                        onChange={(e) => setUrl(e.target.value)}
                                        style={{ maxWidth: "800px" }}
                                    />
                                </InputGroup>
                            </div>
                            <br />
                            <div className="copyCat ">
                                <button className="btn btn-primary myBtn" onClick={shortIt}>
                                    Short It
                                </button>
                                <br /> <br />
                                <div>
                                    {loading ? (
                                        <h3>
                                            Shortening...
                                            <GiSandsOfTime />
                                        </h3>
                                    ) : (
                                        <h3 id="result">
                                            {!error ? result : "Check the Url Which You Entered"}
                                            {result !== "" && !error && (
                                                <AiOutlineCopy onClick={linkCopy} className="myCopy" />
                                            )}

                                            {error && <AiOutlineStop className="myStop" />}
                                        </h3>
                                    )}
                                </div>
                                {copied && !loading && !error && <h6 className="copied">URL Copied</h6>}
                            </div>
                        </form>
                    </div>
                </div>
            </HelmetProvider>
        </div>
    );
}

export default Shortner;
