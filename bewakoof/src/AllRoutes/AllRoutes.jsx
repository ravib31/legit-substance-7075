import React from "react";
import SingleProductPage from "./SingleProductPage";

// import {Home} from "../Pages/HomePage/Home";
import {Routes, Route} from "react-router-dom";

import MenPage from "../Pages/MenPage/MenPage";
import WomenPage from "../Pages/WomenPage/WomenPage";
import { CartPage } from "../Pages/CartPage/CartPage";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import AdminDshboardPage from "../Pages/AdminPage/AdminDshboardPage";
import Navbar from "../Components/AdminComponents/AdminNavbar/Navbar";
 export const AllRoutes=()=>{

return(
    <>
    {/* <div style={{border:"1px solid black",height:"60px",backgroundColor:"white"}}>Dummy Navbar</div> */}
    <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/men/:id" element={<SingleProductPage />} />
        <Route path="/admin" element={
            <>
            <Navbar/>
        <AdminDshboardPage />
        </>
        } />
        <Route path="*" element={<h1>Error 404 </h1>} />
    </Routes>

    </>


)

}
