import "./index.css";
import Navbar from "./NavBar";
import ShowItem from "./Showitems";
import { useState} from "react";
import {Route,NavLink} from 'react-router-dom'
import WhishList from "./WhishList";
import ItemList from "./ItemName";
//import Card from './Card';
import Cart from "./Cart";
import Select from "./Select";
import AddItemForm from "./features/AddItemForm";
var arr=[]
const newData = {
  image: "",
  title: "",
  description: "",
  availableSizes: "",
  price: "",
};
const Home = () => {
  const [deleteIcon, setDeleteIcon] = useState(false);
  const [deleteIconForCard, setDeleteIconForCard] = useState(false);
  const [submittedItem, setSubmittedItem] = useState(newData);
  const [submitFlag, setSubmitFlag] = useState(false);
  const [whislistItem,setWhislistItem] = useState([]); 
  const [wishlistVisible,setwishListVisible] = useState(false);
  const [showItemCount,setItemCount] = useState(0);
  const [cartArr,setCartArr]=useState([])
  const SelectAllCards = () => {
    if (deleteIconForCard === false) setDeleteIconForCard(true);
    else setDeleteIconForCard(false);
  };
  const addCartData=(item)=>{
    const updatedValue=[...cartArr,item]
    setCartArr(updatedValue)
    localStorage.setItem("users", JSON.stringify(updatedValue));
   alert(` Items added To Cart`)
  }
  const setData =  (img, title1, desc, size, price1) => {
     setSubmittedItem(() => {
            return {
              image: img,
              title: title1,
              description:desc ,
              availableSizes: size,
              price: price1,
            };
          });   
  };
  return (
    <>
    
     <Navbar wishlistv={wishlistVisible} wishlistvisble = {setwishListVisible} countitem = {showItemCount}/>
     {wishlistVisible===true?<WhishList wishlist={whislistItem}/>:""}
     <Route path="/" exact>
     <button type="button" class="btn btn-success"><NavLink activeClassName="active"  to="/admin" style={{color:"black",textDecoration:"none"}}>Add new card</NavLink></button>
      <ShowItem
      showitemcount ={showItemCount}
      showitemcountfunc={setItemCount}
        wishlistfunc={setWhislistItem}
        wishlistitem={whislistItem}
        submitflag={setSubmitFlag}
        varsubmit={submitFlag}
        submititeminform={submittedItem}
        deleteicon={deleteIcon}
        setDelete={setDeleteIcon}
        deleteiconforCard={deleteIconForCard}
        addToCart={addCartData}
      /> 
      <Select cardSelect={SelectAllCards} />
     </Route> 
     <Route path="/shop" exact>
     <ShowItem
      showitemcount ={showItemCount}
      showitemcountfunc={setItemCount}
        wishlistfunc={setWhislistItem}
        wishlistitem={whislistItem}
        submitflag={setSubmitFlag}
        varsubmit={submitFlag}
        submititeminform={submittedItem}
        deleteicon={deleteIcon}
        setDelete={setDeleteIcon}
        deleteiconforCard={deleteIconForCard}
        addToCart={addCartData}
      /> 
     </Route>
     <Route path="/cart" exact>
      <Cart/>
     </Route>
     <Route path="/admin" exact>
     <AddItemForm submitflagfunc={setSubmitFlag}  setdatafunc={setData} />
     </Route>
    </>
  );
};

export default Home;
