import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
import axios from "axios";


function User(){
    const url = BASE_URL + "users/";
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get(url).then((response) => {
            setUsers(response.data)
        });
    }, [])


    return (
        <div>
            <h1>Users list</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return <tr><td>{user.first_name}</td><td>{user.last_name}</td></tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default User;