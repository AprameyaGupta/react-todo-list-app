import React from "react";
import axios from "axios";

export default class ViewsTodos extends React.Component {
    state = {
        todos: []
    }

    componentDidMount() {
        axios.get(`http://jsonplaceholder.typicode.com/todos`)
            .then(res => {
                const todos = res.data;
                this.setState({ todos });
            })
    }

    render() {
        return (
            <>
                <p>List of Todos</p>
                { this.state.todos.map((todo, i) => <li>{todo.title}</li>)}
            </>
        )
    }
}
