import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function BootstrapGrids() {

    return (
        <>
            {/* @ts-ignore */}
            <Container id="wd-bs-grid-system">
                <h2>Bootstrap</h2>
                <h2>Grid system</h2>

                {/* @ts-ignore */}
                <Row>
                    {/* @ts-ignore */}
                    <Col className="bg-danger text-white">
                        <h3>Left half</h3>
                    </Col>
                    {/* @ts-ignore */}
                    <Col className="bg-primary text-white">
                        <h3>Right half</h3>
                    </Col>
                </Row>

                {/* @ts-ignore */}
                <Row>
                    {/* @ts-ignore */}
                    <Col xs={4} className="bg-warning">
                        <h3>One third</h3>
                    </Col>
                    {/* @ts-ignore */}
                    <Col xs={8} className="bg-success text-white">
                        <h3>Two thirds</h3>
                    </Col>
                </Row>

                {/* @ts-ignore */}
                <Row>
                    {/* @ts-ignore */}
                    <Col xs={2} className="bg-black text-white">
                        <h3>Sidebar</h3>
                    </Col>
                    {/* @ts-ignore */}
                    <Col xs={8} className="bg-secondary text-white">
                        <h3>Main content</h3>
                    </Col>
                    {/* @ts-ignore */}
                    <Col xs={2} className="bg-info">
                        <h3>Sidebar</h3>
                    </Col>
                </Row>
            </Container>

            {/* Responsive Grid System */}
            {/* @ts-ignore */}
            <Container id="wd-bs-responsive-grids">
                <br/><br/><br/>
                <h2>Responsive grid system</h2>
                {/* @ts-ignore */}
                <Row>
                    {/* @ts-ignore */}
                    <Col xs={12} md={6} xl={3} className="bg-warning">
                        <h3>Column A</h3>
                    </Col>
                    {/* @ts-ignore */}
                    <Col xs={12} md={6} xl={3} className="bg-primary text-white">
                        <h3>Column B</h3>
                    </Col>
                    {/* @ts-ignore */}
                    <Col xs={12} md={6} xl={3} className="bg-danger text-white">
                        <h3>Column C</h3>
                    </Col>
                    {/* @ts-ignore */}
                    <Col xs={12} md={6} xl={3} className="bg-success text-white">
                        <h3>Column D</h3>
                    </Col>
                </Row>
            </Container>

            {/* Responsive dramatic Grid System */}
            {/* @ts-ignore */}
            <Container id="wd-bs-responsive-dramatic">
                <br/><br/><br/>
                <h2>Responsive grid system</h2>
                {/* @ts-ignore */}
                <Row>
                    {/* @ts-ignore */}
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                         className="bg-warning">
                        <h4>1</h4></Col>
                    {/* @ts-ignore */}
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                         className="bg-primary text-white">
                        <h4>2</h4></Col>
                    {/* @ts-ignore */}
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                         className="bg-danger text-white">
                        <h4>3</h4></Col>
                    {/* @ts-ignore */}
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                         className="bg-success text-white">
                        <h4>4</h4></Col>
                    {/* @ts-ignore */}
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                         className="bg-warning">
                        <h4>5</h4></Col>
                    {/* @ts-ignore */}
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                         className="bg-primary text-white">
                        <h4>6</h4></Col>
                    {/* @ts-ignore */}
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                         className="bg-danger text-white">
                        <h4>7</h4></Col>
                    {/* @ts-ignore */}
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                         className="bg-success text-white">
                        <h4>8</h4></Col>
                    {/* @ts-ignore */}
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}className="bg-warning">
                        <h4>9</h4></Col>
                    {/* @ts-ignore */}
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                         className="bg-primary text-white">
                        <h4>10</h4></Col>
                    {/* @ts-ignore */}
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                         className="bg-danger text-white">
                        <h4>11</h4></Col>
                    {/* @ts-ignore */}
                    <Col  xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                          className="bg-success text-white">
                        <h4>12</h4>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
