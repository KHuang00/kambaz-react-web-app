import {Link, useLocation} from "react-router-dom";
import {BiBook, BiCalendar, BiBox, BiBookContent} from "react-icons/bi";
import {useEffect, useState} from "react";
import {FaUserCircle} from "react-icons/fa";
import "./index.css";
import { FiAirplay } from "react-icons/fi";
export default function KambazNavigation() {

    const location = useLocation();
    const [activeTab, setActiveTab] = useState("");

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location]);


    return (



        <div id="wd-kambaz-navigation" style={{ width: 120 }}
             className="list-group rounded-0 position-fixed start-0 bottom-0 top-0 d-none d-md-block bg-black z-2">

            <a href="https://www.northeastern.edu/"
               id="wd-neu-link"
               target="_blank"
               className="list-group-item bg-black border-0 text-center">
                <img
                    src="/public/images/neu.jpg"
                    alt="Northeastern"
                    className="neu-icon img-fluid"
                />

                <br />
                {/*Northeastern*/}
            </a>

            <Link
                to="/Kambaz/Account"
                className={`list-group-item border-0 text-center p-3 ${
                    activeTab === "/Account" ? "active-link" : "inactive-link"
                }`}
            >
                <FaUserCircle className="fs-1 fa-user-circle" />
                <br />
                Account
            </Link>
            <Link
                to="/Kambaz/Dashboard"
                className={`list-group-item border-0 text-center p-3 ${
                    activeTab === "/Kambaz/Dashboard" ? "active-link" : "inactive-link"
                }`}
            >
                <FiAirplay className="fs-1" />
                <br />
                Dashboard
            </Link>
            <Link
                to="/Kambaz/Dashboard"
                className={`list-group-item border-0 text-center p-3 ${
                    activeTab === "/Kambaz/Courses" ? "active-link" : "inactive-link"
                }`}
            >
                <BiBookContent className="fs-1" />
                <br />
                Courses
            </Link>

            <Link
                to="/Kambaz/Calendar"
                className={`list-group-item border-0 text-center p-3 ${
                    activeTab === "/Kambaz/Calendar" ? "active-link" : "inactive-link"
                }`}
            >
                <BiCalendar className="fs-1" />
                <br />
                Calendar
            </Link>

            <Link
                to="/Kambaz/Inbox"
                className={`list-group-item border-0 text-center p-3 ${
                    activeTab === "/Kambaz/Inbox" ? "active-link" : "inactive-link"
                }`}
            >
                <BiBox className="fs-1" />
                <br />
                Inbox
            </Link>
            <Link
                to="/Labs"
                className={`list-group-item border-0 text-center p-3 ${
                    activeTab === "/Labs" ? "active-link" : "inactive-link"
                }`}
            >
                <BiBook className="fs-1" />
                <br />
                Labs
            </Link>



            {/*<Link to="/Kambaz/Account" id="wd-account-link"*/}
            {/*      className="list-group-item text-center border-0 bg-black text-white">*/}
            {/*    <FaRegCircleUser className="fs-1 text text-white" /><br />*/}
            {/*    Account</Link>*/}

            {/*<Link to="/Kambaz/Dashboard" id="wd-dashboard-link"*/}
            {/*      className="list-group-item text-center border-0*/}
            {/*      bg-white text-danger">*/}
            {/*    <AiOutlineDashboard className="fs-1 text-danger" /><br />*/}
            {/*    Dashboard</Link>*/}

            {/*<Link to="/Kambaz/Dashboard" id="wd-course-link"*/}
            {/*      className="list-group-item text-white*/}
            {/*      bg-black text-center border-0">*/}
            {/*    <LiaBookSolid className="fs-1 text-danger" /><br />*/}
            {/*    Courses</Link><br/>*/}

            {/*<Link to="/Kambaz/Calendar" id="wd-calendar-link"*/}
            {/*      className="list-group-item text-white bg-primary text-center border-0 p-3 mb-3">*/}
            {/*    <BiCalendar className="fs-1 text-warning" />*/}
            {/*    <br />*/}
            {/*    Calendar</Link><br/>*/}
            {/*<Link to="/Kambaz/Inbox" id="wd-inbox-link"*/}
            {/*      className="list-group-item text-white bg-info text-center border-0 p-3 mb-3">*/}
            {/*    <BiBox className="fs-1 text-warning" />*/}
            {/*    <br />                Inbox</Link><br/>*/}
            {/*<Link to="/Labs" id="wd-labs-link"*/}
            {/*      className="list-group-item text-white bg-success text-center border-0 p-3 mb-3">*/}
            {/*    <BiBook className="fs-1 text-warning" />*/}
            {/*    <br />*/}
            {/*    Labs</Link><br/>*/}
        </div>
    );}
