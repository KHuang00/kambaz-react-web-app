import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import { Route, Routes, Navigate } from "react-router-dom";
import TOC from "./TOC";
export default function Labs() {
    return (
        <div id="wd-labs">
            <h1>Labs</h1>
            <TOC />
            <ul>
                <li>My Name: Katharine Huang <br/> Section:  Spring 2025</li>
                <li>
                    <a href="https://github.com/KHuang00/kambaz-react-web-app/tree/main" target="_blank" rel="noopener noreferrer">
                        GitHub Link
                    </a>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Navigate to="Lab1" />} />
                <Route path="Lab1" element={<Lab1 />} />
                <Route path="Lab2" element={<Lab2 />} />
                <Route path="Lab3" element={<Lab3 />} />
            </Routes>
        </div>
    );
}
