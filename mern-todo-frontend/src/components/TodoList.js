import React, { useState, useEffect } from "react";
import axios from "axios";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    // Fetch todos from backend
    const fetchTodos = async () => {
        const { data } = await axios.get("http://localhost:5000/api/todos");
        setTodos(data);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    // Add a new todo
    const addTodo = async () => {
        const { data } = await axios.post("http://localhost:5000/api/todos", {
            task,
        });
        setTodos([...todos, data]);
        setTask("");
    };

    // Delete a todo
    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:5000/api/todos/${id}`);
        setTodos(todos.filter((todo) => todo._id !== id));
    };

    return (
        <div className="todo-container">
            <h1>To-do List</h1>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add a new to-do"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo._id}>
                        {todo.task}{" "}
                        <button onClick={() => deleteTodo(todo._id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            <p>Total To-dos: {todos.length}</p>
        </div>
    );
};

export default TodoList;
