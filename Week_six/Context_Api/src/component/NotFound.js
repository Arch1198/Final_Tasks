import {NavLink} from 'react-router-dom'
function NotFound(){
    return(
        <>
        <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        {/* <h1>Page Not Found, Return to {"  "}<NavLink activeClassName="active" to="/">Home</NavLink></h1> */}
        <img src="./images/file404.gif"/>
        </div>
        </>
    )
}
export default NotFound