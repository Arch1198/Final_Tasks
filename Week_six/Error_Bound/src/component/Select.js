const Select =(props) => {
    return(
        <>
        <button onClick={()=> {
        props.cardSelect();
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