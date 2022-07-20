const Select =(props) => {
    return(
        <>
        <div onClick={()=> {
        props.cardSelect();
        }} style={{
          position:"Fixed ",
          zIndex: "1",
          width: "5%",
          height: "5%",
          left: "89%",
          top:"84%",
        border: "2px solid red",
        borderRadius:"30px",
        display:"flex",
        justifyContent:"center",
        alineItems:"center"
          }}>
          <h5>Select</h5>
        </div>

        </>
    )
}


export default Select;