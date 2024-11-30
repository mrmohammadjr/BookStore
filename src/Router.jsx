import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import Login from "./routes/Login/Login"
import Signup from "./routes/Signup/Signup"
import Details from "./routes/Details/Details"
import NotFound from "./routes/NotFound/NotFound"
import Category from "./routes/Category/Category"
import CategoryItem from "./routes/Category/CategoryItem/CategoryItem"
import Cart from "./routes/Cart/Cart"
import CallUs from "./routes/CallUs/CallUs"
import Profile from "./routes/Profile/Profile"
import Authors from "./routes/Authors/Authors"
import AuthorDetails from "./routes/Authors/AuthorDetails/AuthorDetails"
function Router(){
  return<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/cart" element={<Cart />}/>
    <Route path="/callus" element={<CallUs />}/>
    <Route path="/signup" element={<Signup />}/>
    <Route path="/profile" element={<Profile />}/>
    <Route path="/authors" element={<Authors />}/>
    <Route path="/authors/:id" element={<AuthorDetails />}/>
    <Route path="/category" element={<Category />}/>
    <Route path="/category/categoryitem/:item" element={<CategoryItem />}/>
    <Route path="/category/:details" element={<Details />}/>
    <Route path="*" element={<NotFound />}/>
  </Routes>
}
export default Router;