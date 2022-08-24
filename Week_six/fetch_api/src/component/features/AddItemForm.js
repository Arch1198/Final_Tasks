import React, {useRef, useState } from "react";
import "./index.css";
import ItemList from "../ItemName";
import { useParams } from "react-router-dom";

const AddItemForm = (props) => {
  const [enteredImage, setEnteredImage] = useState("");
  const test = useRef(null)
  const query=useParams()
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
    ItemList.push({
      image: enteredImage,
      title: form.title,
      description:form.desc ,
      availableSizes: form.size,
      price:form.price
    })
    if(query.usrEmail===undefined){
    test.current.value="React Test"
    }
    else{
    test.current.value=query.usrEmail 
    }
    alert("New Item added to List")  
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
          <div className="new-expense__control">
            <label>Test</label>
            <input
              type="text"
              ref={test}
              disabled
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
      
      <img src={enteredImage} alt = "" width="100" height="100" />
    </>
  );
};

export default AddItemForm;
