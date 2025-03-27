// import "bootstrap/dist/css/bootstrap.min.css";
// import { Form, Container, Row, Col, Card } from "react-bootstrap";
// import { useParams, Link } from "react-router-dom";
// import { assignments } from "../../Database";
//
// export default function AssignmentEditor() {
//     const { courseId, assignmentId } = useParams();
//
//     const assignment = assignments.find((a) => a._id === assignmentId);
//
//     if (!assignment) {
//         return (
//             // @ts-ignore
//             <Container className="mt-4">
//                 <h3 className="text-danger">Assignment Not Found</h3>
//                 <p>The requested assignment does not exist.</p>
//                 {/* @ts-ignore */}
//                 <Link to={`/Kambaz/Courses/${courseId}/Assignments`} className="btn btn-secondary">
//                     Back to Assignments
//                 </Link>
//             </Container>
//         );
//     }
//
//     return (
//         // @ts-ignore
//         <Container className="mt-4">
//             <h3 className="mb-4">Edit Assignment</h3>
//             {/* @ts-ignore */}
//             <Form>
//                 {/* @ts-ignore */}
//                 <Card className="mb-4 p-3">
//                     {/* @ts-ignore */}
//                     <Form.Group className="mb-3">
//                         {/* @ts-ignore */}
//                         <Form.Label><strong>Assignment Name</strong></Form.Label>
//                         {/* @ts-ignore */}
//                         <Form.Control type="text" defaultValue={assignment.title} />
//                     </Form.Group>
//                     {/* @ts-ignore */}
//                     <Form.Group className="mb-3">
//                         {/* @ts-ignore */}
//                         <Form.Label><strong>Description</strong></Form.Label>
//                         {/* @ts-ignore */}
//                         <Form.Control as="textarea" rows={6} defaultValue={`Description of ${assignment.title}`} />
//                     </Form.Group>
//                 </Card>
//
//                 {/* @ts-ignore */}
//                 <Card className="p-3 mb-4">
//                     {/* @ts-ignore */}
//                     <Row>
//                         {/* @ts-ignore */}
//                         <Col md={6}>
//                             {/* @ts-ignore */}
//                             <Form.Group className="mb-3">
//                                 {/* @ts-ignore */}
//                                 <Form.Label><strong>Submission Type</strong></Form.Label>
//                                 {/* @ts-ignore */}
//                                 <Form.Select defaultValue="Online">
//                                     <option value="Online">Online</option>
//                                     <option value="On Paper">On Paper</option>
//                                     <option value="External Tool">External Tool</option>
//                                 </Form.Select>
//                             </Form.Group>
//                         </Col>
//                         {/* @ts-ignore */}
//                         <Col md={6}>
//                             {/* @ts-ignore */}
//                             <Form.Group className="mb-3">
//                                 {/* @ts-ignore */}
//                                 <Form.Label><strong>Online Entry Options</strong></Form.Label>
//                                 <div>
//                                     {/* @ts-ignore */}
//                                     <Form.Check type="checkbox" label="Text Entry" />
//                                     {/* @ts-ignore */}
//                                     <Form.Check type="checkbox" label="Website URL" />
//                                     {/* @ts-ignore */}
//                                     <Form.Check type="checkbox" label="Media Recordings" />
//                                     {/* @ts-ignore */}
//                                     <Form.Check type="checkbox" label="Student Annotation" />
//                                     {/* @ts-ignore */}
//                                     <Form.Check type="checkbox" label="File Upload" />
//                                 </div>
//                             </Form.Group>
//                         </Col>
//                     </Row>
//                 </Card>
//
//                 {/* @ts-ignore */}
//                 <Card className="p-3 mb-4">
//                     {/* @ts-ignore */}
//                     <Row>
//                         {/* @ts-ignore */}
//                         <Col md={4}>
//                             {/* @ts-ignore */}
//                             <Form.Group className="mb-3">
//                                 {/* @ts-ignore */}
//                                 <Form.Label><strong>Assign To</strong></Form.Label>
//                                 {/* @ts-ignore */}
//                                 <Form.Control type="text" defaultValue="Everyone" />
//                             </Form.Group>
//                         </Col>
//                         {/* @ts-ignore */}
//                         <Col md={4}>
//                             {/* @ts-ignore */}
//                             <Form.Group className="mb-3">
//                                 {/* @ts-ignore */}
//                                 <Form.Label><strong>Due</strong></Form.Label>
//                                 {/* @ts-ignore */}
//                                 <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" />
//                             </Form.Group>
//                         </Col>
//                         {/* @ts-ignore */}
//                         <Col md={4}>
//                             {/* @ts-ignore */}
//                             <Form.Group className="mb-3">
//                                 {/* @ts-ignore */}
//                                 <Form.Label><strong>Available From</strong></Form.Label>
//                                 {/* @ts-ignore */}
//                                 <Form.Control type="datetime-local" defaultValue="2024-05-06T00:00" />
//                             </Form.Group>
//                         </Col>
//                     </Row>
//                     {/* @ts-ignore */}
//                     <Row>
//                         {/* @ts-ignore */}
//                         <Col md={4}>
//                             {/* @ts-ignore */}
//                             <Form.Group className="mb-3">
//                                 {/* @ts-ignore */}
//                                 <Form.Label><strong>Until</strong></Form.Label>
//                                 {/* @ts-ignore */}
//                                 <Form.Control type="datetime-local" defaultValue="2024-05-20T23:59" />
//                             </Form.Group>
//                         </Col>
//                     </Row>
//                 </Card>
//
//                 {/* @ts-ignore */}
//                 <div className="d-flex justify-content-end gap-2">
//                     {/* @ts-ignore */}
//                     <Link to={`/Kambaz/Courses/${courseId}/Assignments`} className="btn btn-secondary">
//                         Cancel
//                     </Link>
//                     {/* @ts-ignore */}
//                     <Link to={`/Kambaz/Courses/${courseId}/Assignments`} className="btn btn-danger">
//                         Save
//                     </Link>
//                 </div>
//             </Form>
//         </Container>
//     );
// }

// import "bootstrap/dist/css/bootstrap.min.css";
// import { Form, Container } from "react-bootstrap";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { updateAssignment } from "./reducer";
//
// export default function AssignmentEditor() {
//     const { courseId, assignmentId } = useParams();
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//
//     // @ts-ignore
//     const assignments = useSelector((state) => state.assignments.assignments);
//     // @ts-ignore
//     const assignment = assignments.find((a) => a._id === assignmentId);
//
//     if (!assignment) {
//         return (
//             // @ts-ignore
//             <Container className="mt-4">
//                 <h3 className="text-danger">Assignment Not Found</h3>
//                 <p>The requested assignment does not exist.</p>
//                 <Link to={`/Kambaz/Courses/${courseId}/Assignments`} className="btn btn-secondary">Back to Assignments</Link>
//             </Container>
//         );
//     }
//
//     {/*@ts-ignore*/}
//     const handleChange = (e) => {
//         dispatch(updateAssignment({ ...assignment, [e.target.name]: e.target.value }));
//     };
//
//     return (
//         // @ts-ignore
//         <Container className="mt-4">
//             <h3 className="mb-4">Edit Assignment</h3>
//             {/*@ts-ignore*/}
//             <Form>    {/*@ts-ignore*/}
//                 <Form.Group className="mb-3">    {/*@ts-ignore*/}
//                     <Form.Label><strong>Assignment Name</strong></Form.Label>    {/*@ts-ignore*/}
//                     <Form.Control type="text" name="title" defaultValue={assignment.title} onChange={handleChange} />
//                 </Form.Group>
//                 {/*@ts-ignore*/}
//                 <Form.Group className="mb-3">    {/*@ts-ignore*/}
//                     <Form.Label><strong>Description</strong></Form.Label>    {/*@ts-ignore*/}
//                     <Form.Control as="textarea" rows={6} name="description" defaultValue={assignment.description} onChange={handleChange} />
//                 </Form.Group>
//
//                 <div className="d-flex justify-content-end gap-2">
//                     <Link to={`/Kambaz/Courses/${courseId}/Assignments`} className="btn btn-secondary">Cancel</Link>
//                     <button type="button" className="btn btn-danger" onClick={() => navigate(`/Kambaz/Courses/${courseId}/Assignments`)}>
//                         Save
//                     </button>
//                 </div>
//             </Form>
//         </Container>
//     );
// }


import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Container, Form, Card, Row, Col } from "react-bootstrap";
import { updateAssignment } from "./reducer";

export default function AssignmentEditor() {
    const { courseId, assignmentId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // @ts-ignore
    const assignments = useSelector((state) => state.assignments?.assignments || []);
    // @ts-ignore
    const assignment = assignments.find((a) => String(a._id) === String(assignmentId));

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        submissionType: "Online",
        onlineEntryOptions: [],
        assignTo: "Everyone",
        due: "2024-05-13T23:59",
        availableFrom: "2024-05-06T00:00",
        until: "2024-05-20T23:59",
    });

    useEffect(() => {
        if (assignment) {
            setFormData({
                title: assignment.title || "",
                description: assignment.description || `Description of ${assignment.title}`,
                submissionType: "Online",
                onlineEntryOptions: [],
                assignTo: "Everyone",
                due: "2024-05-13T23:59",
                availableFrom: "2024-05-06T00:00",
                until: "2024-05-20T23:59",
            });
        }
    }, [assignment]);
    // @ts-ignore
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    // @ts-ignore
    const handleCheckboxChange = (e) => {
        const { checked, value } = e.target;
        // @ts-ignore
        setFormData((prev) => {
            const updated = checked
                ? [...prev.onlineEntryOptions, value]
                : prev.onlineEntryOptions.filter((v) => v !== value);
            return { ...prev, onlineEntryOptions: updated };
        });
    };

    const handleSave = () => {
        dispatch(
            updateAssignment({
                ...assignment,
                title: formData.title,
                description: formData.description,
                detail: {
                    ...assignment.detail,
                    start: formData.availableFrom,
                    due: formData.due,
                    points: assignment.detail.points,
                    module: assignment.detail.module,
                },
                submissionType: formData.submissionType,
                onlineEntryOptions: formData.onlineEntryOptions,
                assignTo: formData.assignTo,
                until: formData.until,
            })
        );
        navigate(`/Kambaz/Courses/${courseId}/Assignments`);
    };

    if (!assignment) {
        return (
            // @ts-ignore
            <Container className="mt-4">
                <h3 className="text-danger">Assignment Not Found</h3>
                <Link to={`/Kambaz/Courses/${courseId}/Assignments`} className="btn btn-secondary">
                    Back to Assignments
                </Link>
            </Container>
        );
    }
    // @ts-ignore
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
                        <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} />
                        {/* @ts-ignore */}
                    </Form.Group>
                    {/* @ts-ignore */}
                    <Form.Group className="mb-3">

                        {/* @ts-ignore */}
                        <Form.Label><strong>Description</strong></Form.Label>
                        {/* @ts-ignore */}
                        <Form.Control as="textarea" rows={6} name="description" value={formData.description} onChange={handleChange} />
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
                                <Form.Select name="submissionType" value={formData.submissionType} onChange={handleChange}>
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
                                    {["Text Entry", "Website URL", "Media Recordings", "Student Annotation", "File Upload"].map((option) => (
                                        // @ts-ignore
                                        <Form.Check
                                            key={option}
                                            type="checkbox"
                                            label={option}
                                            value={option}
                                            // @ts-ignore
                                            checked={formData.onlineEntryOptions.includes(option)}
                                            onChange={handleCheckboxChange}
                                        />
                                    ))}
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
                                <Form.Control type="text" name="assignTo" value={formData.assignTo} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        {/* @ts-ignore */}
                        <Col md={4}>
                            {/* @ts-ignore */}
                            <Form.Group className="mb-3">
                                {/* @ts-ignore */}
                                <Form.Label><strong>Due</strong></Form.Label>
                                {/* @ts-ignore */}
                                <Form.Control type="datetime-local" name="due" value={formData.due} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        {/* @ts-ignore */}
                        <Col md={4}>
                            {/* @ts-ignore */}
                            <Form.Group className="mb-3">
                                {/* @ts-ignore */}
                                <Form.Label><strong>Available From</strong></Form.Label>
                                {/* @ts-ignore */}
                                <Form.Control type="datetime-local" name="availableFrom" value={formData.availableFrom} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    {/* @ts-ignore */}
                    <Row>
                        {/* @ts-ignore */}
                        <Col md={4}>  {/* @ts-ignore */}
                            <Form.Group className="mb-3">  {/* @ts-ignore */}
                                <Form.Label><strong>Until</strong></Form.Label>  {/* @ts-ignore */}
                                <Form.Control type="datetime-local" name="until" value={formData.until} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                </Card>

                <div className="d-flex justify-content-end gap-2">
                    <Link to={`/Kambaz/Courses/${courseId}/Assignments`} className="btn btn-secondary">Cancel</Link>
                    <button type="button" className="btn btn-danger" onClick={handleSave}>Save</button>
                </div>
            </Form>
        </Container>
    );
}


