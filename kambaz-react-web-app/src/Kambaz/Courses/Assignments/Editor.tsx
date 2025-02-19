import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Container, Row, Col, Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { assignments } from "../../Database";

export default function AssignmentEditor() {
    const { courseId, assignmentId } = useParams();

    const assignment = assignments.find((a) => a._id === assignmentId);

    if (!assignment) {
        return (
            // @ts-ignore
            <Container className="mt-4">
                <h3 className="text-danger">Assignment Not Found</h3>
                <p>The requested assignment does not exist.</p>
                {/* @ts-ignore */}
                <Link to={`/Kambaz/Courses/${courseId}/Assignments`} className="btn btn-secondary">
                    Back to Assignments
                </Link>
            </Container>
        );
    }

    return (
        // @ts-ignore
        <Container className="mt-4">
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
                        <Form.Control type="text" defaultValue={assignment.title} />
                    </Form.Group>
                    {/* @ts-ignore */}
                    <Form.Group className="mb-3">
                        {/* @ts-ignore */}
                        <Form.Label><strong>Description</strong></Form.Label>
                        {/* @ts-ignore */}
                        <Form.Control as="textarea" rows={6} defaultValue={`Description of ${assignment.title}`} />
                    </Form.Group>
                </Card>

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
                <Card className="p-3 mb-4">
                    {/* @ts-ignore */}
                    <Row>
                        {/* @ts-ignore */}
                        <Col md={4}>
                            {/* @ts-ignore */}
                            <Form.Group className="mb-3">
                                {/* @ts-ignore */}
                                <Form.Label><strong>Assign To</strong></Form.Label>
                                {/* @ts-ignore */}
                                <Form.Control type="text" defaultValue="Everyone" />
                            </Form.Group>
                        </Col>
                        {/* @ts-ignore */}
                        <Col md={4}>
                            {/* @ts-ignore */}
                            <Form.Group className="mb-3">
                                {/* @ts-ignore */}
                                <Form.Label><strong>Due</strong></Form.Label>
                                {/* @ts-ignore */}
                                <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" />
                            </Form.Group>
                        </Col>
                        {/* @ts-ignore */}
                        <Col md={4}>
                            {/* @ts-ignore */}
                            <Form.Group className="mb-3">
                                {/* @ts-ignore */}
                                <Form.Label><strong>Available From</strong></Form.Label>
                                {/* @ts-ignore */}
                                <Form.Control type="datetime-local" defaultValue="2024-05-06T00:00" />
                            </Form.Group>
                        </Col>
                    </Row>
                    {/* @ts-ignore */}
                    <Row>
                        {/* @ts-ignore */}
                        <Col md={4}>
                            {/* @ts-ignore */}
                            <Form.Group className="mb-3">
                                {/* @ts-ignore */}
                                <Form.Label><strong>Until</strong></Form.Label>
                                {/* @ts-ignore */}
                                <Form.Control type="datetime-local" defaultValue="2024-05-20T23:59" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Card>

                {/* @ts-ignore */}
                <div className="d-flex justify-content-end gap-2">
                    {/* @ts-ignore */}
                    <Link to={`/Kambaz/Courses/${courseId}/Assignments`} className="btn btn-secondary">
                        Cancel
                    </Link>
                    {/* @ts-ignore */}
                    <Link to={`/Kambaz/Courses/${courseId}/Assignments`} className="btn btn-danger">
                        Save
                    </Link>
                </div>
            </Form>
        </Container>
    );
}
