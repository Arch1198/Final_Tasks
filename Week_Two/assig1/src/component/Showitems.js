import { useEffect, useState } from "react";
import Card from "./Card";
import ItemList from "./ItemName";
const ShowItem = (props) => {
  var [selectedItem, setSelectedItem] = useState({});
  var [products, setProducts] = useState(ItemList);
  const cardVisible = (obj) => {
    props.setDelete(true);
    //console.log(obj);
    setSelectedItem(obj);
    //console.log(selectedItem);
  }; 


  useEffect (()=>{ 
    if(props.varsubmit===true){

    
    setProducts((prev)=>{
      return[
      ...prev,
      props.submititeminform
      ]
    })
    
    console.log(props.submititeminform);
    props.submitflag(false)
  }
  });
    

  const AddItemToWishList = (item) => {
    props.wishlistfunc((prev)=>{
      return [ 
        ...prev,
        item 
            ]    
    });
    console.log(props.wishlistitem);   
  }
  

  const DeleteItemFromProduct = (Id) => {
    setProducts((prev) => {
      return prev.filter((val, index) => {
        return Id !== index;
      });
    });  
  };  
  return (
    <>
      {props.deleteicon === true ? (
        <div
          style={{
            position: "Fixed",
            boxShadow: "3px 3px 5px black",
            zIndex: "1",
            top: "20%",
            left: "25%",
            backgroundColor: "white",
            width: "50%",
            height: "50%",
          }}
        >
          <img
            src={selectedItem.image}
            style={{
              width: "30%",
              height: "60%",
            }}
          />
          <h5 className="card-title">{selectedItem.title}</h5>
          <h5 className="size">{selectedItem.availableSizes}</h5>
          <h5 className="cost">{selectedItem.price}</h5>
          <svg
            onClick={() => {
              props.setDelete(false);
            }}
            style={{ position: "absolute", right: "0px", top: "0px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="bi bi-x-square"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
      ) : (
        ""
      )}
      <div
        style={{
          display: "flex",
          zIndex: "-1",
          width: "100%",
          height: "100%",
          flexDirection: "row",
          border: "2px solid red",
          flexWrap: "wrap ",
        }}
      >
        {products.map((val, index) => {
          return (
            <Card
              deleteFunc={cardVisible}
              item={val}
              key={index}
              dltIcon={props.deleteiconforCard}
              uniqProductId={index}
              deleteFromscreen={DeleteItemFromProduct}
              addtowishlist ={AddItemToWishList} 
            />
          );
        })}
      </div>
    </>
  );
};

export default ShowItem;
