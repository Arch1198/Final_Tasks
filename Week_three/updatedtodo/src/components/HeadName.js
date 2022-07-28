import React, { useState }  from "react";
import './style.css'
import InputField from "./InputField";
import ShowTask from "./ShowTask";
const HeadName = () => {
    const [isTextbox, setTextbox] = useState(false);
    const [task ,setTask] = useState([{
        title:0,
        desc:0
    }])
    
    const addTaskIn=(obj)=>{
       setTask((prev)=>{
        return[
        ...prev,
        obj
        ]   
    });
    //console.log(task);
}


    const deleteTask=(id)=>{
          setTask((prev)=>{
            return(
                prev.filter((val,index)=>{
                     return id!==index
                })
            )
          })
    }


 return(
        <>
            <div >
                <h1 style={{textAlign : "center"}}>To Do List</h1>
                <button onClick={()=>{
                 if(isTextbox==false){
                 setTextbox(true);
                 }

                }} style={{margin:"30px"}} type="button" class="btn btn-primary">Add Task</button>
{ isTextbox==true?
                <InputField addtask={addTaskIn}  istextbox={isTextbox}  settextboxfunc={setTextbox}/>:""
}
{
    
      
              task.map((val,index)=>{
                if(val.title!==0 && val.desc!==0){
                    return(
                    <>
                    <ShowTask deletetask={deleteTask} value={val} indexoftask={index}/>
                    </>
                )
                }
                
              })
}
            </div>


        </>
    )
    } 
export default HeadName;