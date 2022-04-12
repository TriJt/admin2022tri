
import React from 'react';
import {  BrowserRouter ,  Routes, Route } from "react-router-dom";
import Home from "./pages/home/home"; 
import Login from "./pages/login/login"
import List from "./pages/list/list"; 
import Single from "./pages/single/single"; 
import Ships from './pages/ship/Ships';
import Newships from "./pages/new/Newships";
import Singleships from "./pages/single/Singleships"
import Newuser from "./pages/new/New"
import Editship from "./pages/edit/editship"
function App() {
  return (
    

    <div className='App'> 
     <BrowserRouter>
        <Routes>
         
          <Route path="/">
            <Route index element={<Home/>}  />
            <Route  path="login" element={<Login/>}  /> 
          </Route>
            <Route path='/users'>
              <Route index element={<List/>}  />
              <Route  path=':userId/view' element={<Single/>}  />
              <Route  path=':userId/edit' element={<Single/>}  />
            </Route>
            <Route path='/ships'>
              <Route index element={<Ships/>}  />
              <Route  path=':shipId/view' element={<Singleships/>}  />
              <Route  path=':shipId/edit' element={<Editship/>}  />
            </Route>
           <Route path="/create">
              <Route index element={<Newships/>} />
           </Route>
           <Route path="/createuser">
              <Route index element={<Newuser/>} />
           </Route>
        </Routes>
        </BrowserRouter>
    </div>

  );
}



export default App; 


