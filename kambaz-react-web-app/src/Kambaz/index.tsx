import { Navigate, Route, Routes } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./index.css";

export default function Kambaz() {
    return (
        <div id="wd-kambaz">
            {/*<table>*/}
            {/*    <tr>*/}
            {/*        <td valign="top">*/}
                        <KambazNavigation />
                    {/*</td>*/}
                    <div className="wd-main-content-offset p-3">
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard" />} />
                            <Route path="/Account/*" element={<Account />} />
                            <Route path="/Dashboard" element={<Dashboard />} />
                            <Route path="/Courses/:cid/*" element={<Courses />} />
                            <Route path="/Calendar" element={<h1>Calendar</h1>} />
                            <Route path="/Inbox" element={<h1>Inbox</h1>} />
                            <Route path="Help" element={<h3>Help</h3>} />

                        </Routes>
                    </div>
            {/*    </tr>*/}
            {/*</table>*/}
        </div>
    );}
