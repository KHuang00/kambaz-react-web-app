import { Routes, Route } from "react-router";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import AccountNavigation from "./Navigation";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Users from "./Users.tsx";

export default function Account() {
    const { currentUser } = useSelector((state: any) => state.account);
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate("/Kambaz/Account/Signin");
        }
    }, [currentUser, navigate]);
    return (
        <div id="wd-account-screen">
            <table>
                <tr>
                    <td valign="top">
                        <AccountNavigation />
                    </td>
                    <td valign="top">
                        <Routes>
                            {/*<Route path="/"        element={<Navigate to="/Kambaz/Account/Signin" />} />*/}
                            {/*<Route path="/" element={<Navigate to={ currentUser ? "/Kambaz/Account/Profile" : "/Kambaz/Account/Signin" }/>}/>*/}

                            <Route path="/Signin"  element={<Signin />} />
                            <Route path="/Profile" element={<Profile />} />
                            <Route path="/Signup"  element={<Signup />} />
                            <Route path="/Users" element={<Users />} />


                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    );}


