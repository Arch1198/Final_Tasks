import { useState,createContext } from "react";

export const CartContext = createContext({deleteIcon:[]})


const CartContextProviderDelete = (props) => {
    const [deleteIcon, setDeleteIcon] = useState(false);

return(
    <>
        <CartContext.Provider value={{deleteIcon}}>
            {props.children}
        </CartContext.Provider>

    </>
)

}

export default CartContextProviderDelete;