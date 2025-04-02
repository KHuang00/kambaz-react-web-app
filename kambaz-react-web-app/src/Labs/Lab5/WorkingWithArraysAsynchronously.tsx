import { useState, useEffect } from "react";
import * as client from "./client";
import {ListGroup} from "react-bootstrap";
import {FaPlusCircle, FaTrash} from "react-icons/fa";


export default function WorkingWithArraysAsynchronously() {
    const [todos, setTodos] = useState<any[]>([]);
    const fetchTodos = async () => {
        const todos = await client.fetchTodos();
        setTodos(todos);
    };
    const removeTodo = async (todo: any) => {
        const updatedTodos = await client.removeTodo(todo);
        setTodos(updatedTodos);
    };

    const createTodo = async () => {
        const todos = await client.createTodo();
        setTodos(todos);
    };

    const postTodo = async () => {
        const newTodo = await client.postTodo({ title: "New Posted Todo", completed: false, });
        setTodos([...todos, newTodo]);
    };


    useEffect(() => {
        fetchTodos();
    }, []);
    return (
        <div id="wd-asynchronous-arrays">
            <h3>Working with Arrays Asynchronously</h3>
            <h4>Todos
                <FaPlusCircle onClick={createTodo} className="text-success float-end fs-3"
                                   id="wd-create-todo" />
                <FaPlusCircle onClick={postTodo}   className="text-primary float-end fs-3 me-3" id="wd-post-todo"   />
            </h4>
            {/*@ts-ignore*/}
            <ListGroup>
                {todos.map((todo) => (
                    // @ts-ignore
                    <ListGroup.Item key={todo.id}>
                        <input type="checkbox" className="form-check-input me-2"
                               defaultChecked={todo.completed}/>
                        <span style={{  textDecoration: todo.completed ? "line-through" : "none" }}>
                            {todo.title}
                        <FaTrash onClick={() => removeTodo(todo)}
                                 className="text-danger float-end mt-1"  id="wd-remove-todo"/>
                    </span>
                    </ListGroup.Item>
                    ))}
            </ListGroup> <hr />
        </div>
    );}
