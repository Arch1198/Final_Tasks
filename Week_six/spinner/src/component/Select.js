import {DltIcon, DltIconContext} from './context/DltIconContext'
import { useContext } from 'react';
const Select =(props) => {
  const dltObj=useContext(DltIcon)
    return(
        <>
        <button onClick={()=> {
       dltObj.SelectAllCards()
        }} style={{
          position:"Fixed ",
          zIndex: "1",
          width: "5%",
          height: "5%",
          left: "89%",
          top:"84%",
          }} type="button" class="btn btn-warning">Select</button>
        </>
    ) 
}


export default Select;