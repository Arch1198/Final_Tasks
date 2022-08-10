import React, { useState } from "react";
import "./index.css";

const AddItemForm = (props) => {
  const [enteredImage, setEnteredImage] = useState("");
  //const [enteredTitle, setEnteredTitle] = useState("");
  //const [enteredDescription, setEnteredDescription] = useState("");
  //const [enteredAvailableSizes, setEnteredAvailableSizes] = useState("");
  //const [enteredPrice, setEnteredPrice] = useState("");
  const [isValid , setIsValid] = useState(true);
  const [form, setForm] = useState({
    title: "",
    desc: "",
    size: "",
    price: ""
  })

  const setObjectData = (event) => {
    if (event.target.name === "img") {
      var fread = new FileReader();
      fread.readAsDataURL(event.target.files[0]);
      fread.onloadend = function (event) {
        setEnteredImage(event.target.result);
      };
      setEnteredImage(event.target.files[0]);   
    }
    else
    {
      setForm((prev)=>{
        return {
        ...prev,
        [event.target.name] : [event.target.value]
        }
        })
    }
    /*if (event.target.name === "title") setEnteredTitle(event.target.value);
    if (event.target.name === "desc") setEnteredDescription(event.target.value);
    if (event.target.name === "availableSize")
      setEnteredAvailableSizes(event.target.value);
    if (event.target.name === "price") setEnteredPrice(event.target.value);*/
  };

  

  
  const submitHandler = (event) => {
    event.preventDefault();
    // if (enteredImage.trim().length === 0){
    //   setIsValid(false);
    //   return;
    // }

    props.setdatafunc(enteredImage,form.title,form.desc,form.size,form.price)
    props.submitflagfunc(true);
    
  }
  


  return (
    <>
      <form
        onSubmit={submitHandler}
        className="new-expense__controls new-expense"
      >
        <div className="new-expense__controls">
          <div>
            <label style={{color: !isValid ? 'red' : 'black'}} htmlFor="img">Select image:</label>
            <input
            style={{borderColor : !isValid ? 'red' : 'black',background : !isValid ? 'salmon' : 'transparent' }}
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={setObjectData}
            ></input>
          </div>

          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={form.title}
              name="title"
              onChange={setObjectData}
            />
          </div>

          <div className="new-expense__control">
            <label>Describtion</label>
            <input
              type="text"
              value={form.desc}
              name="desc"
              onChange={setObjectData}
            />
          </div>

          <div className="new-expense__control">
            <label>availableSize</label>
            <input
              type="text"
              value={form.size}
              name="size"
              onChange={setObjectData}
            />
          </div>

          <div className="new-expense__control">
            <label>price</label>
            <input
              type="number"
              value={form.price}
              name="price"
              onChange={setObjectData}
            />
          </div>

          <div className="new-expense__actions">
            <button type="submit">Submit</button>
          </div>
         

         <div>
          <button onClick={()=>{
            setForm(()=>{
              return{
                title: "",
                desc: "",
                size: "",
                price: ""
              }
            })
          }} >
                 clear
          </button>
         </div>
          

        </div>
      </form>
      <img src={enteredImage} width="100" height="100" />
    </>
  );
};

export default AddItemForm;
