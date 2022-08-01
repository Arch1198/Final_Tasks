import React from "react";
import TodoItem from "./TodoItem";
import Todo from "../todomodel/todo";

const  Todos:React.FC<{items:Todo[]}> = (props) => {
    return(
    <ul>
    {props.items.map((item)=>(
        <li
            key={item.id}>{item.text}
        </li>
    ))}
    </ul>
    );
}



export default Todos;
