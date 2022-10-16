import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Country from '../../pages/country/Country';
import Genre from '../../pages/genre/Genre';
import Home from '../../pages/home/Home';
import List from '../../pages/list/List';
import PlayPage from '../../pages/playpage/PlayPage';
import Nav from '../nav/Nav';
 const Links =()=>{
return(
    <Router>
      <Nav/>
    <Routes>
        <Route path='/' exact element={<Home/>} /> 
        <Route path='genre' exact element={<Genre/>} /> 
        <Route path='country' exact element={<Country/>} /> 
        <Route path='list' exact element={<List/>} /> 
        <Route path='play' exact element={<PlayPage/>} /> 
    </Routes>
   </Router>
)
}
 export default Links