import "./index.css";

import BackgroundColors from "./BackgroundColors.tsx";
import ForegroundColors from "./ForegroundColors.tsx";
import Borders from "./Borders.tsx";
import Padding from "./Padding.tsx";
import Margins from "./Margins.tsx";
import Corners from "./Corners.tsx";
import Dimensions from "./Dimensions.tsx";
import Positions from "./Positions.tsx";
import Zindex from "./Zindex.tsx";
import Float from "./Float.tsx";
import GridLayout from "./GridLayout.tsx";
import Flex from "./Flex.tsx";
import ReactIconsSampler from "./ReactIcons.tsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BootstrapGrids from "./BootstrapGrids.tsx";
import ScreenSizeLabel from "./ScreenSizeLabel.tsx";
import BootstrapTables from "./BootstrapTables.tsx";
import BootstrapLists from "./BootstrapLists.tsx";
import BootstrapForms from "./BootstrapForms.tsx";
import BootstrapNavigation from "./BootstrapNavigation.tsx";

export default function Lab2() {

    return (
        // @ts-expect-error
        <Container>
            {/* @ts-ignore */}
            <Row>
                {/* @ts-ignore */}
                <Col id="wd-lab2">
                    <h2>Lab 2 - Cascading Style Sheets</h2>
                    <h3>Styling with the STYLE attribute</h3>
                    <p>
                        Style attribute allows configuring look and feel
                        right on the element. Although it's very convenient,
                        it is considered bad practice and you should avoid
                        using the style attribute.
                    </p>
                </Col>
            </Row>
            {/* @ts-ignore */}
            <Row>
                {/* @ts-ignore */}
                <Col id="wd-lab2">
                    <div id="wd-css-class-selectors">
                        <h3>Class selectors</h3>
                        <p className="wd-class-selector">
                            Instead of using IDs to refer to elements, you can use an element's CLASS attribute.
                        </p>
                        <h4 className="wd-class-selector">
                            This heading has the same style as the paragraph above.
                        </h4>
                    </div>
                </Col>
            </Row>
            {/* @ts-ignore */}
            <Row>
                {/* @ts-ignore */}
                <Col id="wd-css-document-structure">
                    <div className="wd-selector-1">
                        <h3>Document structure selectors</h3>
                        <div className="wd-selector-2">
                            Selectors can be combined to refer to elements in particular places in the document.
                            <p className="wd-selector-3">
                                This paragraph's red background is referenced as
                                <br />
                                .selector-2 .selector3<br />
                                meaning the descendant of some ancestor.<br />
                                <span className="wd-selector-4">
                                    Whereas this span is a direct child of its parent.
                                </span><br />
                                You can combine these relationships to create specific
                                styles depending on the document structure.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
            {/* @ts-ignore */}

            <Row>
                {/* @ts-ignore */}
                <Col>
                    <ForegroundColors />
                    <BackgroundColors />
                    <Borders />
                    <Padding />
                    <Margins />
                    <Corners />
                    <Dimensions />
                    <Positions />
                    <Zindex />
                    <Float />
                    <GridLayout />
                    <Flex />
                    <ReactIconsSampler />
                    <BootstrapGrids />
                    <ScreenSizeLabel/>
                    <BootstrapTables/>
                    <BootstrapLists/>
                    <BootstrapForms/>
                    <BootstrapNavigation/>
                </Col>
            </Row>
        </Container>
    );
}
