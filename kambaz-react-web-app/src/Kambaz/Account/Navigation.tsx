import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
    // @ts-ignore
    const currentUser = useSelector(state => state.account?.currentUser || null);

    return (
        <div id="wd-account-navigation">
            {!currentUser && (
                <>
                    <Link to={`/Kambaz/Account/Signin`}> Signin </Link> <br />
                    <Link to={`/Kambaz/Account/Signup`}> Signup </Link> <br />
                </>
            )}
            {currentUser && <Link to={`/Kambaz/Account/Profile`}> Profile </Link>}
        </div>
    );
}
