import React, { useState } from 'react';

const TodoTable = (props) => {
    // const deleteRow = (event) => {
    //     let newTodos = props.todos.filter((todo, i) => i != event.target.id);
    //     setTodos(newTodos);
    //   }


    return (

        

        <div>
            <table><tbody>{props.todos.map((todo, index) => 
            <tr>
                <td>{todo.date}</td>
                <td>{todo.desc}</td>
                <td><input type="button" value="Delete" id={index} onClick={props.deleteRow} /></td>
            </tr>)}</tbody></table>            
        </div>
    )
}

export default TodoTable;