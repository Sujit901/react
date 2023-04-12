import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from './constants';

function Home() {
    const url = BASE_URL + "users/";
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(url).then((response) => {
            setUsers(response.data)
        });
    }, [])
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(url, {"first_name": firstName, "last_name": lastName}).then((response) => {
            document.getElementById("form").reset();
            alert("Data saved")

        }).catch((error)=>{
            alert(error.response.data.first_name[0])
        })
    }

    return (
        <>
        <div>
            <form onSubmit={handleSubmit} id ="form">
                <label>First Name</label>
                <input name="first_name" type="text" onChange={e => setFirstName(e.target.value)} required/>
                <br/>
                <label>Last Name</label>
                <input name="first_name" type="text" onChange={e => setLastName(e.target.value)} required/>
                <br/>
                <button type="submit" style={{margintop:"10px"}}>Click me</button>
            </form>
        </div>
            
        </>
    )
}
export default Home;