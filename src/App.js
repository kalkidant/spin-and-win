import React from "react";
import { BrowserRouter as Router , Navigate,Route, Routes } from 'react-router-dom'
import "@fontsource/source-sans-pro";
import EuropeanRoulette from "./europeanRouletteApp";
import Login from "./components/login/login";
import PrivateRoute from './PrivateRoute';
import Client from './client-container/europe/cli_european_roulette'
import NotFound from "./components/not_found";
import SpinAndWin from "./cli-container/europe/spin-and-win";
const App = () => {


  
  return (

    <Router>
         <Routes>
                   <Route exact path="/:id" element={<SpinAndWin />} />
     
                      {/* <Route exact path='/home' element={<PrivateRoute/>}>
                      <Route exact path='/home' element={<EuropeanRoulette/>}/>
                      </Route> */}
                      {/* <Route path="/client/:id" element={<Client/>} /> */}
                      {/* <Route path="/:id" element={<SpinAndWin/>} /> */}

                      <Route exact path="/error" element={<NotFound/>}/>
          </Routes>
    </Router> 
   
  );
}

export default App;