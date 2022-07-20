import './index.css'
import Navbar from './NavBar'
import ShowItem from './Showitems'
import { useState } from "react";
import WhishList from './WhishList';
import Card from './Card';
import Select from './Select';


const Home = () =>{
    const [deleteIcon, setDeleteIcon] = useState(false);                 //delete state for the card which display item details and cross icon on it 
    const [deleteIconForCard, setDeleteIconForCard] = useState(false);   //delete card from useState.
    const SelectAllCards =() =>{
        if (deleteIconForCard===false)
        setDeleteIconForCard(true);
        else
        setDeleteIconForCard(false);

    }
    return(
        <>
            <Navbar/>
            <Select cardSelect={SelectAllCards}/> 
            <ShowItem deleteicon={deleteIcon} setDelete={setDeleteIcon} deleteiconforCard={deleteIconForCard} />
            
        </>
    )
}



export default Home;