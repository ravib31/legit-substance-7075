import React from "react";
import {Routes,Route} from "react-router-dom";
import {Men} from '../Pages/Men';
import {Women} from '../Pages/Women';
import {MobileCovers} from '../Pages/MobileCovers';
import { HomePage } from "../Pages/HomePage";
import {Login} from "../Pages/Login";
export const AllRoutes=()=>{

return(
    <Routes>
    <Route path ="/" element={<HomePage/>}/> 
    <Route path ="/login" element={<Login/>}/>   
    <Route path="/men" element={<Men/>}/>
    <Route path="/women" element={<Women/>}/>
    <Route path ="/" element={<MobileCovers/>}/>
    <Route path="*" element={<h3>Page Not Found</h3>}/>
</Routes>

)

}
