import React from 'react'
import Home from './Components/home';
import Nav from './Components/nav';
import { BrowserRouter} from 'react-router-dom';
const App = () => {
  return(
    <>
    <BrowserRouter>
    <Nav/>
    <Home/>
    </BrowserRouter>
    
    
    </>
  )
}

export default App