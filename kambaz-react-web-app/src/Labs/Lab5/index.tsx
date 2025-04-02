import { useEffect, useState } from 'react';
import EnvironmentVariables from "./EnvironmentVariables.tsx";
import PathParameters from "./PathParameters.tsx";
import QueryParameters from "./QueryParameters.tsx";
import WorkingWithObjects from "./WorkingWithObjects.tsx";
import WorkingWithArrays from "./WorkingWithArrays.tsx";
import HttpClient from "./HttpClient.tsx";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously.tsx";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously.tsx";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER
export default function Lab5() {
    const [welcomeMessage, setWelcomeMessage] = useState('Loading welcome message...');

    useEffect(() => {
        fetch(`${REMOTE_SERVER}/lab5/welcome`)
            .then(response => response.text())
            .then(message => {
                setWelcomeMessage(message);
            })
            .catch(error => {
                console.error('Failed to fetch welcome message:', error);
                setWelcomeMessage('Welcome');
            });
    }, []);

    return (
        <div id="wd-lab5">
            <h2>Lab 5</h2>
            <div className="list-group">
                <div className="list-group-item">{welcomeMessage}</div>
                <a href={`${REMOTE_SERVER}/lab5/welcome`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View Directly on Server
                </a>
            </div><hr/>
            <EnvironmentVariables/>
            <PathParameters/>
            <QueryParameters/>
            <WorkingWithObjects/>
            <WorkingWithArrays/>
            <HttpClient/>
            <WorkingWithObjectsAsynchronously/>
            <WorkingWithArraysAsynchronously/>
        </div>
    );
}
