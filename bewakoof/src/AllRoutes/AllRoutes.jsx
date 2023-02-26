import React from "react";
import {Navbar} from "../Components/Navbar";
import {Home} from "../Pages/HomePage/Home";
import {Routes, Route} from "react-router-dom";
import MenPage from "../Pages/MenPage/MenPage";
import WomenPage from "../Pages/WomenPage/WomenPage";
import  CartPage  from "../Pages/CartPage/CartPage";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import AdminDshboardPage from "../Pages/AdminPage/AdminDshboardPage";
import AdminNavbar from "../Components/AdminComponents/AdminNavbar/AdminNavbar";
import AdminAddProduct from "../Components/AdminComponents/AdminProduct/AdminAddProduct";


import AdminShowProduct from "../Pages/AdminPage/AdminShowProduct";
import AdminUpdate from "../Components/AdminComponents/AdminProduct/AdminUpdate";
import SingleProductPage from "../Pages/SingleProductPage/SingleProductPage";
import { Login } from "../Pages/LoginPage/Login";
import { PrivateRoute } from "../Components/PrivateRoute";
// import AdminLogin from "../Pages/AdminPage/AdminLogin";
 export const AllRoutes=()=>{

return(
    <>
    {/* <div style={{border:"1px solid black",height:"60px",backgroundColor:"white"}}>Dummy Navbar</div> */}
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/cart" element={<PrivateRoute>
            <CartPage />
        </PrivateRoute> } />
        <Route path="/checkout" element={<CheckoutPage/>} />
        <Route path="/men/:id" element={<PrivateRoute>
            <SingleProductPage />
        </PrivateRoute> } />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
        <Route path="/admin" element={
            <>
            <AdminNavbar/>
        <AdminDshboardPage />
        </>
        } />
         <Route path="/admin/product" element={
            <>
            <AdminNavbar/>
        <AdminShowProduct />
        </>
        } />
         <Route path="/admin/update/:id" element={
            <>
        <AdminUpdate />
        </>
        } />
        <Route path="/admin/addproduct" element={
            <>
        <AdminAddProduct />
     
        </>
        
        } />
    </Routes>
    
    </>


)

}

/*
<Route path="/admin" element={
            <>
            <AdminNavbar/>
        <AdminDshboardPage />
        </>
        } />
         <Route path="/admin/product" element={
            <>
            <AdminNavbar/>
        <AdminShowProduct />
        </>
        } />
         <Route path="/admin/update/:id" element={
            <>
        <AdminUpdate />
        </>
        } />
        <Route path="/admin/addproduct" element={
            <>
        <AdminAddProduct />
        </>
        } />
*/
