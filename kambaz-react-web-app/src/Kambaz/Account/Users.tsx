import {useEffect} from "react";
import PeopleTable from "../Courses/people/Table";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsers, findUsersByPartialName, findUsersByRole} from "./client";
import {setAllUsers} from "./reducer.ts";
import {FormControl} from "react-bootstrap";
import { Form } from "react-bootstrap";
export default function Users() {

    const users = useSelector((state: any) => state.account?.users || []);

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


    return (

        <div className=" mb-3">
            <h3 className="mb-0">Users</h3>

            {/*@ts-ignore*/}
            <Form style={{ maxWidth: "400px", flexGrow: 1, marginLeft: "2rem" }}>
                {/*@ts-ignore*/}
                <FormControl
                    placeholder="Search people"
                    className="mb-3 "
                    onKeyDown={handleSearch}
                />

                {/*@ts-ignore*/}
                <Form.Select onChange={handleRoleChange}  className="mb-3" >
                    <option value="">All Roles</option>
                    <option value="STUDENT">Students</option>
                    <option value="TA">Assistants</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="ADMIN">Administrators</option>
                </Form.Select>
            </Form>

            {/*{users.length === 0 && (*/}
            {/*    <div className="text-muted mt-3">No users found.</div>*/}
            {/*)}*/}

            {/*<PeopleTable users={users} cid={""} />*/}
            {users.length === 0 ? (
                <div className="text-muted mt-3">No users found.</div>
            ) : (
                <PeopleTable users={users} cid={""} />
            )}
        </div>
    );}
