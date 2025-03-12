import "./index.css"
import { ListGroup } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
    const { todos } = useSelector((state: any) => state.todoReducer);

    // const [todos, setTodos] = useState([
    //     { id: "1", title: "Learn React" },
    //     { id: "2", title: "Learn Node" },
    // ]);
    // const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
    //
    // const addTodo = () => {
    //     if (!todo.title.trim()) return;
    //     const newTodo = { ...todo, id: new Date().getTime().toString() };
    //     setTodos([...todos, newTodo]);
    //     setTodo({ id: "-1", title: "" });
    // };
    //
    // const deleteTodo = (id: string) => {
    //     setTodos(todos.filter((todo) => todo.id !== id));
    // };
    //
    // const updateTodo = () => {
    //     setTodos(todos.map((item) => (item.id === todo.id ? todo : item)));
    //     setTodo({ id: "-1", title: "" });
    // };

    return (
        <div className="container mt-4">
            <h2>Todo List</h2>
            {/* @ts-ignore */}
            <ListGroup>
                {/*/!* @ts-ignore *!/*/}
                {/*<ListGroup.Item className="d-flex align-items-center">*/}
                {/*    /!* @ts-ignore *!/*/}
                {/*    <FormControl*/}
                {/*        value={todo.title}*/}
                {/*        onChange={(e) => setTodo({ ...todo, title: e.target.value })}*/}
                {/*        placeholder="Enter a task"*/}
                {/*        className="me-2"*/}
                {/*    />*/}
                {/*    /!* @ts-ignore *!/*/}
                {/*    <Button onClick={updateTodo} id="wd-update-todo-click" variant="warning" className="me-2">*/}
                {/*        Update*/}
                {/*    </Button>*/}
                {/*    /!* @ts-ignore *!/*/}
                {/*    <Button onClick={addTodo} id="wd-add-todo-click" variant="success">*/}
                {/*        Add*/}
                {/*    </Button>*/}
                {/*</ListGroup.Item>*/}
                {/*{todos.map((todo) => (*/}
                {/*    //@ts-ignore*/}
                {/*    <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-center">*/}
                {/*        {todo.title}*/}
                {/*        <div>*/}
                {/*            /!* @ts-ignore *!/*/}
                {/*            <Button onClick={() => setTodo(todo)} id="wd-set-todo-click" variant="primary" className="me-2">*/}
                {/*                Edit*/}
                {/*            </Button>*/}
                {/*            /!* @ts-ignore *!/*/}
                {/*            <Button onClick={() => deleteTodo(todo.id)} id="wd-delete-todo-click" variant="danger">*/}
                {/*                Delete*/}
                {/*            </Button>*/}
                {/*        </div>*/}
                {/*    </ListGroup.Item>*/}
                {/*))}*/}

                {/*2nd change*/}
                {/*<TodoForm*/}
                {/*    todo={todo}*/}
                {/*    setTodo={setTodo}*/}
                {/*    addTodo={addTodo}*/}
                {/*    updateTodo={updateTodo}/>*/}
                {/*{todos.map((todo) => (*/}
                {/*    <TodoItem*/}
                {/*        todo={todo}*/}
                {/*        deleteTodo={deleteTodo}*/}
                {/*        setTodo={setTodo} />*/}
                {/*))}*/}

                <TodoForm />
                {todos.map((todo: any) => (
                    <TodoItem todo={todo} />
                ))}


            </ListGroup>
        </div>
    );
}




