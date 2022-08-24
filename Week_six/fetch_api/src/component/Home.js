import "./index.css";
import Navbar from "./NavBar";
import ShowItem from "./Showitems";
import {useState,createContext} from "react";
import {Route,NavLink} from 'react-router-dom'
import WhishList from "./WhishList";
import Cart from "./Cart";
import Select from "./Select";
import AddItemForm from "./features/AddItemForm";
import { Switch } from "react-router-dom";
import CardDetail from "./CardDetail";
import NotFound from "./NotFound";
import ItemList from "./ItemName";
var arr=[]
const newData = {
  image: "",
  title: "",
  description: "",
  availableSizes: "",
  price: "",
};
//context section
const DltIconStatus=createContext()
const AddToCartFun=createContext()
const Home = () => {
  console.log(ItemList.length)
  const [deleteIconForCard, setDeleteIconForCard] = useState(false);
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
  return (
    <>
    <DltIconStatus.Provider value={deleteIconForCard}>
    <AddToCartFun.Provider value={addCartData}>
     <Navbar wishlistv={wishlistVisible} wishlistvisble = {setwishListVisible} countitem = {showItemCount}/>
     {wishlistVisible===true?<WhishList wishlist={whislistItem}/>:""}
     <Switch>
     <Route path="/" exact>
      <ShowItem
      showitemcount ={showItemCount}
      showitemcountfunc={setItemCount}
        wishlistfunc={setWhislistItem}
        wishlistitem={whislistItem}
       // deleteiconforCard={deleteIconForCard}//context
       // addToCart={addCartData}//context
      /> 
      <Select cardSelect={SelectAllCards} />
     </Route> 
     <Route path="/shop" exact>
     <ShowItem
      showitemcount ={showItemCount}
      showitemcountfunc={setItemCount}
        wishlistfunc={setWhislistItem}
        wishlistitem={whislistItem}
        // deleteiconforCard={deleteIconForCard}//context
        // addToCart={addCartData}//context
      /> 
     </Route>
     <Route path="/cart" exact>
      <Cart/>
     </Route>
     <Route path="/cardDetail/:idOfProd" exact>
      <CardDetail/>
     </Route>
     <Route path="/admin" exact>
     <AddItemForm />
     </Route>
     <Route path="/admin/:usrEmail" exact>
     <AddItemForm />
     </Route>
     <Route path="*">
      <NotFound/>
     </Route>
     </Switch>
     </AddToCartFun.Provider>
     </DltIconStatus.Provider>
    </>
  );
};
export default Home;
export {DltIconStatus,AddToCartFun}