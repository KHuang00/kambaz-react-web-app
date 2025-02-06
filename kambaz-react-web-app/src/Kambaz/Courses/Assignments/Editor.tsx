import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

export default function AssignmentEditor() {

    return (
        // @ts-ignore
        <Container  className="mt-4">
            <h3 className="mb-4">Edit Assignment</h3>
            {/* @ts-ignore */}
            <Form>
                {/* @ts-ignore */}
                <Card className="mb-4 p-3">
                    {/* @ts-ignore */}
                    <Form.Group className="mb-3">
                        {/* @ts-ignore */}
                        <Form.Label><strong>Assignment Name</strong></Form.Label>
                        {/* @ts-ignore */}
                        <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
                    </Form.Group>
                    {/* @ts-ignore */}
                    <Form.Group className="mb-3">
                        {/* @ts-ignore */}
                        <Form.Label><strong>Description</strong></Form.Label>
                        {/* @ts-ignore */}
                        <Form.Control
                            as="textarea"
                            rows={6}
                            defaultValue={`The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.
The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
                        />
                    </Form.Group>
                </Card>
                {/* @ts-ignore */}
                <Row>
                    {/* @ts-ignore */}
                    <Col md={4}>
                        {/* @ts-ignore */}
                        <Form.Group className="mb-3">
                            {/* @ts-ignore */}
                            <Form.Label><strong>Points</strong></Form.Label>
                            {/* @ts-ignore */}
                            <Form.Control type="number" defaultValue={100} />
                        </Form.Group>
                    </Col>
                    {/* @ts-ignore */}
                    <Col md={4}>
                        {/* @ts-ignore */}
                        <Form.Group className="mb-3">
                            {/* @ts-ignore */}
                            <Form.Label><strong>Assignment Group</strong></Form.Label>
                            {/* @ts-ignore */}
                            <Form.Select defaultValue="ASSIGNMENTS">
                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                <option value="QUIZZES">QUIZZES</option>
                                <option value="EXAMS">EXAMS</option>
                                <option value="PROJECTS">PROJECTS</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    {/* @ts-ignore */}
                    <Col md={4}>
                        {/* @ts-ignore */}
                        <Form.Group className="mb-3">
                            {/* @ts-ignore */}
                            <Form.Label><strong>Display Grade As</strong></Form.Label>
                            {/* @ts-ignore */}
                            <Form.Select defaultValue="Percentage">
                                <option value="Percentage">Percentage</option>
                                <option value="Complete/Incomplete">Complete/Incomplete</option>
                                <option value="Letter Grade">Letter Grade</option>
                                <option value="Points">Points</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                {/* @ts-ignore */}
                <Card className="p-3 mb-4">
                    {/* @ts-ignore */}
                    <Row>
                        {/* @ts-ignore */}
                        <Col md={6}>
                            {/* @ts-ignore */}
                            <Form.Group className="mb-3">
                                {/* @ts-ignore */}
                                <Form.Label><strong>Submission Type</strong></Form.Label>
                                {/* @ts-ignore */}
                                <Form.Select defaultValue="Online">
                                    <option value="Online">Online</option>
                                    <option value="On Paper">On Paper</option>
                                    <option value="External Tool">External Tool</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        {/* @ts-ignore */}
                        <Col md={6}>
                            {/* @ts-ignore */}
                            <Form.Group className="mb-3">
                                {/* @ts-ignore */}
                                <Form.Label><strong>Online Entry Options</strong></Form.Label>
                                <div>
                                    {/* @ts-ignore */}
                                    <Form.Check type="checkbox" label="Text Entry" />
                                    {/* @ts-ignore */}
                                    <Form.Check type="checkbox" label="Website URL" />
                                    {/* @ts-ignore */}
                                    <Form.Check type="checkbox" label="Media Recordings" />
                                    {/* @ts-ignore */}
                                    <Form.Check type="checkbox" label="Student Annotation" />
                                    {/* @ts-ignore */}
                                    <Form.Check type="checkbox" label="File Upload" />
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                </Card>
                {/* @ts-ignore */}
                <Card className="p-3 mb-4"> {/* @ts-ignore */}
                    <Row> {/* @ts-ignore */}
                        <Col md={4}> {/* @ts-ignore */}
                            <Form.Group className="mb-3"> {/* @ts-ignore */}
                                <Form.Label><strong>Assign To</strong></Form.Label> {/* @ts-ignore */}
                                <Form.Control type="text" defaultValue="Everyone" />
                            </Form.Group>
                        </Col> {/* @ts-ignore */}
                        <Col md={4}> {/* @ts-ignore */}
                            <Form.Group className="mb-3"> {/* @ts-ignore */}
                                <Form.Label><strong>Due</strong></Form.Label> {/* @ts-ignore */}
                                <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" />
                            </Form.Group>
                        </Col> {/* @ts-ignore */}
                        <Col md={4}> {/* @ts-ignore */}
                            <Form.Group className="mb-3"> {/* @ts-ignore */}
                                <Form.Label><strong>Available From</strong></Form.Label> {/* @ts-ignore */}
                                <Form.Control type="datetime-local" defaultValue="2024-05-06T00:00" />
                            </Form.Group>
                        </Col>
                    </Row> {/* @ts-ignore */}
                    <Row> {/* @ts-ignore */}
                        <Col md={4}> {/* @ts-ignore */}
                            <Form.Group className="mb-3"> {/* @ts-ignore */}
                                <Form.Label><strong>Until</strong></Form.Label> {/* @ts-ignore */}
                                <Form.Control type="datetime-local" defaultValue="2024-05-20T23:59" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Card>

                <div className="d-flex justify-content-end gap-2"> {/* @ts-ignore */}
                    <Button variant="secondary">Cancel</Button> {/* @ts-ignore */}
                    <Button variant="danger">Save</Button>
                </div>
            </Form>
        </Container>
    );
}



