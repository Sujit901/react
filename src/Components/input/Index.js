import React from "react";
import Button from "../Button/Button";
import './Index.css';
function Input(){
    return (
        <div>
            <form method="POST">
            <label className="label">Your name please</label><br/><br/>
            <input type="text" required="true" placeholder="Your name" id="name" className="input"/><br/><br/>
            <Button/>
            </form>
        </div>
    );
}
export default Input;