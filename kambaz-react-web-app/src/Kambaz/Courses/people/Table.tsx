import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
    return (
        <div id="wd-people-table">
            {/* @ts-ignore */}
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
                <tr>
                    <td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Tony</span>{" "}
                        <span className="wd-last-name">Stark</span>
                    </td>
                    <td className="wd-login-id">001234561S</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-01</td>
                    <td className="wd-total-activity">10:21:32</td>
                </tr>
                <tr>
                    <td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Lily</span>{" "}
                        <span className="wd-last-name">Wayne</span>
                    </td>
                    <td className="wd-login-id">001234562L</td>
                    <td className="wd-section">S102</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-02</td>
                    <td className="wd-total-activity">12:45:10</td>
                </tr>
                <tr>
                    <td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Bruce</span>{" "}
                        <span className="wd-last-name">Wayne</span>
                    </td>
                    <td className="wd-login-id">001234563B</td>
                    <td className="wd-section">S103</td>
                    <td className="wd-role">INSTRUCTOR</td>
                    <td className="wd-last-activity">2020-10-03</td>
                    <td className="wd-total-activity">15:30:00</td>
                </tr>
                <tr>
                    <td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Gongxifacai</span>{" "}
                        <span className="wd-last-name"></span>
                    </td>
                    <td className="wd-login-id">001234564G</td>
                    <td className="wd-section">S104</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-04</td>
                    <td className="wd-total-activity">08:15:20</td>
                </tr>
                <tr>
                    <td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Hongbaonalai</span>{" "}
                        <span className="wd-last-name"></span>
                    </td>
                    <td className="wd-login-id">001234565H</td>
                    <td className="wd-section">S105</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-05</td>
                    <td className="wd-total-activity">09:50:45</td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
}
