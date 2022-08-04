import React from "react";
import { useRef } from "react";
const NewTodo : React.FC<{onAddTodo:(text:string)=> void }> = (props) => {
 const todoTextInputRef = useRef<HTMLInputElement>(null);
 //const todoDescriptionInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event:React.FormEvent) =>{
       event.preventDefault(); 

       const enteredText = todoTextInputRef.current!.value;
       //const enteredDesc = todoDescriptionInputRef.current!.value;

if(enteredText.trim().length === 0){
    return;
}

props.onAddTodo(enteredText);


    };
return (
<form onSubmit={submitHandler}>
    <label htmlFor="text">Todo Text  </label>
      <input type="text" id="text" ref={todoTextInputRef}/>
    
 {/*   <label htmlFor="text"> Todo Description</label>
    <input type = "text" id="text" ref={todoDescriptionInputRef} />
/>*/}

      <button> Add Todo</button>

      
   
</form>
);
}


export default NewTodo;