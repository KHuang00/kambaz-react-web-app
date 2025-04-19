import * as assignmentsDao from './dao.js';

export default function AssignmentsRoutes(app) {

    app.post('/api/modules/:moduleId/Assignments', async (req, res) => {
        const { moduleId } = req.params;
        const assignment = {
            ...req.body,
            detail: {
                ...req.body.detail,
                module: `Module ${moduleId}`,
            },
        };
        const newAssignment = await assignmentsDao.createAssignment(assignment);
        res.status(201).json(newAssignment);
    });

    app.get('/api/modules/:moduleId/Assignments', async (req, res) => {
        const { moduleId } = req.params;
        const assignments = await assignmentsDao.findAssignmentsForModule(moduleId);
        res.json(assignments);
    });

    // PUT route to update an existing assignment
    app.put('/api/modules/:moduleId/Assignments/:assignmentId', async (req, res) => {
        // const { assignmentId } = req.params;
        // const assignmentUpdates = req.body;
        // const updatedAssignment = assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        // res.json(updatedAssignment);
        const updated = await assignmentsDao.updateAssignment(req.params.assignmentId, req.body);
        res.json(updated);
    });

    // DELETE route to remove an assignment
    app.delete('/api/modules/:moduleId/Assignments/:assignmentId', async (req, res) => {
        // const { assignmentId } = req.params;
        // const success = assignmentsDao.deleteAssignment(assignmentId);
        // if (success) {
        //     res.status(204).send();
        // } else {
        //     res.status(404).send('Assignment not found');
        // }
        const result = await assignmentsDao.deleteAssignment(req.params.assignmentId);
        if (result) {
            res.sendStatus(204);
        } else {
            res.status(404).send("Assignment not found");
        }
    });

    app.get('/api/modules/:moduleId/Assignments/:assignmentId', async (req, res) => {
        const { assignmentId } = req.params;
        const assignment = await assignmentsDao.findAssignmentById(assignmentId);
        if (assignment) {
            res.json(assignment);
        } else {
            res.status(404).send("Assignment not found");
        }
    });

}
