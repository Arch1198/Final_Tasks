import { useParams } from "react-router-dom"
import ItemList from "./ItemName"
const CardDetail=()=>{
    const param=useParams()
    // console.log(ItemList[param.idOfProd])
    var product=ItemList[param.idOfProd]
    console.log(product.image)
    return(
        <>
      <div style={{marginTop:"12px",display:"flex"}}>
      <img src={product.image} alt="" style={{width:"50%",height:"100vh"}}/>
      <div style={{marginLeft:"12px"}}>
      <h1 className="card-title">{product.title}</h1>
      <h2 className="size">{product.availableSizes}</h2>
      <h3 className="cost">{product.price}</h3>
      <p>{product.description}</p>
      </div>
      </div>
        </>
    )
}
export default CardDetail