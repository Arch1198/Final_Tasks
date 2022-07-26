import Card from "./Card";
var WhishList = (props) => {
  var btn = false;
  return (
    <div
      style={{
        position: "Fixed",
        boxShadow: "3px 3px 5px black",
        zIndex: "1",
        top: "20%",
        left: "25%",
        backgroundColor: "white",
        width: "70%",
        height: "70%",
        overflow: "auto",
      }}
    >
      {props.wishlist.map((val, index) => {
        return <Card btndisplay={btn} item={val} key={index} />;
      })}
    </div>
  );
};

export default WhishList;
