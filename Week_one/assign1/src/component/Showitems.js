import Card from "./Card";
import products from "./ItemName";
const ShowItem = () => {
  return (
    <>
      <div style={{display: "flex",width:"100%",height:"100%",flexDirection:"row",border: "2px solid red",flexWrap:"wrap "}}>
        {products.map((val,index) => {
          return <Card item={val} key={index} />;
        })}
      </div>
    </>
  );
};

export default ShowItem;
