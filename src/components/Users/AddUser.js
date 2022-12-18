import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import { useState } from "react";

const AddUser = (props) => {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log("Name:-" + enteredUserName + " Age:-" + enteredAge);
    }

    const usernameChangeHandler = (event) =>{
        setEnteredUserName(event.target.value);
    };

    const ageChangeHandler = (event) =>{
        setEnteredAge(event.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">UserName</label>
                <input id="username" type="text" onChange={usernameChangeHandler} />

                <label htmlFor="age">Age in Years</label>
                <input id="age" type="number" onChange={ageChangeHandler} />

                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;