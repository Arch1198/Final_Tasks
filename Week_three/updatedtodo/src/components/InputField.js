import { useState } from "react";
import {PRIORITIES_OPTIONS} from "../constant.js"

const InputField = (props) => {
  const [taskData, setTaskData] = useState({
    title: "",
    desc: "",
    priorities:""
  });
  const DataInInput = (e) => {
    setTaskData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
    console.log(taskData);
  };

  return (
    <>
      <div
        style={{
          position: "Fixed",
          boxShadow: "3px 3px 5px black",
          zIndex: "1",
          top: "20%",
          left: "25%",
          backgroundColor: "white",
          width: "50%",
          height: "55%",
        }}
      >
        <svg
          onClick={() => {
            if (props.istextbox == true) props.settextboxfunc(false);
          }}
          style={{ position: "absolute", right: "0px", top: "0px" }}
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          className="bi bi-x-square"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>

        <div style={{ margin: "20px" }} class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Enter Task Title
          </label>
          <input
            value={taskData.title}
            name="title"
            onChange={DataInInput}
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="enter title"
          />
        </div>
        <div style={{ margin: "20px" }} class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Enter task Details
          </label>
          <textarea
            value={taskData.desc}
            name="desc"
            onChange={DataInInput}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="enter description"
          ></textarea>
        </div>


        <div style={{ margin: "20px" }} class="mb-3">
        <label  class="form-label">
            select Priority
          </label>
        <select onChange={DataInInput} name="priorities" class="form-select" aria-label="Default select example">
          
          <option selected>Open this select menu</option>
          {
            PRIORITIES_OPTIONS.map((val)=>{
              return(
                <>
                <option  value={val.title}>{val.title}</option>
                </>
              )
            })
            
          }
        </select>
        </div>

        <div></div>

        <button
          onClick={() => {
            if (props.istextbox == true) props.settextboxfunc(false);
            props.addtask(taskData);
          }}
          style={{ margin: "20px" }}
          type="button"
          class="btn btn-primary"
        >
          Add
        </button>
      </div>
    </>
  );
};

export default InputField;
