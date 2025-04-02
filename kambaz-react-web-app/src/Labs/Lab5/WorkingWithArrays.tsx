import {SetStateAction, useState} from "react";
import {FormControl} from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithArrays() {
    const API = `${REMOTE_SERVER}/lab5/todos`;
    const [todo, setTodo] = useState(
        {
            id: "1",
            title: "NodeJS Assignment",
            description: "Create a NodeJS server with ExpressJS",
            due: "2021-09-09",
            completed: false,
        });

    const [retrieveId, setRetrieveId] = useState(todo.id);
    const [deleteId, setDeleteId] = useState(todo.id);
    const [updateId, setUpdateId] = useState(todo.id);
    const [updateDescriptionId, setUpdateDescriptionId] = useState(todo.id);
    const [updateCompletedId, setUpdateCompletedId] = useState(todo.id);
    const [isCompleted, setIsCompleted] = useState(todo.completed);

    const handleCompletedIdChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setUpdateCompletedId(e.target.value);
    };

    const handleCompletedChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        const newCompletedStatus = e.target.checked;
        setIsCompleted(newCompletedStatus);
        console.log("Checkbox toggled to:", newCompletedStatus);
    };


    // @ts-ignore
    return (
        // <div id="wd-working-with-arrays">
        //     <h3>Working with Arrays</h3>
        //     <h4>Retrieving Arrays</h4>
        //     <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        //         Get Todos
        //     </a><hr/>
        //
        //     <h4>Retrieving an Item from an Array by ID</h4>
        //     <a id="wd-retrieve-todo-by-id" className="btn btn-primary float-end" href={`${API}/${todo.id}`}>
        //         Get Todo by ID
        //     </a>
        //     {/*@ts-ignore*/}
        //     <FormControl id="wd-todo-id" defaultValue={todo.id} className="w-50"
        //                  onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
        //     <hr />
        //
        //     <h3>Filtering Array Items</h3>
        //     <a id="wd-retrieve-completed-todos" className="btn btn-primary"
        //        href={`${API}?completed=true`}>
        //         Get Completed Todos
        //     </a><hr/>
        //
        //     <h3>Creating new Items in an Array</h3>
        //     <a id="wd-retrieve-completed-todos" className="btn btn-primary"
        //        href={`${API}/create`}>
        //         Create Todo
        //     </a><hr/>
        //
        //     <h3>Deleting from an Array</h3>
        //     <a id="wd-retrieve-completed-todos" className="btn btn-primary float-end"
        //        href={`${API}/${todo.id}/delete`}>
        //         Delete Todo with ID = {todo.id} </a>
        //     {/*@ts-ignore*/}
        //     <FormControl defaultValue={todo.id}
        //                  className="w-50"
        //                  onChange={(e) => setTodo({ ...todo, id: e.target.value })}/>
        //     <hr/>
        //
        //     <h3>Updating an Item in an Array</h3>
        //     <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary float-end">
        //         Update Todo
        //     </a>
        //     {/*@ts-ignore*/}
        //     <FormControl defaultValue={todo.id} className="w-25 float-start me-2"
        //                  onChange={(e) => setTodo({ ...todo, id: e.target.value })}/>
        //     {/*@ts-ignore*/}
        //     <FormControl defaultValue={todo.title} className="w-50 float-start"
        //                  onChange={(e) => setTodo({ ...todo, title: e.target.value }) }/>
        //     <br /><br /><hr />
        //
        //     <a href={`${REMOTE_SERVER}/lab5/todos/${todo.id}/description/${todo.description}`}
        //        className="btn btn-primary float-end">
        //         Update Description with ID = {todo.id}
        //     </a>
        //
        //     {/*@ts-ignore*/}
        //     <FormControl
        //         className="w-50 float-start"
        //         defaultValue={todo.description}
        //         onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        //         placeholder="Description"
        //     />
        //     <br /><br />
        //
        //
        //     {/*@ts-ignore*/}
        //     <FormControl
        //         type="checkbox"
        //         className=" w-50 float-start mt-2"
        //         checked={todo.completed}
        //         onChange={(e) => setTodo({ ...todo, completed: e.target.value })}
        //     />
        //
        //     <a href={`${REMOTE_SERVER}/lab5/todos/${todo.id}/completed/${todo.completed}`}
        //           className="btn btn-primary float-end">
        //     Update Completed with ID = {todo.id}
        //     </a>
        //     <br /><br /><hr />
        //
        //
        // </div>

        <div id="wd-working-with-arrays">
            {/*Retrieving Array*/}
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
                Get Todos </a><hr/>

            {/* Retrieve todo by ID */}
            <h4>Retrieving an Item from an Array by ID</h4>
            <a className="btn btn-primary float-end" href={`${API}/${retrieveId}`}>
                Get Todo by ID = {retrieveId}
            </a>
            {/*@ts-ignore*/}
            <FormControl
                className="w-50"
                defaultValue={todo.id}
                onChange={(e) => setRetrieveId(e.target.value)}
            />
            <hr />

            {/* Filtering array items by completion status */}
            <h3>Filtering Array Items</h3>
            <a id="wd-retrieve-completed-todos" className="btn btn-primary"
               href={`${API}?completed=true`}>
                Get Completed Todos
            </a>
            <hr />

            {/* Create new todo */}
            <h3>Creating new Items in an Array</h3>
            <a id="wd-create-todo" className="btn btn-primary"
               href={`${API}/create`}>
                Create Todo
            </a>
            <hr />

            {/* Delete todo by ID */}
            <h4>Deleting an Item from an Array by ID</h4>
            <a className="btn btn-primary float-end"
               href={`${API}/${deleteId}/delete`}>
                Delete Todo by ID = {deleteId}
            </a>
            {/*@ts-ignore*/}
            <FormControl
                className="w-50"
                defaultValue={todo.id}
                onChange={(e) => setDeleteId(e.target.value)}
            />
            <hr />
            {/* Update todo title */}
            <h4>Updating an Item in an Array by ID</h4>
            <a className="btn btn-primary float-end"
               href={`${API}/${updateId}/title/${todo.title}`}>
                Update Todo Title
            </a>
            {/*@ts-ignore*/}
            <FormControl
                className="w-25 float-start me-2"
                defaultValue={todo.id}
                onChange={(e) => setUpdateId(e.target.value)}
            />
            {/*@ts-ignore*/}
            <FormControl
                className="w-50 float-start"
                defaultValue={todo.title}
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            />
            <br /><br />
            <hr />

            {/* Update description */}
            <h4>Update description by ID </h4>
            <a className="btn btn-primary float-end"
               href={`${API}/${updateDescriptionId}/description/${todo.description}`}>
                Update Description
            </a>

            {/*@ts-ignore*/}
            <FormControl
                className="w-25 float-start me-2"
                defaultValue={todo.id}
                onChange={(e) => setUpdateDescriptionId(e.target.value)}
            />
            {/*@ts-ignore*/}
            <FormControl
                className="w-50"
                defaultValue={todo.description}
                onChange={(e) => {
                    setUpdateDescriptionId(updateId); // Ensure ID matches
                    setTodo({ ...todo, description: e.target.value });
                }}
                placeholder="Description"
            />
            <br />
            <hr />

            {/* Update completion status */}
            <h4>Update completion by ID </h4>
            <a className="btn btn-primary float-end"
               href={`${API}/${updateCompletedId}/completed/${isCompleted}`}>
                Set Completion Status
            </a>
            {/*@ts-ignore*/}
            <FormControl
                className="w-25 float-start me-2"
                defaultValue={updateCompletedId}
                onChange={handleCompletedIdChange}
            />
            {/*@ts-ignore*/}
            <FormControl
                type="checkbox"
                className="float-start mt-2"
                style={{ width: '20px', height: '20px', backgroundColor: 'blue' }}
                checked={isCompleted}
                //@ts-ignore
                onChange={handleCompletedChange}
            />
            <span className="mt-2 float-md-start">{isCompleted ? " Completed" : " Not Completed"}</span>
            <br /><br />
            <hr />
        </div>
    );
}