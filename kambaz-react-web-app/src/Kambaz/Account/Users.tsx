import {useEffect} from "react";
import PeopleTable from "../Courses/people/Table";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsers, findUsersByPartialName, findUsersByRole, createUser} from "./client";
import {addUser, setAllUsers} from "./reducer.ts";
import {FormControl} from "react-bootstrap";
import { Form } from "react-bootstrap";
import {useParams} from "react-router";
import PeopleDetails from "../Courses/people/Details.tsx";
import {FaPlus} from "react-icons/fa";
export default function Users() {

    const users = useSelector((state: any) => state.account?.users || []);
    const currentUser = useSelector((state: any) => state.account?.currentUser);
    const isAdmin = currentUser?.role === "ADMIN";
    const { uid } = useParams();
    const dispatch = useDispatch();


    // const filterUsersByRole = async (selectedRole: string) => {
    //     const users =
    //         selectedRole === "" ? await findAllUsers() : await findUsersByRole(selectedRole);
    //     dispatch(setAllUsers(users));
    // };
    //
    // const filterUsersByName = async (name: string) => {
    //     const users =
    //         name === "" ? await findAllUsers() : await findUsersByPartialName(name);
    //     dispatch(setAllUsers(users));
    // };



    useEffect(() => {
        const loadUsers = async () => {
            if (users.length === 0) {
                const users = await findAllUsers();
                dispatch(setAllUsers(users));
            }
        };
        loadUsers();
    }, [dispatch, users.length]);

    const handleRoleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        // const result = role === ""
        //     ? await findAllUsers()
        //     : await findUsersByRole(role);
        // dispatch(setAllUsers(result));

        const selected = e.target.value;
        if (selected !== "") {
            const users = await findUsersByRole(selected);
            dispatch(setAllUsers(users));
        } else {
            const users = await findAllUsers();
            dispatch(setAllUsers(users));
        }
    };

    const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {

        if (e.key === "Enter") {
            // const value = (e.target as HTMLInputElement).value;
            // const result = value === ""
            //     ? await findAllUsers()
            //     : await findUsersByPartialName(value);
            // dispatch(setAllUsers(result));

            const text = (e.target as HTMLInputElement).value;
            if (text.trim().length > 0) {
                const users = await findUsersByPartialName(text);
                dispatch(setAllUsers(users));
            } else {
                const users = await findAllUsers();
                dispatch(setAllUsers(users));
            }
        }
    };

    const createNewUser = async () => {
        const user = await createUser({
            firstName: "New",
            lastName: `User${users.length + 1}`,
            username: `newuser${Date.now()}`,
            password: "password123",
            email: `email${users.length + 1}@neu.edu`,
            section: "S101",
            role: "STUDENT",
        });
        dispatch(addUser(user));
    };




    return (

        <div className=" mb-3">
            <h3 className="mb-0">Users</h3>

            {/*<button onClick={createNewUser} className="float-end btn btn-danger wd-add-people">*/}
            {/*    <FaPlus className="me-2" />*/}
            {/*    Users*/}
            {/*</button>*/}

            {/*/!*@ts-ignore*!/*/}
            {/*<Form style={{ maxWidth: "400px", flexGrow: 1, marginLeft: "2rem" }}>*/}
            {/*    /!*@ts-ignore*!/*/}
            {/*    <FormControl*/}
            {/*        placeholder="Search people"*/}
            {/*        className="mb-3 "*/}
            {/*        onKeyDown={handleSearch}*/}
            {/*    />*/}

            {/*    /!*@ts-ignore*!/*/}
            {/*    <Form.Select onChange={handleRoleChange}  className="mb-3" >*/}
            {/*        <option value="">All Roles</option>*/}
            {/*        <option value="STUDENT">Students</option>*/}
            {/*        <option value="TA">Assistants</option>*/}
            {/*        <option value="FACULTY">Faculty</option>*/}
            {/*        <option value="ADMIN">Administrators</option>*/}
            {/*    </Form.Select>*/}
            {/*</Form>*/}

            {isAdmin && (
                <>
                    <button
                        onClick={createNewUser}
                        className="float-end btn btn-danger wd-add-people"
                    >
                        <FaPlus className="me-2" />
                        Add User
                    </button>
                    {/*@ts-ignore*/}
                    <Form style={{ maxWidth: "400px", flexGrow: 1, marginLeft: "2rem" }}>
                        {/*@ts-ignore*/}
                        <FormControl
                            placeholder="Search people"
                            className="mb-3"
                            onKeyDown={handleSearch}
                        />
                        {/*@ts-ignore*/}
                        <Form.Select onChange={handleRoleChange} className="mb-3">
                            <option value="">All Roles</option>
                            <option value="STUDENT">Students</option>
                            <option value="TA">Assistants</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="ADMIN">Administrators</option>
                        </Form.Select>
                    </Form>
                </>
            )}




            <br/>

            {/*{users.length === 0 && (*/}
            {/*    <div className="text-muted mt-3">No users found.</div>*/}
            {/*)}*/}

            {/*<PeopleTable users={users} cid={""} />*/}
            {users.length === 0 ? (
                <div className="text-muted mt-3">No users found.</div>
            ) : (
                <PeopleTable users={users} cid={""} />

            )}

            {uid && <PeopleDetails />}
        </div>
    );}
