import {Link, useLocation} from "react-router-dom";
import { Nav } from "react-bootstrap";
import {useEffect, useState} from "react";
export default function TOC() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("/Labs");
    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location]);

    // return (
        // <ul>
        //     <li>
        //         <Link to="/Labs" id="wd-a">
        //             {" "}
        //             Labs{" "}
        //         </Link>
        //     </li>
        //     <li>
        //         <Link to="/Labs/Lab1" id="wd-a1">
        //             Lab 1
        //         </Link>
        //     </li>
        //     <li>
        //         <Link to="/Labs/Lab2" id="wd-a2">
        //             Lab 2
        //         </Link>
        //     </li>
        //     <li>
        //         <Link to="/Labs/Lab3" id="wd-a3">
        //             Lab 3
        //         </Link>
        //     </li>
        //     <li>
        //         <Link to="/Kambaz" id="wd-a4">
        //             Kambaz
        //         </Link>
        //     </li>
        // </ul>
        // <nav className="toc-container">
        //
        //     <ul className="menu-item-list">
        //         <li><Link to="/Labs" id="wd-a">Labs</Link></li>
        //         <li><Link to="/Labs/Lab1" id="wd-a1">Lab 1</Link></li>
        //         <li><Link to="/Labs/Lab2" id="wd-a2">Lab 2</Link></li>
        //         <li><Link to="/Labs/Lab3" id="wd-a3">Lab 3</Link></li>
        //         <li><Link to="/Kambaz" id="wd-a4">Kambaz</Link></li>
        //         <li>My Name: Katharine Huang <br/> Section:  Spring 2025</li>
        //         <li>
        //             <a href="https://github.com/KHuang00/kambaz-react-web-app/tree/main" target="_blank" rel="noopener noreferrer">
        //                 GitHub Link
        //             </a>
        //         </li>
        //     </ul>
        // </nav>



    // @ts-ignore
    return (
        <div className="toc-container">
            <h2 className="text-center">Table of Contents</h2>

            {/* @ts-ignore */}
            <Nav variant="pills" className="justify-content-center custom-nav">
                {/* @ts-ignore */}
                <Nav.Item>
                    {/* @ts-ignore */}
                    <Nav.Link
                        // @ts-ignore
                        as={Link}
                        to="/Labs"
                        active={activeTab === "/Labs/AllLabs"}

                    >
                        Labs
                    </Nav.Link>
                </Nav.Item>
                {/* @ts-ignore */}
                <Nav.Item>
                    {/* @ts-ignore */}
                    <Nav.Link
                        // @ts-ignore
                        as={Link}
                        to="/Labs/Lab1"
                        // active={activeTab === "/Labs/Lab1"}
                        active={activeTab.includes("Lab1")}
                    >
                        Lab 1
                    </Nav.Link>
                </Nav.Item>
                {/* @ts-ignore */}
                <Nav.Item>
                    {/* @ts-ignore */}
                    <Nav.Link
                        // @ts-ignore
                        as={Link}
                        to="/Labs/Lab2"
                        // active={activeTab === "/Labs/Lab2"}
                        active={activeTab.includes("Lab2")}
                    >
                        Lab 2
                    </Nav.Link>
                </Nav.Item>
                {/* @ts-ignore */}
                <Nav.Item>
                    {/* @ts-ignore */}
                    <Nav.Link
                        // @ts-ignore
                        as={Link}
                        to="/Labs/Lab3"
                        // active={activeTab === "/Labs/Lab3"}
                        active={activeTab.includes("Lab3")}
                    >
                        Lab 3
                    </Nav.Link>
                </Nav.Item>
                {/* @ts-ignore */}
                <Nav.Item>
                    {/* @ts-ignore */}
                    <Nav.Link
                        // @ts-ignore
                        as={Link}
                        to="/Kambaz"
                        active={activeTab === "/Kambaz"}
                    >
                        Kambaz
                    </Nav.Link>
                </Nav.Item>
                {/* @ts-ignore */}
                <Nav.Item>
                    {/* @ts-ignore */}
                    <Nav.Link
                        href="https://github.com/KHuang00/kambaz-react-web-app/tree/main"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub Link
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            {/* Extra Info Section */}
            <div className="extra-info text-center mt-4">
                <p>
                    <strong>My Name:</strong> Katharine Huang <br />
                    <strong>Section:</strong> Spring 2025
                </p>
            </div>
        </div>

);}