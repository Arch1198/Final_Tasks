import Home from './component/Home';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import {ErrorBoundary} from 'react-error-boundary'
import { useContext, useEffect } from 'react';
import { CartContext } from './contexts/CartContextProvider';

function ErrorHandler({error}) {
    return (
      <div role="alert" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        {/* <p>An error occurred:</p>
        <pre>{error.message}</pre> */}
     <img src="./images/Wrong1.gif" alt="Sorry Img not supported"/>
      </div>
    )
  }
function App(){
 
    return(
<>
<ErrorBoundary FallbackComponent={ErrorHandler}>
<BrowserRouter>
<Home/>
</BrowserRouter>
</ErrorBoundary>
</>
    )
}
export default App;