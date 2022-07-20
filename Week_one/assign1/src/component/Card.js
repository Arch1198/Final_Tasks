const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.item.image} className="card-img-top" alt="..." />
        
        <div className="card-body">
          <h5 className="card-title">{props.item.title}</h5>
          <h5 className="size">{props.item.availableSizes}</h5>
          <h5 className="cost">{props.item.price}</h5>
          
        </div>
      </div>
    </>
  );
};

export default Card;
