import Home from './component/Home';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
function App(){
    return(
<>
<BrowserRouter>
<Home/>
</BrowserRouter>
</>
    )
}
export default App;