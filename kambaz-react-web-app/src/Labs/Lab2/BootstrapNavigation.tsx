import {Button, Nav, Card} from "react-bootstrap";
import "./index.css";

export default function BootstrapNavigation() {
    return (
        <>
            <div id="wd-css-navigating-with-tabs">
                <br/><br/><br/>
                <h2>Tabs</h2>
                {/* @ts-ignore */}
                <Nav variant="tabs">
                    {/* @ts-ignore */}
                    <Nav.Item>
                        {/* @ts-ignore */}
                        <Nav.Link href="#/Labs/Lab2">Active</Nav.Link>

                    </Nav.Item>
                    {/* @ts-ignore */}
                    <Nav.Item>
                        {/* @ts-ignore */}
                        <Nav.Link href="#/Labs/Lab2/Link1">Link 1</Nav.Link>
                    </Nav.Item>
                    {/* @ts-ignore */}
                    <Nav.Item>
                        {/* @ts-ignore */}
                        <Nav.Link href="#/Labs/Lab2/Link2">Link 2</Nav.Link>
                    </Nav.Item>
                    {/* @ts-ignore */}
                    <Nav.Item>
                        {/* @ts-ignore */}
                        <Nav.Link href="#/Labs/Lab2/Disabled" disabled>Disabled</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>

            <div id="wd-css-navigating-with-cards">
                <h2>
                    Cards
                </h2>
                {/* @ts-ignore */}
                <Card style={{ width: "18rem" }}>
                    {/* @ts-ignore */}
                    <Card.Img variant="top" src="images/stacked.jpg" />
                    {/* @ts-ignore */}
                    <Card.Body>
                        {/* @ts-ignore */}
                        <Card.Title>Stacking Starship</Card.Title>
                        {/* @ts-ignore */}
                        <Card.Text>
                            Stacking the most powerful rocket in history. Mars or bust!
                        </Card.Text>
                        {/* @ts-ignore */}
                        <Button variant="primary">Boldly Go</Button>
                    </Card.Body>
                </Card>
            </div>


        </>
);
}