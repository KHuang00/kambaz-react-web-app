import {useEffect, useState} from "react";
// Axios is a popular JavaScript library that React user interface applications can use to communicate with servers using AJAX
// JavaScript Web applications, such as React applications, can communicate with server applications using a technology called AJAX or Asynchronous JavaScript and XML.
// import axios from "axios";
import * as client from "./client";


// const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function HttpClient() {
    const [welcomeOnClick, setWelcomeOnClick] = useState("");
    const [welcomeOnLoad, setWelcomeOnLoad] = useState("");

    const fetchWelcomeOnClick = async () => {
        // const response = await axios.get(`${REMOTE_SERVER}/lab5/welcome`);
        // setWelcomeOnClick(response.data);
        const message = await client.fetchWelcomeMessage();
        setWelcomeOnClick(message);

    };

    const fetchWelcomeOnLoad = async () => {
        const welcome = await client.fetchWelcomeMessage();
        setWelcomeOnLoad(welcome);
    };
    useEffect(() => {
        fetchWelcomeOnLoad();
    }, []);

    return (
        <div>
            <h3>HTTP Client</h3> <hr />
            <h4>Requesting on Click</h4>
            <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>
                Fetch Welcome
            </button> <br />
            Response from server: <b>{welcomeOnClick}</b>

            <h4>Requesting on Load</h4>
            Response from server: <b>{welcomeOnLoad}</b>
            <hr />
        </div>
    );
}
