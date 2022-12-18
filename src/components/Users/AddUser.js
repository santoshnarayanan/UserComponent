import Card from "../UI/Card";
import classes from './AddUser.module.css';

const AddUser = (props) => {

    const addUserHandler = (event) => {
        event.preventDefault();
    }


    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">UserName</label>
                <input id="username" type="text" />

                <label htmlFor="age">Age in Years</label>
                <input id="age" type="number" />

                <button type="submit">Add User</button>
            </form>
        </Card>
    );
};

export default AddUser;