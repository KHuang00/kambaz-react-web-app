import {Button, ListGroup} from "react-bootstrap";
import "./index.css";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todoReducer.ts";


// export default function TodoItem({ todo, deleteTodo, setTodo }: {
//     todo: { id: string; title: string };
//     deleteTodo: (id: string) => void;
//     setTodo: (todo: { id: string; title: string }) => void;
// }) {
// @ts-ignore
export default function TodoItem({ todo,

                                 }) {
    const dispatch = useDispatch();

    return (
        // @ts-ignore
        <ListGroup.Item className="list-group-item">
            <div className="todo-title">{todo.title}</div>
            <div className="button-group">
                {/*@ts-ignore*/}
                <Button onClick={() =>
                    // setTodo(todo)
                    dispatch(setTodo(todo))

                }
                        id="wd-delete-todo-click"
                        variant="danger"
                        className="custom-edit-btn"> Edit </Button>
                {/*@ts-ignore*/}
                <Button onClick={() =>
                    // deleteTodo(todo.id)
                    dispatch(deleteTodo(todo.id))
                }
                        id="wd-set-todo-click"
                        variant="primary"
                        className="custom-delete-btn"> Delete </Button>
            </div>
        </ListGroup.Item>

    );}