import * as assignmentsDao from './dao.js';

export default function AssignmentsRoutes(app) {

    app.post('/api/modules/:moduleId/assignments', (req, res) => {
        const { moduleId } = req.params;
        const assignment = {
            ...req.body,
            module: moduleId,
        };
        const newAssignment = assignmentsDao.createAssignment(assignment);
        res.status(201).json(newAssignment);
    });

    app.get('/api/modules/:moduleId/assignments', (req, res) => {
        const { moduleId } = req.params;
        const assignments = assignmentsDao.findAssignmentsForModule(moduleId);
        res.json(assignments);
    });

    // PUT route to update an existing assignment
    app.put('/api/modules/:moduleId/assignments/:assignmentId', (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const updatedAssignment = assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        res.json(updatedAssignment);
    });

    // DELETE route to remove an assignment
    app.delete('/api/modules/:moduleId/assignments/:assignmentId', (req, res) => {
        const { assignmentId } = req.params;
        const success = assignmentsDao.deleteAssignment(assignmentId);
        if (success) {
            res.status(204).send();
        } else {
            res.status(404).send('Assignment not found');
        }
    });
}
