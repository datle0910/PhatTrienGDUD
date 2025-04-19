import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTodo,removeTodo } from "./totoslice";

const TodoList = ()=>{
    const [text,setText] = useState("");
    const dispatch = useDispatch();
    const todos = useSelector((state)=>state.todos);

    function handleAdd(){
        dispatch(addTodo(text));
        setText("");
    };

    return (
        <div>
            <h1>to do list</h1>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={handleAdd}>Them</button>

            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={()=> dispatch(removeTodo(todo.id))}>Xoa</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TodoList