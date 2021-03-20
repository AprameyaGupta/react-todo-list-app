import React from "react";
import axios from "axios";

export default class RegisterTodos extends React.Component {
    state = {
        userId : '',
        title : '',
        completed : ''
    }

    handleChange = event => {
        this.setState({ userId: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            userId: this.state.userId,
            title: this.state.title,
            completed: this.state.completed
        };

        axios.post(`http://jsonplaceholder.typicode.com/posts`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            User Id:
                            <input type="text" name="userId" onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Title: 
                            <input type="text" name="title" onChange={this.handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Current Status: 
                            <select type="dropdown" name="currentStatus">
                                <option value="Orange">Select Status</option>
                                <option value="Radish">Completed</option>
                                <option value="Cherry">Incompleted</option>
                            </select>
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}
