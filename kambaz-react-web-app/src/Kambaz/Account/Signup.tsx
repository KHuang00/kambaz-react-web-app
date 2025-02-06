import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
export default function Signup() {
    return (
        <div id="wd-signup-screen">
            <h3>Sign up</h3>
            {/*<input placeholder="username" className="wd-username" /><br/>*/}
            {/*<input placeholder="password" type="password" className="wd-password" /><br/>*/}
            <Form.Control id="wd-username"
                          placeholder="username"
                          type="username"
                          className="mb-2"/>
            <Form.Control id="wd-password"
                          placeholder="password" type="password"
                          className="mb-2"/>
            <Form.Control id="wd-password-verify"
                          placeholder="verify password" type="password"
                          className="mb-2"/>

            {/*<input placeholder="verify password" type="password" className="wd-password-verify" /><br/><br/>*/}

            <Link  to="/Kambaz/Account/Profile" className="btn btn-primary w-100 mb-2"> Sign up </Link><br />
            <Link  to="/Kambaz/Account/Signin" >Sign in</Link>
        </div>
    );}
