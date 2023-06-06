import React from "react";
import { Navbar } from "../Components/Navbar";
import { Home } from "../Pages/HomePage/Home";
import { Routes, Route } from "react-router-dom";
import MenPage from "../Pages/MenPage/MenPage";
import WomenPage from "../Pages/WomenPage/WomenPage";
import CartPage from "../Pages/CartPage/CartPage";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import AdminDshboardPage from "../Pages/AdminPage/AdminDshboardPage";
import AdminNavbar from "../Components/AdminComponents/AdminNavbar/AdminNavbar";
import AdminAddProduct from "../Components/AdminComponents/AdminProduct/AdminAddProduct";

import AdminShowProduct from "../Pages/AdminPage/AdminShowProduct";
import AdminUpdate from "../Components/AdminComponents/AdminProduct/AdminUpdate";
import SingleProductPage from "../Pages/SingleProductPage/SingleProductPage";
import  Login  from "../Pages/LoginPage/Login";
import { PrivateRoute } from "../Components/PrivateRoute";
import Footer from "../Components/Footer";
import Signup from "../Pages/SingupPage/Signup";

export const AllRoutes = () => {
  return (
    <>
    {/* user routes-----------------------------> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/men"
          element={
            <>
              <Navbar />
              <MenPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/women"
          element={
            <>
              <Navbar />
              <WomenPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <CartPage />
                <Footer />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Navbar />
              <CheckoutPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/men/:id"
          element={
            <>
              <Navbar />
              <PrivateRoute>
                <SingleProductPage />
              </PrivateRoute>
              <Footer />
            </>
          }
        />
        <Route
          path="/women/:id"
          element={
            <>
              <Navbar />
              <PrivateRoute>
                <SingleProductPage />
              </PrivateRoute>
              <Footer />
            </>
          }
        />
        <Route
          path="/user/login"
          element={
            <>
              <Navbar />
              <Login />
              <Footer />
            </>
          }
        />
        <Route path="/user/register" element={<>
              <Navbar />
              <Signup />
              <Footer />
            </>}/>
      </Routes>


      {/* admin routes ------------------------>*/}
      <Routes>
        <Route
          path="/admin"
          element={
            <>
              <AdminNavbar />
              <AdminDshboardPage />
            </>
          }
        />
        <Route
          path="/admin/product"
          element={
            <>
              <AdminNavbar />
              <AdminShowProduct />
            </>
          }
        />
        <Route
          path="/admin/update/:id"
          element={
            <>
              <AdminUpdate />
            </>
          }
        />
        <Route
          path="/admin/addproduct"
          element={
            <>
              <AdminAddProduct />
            </>
          }
        />
        {/* <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <Signup />
              <Footer />
            </>
          }
        /> */}
      </Routes>
    </>
  );
};

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
