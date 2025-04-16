import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { Table } from "react-bootstrap";
// import PeopleDetails from "./Details";
import {Link} from "react-router-dom";
// import {useParams} from "react-router";

export default function PeopleTable({
                                        users = [],
                                        enrollments = [],
                                        cid
                                    }: {
    users?: any[];
    enrollments?: any[];
    cid: string;
}) {

    // const location = useLocation();

    // Get currentUser from Redux store
    const currentUser = useSelector((state: any) => state.account?.currentUser);
    const isAdmin = currentUser?.role === "ADMIN";

    // const basePath = location.pathname.includes("Courses")
    //     ? `/Kambaz/Courses/${cid}/People`
    //     : `/Kambaz/Account/Users`;

    // Determine which users to show
    const enrolledUsers = isAdmin
        ? users
        : users.filter((usr) =>
            enrollments.some(
                (enrollment) =>
                    enrollment.user === usr._id && enrollment.course === cid
            )
        );


    return (
        <div id="wd-people-table">
            {isAdmin && (
                <div className="mb-2 text-muted">Viewing as Administrator (All Users)</div>
            )}
            {/*@ts-ignore*/}
            <Table striped>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Login ID</th>
                    <th>Section</th>
                    <th>Role</th>
                    <th>Last Activity</th>
                    <th>Total Activity</th>
                </tr>
                </thead>
                <tbody>
                {enrolledUsers.length > 0 ? (
                    enrolledUsers.map((user: any) => (
                        <tr key={user._id}>
                            <Link to={`/Kambaz/Account/Users/${user._id}`} className="text-decoration-none">
                            {/*<Link to={`${basePath}/${user._id}`} className="text-decoration-none">*/}


                            <td className="wd-full-name text-nowrap">
                                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                                    <span className="wd-first-name">{user.firstName}</span>
                                    <span className="wd-last-name">{user.lastName}</span>
                                </td>
                            </Link>
                            <td className="wd-login-id">{user.loginId}</td>
                            <td className="wd-section">{user.section}</td>
                            <td className="wd-role">{user.role}</td>
                            <td className="wd-last-activity">{user.lastActivity}</td>
                            <td className="wd-total-activity">{user.totalActivity}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={6} className="text-center text-muted">No data found</td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    );
}
