import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter valid name and age(non empty values)'
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter valid age > 0'
            });
            return;
        }
        //console.log("Name:-" + enteredUserName + " Age:-" + enteredAge);
        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input id="username"
                        type="text" 
                        ref = {nameInputRef}
                        />

                    <label htmlFor="age">Age in Years</label>
                    <input id="age"
                        type="number"
                        ref={ageInputRef}    
                        />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;