// GET - for retrieving data, but we've been also misusing it for creating, modifying and deleting data on the server. We'll start using it properly only for retrieving data
// POST - for creating new data typically embedded in the HTTP body
// PUT - for modifying existing data where updates are typically embedded in the HTTP body
// DELETE - for removing existing data
// OPTIONS - for retrieving allowed operations. Used to figure out if CORS policy allows communication with the other methods such as GET, POST, PUT and DELETE

let todos = [
    { id: 1, title: "Task 1", completed: false ,description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",},
    { id: 2, title: "Task 2", completed: true, description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09", },
    { id: 3, title: "Task 3", completed: false,  description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09", },
    { id: 4, title: "Task 4", completed: true, description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",},
];


export default function WorkingWithArrays(app) {
    app.get("/lab5/todos", (req, res) => {

        const { completed } = req.query;
        if (completed !== undefined) {
            const completedBool = completed === "true";
            const completedTodos = todos.filter(
                (t) => t.completed === completedBool);
            res.json(completedTodos);
            return;
        }


        res.json(todos);
    });

    app.get("/lab5/todos/create", (req, res) => {
        const newTodo = {
            id: new Date().getTime(),
            title: "New Task",
            completed: false,
            description: "Create a NodeJS server with ExpressJS",
            due: "2021-09-09",
        };
        todos.push(newTodo);
        res.json(todos);
    });

    app.post("/lab5/todos", (req, res) => {
        const newTodo = { ...req.body,  id: new Date().getTime() };
        todos.push(newTodo);
        res.json(newTodo);
    });


    app.get("/lab5/todos/:id", (req, res) => {
        const { id } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));

        if (!todo) {
            // If no todo is found, send a 404 Not Found status and a message
            return res.status(404).json({ message: "Todo not found" });
        }

        res.json(todo);
    });

    app.get("/lab5/todos/:id/delete", (req, res) => {
        const { id } = req.params;
        const todoIndex = todos.findIndex((t) => t.id === parseInt(id));
        todos.splice(todoIndex, 1);
        res.json(todos);
    });

    app.get("/lab5/todos/:id/title/:title", (req, res) => {
        const { id, title } = req.params;
        const todo = todos.find((t) => t.id === parseInt(id));
        todo.title = title;
        res.json(todos);
    });

    app.get("/lab5/todos/:id/completed/:completed", (req, res) => {
        const { id, completed } = req.params;
        const todo = todos.find(t => t.id === parseInt(id));
        if (todo) {
            todo.completed = completed === 'true';
            res.json(todos);
        } else {
            res.status(404).send('Todo not found');
        }
    });

    app.get("/lab5/todos/:id/description/:description", (req, res) => {
        const { id, description } = req.params;
        const todo = todos.find(t => t.id === parseInt(id));
        if (todo) {
            todo.description = description;
            res.json(todos);
        } else {
            res.status(404).send('Todo not found');
        }
    });





};
