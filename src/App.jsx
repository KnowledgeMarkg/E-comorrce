import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import MyStateProvider from "./context/data/myState"; // Renamed from MyState
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import UpdateProduct from "./pages/admin/dashboard/page/UpdateProduct";
import AddProduct from "./pages/admin/dashboard/page/AddProduct";
import { ToastContainer } from 'react-toastify'; // Removed unused import 'toast'
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from "./pages/allproducts/AllProducts";
import Contact from "./pages/contact/Contact";
import About from "./pages/contact/About";

const App = () => {
  return (
    <MyStateProvider> {/* Renamed from MyState */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="allproducts" element={<Allproducts/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/productInfo/:id" element={<ProductInfo />} />
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProduct />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/updateproduct" element={
            <ProtectedRouteForAdmin>
              <UpdateProduct />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyStateProvider>
  );
};

export default App;

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

const ProtectedRouteForAdmin = ({ children }) => {
  try {
    const admin = JSON.parse(localStorage.getItem('user'));
    if (admin && admin.user && admin.user.email === "knowledgemarkg@gmail.com") {
      return children;
    }
  } catch (error) {
    console.error("Error parsing admin data:", error);
  }
  return <Navigate to={"/login"} />;
};
