import {Button, FormControl, ListGroup} from "react-bootstrap";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todoReducer.ts";

// export default function TodoForm(
//     {todo, setTodo, addTodo, updateTodo}: {
//
    //
    // todo: { id: string; title: string };
    // setTodo: (todo: { id: string; title: string }) => void;
    // addTodo: (todo: { id: string; title: string }) => void;
    // updateTodo: (todo: { id: string; title: string }) => void;
// ) {
export default function TodoForm(

) {
    const { todo } = useSelector((state: any) => state.todoReducer);
    const dispatch = useDispatch();
    return (
        // @ts-ignore
        <ListGroup.Item className="list-group-item">
            <div className="todo-form">
                {/*@ts-ignore*/}
                <FormControl value={todo.title}
                             onChange={(e) =>
                                 // setTodo({ ...todo, title: e.target.value })
                                 dispatch(setTodo({ ...todo, title: e.target.value }))
                } />
            </div>
            <div className="button-group">
                {/*@ts-ignore*/}

                <Button onClick={() =>
                    // updateTodo(todo)
                    dispatch(updateTodo(todo))
                }
                        id="wd-update-todo-click"
                        variant="warning"
                        className="custom-update-btn"> Update </Button>
                {/*@ts-ignore*/}
                <Button onClick={() =>
                    // addTodo(todo)
                    dispatch(addTodo(todo))
                }
                        id="wd-add-todo-click"
                        variant="success"
                        className="custom-add-btn"> Add </Button>

            </div>
        </ListGroup.Item>
    );}

