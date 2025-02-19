import { Link, useLocation } from "react-router-dom";
import { BiBook, BiCalendar, BiBox, BiBookContent } from "react-icons/bi";
import { LuCircleUser } from "react-icons/lu";
import { FiAirplay } from "react-icons/fi";
import "./index.css";

export default function KambazNavigation() {
    const { pathname } = useLocation();

    const links = [
        { label: "Dashboard", path: "/Kambaz/Dashboard", icon: FiAirplay },
        { label: "Courses", path: "/Kambaz/Dashboard", icon: BiBookContent },
        { label: "Calendar", path: "/Kambaz/Calendar", icon: BiCalendar },
        { label: "Inbox", path: "/Kambaz/Inbox", icon: BiBox },
        { label: "Labs", path: "/Labs", icon: BiBook },
    ];

    return (
        <div
            id="wd-kambaz-navigation"
            style={{ width: 120 }}
            className="list-group rounded-0 position-fixed start-0 bottom-0 top-0 d-none d-md-block bg-black z-2"
        >
            {/* Northeastern Link */}
            <a
                href="https://www.northeastern.edu/"
                id="wd-neu-link"
                target="_blank"
                rel="noopener noreferrer"
                className="list-group-item bg-black border-0 text-center"
            >
                <img src="/images/neu.jpg" alt="Northeastern" className="neu-icon img-fluid" />
            </a>


            <Link
                to="/Kambaz/Account"
                className={`list-group-item border-0 text-center p-3 ${
                    pathname.startsWith("/Kambaz/Account") ? "active-link" : "inactive-link"
                }`}
            >
                <LuCircleUser  className="fs-1 fa-user-circle" />
                <br />
                Account
            </Link>

            {links.map(({ label, path, icon: Icon }) => (
                <Link
                    key={path}
                    to={path}
                    className={`list-group-item border-0 text-center p-3 ${
                        pathname.includes(label) ? "active-link" : "inactive-link"
                    }`}
                >
                    <Icon className="fs-1" />
                    <br />
                    {label}
                </Link>
            ))}
        </div>
    );
}
