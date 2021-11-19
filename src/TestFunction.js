import React from "react";
import { useState } from "react";



const TestFunction = () => {

    const [desc, setDesc] = useState('');
    const [todos, setTodos] = useState([]);

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, desc]);
        setDesc('');
    }

    const inputChanged = (event) => {
        setDesc(event.target.value);
    }
    return (
        <div>
            <form>
                <input type="text" onChange={inputChanged} value={desc} />
                <button onClick={addTodo}>Add</button>
            </form>

            <table>
                <tbody>
                    {todos.map((todo, index) => <tr key={index}><td>{todo}</td></tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default TestFunction;