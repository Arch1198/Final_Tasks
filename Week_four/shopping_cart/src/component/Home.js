import "./index.css";
import Navbar from "./NavBar";
import ShowItem from "./Showitems";
import { useState,useEffect } from "react";

import WhishList from "./WhishList";
//import Card from './Card';
import Select from "./Select";

import AddItemForm from "./features/AddItemForm";

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
  const [whilistCount,setWhilistCount] = useState(0);
  const [wishlistVisible,setwishListVisible] = useState(false);
  const [showItemCount,setItemCount] = useState(0);
  const SelectAllCards = () => {
    if (deleteIconForCard === false) setDeleteIconForCard(true);
    else setDeleteIconForCard(false);
  };
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
      <Navbar wishlistv={wishlistVisible} wishlistvisble = {setwishListVisible} countitem = {showItemCount} whilistCount={whilistCount} />
      <AddItemForm submitflagfunc={setSubmitFlag} setdatafunc={setData} />
      <Select cardSelect={SelectAllCards} />
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

      /> 
      {wishlistVisible===true?<WhishList wishlist={whislistItem} whilistCount={whilistCount} whishlistcountfunc={setWhilistCount} />:""}
      
    </>
  );
};

export default Home;
