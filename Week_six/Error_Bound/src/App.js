// import Home from './component/Home';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import {ErrorBoundary} from 'react-error-boundary'
import {useEffect,useState} from 'react'
//import axios from 'axios'
import Navbar from "./component/NavBar";
import ShowItem from "./component/Showitems";
import {createContext} from "react";
import {Route} from 'react-router-dom'
import WhishList from "./component/WhishList";
import Cart from "./component/Cart";
import Select from "./component/Select";
import AddItemForm from "./component/features/AddItemForm";
import { Switch } from "react-router-dom";
import CardDetail from "./component/CardDetail";
import NotFound from "./component/NotFound";
import ItemList from "./component/ItemName";
import HeroImage from './component/HeroImage';
import {CartContext} from './context/cardContextProvider';

function ErrorHandler({error}) {
    return (
      <div role="alert" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        {/* <p>An error occurred:</p>
        <pre>{error.message}</pre> */}
     <img src="./images/Wrong1.gif" alt="Sorry Img not supported"/>
      </div>
    )
  }
  // var arr=[]
  // const newData = {
  //   image: "",
  //   title: "",
  //   description: "",
  //   availableSizes: "",
  //   price: "",
  // };
  //context section
const DltIconStatus=createContext()
//const AddToCartFun=createContext()
function App(){
  console.log(ItemList.length)
  const [deleteIconForCard, setDeleteIconForCard] = useState(false);
  const [whislistItem,setWhislistItem] = useState([]); 
  const [wishlistVisible,setwishListVisible] = useState(false);
  const [showItemCount,setItemCount] = useState(0);
  //const [cartArr,setCartArr]=useState([])
  const SelectAllCards = () => {
    if (deleteIconForCard === false) setDeleteIconForCard(true);
    else setDeleteIconForCard(false);
  };
  // const addCartData=(item)=>{
  //   const updatedValue=[...cartArr,item]
  //   setCartArr(updatedValue)
  //   localStorage.setItem("users", JSON.stringify(updatedValue));
  //   alert(` Items added To Cart`)
  // }
  useEffect(() => {
    // axios({
    //     method: 'GET',
    //     baseURL: 'http://api.fakeshop-api.com',
    //     url: '/products/getAllProducts',
    //   })
    //     .then(({ data }) => {
        
    //     })
    //     .catch(err => console.dir(err))
    //     .finally()
    fetch('https://api.storerestapi.com/products')
    .then(response => response.json())
    .then(json => console.log(json))
}, [])
console.log()
    return(
<>
<ErrorBoundary FallbackComponent={ErrorHandler}>

<BrowserRouter>
{/* <Home/> */}

<DltIconStatus.Provider value={deleteIconForCard}>
<CartContext>
     <Navbar wishlistv={wishlistVisible} wishlistvisble = {setwishListVisible} countitem = {showItemCount}/>
     {wishlistVisible===true?<WhishList wishlist={whislistItem}/>:""}
     <Switch>
     <Route path="/" exact>
      <HeroImage/>
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
     </CartContext>
     </DltIconStatus.Provider>
     
</BrowserRouter>

</ErrorBoundary>
</>
    )
}
export default App;
export {DltIconStatus}