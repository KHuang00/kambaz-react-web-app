import {Button, Form, FormControl, FormGroup, FormLabel, FormSelect, InputGroup} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BootstrapForms() {
    return (
        <>
            {/* Forms Section */}
            <div id="wd-css-styling-forms">
                <br /><br /><br />
                <h2>Forms</h2>
                {/* @ts-ignore */}
                <FormGroup className="mb-3" controlId="wd-email">
                    {/* @ts-ignore */}
                    <FormLabel>Email address</FormLabel>
                    {/* @ts-ignore */}
                    <FormControl type="email" placeholder="name@example.com" />
                </FormGroup>
                {/* @ts-ignore */}
                <FormGroup className="mb-3" controlId="wd-textarea">
                    {/* @ts-ignore */}
                    <FormLabel>Example textarea</FormLabel>
                    {/* @ts-ignore */}
                    <FormControl as="textarea" rows={3} />
                </FormGroup>
            </div>

            {/* Dropdowns Section */}
            <div id="wd-css-styling-dropdowns">
                <br /><br /><br />
                <h3>Dropdowns</h3>
                {/* @ts-ignore */}
                <FormSelect defaultValue="default" className="custom-dropdown">
                    <option value="default" disabled>
                        Open this select menu
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </FormSelect>
            </div>

        {/* Switchers */}
            <div id="wd-css-styling-switches">
                <br /><br /><br/>
                <h3>Switches</h3>
                {/* @ts-ignore */}
                <Form.Check type="switch" checked={false} id="wd-switch-1"
                            label="Unchecked switch checkbox input"/>
                {/* @ts-ignore */}
                <Form.Check type="switch" checked={true}  id="wd-switch-2"
                            label="Checked switch checkbox input"/>
                {/* @ts-ignore */}
                <Form.Check type="switch" checked={false} disabled
                            id="custom-switch"
                            label="Unchecked disabled switch checkbox input"/>
                {/* @ts-ignore */}
                <Form.Check type="switch" checked={true} disabled
                            id="custom-switch"
                            label="Checked disabled switch checkbox input"/>
            </div>

            <div id="wd-css-styling-range-and-sliders">
                <br/><br/><br/>
                <h3>Range</h3>
                {/* @ts-ignore */}
                <FormGroup controlId="wd-range1">
                    {/* @ts-ignore */}
                    <FormLabel>Example range</FormLabel>
                    <input
                        type="range"
                        className="form-range"
                        min="0"
                        max="5"
                        step="0.5"
                    />
                </FormGroup>
            </div>

            {/*Addons*/}

            <div id="wd-css-styling-addons">
                <br/><br/><br/>
                <h3>Addons</h3>
                {/* @ts-ignore */}
                <InputGroup className="mb-3">
                    {/* @ts-ignore */}
                    <InputGroup.Text>$</InputGroup.Text>
                    {/* @ts-ignore */}
                    <InputGroup.Text>0.00</InputGroup.Text>
                    {/* @ts-ignore */}
                    <FormControl />
                </InputGroup>
                {/* @ts-ignore */}
                <InputGroup>
                    {/* @ts-ignore */}
                    <FormControl />
                    {/* @ts-ignore */}
                    <InputGroup.Text>$</InputGroup.Text>
                    {/* @ts-ignore */}
                    <InputGroup.Text>0.00</InputGroup.Text>
                </InputGroup>
            </div>

        {/*  Styling responsive forms*/}
            <div id="wd-css-responsive-forms-1">
                <br/><br/><br/>
                <h3>Responsive forms</h3>
                {/* @ts-ignore */}
                <Form.Group as={Row} className="mb-3" controlId="email1">
                    {/* @ts-ignore */}
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    {/* @ts-ignore */}
                    <Col sm={10}>
                        {/* @ts-ignore */}
                        <Form.Control type="email" value="email@example.com" />
                    </Col>
                </Form.Group>
                {/* @ts-ignore */}
                <Form.Group as={Row} className="mb-3" controlId="password1">
                    {/* @ts-ignore */}
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    {/* @ts-ignore */}
                    <Col sm={10}>
                        {/* @ts-ignore */}
                        <Form.Control type="password" />
                    </Col>
                </Form.Group>
                {/* @ts-ignore */}
                <Form.Group as={Row} className="mb-3" controlId="textarea2">
                    {/* @ts-ignore */}
                    <Form.Label column sm={2}>
                        Bio
                    </Form.Label>
                    {/* @ts-ignore */}
                    <Col sm={10}>
                        {/* @ts-ignore */}
                        <Form.Control as="textarea" style={{height: "100px"}}/>
                    </Col>
                </Form.Group>
            </div>


            <div id="wd-css-responsive-forms-2">
                <br/><br/><br/>
                <h3>Responsive forms</h3>
                {/* @ts-ignore */}
                <Form>
                    {/* @ts-ignore */}
                    <Form.Group as={Row} className="mb-3">
                        {/* @ts-ignore */}
                        <Form.Label column sm={2}> Email </Form.Label>
                        {/* @ts-ignore */}
                        <Col sm={10}>
                            {/* @ts-ignore */}
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>
                    {/* @ts-ignore */}
                    <Form.Group as={Row} className="mb-3">
                        {/* @ts-ignore */}
                        <Form.Label column sm={2}> Password </Form.Label>
                        {/* @ts-ignore */}
                        <Col sm={10}>
                            {/* @ts-ignore */}
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <fieldset>
                        {/* @ts-ignore */}
                        <Form.Group as={Row} className="mb-3">
                            {/* @ts-ignore */}
                            <Form.Label as="legend" column sm={2}>
                                Radios </Form.Label>
                            {/* @ts-ignore */}
                            <Col sm={10}>
                                {/* @ts-ignore */}
                                <Form.Check type="radio" label="first radio"
                                            checked name="formHorizontalRadios"/>
                                {/* @ts-ignore */}
                                <Form.Check type="radio" label="second radio"
                                            name="formHorizontalRadios"/>
                                {/* @ts-ignore */}
                                <Form.Check type="radio" label="third radio"
                                            name="formHorizontalRadios"/>
                            </Col>
                        </Form.Group>
                    </fieldset>
                    {/* @ts-ignore */}
                    <Form.Group as={Row} className="mb-3">
                        {/* @ts-ignore */}
                        <Col sm={{ span: 10, offset: 2 }}>
                            {/* @ts-ignore */}
                            <Form.Check label="Remember me" />
                        </Col>
                    </Form.Group>
                    {/* @ts-ignore */}
                    <Form.Group as={Row} className="mb-3">
                        {/* @ts-ignore */}
                        <Col>
                            {/* @ts-ignore */}
                            <Button type="submit">Sign in</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>







        </>
    );
}
