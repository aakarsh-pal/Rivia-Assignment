import React from 'react'
import UserDetails from './Userdetails'
import Main from './Main'
import {HashRouter , Routes , Route} from "react-router-dom"
const App = () => {
  return (
    <HashRouter>
      <Routes>
         <Route  exact path= '/' element={<Main/>}/>
         <Route  exact path= '/user-details/:id' element={<UserDetails/>}/>



      </Routes>
    
    
    </HashRouter>
  )
}

export default App
